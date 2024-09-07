import os
import shutil
import numpy as np
import face_recognition
import cv2
from PIL import Image, ImageOps
from ultralytics import YOLO
from tqdm import tqdm
import multiprocessing

class FaceProcessor:
    def __init__(self, config):
        self.model = YOLO(config['model_path'], verbose=False)
        self.conf_threshold = config.get('conf_threshold', 0.5)
        self.img_size = config.get('img_size', 1280)
        self.tolerance = config.get('tolerance', 0.4)

    def detect_faces(self, image_path):
        image = cv2.imread(image_path)
        results = self.model.predict(image, imgsz=self.img_size, conf=self.conf_threshold, verbose=False)
        bounding_boxes = []
        for result in results:
            for detection in result.boxes:
                if detection.conf >= self.conf_threshold:
                    x1, y1, x2, y2 = map(int, detection.xyxy[0])
                    bounding_boxes.append([x1, y1, x2, y2])
        return bounding_boxes

    def encode_faces(self, image, bounding_boxes):
        image_array = np.array(image)
        encodings = []
        for box in bounding_boxes:
            x1, y1, x2, y2 = box
            face_image = image_array[y1:y2, x1:x2]
            face_image = np.ascontiguousarray(face_image, dtype=np.uint8)
            face_encoding = face_recognition.face_encodings(face_image)
            if face_encoding:
                encodings.append(face_encoding[0])
        return encodings

    def load_known_faces(self, known_faces_dir):
        known_encodings = []
        for root, _, files in os.walk(known_faces_dir):
            for file in files:
                if self.is_valid_image_file(file):
                    path = os.path.join(root, file)
                    bounding_boxes = self.detect_faces(path)
                    if bounding_boxes:
                        image = Image.open(path)
                        image = ImageOps.exif_transpose(image)
                        encodings = self.encode_faces(image, bounding_boxes)
                        if encodings:
                            encoding = encodings[0]
                            name = os.path.splitext(file)[0]  # 使用文件名（不含扩展名）作为名字
                            known_encodings.append((encoding, name))
                        else:
                            print(f"No face found in {path}")
                    else:
                        print(f"No face detected in {path}")
        return known_encodings

    def process_image(self, image_path, known_encodings, output_dirs):
        try:
            bounding_boxes = self.detect_faces(image_path)
            # 打开并自动调整方向
            image = Image.open(image_path)
            image = ImageOps.exif_transpose(image)

            if not bounding_boxes:
                self.copy_to_folder(image_path, output_dirs['no_faces'])
                return known_encodings, image_path

            # 如果检测到多张人脸
            if len(bounding_boxes) > 1:
                self.copy_to_folder(image_path, output_dirs['group_photos'])
                return known_encodings, None

            encodings = self.encode_faces(image, bounding_boxes)

            for encoding in encodings:
                matched = False
                folder_name = ""
                for known_encoding, name in known_encodings:
                    matches = face_recognition.compare_faces([known_encoding], encoding, tolerance=self.tolerance)
                    if True in matches:
                        matched = True
                        folder_name = name
                        break

                if not matched:
                    folder_name = f"person_{len(known_encodings) + 1}"
                    known_encodings.append((encoding, folder_name))

                self.copy_to_folder(image_path, os.path.join(output_dirs['output'], folder_name))

            return known_encodings, None
        except Exception as e:
            print(f"Error processing image {image_path}: {e}")
            return known_encodings, image_path

    @staticmethod
    def is_valid_image_file(file_name):
        return not file_name.startswith('._') and file_name.lower().endswith(('.png', '.jpg', '.jpeg'))

    @staticmethod
    def create_folder(directory):
        if not os.path.exists(directory):
            os.makedirs(directory)

    @staticmethod
    def copy_to_folder(image_path, directory):
        FaceProcessor.create_folder(directory)
        shutil.copy(image_path, os.path.join(directory, os.path.basename(image_path)))


def worker(args):
    return args[0].process_image(*args[1:])


def process_folder(config):
    face_processor = FaceProcessor(config)
    manager = multiprocessing.Manager()
    known_encodings = manager.list(face_processor.load_known_faces(config['known_faces_dir']))
    image_paths = []
    unprocessed_images = manager.list()

    for root, _, files in os.walk(config['input_dir']):
        for file in files:
            if face_processor.is_valid_image_file(file):
                image_paths.append(os.path.join(root, file))

    num_processes = config.get('num_processes', multiprocessing.cpu_count())
    print(f"Using {num_processes} processes")

    with multiprocessing.Pool(processes=num_processes) as pool:
        futures = [
            pool.apply_async(worker, (face_processor, image_path, known_encodings, config['output_dirs']))
            for image_path in image_paths
        ]

        for future in tqdm(futures, total=len(futures), desc="Processing images"):
            try:
                result = future.get()
                known_encodings, unprocessed_image = result
                if unprocessed_image:
                    unprocessed_images.append(unprocessed_image)
            except Exception as e:
                print(f"Error processing image: {e}")

    if unprocessed_images:
        print("\nImages without detected faces:")
        for image_name in unprocessed_images:
            print(image_name)


if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    config = {
        'model_path': os.path.join(current_dir, "yolov8l-face.pt"),
        'input_dir': "/path/to/input/images",  # 修改为你的输入图片路径
        'known_faces_dir': os.path.join(current_dir, "known_faces"),  # 已知人员的图像文件夹是固定的
        'output_dirs': {
            'output': "/path/to/output/images",  # 修改为你的输出图片路径
            'no_faces': "/path/to/output/images/no_faces",
            'group_photos': "/path/to/output/images/group_photos"
        },
        'conf_threshold': 0.5,
        'img_size': 1280,
        'tolerance': 0.4,
        'num_processes': 8
    }

    for dir_path in config['output_dirs'].values():
        FaceProcessor.create_folder(dir_path)

    process_folder(config)

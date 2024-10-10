import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  { text: "Polaris", link: "/polaris/README.md", icon: "meteor" },
  { text: "Archiver", 
    link: "archiver/README.md", 
    icon: "box-archive", 
    prefix: "archiver/",
    children: [
      {
        text: "intelligence",
        // prefix: "3.intelligence/",
        children: [
          { text: "World Model", icon: "earth-asia", link: "worldmodel/README.md" },
          { text: "Autonomous Driving", icon: "car", link: "driving_with_language/README.md" },
          { text: "Robotic Arms", icon: "robot", link: "robot.md" },
          { text: "Road-scene Anomaly", icon: "road", link: "road.md" },
        ],
      },
      {
        text: "perception",
        prefix: "4.perception/",
        children: [
          { text: "Object Detection", icon: "expand", link: "object_detection.md" },
          { text: "Video Anomaly", icon: "video", link: "README.md" },
          { text: "LLM4Anomaly", icon: "house-fire", link: "LLM4AD.md" },
          { text: "Event Camera", icon: "camera-rotate", link: "event_camera/README.md" },
        ],
      },
    ]
},
  {
    text: "Browser",
    icon: "lightbulb",
    prefix: "browser/",
    children: [
      {
        text: "survey",
        prefix: "1.survey/",
        children: [
          // { text: "Object Detection", icon: "expand", link: "README.md" },
        ],
      },
      {
        text: "dataset",
        prefix: "2.datset/",
        children: [
          // { text: "Object Detection", icon: "expand", link: "README.md" },
        ],
      },
      {
        text: "learning",
        prefix: "learning/",
        children: [
          { text: "Road Anomaly", icon: "expand", link: "README.md" },
          { text: "Video Anomaly", icon: "expand", link: "README.md" },
        ],
      },
    ],
  },
  {
    text: "Coooder",
    icon: "code",
    prefix: "docs/coooder/",
    children: [
      {
        text: "Ubuntu",
        icon: "pen-to-square",
        prefix: "ubuntu/",
        children: [
          { text: "ubuntu", icon: "computer", link: "README.md" },
          { text: "docker", icon: "shapes", link: "process/docker.md" },
        ],
      },
      {
        text: "MacOS",
        icon: "pen-to-square",
        prefix: "mac/",
        children: [
          { text: "Almost", icon: "rainbow", link: "README.md" },
        ],
      },
    ],
  },
  {
    text: "Discover",
    icon: "fire",
    prefix: "discover/uncover/",
    children: [
      { text: "overview", icon: "eye", link: "README.md" },
      {
        text: "Big Model",
        icon: "eye",
        prefix: "",
        children: [
          { text: "ICL/CoT/GoT", icon: "code-branch", link: "CoT.md" },
          { text: "Awesome Model", icon: "cable-car", link: "2" },
        ],
      },
      {
        text: "Handy Kit",
        icon: "pen-to-square",
        prefix: "open-world/",
        children: [
          { text: "Invoke", icon: "robot", link: "1" },
          { text: "Deployment", icon: "cube", link: "2" },
        ],
      },
    ],
  },
  {
    text: "Visual Lab",
    icon: "book",
    link: "http://10.16.38.164/",
  },
]);

---
author: Mo Meng Jingcheng (莫梦竟成); Zheng JianKang (郑健康)
title: Overview
dir:
    text: Video Anomaly Detection
---

## ➢ 认识异常检测

### ■ 什么是视频异常检测？

视频异常检测（Video Anomaly Detection, VAD）是指在视频序列中自动检测和定位异常事件或行为的任务。异常是指与正常模式显著不同的事件，如交通事故、犯罪行为等。VAD 在安全监控、智能交通系统和公共安全等领域中有广泛的应用。

#### 1. 简单介绍（从异常行为检测到视频异常行为检测）
- [1] 异常行为检测简介：[链接](https://mp.weixin.qq.com/s/UmT0DjFqRPsjv2m28ySvdw)
- [2] 基于深度学习的异常行为检测介绍：[链接](https://mp.weixin.qq.com/s/Aghbz4m1eWFCNGgEy8q6Cg)
- [3] 研究现状：[链接](https://mp.weixin.qq.com/s/MwpELRlC1cuDgqn4staAzA)
- [4] 视频异常行为检测简介：[链接](https://mp.weixin.qq.com/s/i3Xw2-ivARnF7rBSFtxugw)

#### 2. 论文综述
- [1] 邬开俊等. 视频异常检测技术研究进展 [J]. 计算机科学与探索, 2022。
- [2] Bharathkumar Ramachandra et al. A survey of single-scene video anomaly detection (TPAMI 2020)。


### ■ 视频异常检测的挑战

- **异常定义的模糊性**：异常事件的定义通常是主观的，具有多样性，导致检测难度较大。
- **数据不平衡**：正常事件在视频数据中远多于异常事件，这导致训练过程中的数据不平衡问题。
- **实时性要求**：在实际应用中，需要实时检测异常以便及时响应。
- **场景多样性**：视频场景和拍摄角度的多样性增加了检测难度。

### ■ 视频异常检测方法分类

#### 1. 无监督方法

无监督方法不需要标签数据，仅依赖正常样本来学习正常行为的模式，通过检测偏离这些模式的行为来识别异常。

- **自编码器**：通过重建输入视频帧，若重建误差较高则认为是异常。
- **记忆增强网络**：通过将正常行为存储在记忆模块中，当新输入不匹配这些记忆时，检测为异常。

#### 2. 弱监督方法

弱监督方法使用视频级别的标签进行训练，不需要逐帧标注。

- **多实例学习**：将视频看作由多个实例组成的包，通过学习视频中正常和异常实例的差异来检测异常。
- **对比学习**：通过比较正常和异常数据，学习到区分特征。

### ■ 经典数据集

#### 1. 无监督数据集
- **UCSD Pedestrian**：主要用于行人行为分析，包含行人通道中的异常事件，如骑自行车、滑板等。此数据集通常用于无监督异常检测。
- **ShanghaiTech**：较大规模的数据集，包含校园监控视频，涵盖多种异常行为，适用于无监督方法。
- **Avenue**：以校园场景为背景，涵盖诸如突然跑步、丢弃物品等异常行为。此数据集适用于无监督异常检测方法。

#### 2. 弱监督数据集
- **UCF-Crime**：一个用于弱监督视频异常检测的大规模数据集，涵盖不同场景下的犯罪行为，如偷窃、打架等。视频级标注用于训练和评估模型。
- **XD-Violence**：包含各种暴力事件的视频数据集，常用于弱监督方法，帮助模型学习区分正常与异常行为。
- **UCFCrime2Local**：UCF-Crime 的子集，包含空间标注，用于在弱监督条件下进行异常事件的精确定位。

### ■ 评价指标

#### 1. AUC（曲线下面积）
  - **定义**：AUC（Area Under the Curve）指的是 ROC 曲线（接收者操作特征曲线）下的面积。ROC 曲线描绘了模型在不同阈值下的假阳性率与真阳性率的关系。
  - **用途**：用于衡量分类模型在不同阈值下的整体性能。AUC 值越接近 1，模型的区分能力越强。
  - **优点**：在衡量模型的总体表现时，AUC 可以帮助了解模型的稳定性和判别能力，不依赖于具体的阈值。

#### 2. EER（等错误率）
  - **定义**：EER（Equal Error Rate）是指假阳性率（False Positive Rate, FPR）和假阴性率（False Negative Rate, FNR）相等时的错误率。
  - **用途**：常用于验证模型性能的一个稳定点，尤其是在需要权衡假阳性和假阴性影响时。
  - **优点**：EER 可以为不同阈值下的平衡性能提供直接的比较，适用于二分类问题中权重相当的应用场景。

#### 3. F1-score
  - **定义**：F1-score 是精确率（Precision）和召回率（Recall）的调和平均数，公式为：
    $$F1 = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}$$
  - **用途**：用于在分类问题中权衡模型的精确率和召回率，特别是在类分布不平衡时尤为有效。
  - **优点**：F1-score 平衡考虑了精确率和召回率，适合评估那些对假阳性和假阴性影响敏感的模型。
  - **应用场景**：适用于异常检测中对误报和漏报都有较高要求的场合。

#### 4. Precision（精确率）
  - **定义**：精确率是指模型预测为正样本的实例中实际为正样本的比例。公式为：
    $$\text{Precision} = \frac{\text{TP}}{\text{TP} + \text{FP}}$$
  - **用途**：衡量模型预测结果的准确性，适用于对假阳性率较敏感的应用。
  
#### 5. Recall（召回率）
  - **定义**：召回率是指实际为正样本的实例中被模型正确预测为正样本的比例。公式为：
    $$\text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}}$$
  - **用途**：评估模型对正样本的检测能力，适用于对假阴性率较敏感的场景。

每个指标在不同的应用场景中具有不同的重要性。例如，在安全监控中，可能更关注召回率，以确保尽可能少的异常被漏检；而在高误报成本的场景下，精确率则更为重要。

## ➢ 优秀团队 / 学术大佬

### ■ 高盛华 - 上海科技大学（视觉与数据智能中心）
- [1] A Revisit of Sparse Coding Based Anomaly Detection in Stacked RNN Framework (ICCV 2017) 提出了ShanghaiTech数据集。
- [2] Future Frame Prediction for Anomaly Detection – A New Baseline (CVPR 2018)。
- [3] Future Frame Prediction for Anomaly Detection (TPAMI 2022)。

### ■ Radu Ionescu - SecurifAI/University of Bucharest
- [1] Detecting abnormal events in video using Narrowed Normality Clusters (WACV 2019)。
- [2] Object-centric Auto-encoders and Dummy Anomalies for Abnormal Event Detection in Video (CVPR 2019)。
- [3] Anomaly Detection in Video via Self-Supervised and Multi-Task Learning (CVPR 2021)。
- [4] A Background-Agnostic Framework with Adversarial Training for Abnormal Event Detection in Video (TPAMI 2021)。
- [5] UBnormal New Benchmark for Supervised Open-Set Video Anomaly Detection (CVPR 2022)。
- [6] Self-Supervised Predictive Convolutional Attentive Block for Anomaly Detection (CVPR 2022)。

## ➢ 经典论文推荐（加“👍”）

### ■ Unsupervised VAD
* **Conference Papers**
  - [1] Learning Temporal Regularity in Video Sequences (CVPR 2016)。
  - [2] 👍 Future Frame Prediction for Anomaly Detection – A New Baseline (CVPR 2018)。
  - [3] 👍 Memorizing Normality to Detect Anomaly: Memory-augmented Deep Autoencoder for Unsupervised Anomaly Detection (ICCV 2019) → 首次在视频异常检测中使用记忆模块。
  - [4] 👍 Object-Centric Auto-Encoders and Dummy Anomalies for Abnormal Event Detection (CVPR 2019) → 首次结合对象检测和VAD以实现对象级异常检测。
  - [5] AnoPCN: Video Anomaly Detection via Deep Predictive Coding Network (ACM MM 2019) → 首个混合模型。
  - [6] 👍 Learning Memory-guided Normality for Anomaly Detection (CVPR 2020) → 基于MemAE。
  - [7] Cluster Attention Contrast for Video Anomaly Detection (ACM MM 2020) → 首次应用对比学习。
  - [8] 👍 Anomaly Detection in Video via Self-Supervised and Multi-Task Learning (CVPR 2021) → 对象级。
  - [9] 👍 A Hybrid Video Anomaly Detection Framework via Memory-Augmented Flow Reconstruction and Flow-Guided Frame Prediction (ICCV 2021) → 混合模型。
  - [10] Anomaly Detection in Video Sequence with Appearance-Motion Correspondence (ICCV 2019) → 双流网络。
  - [11] Video Anomaly Detection and Localization via Gaussian Mixture Fully Convolutional Variational Autoencoder → 双流网络。
  - [12] Self-supervised Sparse Representation for Video Anomaly Detection (ECCV 2022) → 首次尝试解决无监督和弱监督VAD。
  - [13] Video Anomaly Detection by Solving Decoupled Spatio-Temporal Jigsaw Puzzles (ECCV 2022)。

* **Journal Papers**
  - [1] Video Anomaly Detection with Sparse Coding Inspired Deep Neural Networks (TPAMI 2021)。
  - [2] A Background-Agnostic Framework With Adversarial Training for Abnormal Event Detection in Video (TPAMI 2022)。
  - [3] Influence-Aware Attention Networks for Anomaly Detection in Surveillance Videos (TCSVT 2022)。
  - [4] Bidirectional Spatio-Temporal Feature Learning With Multiscale Evaluation for Video Anomaly Detection (TCSVT 2022)。
  - [5] Anomaly Detection With Bidirectional Consistency in Videos (TNNLS 2022)。
  - [6] Variational Abnormal Behavior Detection With Motion Consistency (TIP 2022)。
  - [7] DoTA: Unsupervised Detection of Traffic Anomaly in Driving Videos (TPAMI 2023)。
  - [8] A Hierarchical Spatio-Temporal Graph Convolutional Neural Network for Anomaly Detection in Videos (TCSVT 2023)。
  - [9] Learnable Locality-Sensitive Hashing for Video Anomaly Detection (TCSVT 2023)。
  - [10] A Kalman Variational Autoencoder Model Assisted by Odometric Clustering for Video Frame Prediction and Anomaly Detection (TIP 2023)。
  - [11] Abnormal Event Detection and Localization via Adversarial Event Prediction (TNNLS 2023)。

### ■ Weakly Supervised VAD
- [1] 👍 Real-world Anomaly Detection in Surveillance Videos (CVPR 2018)。[代码链接](http://crcv.ucf.edu/projects/real-world/)
- [2] Weakly Supervised Video Anomaly Detection via Center-Guided Discriminative Learning (ICME 2020)。
- [3] Graph Convolutional Label Noise Cleaner: Train a Plug-And-Play Action Classifier for Anomaly Detection (CVPR 2019)。[代码链接](https://github.com/jx-zhong-for-academic-purpose/GCN-Anomaly-Detection)
- [4] Not only Look, but also Listen: Learning Multimodal Violence Detection under Weak Supervision (ECCV 2020)。[代码链接](https://roc-ng.github.io/XD-Violence/)
- [5] CLAWS: Clustering Assisted Weakly Supervised Learning with Normalcy Suppression for Anomalous Event Detection (ECCV 2020)。[代码链接](https://github.com/xaggi/claws_eccv)
- [6] Localizing Anomalies From Weakly-Labeled Videos (TIP 2021)。[代码链接](https://github.com/ktr-hubrt/WSAL)
- [7] Learning Normal Dynamics in Videos with Meta Prototype Network (CVPR 2021)。[代码链接](https://github.com/ktr-hubrt/MPN)
- [8] Weakly-Supervised Spatio-Temporal Anomaly Detection in Surveillance Video (IJCAI 2021)。
- [9] Weakly-supervised Video Anomaly Detection with Robust Temporal Feature Magnitude Learning (ICCV 2021)。[代码链接](https://github.com/tianyu0207/RTFM)
- [10] MIST: Multiple Instance Self-Training Framework for Video Anomaly Detection (CVPR 2021)。[代码链接](https://github.com/fjchange/MIST_VAD)
- [11] Self-Training Multi-Sequence Learning with Transformer for Weakly Supervised Video Anomaly Detection (AAAI 2022)。[代码链接](https://github.com/LiShuo1001/MSL(only readme))
- [12] Exploiting Completeness and Uncertainty of Pseudo Labels for Weakly Supervised Video Anomaly Detection (CVPR 2022)。[代码链接](https://github.com/ArielZc/CU-Net)
- [13] Modality-Aware Contrastive Instance Learning with Self-Distillation for Weakly-Supervised Audio-Visual Violence Detection (ACM MM 2022)。[代码链接](https://github.com/JustinYuu/MACIL_SD)
- [14] Decouple and Resolve: Transformer-Based Models for Online Anomaly Detection From Weakly Labeled Videos (TIFS 2023)。
- [15] Dual Memory Units with Uncertainty Regulation for Weakly Supervised Video Anomaly Detection (AAAI 2023)。[代码链接](https://github.com/henrryzh1/UR-DMU)
- [16] TEVAD: Improved video anomaly detection with captions (CVPR 2023)。[代码链接](https://github.com/coranholmes/TEVAD)
- [17] Look Around for Anomalies: Weakly-supervised Anomaly Detection via Context-Motion Relational Learning (CVPR 2023)。
- [18] Unbiased Multiple Instance Learning for Weakly Supervised Video Anomaly Detection (CVPR 2023)。[代码链接](https://github.com/ktr-hubrt/UMIL)
- [19] Hierarchical Semantic Contrast for Scene-aware Video Anomaly Detection (CVPR 2023)。[代码链接](https://github.com/shengyangsun/HSC_VAD)
- [20] MGFN: Magnitude-Contrastive Glance-and-Focus Network for Weakly-Supervised Video Anomaly Detection (AAAI 2023)。
- [21] Dynamic Erasing Network Based on Multi-Scale Temporal Features for Weakly Supervised Video Anomaly Detection (ArXiv 2023)。[代码链接](https://github.com/ArielZc/DE-Net)
- [22] Text Prompt with Normality Guidance for Weakly Supervised Video Anomaly Detection (CVPR 2024)。
- [23] Prompt-Enhanced Multiple Instance Learning for Weakly Supervised Video Anomaly Detection (CVPR 2024)。[代码链接](https://github.com/Junxi-Chen/PE-MIL)

### ■ Based on Large Model
- [1] 👍 Harnessing Large Language Models for Training-free Video Anomaly Detection (CVPR 2024)。[代码链接](https://lucazanella.github.io/lavad/)
- [2] Open-Vocabulary Video Anomaly Detection (CVPR 2024)。
- [3] 👍 Uncovering What, Why and How: A Comprehensive Benchmark for Causation Understanding of Video Anomaly (CVPR 2024)。[代码链接](https://github.com/fesvhtr/CUVA)
- [4] 👍 HAWK: Learning to Understand Open-World Video Anomalies (ArXiv 2024)。[代码链接](https://github.com/jqtangust/hawk)
- [5] Video Anomaly Detection and Explanation via Large Language Models (ArXiv 2024)。[代码链接](https://github.com/ktr-hubrt/VAD-LLaMA)
- [6] VANE-Bench: Video Anomaly Evaluation Benchmark for Conversational LMMs (ArXiv 2024)。[代码链接](https://hananshafi.github.io/vane-benchmark/)
- [7] 👍 Holmes-VAD: Towards Unbiased and Explainable Video Anomaly Detection via Multi-modal LLM (ArXiv 2024)。[代码链接](https://holmesvad.github.io/)
- [8] VadCLIP: Adapting Vision-Language Models for Weakly Supervised Video Anomaly Detection (AAAI 2023)。[代码链接](https://github.com/nwpu-zxr/VadCLIP)

## ➢ 经典项目

- ○ MNAD → [GitHub 链接](https://github.com/cvlab-yonsei/MNAD)，可作为视频异常检测的基准项目。

## ➢ 发现的新的有意思的研究方向 → Explainable Anomaly Detection (EAD) 可解释性异常检测

### 1. 定义
此任务旨在检测视频中的异常事件并自动生成高层次解释。理解异常事件的原因至关重要，因为所需的响应取决于其性质和严重性。

### 2. 相关工作
- [1] Joint Detection and Recounting of Abnormal Events by Learning Deep Generic Knowledge (ICCV 2017)。
- [2] X-MAN: Explaining multiple sources of anomalies in video (CVPR workshop 2021)。
- [3] Discrete neural representations for explainable anomaly detection (WACV 2022)。

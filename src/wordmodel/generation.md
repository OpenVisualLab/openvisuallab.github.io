---
title: 世界模型用于视频生成 
---
# World-Models-Autonomous-Driving-Latest-Survey
A curated list of world model for autonmous driving. Keep updated.
## 📌 Introduction
## ✧ 世界模型用于自动驾驶场景生成相关文献整理
## ➢ 论文汇总  

[1] <https://github.com/GigaAI-research/General-World-Models-Survey> 该 repo 内有目前世界模型方向的优秀论文汇总，包括基本分类：视频生成、自动驾驶和自主代理。其中自动驾驶分成端到端、以及2D、3D神经模拟器方法。世界模型的文献、 开源code、 综述。  
[2] <https://github.com/HaoranZhuExplorer/World-Models-Autonomous-Driving-Latest-Survey>   该repo 内以‘时间’为顺序精选相关世界自动驾驶模型。且并持续更新，包括一些挑战、相关视频，包括机器人领域的世界模型使用（大多数为模仿学习强化学习方向）可参考借鉴。

## ➢ 认识世界模型 

### 1. 简单介绍（从世界模型--> 自动驾驶世界模型用于场景生成）  

  [1]  世界模型简介：<https://mp.weixin.qq.com/s/UmT0DjFqRPsjv2m28ySvdw>世界模型是一种人工智能技术，旨在通过整合多种感知信息，如视觉、听觉和语言，利用机器学习和深度学习等方法来理解和预测现实世界。它包括感知模块、表征学习、动力学模型和生成模型，用于构建环境的内部表示，不仅能反映当前状态，还能预测未来变化。这种模型在强化学习、自动驾驶、游戏开发和机器人学等领域有广泛应用。Yann LeCun提出的这一概念，强调通过自监督学习让AI像人一样理解世界，形成内部的心理表征，以期实现通用人工智能。Meta的I-JEPA模型是基于这一愿景的实现，它通过分析和补全图像展示了对世界背景知识的应用。 

  [2]  影响较大的早期文章：2018年Jurgen在NeurIPS 以循环世界模型促进策略演变“Recurrent World Models Facilitate Policy Evolution”的title发表：链接: <https://arxiv.org/abs/1803.10122> 示例: <https://worldmodels.github.io/>  
  
  [3]  世界模型在自动驾驶领域的应用
显而易见生成式的World Model可以被用来当作一种仿真工具来生成仿真数据，特别是极为少见的Corner Case的数据。
然而World Model更有潜力的应用方向我认为是World Model可能会成为像GPT一样的自动驾驶领域的基础模型，而其他自动驾驶具体任务都会围绕这个基础模型进行研发构建。： <https://www.bilibili.com/read/cv34465959/> 
  
  [4]  世界模型用于生成: <https://mp.weixin.qq.com/s/i3Xw2-ivARnF7rBSFtxugw> 
  
  [5]  世界模型用于仿真平台: <https://mp.weixin.qq.com/s/Dxsc3oCuO0wYkeFubMfSNw>  
  
### 2.论文综述  

  [1]  邬开俊等. 视频异常检测技术研究进展[J]. 计算机科学与探索, 2022   （中文综述，但没有那么全面，可以有一个初步了解）
  [2]  Bharathkumar Ramachandra et al. A survey of single-scene video anomaly detection  (TPAMI 2020)  

## ➢ 优秀团队 / 学术大佬

### ■  高盛华  上海科技大学（视觉与数据智能中心）  

[1]  A Revisit of Sparse Coding Based Anomaly Detection in Stacked RNN Framework **(ICCV 2017)** -->proposed Shanghaitech dataset.  
[2]  Future Frame Prediction for Anomaly Detection – A New Baseline **(CVPR 2018)**
[3]  Future Frame Prediction for Anomaly Detection  **(TPAMI 2022)**

### ■  Radu Ionescu  SecurifAI/University of Bucharest

[1]  Detecting abnormal events in video using Narrowed Normality Clusters **(WACV 2019)**  
[2]  Object-centric Auto-encoders and Dummy Anomalies for Abnormal Event Detection in Video **(CVPR 2019)**  
[3]  Anomaly Detection in Video via Self-Supervised and Multi-Task Learning **(CVPR 2021)**  
[4]  A Background-Agnostic Framework with Adversarial Training for Abnormal Event Detection in Video **(TPAMI 2021)**  
[5]  UBnormal New Benchmark for Supervised Open-Set Video Anomaly Detection **(CVPR 2022)**
[6]  Self-Supervised Predictive Convolutional Attentive Block for Anomaly Detection **(CVPR 2022)**

## ➢ 经典论文：（推荐加“👍”）  

### ■ Unsupervised VAD  

* **Conference Papers**  
[1]  Learning Temporal Regularity in Video Sequences **(CVPR 2016)**  
[2]  A Revisit of Sparse Coding Based Anomaly Detection in Stacked RNN Framework -->**Proposed Shanghaitech dataset.**
[2]  👍Future Frame Prediction for Anomaly Detection -- A New Baseline **(CVPR 2018)**  
[3]  👍Memorizing Normality to Detect Anomaly: Memory-augmented Deep Autoencoder for Unsupervised Anomaly Detection **(ICCV 2019)** --> **The first to employ memory module on video anomaly detection**  
[4]  👍Object-Centric Auto-Encoders and Dummy Anomalies for Abnormal Event Detection **(CVPR 2019)** --> **The first to combine object detection and vad to achieve object-level anomaly dtection.**  
[5]  AnoPCN: Video Anomaly Detection via Deep Predictive Coding Network **(ACM MM 2019)** --> **The first hybrid model**  
[6]  👍Learning Memory-guided Normality for Anomaly Detection **(CVPR 2020)** --> **Based on MemAE**  
[7]  Cluster Attention Contrast for Video Anomaly Detection **(ACM MM 2020)** --> **The first to apply Contrastive Learninig**  
[8]  👍Anomaly Detection in Video via Self-Supervised and Multi-Task Learning **(CVPR 2021)** --> **object-level**  
[9]  👍A Hybrid Video Anomaly Detection Framework via Memory-Augmented Flow Reconstruction and Flow-Guided Frame Prediction **(ICCV 2021)** --> **Hybrid model**
[10]  Anomaly Detection in Video Sequence with Appearance-Motion Correspondence (ICCV 2019) --> **Two stream network**  
[11]  Video Anomaly Detection and Localization via Gaussian Mixture Fully Convolutional Variational Autoencoder --> **Two stream network**  
[12]  Self-supervised Sparse Representation for Video Anomaly Detection **(ECCV 2022)** --> A first attempt to slove unsupervised and weakly supervised VAD
[13]  Video Anomaly Detection by Solving Decoupled Spatio-Temporal Jigsaw Puzzles **(ECCV 2022)**  

* **Joural Papers**  
[1]   Video Anomaly Detection with Sparse Coding Inspired Deep Neural Networks **(TPAMI 2021)**
[2]  A Background-Agnostic Framework With Adversarial Training for Abnormal Event Detection in Video **(TPAMI 2022)**  
[3]  Influence-Aware Attention Networks for Anomaly Detection in Surveillance Videos **(TCSVT 2022)**  
[4]  Bidirectional Spatio-Temporal Feature Learning With Multiscale Evaluation for Video Anomaly Detection **(TCSVT 2022)**  
[5]  Anomaly Detection With Bidirectional Consistency in Videos **(TNNLS 2022)**  
[6]  Variational Abnormal Behavior Detection With Motion Consistency **(TIP 2022)**  
[7]  DoTA: Unsupervised Detection of Traffic Anomaly in Driving Videos **(TPAMI 2023)**
[8]  A Hierarchical Spatio-Temporal Graph Convolutional Neural Network for Anomaly Detection in Videos **(TCSVT 2023)**  
[9]  Learnable Locality-Sensitive Hashing for Video Anomaly Detection **(TCSVT 2023)**  
[10]  A Kalman Variational Autoencoder Model Assisted by Odometric Clustering for Video Frame Prediction and Anomaly Detection **(TIP 2023)**
[11]  Abnormal Event Detection and Localization via Adversarial Event Prediction **(TNNLS 2023)**  

### ■ Weakly supervised VAD

[1] 👍 Real-world Anomaly Detection in Surveillance Videos  **(CVPR 2018)**  
[2] Weakly Supervised Video Anomaly Detection via Center-Guided Discrimative Learning **(ICME 2020)**  

[3] Decouple and Resolve: Transformer-Based Models for Online Anomaly Detection From Weakly Labeled Videos **(TIFS 2023)**  

## ➢ 经典项目  

 ○ MNAD --> <https://github.com/cvlab-yonsei/MNAD>  可作为baseline.  

## ➢ 发现的新的有意思的研究方向--> Explainable Anomaly Detection (EAD) 可解释性异常检测

### 1. DEFINITION

The aim of this TASK is to detect and automatically generate high-level explanations of anomalous events in video. Understanding the cause of an anomalous event is crucialas the required response is dependant on its nature andseverity. --> Anomaly Detection & Anoamly Explanation

### 2. RELATED WORK

[1] Joint Detection and Recounting of Abnormal Events by Learning Deep Generic Knowledge (ICCV 2017)  
[2] X-MAN: Explaining multiple sources of anomalies in video (CVPR workshop 2021)  
[3] Discrete neural representations for explainable anomaly detection (WACV 2022)
[Awesome-World-Models-for-AD ](https://github.com/zhanghm1995/awesome-world-models-for-AD?tab=readme-ov-file#Table-of-Content),
[World models paper list from Shanghai AI lab](https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving/blob/main/papers.md#world-model--model-based-rl),
[Awesome-Papers-World-Models-Autonomous-Driving](https://github.com/chaytonmin/Awesome-Papers-World-Models-Autonomous-Driving).
    


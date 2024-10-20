---
author: Mo Meng Jingcheng (莫梦竟成); Zheng JianKang (郑健康)
title: 视频异常检测 
---
## ✧ 视频异常检测 (Video Anomaly Detection)



## ➢ 论文汇总  

[1] <https://github.com/fjchange/awesome-video-anomaly-detection> 该 repo 内有目前 视频异常检测（VAD） 方向的优秀论文汇总，包括基本分类、 常用数据库下载、 开源code、 综述  
[2] <https://github.com/shot1107/anomaly_detection_papers>   该repo 内有异常检测每年顶会的论文，包括但不限于视频异常检测，可参考借鉴。

## ➢ 认识异常检测  

### 1. 简单介绍（从异常行为检测--> 视频异常行为检测）  

  [1]  异常行为检测简介： <https://mp.weixin.qq.com/s/UmT0DjFqRPsjv2m28ySvdw>
  [2]  基于深度学习的异常行为检测介绍：<https://mp.weixin.qq.com/s/Aghbz4m1eWFCNGgEy8q6Cg>  
  [3]  基于深度学习的异常行为检测研究现状： <https://mp.weixin.qq.com/s/MwpELRlC1cuDgqn4staAzA>  
  [4]  基于深度学习的视频异常行为事件检测简介: <https://mp.weixin.qq.com/s/i3Xw2-ivARnF7rBSFtxugw>  
  [5]  基于视频的异常行为检测算法介绍: <https://mp.weixin.qq.com/s/Dxsc3oCuO0wYkeFubMfSNw>  
  
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



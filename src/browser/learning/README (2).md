# ReadMe🧐

## 介绍

该文档项目为 Happy Learning 小组的科研入门资料。  
ReadMe仅包含基础内容，可作为索引使用，详细内容请见对应文档。  
项目地址: <http://10.16.104.13:1805/happy-learning/tohappylearning>

## 小组老大

冷佳旭  <https://faculty.cqupt.edu.cn/lengjiaxu/zh_CN/index.htm>

## 使用指南

平台使用指南请见 <http://10.16.104.13:1805/root/users-guide>

此 `README` 文档仅作为索引, 主要内容为入门基础知识和各研究方向简介，详细笔记请见 `1.科研方向` 文件夹。

---

## 文档总览

[toc]

---
 
## 新生入门

1. 首先学习 Andrew Ng 的 Machine Learning 在线课程，要做课后作业(MATLAB)；
2. 其次学习 Andrew Ng 的 Deep Learning 在线课程，要做课后作业（Python+tensorflow），这个过程可能需要花3-5天学习python的基础语法；
3. 学习CS231n在线课程，并完成大作业。  
4. 深度学习基础练习及经典模型 [链接入口🔗, 点击进入🔗](./3.入门实践/Torch_learning/README.md)  
5. https://mofanpy.com/  

## 科研基础

1. 基础课程：本硕期间重点掌握 `《高等数学》` `《线性代数》` `《概率论与数理统计》` `《矩阵论》` `《凸优化》` 课程，这里的掌握是要理解它们的本质、作用及物理几何意义，而非应付考试。在学习时抛弃国内出版的死板教材，搜索国内外优秀书籍、公开课、视频进行学习。  
   例如，《线性代数》推荐[《线性代数的本质》系列视频](https://www.bilibili.com/video/BV1ys411472E)<https://www.bilibili.com/video/BV1ys411472E>，以及Gilbert Strang 的麻省理工大学公开课视频<https://www.bilibili.com/video/BV1zx411g7gq>。
2. 机器学习：推荐南京大学周志华老师的西瓜书《机器学习》，华为诺亚方舟实验室主任李航老师的《统计学习方法》，斯坦福大学Andrew NG（吴恩达）老师的机器学习课程视频<https://www.bilibili.com/video/BV164411b7dx>。
3. 深度学习：推荐Google研究科学家Ian Goodfellow（Generative Adversarial Nets提出者）的花书《Deep Learning》（有中文译本人民邮电出版社），斯坦福大学李飞飞（ImageNet的提出者）老师的cs231n计算机视觉课程<https://www.bilibili.com/video/BV1nJ411z7fe>。
4. 科研环境：操作系统Linux，主要编程语言Python，主要深度学习框架Pytorch。因此，要掌握Linux的使用方法与常用命令，熟练使用Python语言编程，熟练使用Pytorch深度学习框架搭建网络与深度学习算法。  
    a. Linux 学习：<https://www.runoob.com/linux/linux-tutorial.html>；  
    b. Python 学习：<https://www.runoob.com/python3/python3-tutorial.html>；  
    c. Python 第三方库 Pillow（处理图像）学习：<https://pillow-cn.readthedocs.io/zh_CN/latest/>；  
    d. Python 第三方库 Numpy（CPU处理多维张量）学习：<https://www.runoob.com/numpy/numpy-tutorial.html>；  
    e. 深度学习框架Pytorch（使用Python编程，GPU处理多维张量，提供深度学习API）学习：<https://pytorch.apachecn.org/docs/1.4/>。

## 科研工具

1. 科学上网：一个可用稳定的上谷歌（翻墙）工具是必须的，推荐：<https://geckoiplc.org/register?aff=nxkYWh33>，使用方法该网站有教程
2. 检索论文：GoogleScholar：<https://scholar.google.com/>（需翻墙）
3. 下载论文：  
    a. IEEE：<https://ieeexplore.ieee.org/Xplore/home.jsp>；  
    b. ScienceDirect：<https://www.sciencedirect.com/>；  
    c. SpringerLink：<https://link.springer.com/>；  
    d. arXiv：<https://arxiv.org/>占坑网站，最新的文章会发表在上面占坑，但是良莠不齐，免费下载，翻墙会快；  
    e. Sci-Hub：<https://www.sci-hub.ren/>不在学校内又想下载IEEE等版权收费文章？Sci-Hub是神器，网站宣言...to remove all the barriers in the way of science，地址可能会变，因为一直被告。
4. 管理论文：Mendely：<https://www.mendeley.com/>；Endnotes：<https://www.endnote.com/>；Zotero：<https://www.zotero.org/>；自己选择。
5. 撰写论文：LaTex环境安装：<http://tug.org/texlive/>；按着网站指导来。也可以使用在线的LaTex编辑工具如Overleaf：<https://www.overleaf.com/login>。
6. 论文作图：PPT、Visio(Windows)、OmniGraffle(Mac)；
直接保存成PDF就是矢量图，使用Adobe Acrobat将图片多余部分裁剪。
7. 代码编辑：VSCode（Visual Studio Code）：<https://code.visualstudio.com/>；
你想要的代码编辑功能都能通过VSCode+插件实现。
常用VSCode插件：LaTex Workshop（用VSCode写论文，前提得先装好LaTex环境）、Remote-SSH（用VSCode直接浏览编辑远程服务器上的代码和图片）、One Dark Pro（让VSCode更好看）、Bracket Pair Colorizer 2（让代码每一级括号带不同的颜色，括号再也不会不成对报错了）、Code Spell Checker（检查你的拼写是否有错误）、indent-rainbow（不同级的缩进带不同颜色，对Python来说很有用）、Python（可以直接在VSCode调试Python程序，前提得先装好Python环境）。
8. 服务器后台运行管理工具tmux [链接入口🔗, 点击进入🔗](./2.科研工具/服务器后台管理工具tmux.md)。

## 科研方向

### ✧ 行人检测（Person Detection）-> `高峰 (博士)`

#### 论文汇总：论文汇总链接，例如GitHub上的 `Awesome` 系列

##### ➢ 推荐综述  

  [1] From Handcrafted to Deep Features for Pedestrian Detection: A Survey (TPAMI2021)  涵盖了2020年及以前从传统到深度学习的行人检测所有知识。但是，2020Detr横空出世,2021突飞猛进，2022基于Detr思想的第一篇行人检测顶会问世,个人觉得这是里程碑式的作品。因为自Faster-RCNN问世以来，行人检测领域百分之80以上的文章都是Faster-RCNN的变种。未来可能Detr替代Faster-RCNN，成为行人检测领域的Baseline。目前DETR相关资料非常少，这部分知识需要自己想办法。  

##### ➢ 优秀团队 / 学术大佬

  ■ 【旷视团队】    
  [1] Detection in Crowded Scenes: One Proposal, Multiple Predictions. CVPR2020  
  [2] End-to-End Object Detection with Fully Convolutional Network. CVPR2021  
  [3] Progressive End-to-End Object Detection in Crowded Scenes. CVPR2022  
  ■ 【Peize Sun】【香港大学在读博士】    
  [1] Sparse r-cnn: End-to-end object detection with learnable proposals. CVPR2021   
  [2] What Makes for End-to-End Object Detection? ICML2021  
 
##### ➢ 经典项目  

 ○ 上述五篇论文都开源了代码，地址在论文中。第一篇论文开源的代码中包含了纯pytorch实现的Faster-RCNN和Retinanet非常适合初学者入门基于CNN的目标检测算法。  
 ○ 我上传了一个简易版的DETR纯pytorch实现在我的科研方向文件夹中，可以很好的学习DETR原理。  
 ○ 旷视团队的第三篇论文是Peize Sun第一篇论文的改进，通过阅读代码可以从一个角度了解目前研究者改进Detr算法的思路。  

### ✧ 行人重识别（Person Re-identification）-> `汪海涛`

#### 论文汇总: <https://github.com/bismex/Awesome-person-re-identification>，该 repo 内有目前 video reid 方向的顶会所有论文汇总，包括基本分类、 常用数据库下载、常用 code

##### ➢ 推荐综述

[1] Deep Learning for Person Re-identification: A Survey and Outlook, TPAMI 2020(近期的 reid 工作汇总)  
[2] Person Re-identification: Past, Present and Future, arXiv 2016(早期的 reid 工作汇总)

* 基本看上上面两个 survey 对目前 reid 的发展脉络就可以有一个清晰的把握了
* 看论文的时候 related work 里面的论文都可以参考看一看
* 一些必备的技术点:bagtricks, agw, sbs, pcb, mgn, arcface

##### ➢ 优秀团队 / 学术大佬
  ■ 郑伟诗 Wei-Shi Zheng 中山大学智能科学与系统实验室(iSEE) <https://www.isee-ai.cn/~zhwshi/>  
  [1] J. Yang, W. -S. Zheng, Q. Yang, Y. -C. Chen and Q. Tian, "Spatial-Temporal Graph Convolutional Network for Video-Based Person Re-Identification," 2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2020, pp. 3286-3296, doi: 10.1109/CVPR42600.2020.00335.  
  [2] J. Yang et al., "Learning to Know Where to See: A Visibility-Aware Approach for Occluded Person Re-identification," 2021 IEEE/CVF International Conference on Computer Vision (ICCV), 2021, pp. 11865-11874, doi: 10.1109/ICCV48922.2021.01167.

  ■ 常虹 Chang Hong 中国科学院计算机技术研究院(CAS) <https://people.ucas.ac.cn/~changhong>  
  [1] R. Hou, B. Ma, H. Chang, X. Gu, S. Shan and X. Chen, "VRSTC: Occlusion-Free Video Person Re-Identification," 2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2019, pp. 7176-7185, doi: 10.1109/CVPR.2019.00735.  
  [2] R. Hou, H. Chang, B. Ma, R. Huang and S. Shan, "BiCnet-TKS: Learning Efficient Spatial-Temporal Representation for Video Person Re-Identification," 2021 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2021, pp. 2014-2023, doi: 10.1109/CVPR46437.2021.00205.

##### ➢ 可见光 reid 代表论文

[1] Joint Disentangling and Adaptation for Cross-Domain Person Re-Identification, ECCV2020  
[2] Identity-Guided Human Semantic Parsing for Person Re-Identification, ECCV2020  
[3] Faster Person Re-Identification, ECCV20 (轻量级 reid， <https://github.com/wangguanan/light-reid> )  
[4] Joint Visual and Temporal Consistency for Unsupervised Domain Adaptive Person Re-Identification, ECCV2020  
[5] Re-Ranking Person Re-Identification With k-Reciprocal Encoding， CVPR2017(将 reranking 应用到 reid，涨点显著)  
[6] Person Re-Identification in the Wild, CVPR2017(从检测到识别)

##### ➢ 异质 reid 代表论文

[1] Hi-CMD: Hierarchical Cross-Modality Disentanglement for Visible-Infrared Person Re-Identification，CVPR2020  
[2] Cross-Modality Person Re-Identification With Shared-Specific Feature Transfer, CVPR2020  
[3] RGB-Infrared Cross-Modality Person Re-Identification via Joint Pixel and Feature Alignment, ICCV2019  
[4] Infrared-Visible Cross-Modal Person Re-Identification with an X Modality, AAAI2020  

##### ➢ 常用开源项目

* strong baseline: <https://github.com/michuanhaohao/reid-strong-baseline>
* FAST-REID: <https://github.com/JDAI-CV/fast-reid>
  
### ✧ 超分辨率重建（Super-resolution）

<!--模版-->
#### 论文汇总：论文汇总链接，例如GitHub上的 `Awesome` 系列

##### ➢ 推荐综述  

  [1] Video Super Resolution Based on Deep Learning: A comprehensive survey    
  [2] Deep Learning for Image Super-resolution: A Survey  
  [3] Blind Image Super-Resolution: A Survey and Beyond  

*  三篇综述分别代表超分领域中的三个小领域：视频超分辨率、单图超分辨率、盲图像超分辨率。

##### ➢ 优秀团队 / 学术大佬

  ■ Xintao Wang:现任腾讯ARC实验室（深圳）研究员。毕业于香港中文大学多媒体实验室。主要研究图像和视频的恢复。  
  个人主页：https://xinntao.github.io/  
  [1] Wang X, Chan K C K, Yu K, et al. Edvr: Video restoration with enhanced deformable convolutional networks[C]//Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops. 2019: 0-0.  
  [2] Wang X, Yu K, Dong C, et al. Recovering realistic texture in image super-resolution by deep spatial feature transform[C]//Proceedings of the IEEE conference on computer vision and pattern recognition. 2018: 606-615.  
  [3] Wang X, Yu K, Wu S, et al. Esrgan: Enhanced super-resolution generative adversarial networks[C]//Proceedings of the European conference on computer vision (ECCV) workshops. 2018: 0-0.  
  ■ Kelvin C.K. Chan：新加坡南洋理工大学，计算机科学与工程学院，香港中文大学学士学位。  
  个人主页：https://ckkelvinchan.github.io/  
  [1] Chan K C K, Wang X, Yu K, et al. BasicVSR: The search for essential components in video super-resolution and beyond[C]//Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2021: 4947-4956.  
  [2] Chan K C K, Zhou S, Xu X, et al. BasicVSR++: Improving video super-resolution with enhanced propagation and alignment[J]. arXiv preprint arXiv:2104.13371, 2021.  
  [3] Chan K C K, Wang X, Yu K, et al. Understanding deformable alignment in video super-resolution[J]. arXiv preprint arXiv:2009.07265, 2020, 4(3): 4.  

##### ➢ 经典论文：（推荐加“👍”）    

* Video Super-Resolution  
  [1] Ward C M, Harguess J, Crabb B, et al. Image quality assessment for determining efficacy and limitations of Super-Resolution Convolutional Neural Network (SRCNN)[C]//Applications of Digital Image Processing XL. International Society for Optics and Photonics, 2017, 10396: 1039605.   
  简介：该篇论文是深度学习在超分辨率的开山之作。每个入门SR的学者都需要从这一篇论文开始。  
  [2] Liu D, Wang Z, Fan Y, et al. Robust video super-resolution with learned temporal dynamics[C]//Proceedings of the IEEE International Conference on Computer Vision. 2017: 2507-2515.  
  [3] Tian Y, Zhang Y, Fu Y, et al. Tdan: Temporally-deformable alignment network for video super-resolution[C]//Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2020: 3360-3369.  
  [4] 👍【Wang X, Chan K C K, Yu K, et al. Edvr: Video restoration with enhanced deformable convolutional networks[C]//Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops. 2019: 0-0.  
  [5] Haris M, Shakhnarovich G, Ukita N. Recurrent back-projection network for video super-resolution[C]//Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2019: 3897-3906.  
  [6] Chan K C K, Wang X, Yu K, et al. BasicVSR: The search for essential components in video super-resolution and beyond[C]//Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2021: 4947-4956.  
  [7] Chan K C K, Wang X, Yu K, et al. Understanding deformable alignment in video super-resolution[J]. arXiv preprint arXiv:2009.07265, 2020, 4(3): 4.  

* Blind Image Super-Resolution
  [1] Zhang K, Zuo W, Zhang L. Learning a single convolutional super-resolution network for multiple degradations[C]//Proceedings of the IEEE conference on computer vision and pattern recognition. 2018: 3262-3271.  
  [2] Gu J, Lu H, Zuo W, et al. Blind super-resolution with iterative kernel correction[C]//Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2019: 1604-1613.  
  [3] Wei Y, Gu S, Li Y, et al. Unsupervised real-world image super resolution via domain-distance aware training[C]//Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2021: 13385-13394.  
  [4] Shocher A, Cohen N, Irani M. “zero-shot” super-resolution using deep internal learning[C]//Proceedings of the IEEE conference on computer vision and pattern recognition. 2018: 3118-3126.  
  [5] Hui Z, Li J, Wang X, et al. Learning the Non-differentiable Optimization for Blind Super-Resolution[C]//Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2021: 2093-2102.  

##### ➢ 经典开源项目  

 ○ 【名称】【链接】【简介】

[1] BasicVSR: https://github.com/xinntao/BasicSR  
    简介：该项目里包含了很多经典论文的复现，因此可直接将这个开源代码用会就可。

### ✧ 视频异常检测 (Video Anomaly Detection) -> `谭明圮`

<!--模版-->
#### 论文汇总：  
[1] https://github.com/fjchange/awesome-video-anomaly-detection 该 repo 内有目前 视频异常检测（VAD） 方向的优秀论文汇总，包括基本分类、 常用数据库下载、 开源code、 综述  
[2] https://github.com/shot1107/anomaly_detection_papers   该repo 内有异常检测每年顶会的论文，包括但不限于视频异常检测，可参考借鉴。     

##### ➢ 认识异常检测  
###### 1. 简单介绍（从异常行为检测--> 视频异常行为检测）  
  [1]  异常行为检测简介： https://mp.weixin.qq.com/s/UmT0DjFqRPsjv2m28ySvdw   
  [2]  基于深度学习的异常行为检测介绍：https://mp.weixin.qq.com/s/Aghbz4m1eWFCNGgEy8q6Cg  
  [3]  基于深度学习的异常行为检测研究现状： https://mp.weixin.qq.com/s/MwpELRlC1cuDgqn4staAzA  
  [4]  基于深度学习的视频异常行为事件检测简介: https://mp.weixin.qq.com/s/i3Xw2-ivARnF7rBSFtxugw  
  [5]  基于视频的异常行为检测算法介绍: https://mp.weixin.qq.com/s/Dxsc3oCuO0wYkeFubMfSNw  
  
###### 2.论文综述：  
  [1]  邬开俊等. 视频异常检测技术研究进展[J]. 计算机科学与探索, 2022   （中文综述，但没有那么全面，可以有一个初步了解）   
  [2]  Bharathkumar Ramachandra et al. A survey of single-scene video anomaly detection  (TPAMI 2020)  

##### ➢ 优秀团队 / 学术大佬
###### ■  高盛华  上海科技大学（视觉与数据智能中心）  
[1]  A Revisit of Sparse Coding Based Anomaly Detection in Stacked RNN Framework **(ICCV 2017)** -->proposed Shanghaitech dataset.  
[2]  Future Frame Prediction for Anomaly Detection – A New Baseline **(CVPR 2018)**       
[3]  Future Frame Prediction for Anomaly Detection  **(TPAMI 2022)**
###### ■  Radu Ionescu  SecurifAI/University of Bucharest    
[1]  Detecting abnormal events in video using Narrowed Normality Clusters **(WACV 2019)**  
[2]  Object-centric Auto-encoders and Dummy Anomalies for Abnormal Event Detection in Video **(CVPR 2019)**  
[3]  Anomaly Detection in Video via Self-Supervised and Multi-Task Learning **(CVPR 2021)**  
[4]  A Background-Agnostic Framework with Adversarial Training for Abnormal Event Detection in Video **(TPAMI 2021)**  
[5]  UBnormal New Benchmark for Supervised Open-Set Video Anomaly Detection **(CVPR 2022)**
[6]  Self-Supervised Predictive Convolutional Attentive Block for Anomaly Detection **(CVPR 2022)**   

##### ➢ 经典论文：（推荐加“👍”）  
###### ■ Unsupervised VAD  
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

###### ■ Weakly supervised VAD 
[1] 👍 Real-world Anomaly Detection in Surveillance Videos  **(CVPR 2018)**  
[2] Weakly Supervised Video Anomaly Detection via Center-Guided Discrimative Learning **(ICME 2020)**  

[3] Decouple and Resolve: Transformer-Based Models for Online Anomaly Detection From Weakly Labeled Videos **(TIFS 2023)**  
 

##### ➢ 经典项目  

 ○ MNAD --> https://github.com/cvlab-yonsei/MNAD  可作为baseline.  

##### ➢ 发现的新的有意思的研究方向--> Explainable Anomaly Detection (EAD) 可解释性异常检测
###### 1. DEFINITION
The aim of this TASK is to detect and automatically generate high-level explanations of anomalous events in video. Understanding the cause of an anomalous event is crucialas the required response is dependant on its nature andseverity. --> Anomaly Detection & Anoamly Explanation   
###### 2. RELATED WORK
[1] Joint Detection and Recounting of Abnormal Events by Learning Deep Generic Knowledge (ICCV 2017)  
[2] X-MAN: Explaining multiple sources of anomalies in video (CVPR workshop 2021)  
[3] Discrete neural representations for explainable anomaly detection (WACV 2022)

### ✧ 航拍图像目标检测（Drone-view Object Detection）-> `莫梦竟成`
<!--模版-->
#### 论文汇总：论文汇总链接，例如GitHub上的 `Awesome` 系列

##### ➢ 推荐综述  

  [1] 【发表于】【年份】【论文名】【团队名】【论文链接】【代码链接】【简介】  
  [2] 【知乎/微信/博客等网页链接】【内容简介】  

##### ➢ 优秀团队 / 学术大佬

  ■ 【团队名】【团队链接】【所属机构】【细化方向】  
  [1] 【代表论文】  
  ■ 【大佬名】【个人主页】【所属机构】【细化方向】  
  [1] 【代表论文】  

##### ➢ 经典论文：（推荐加“👍”）  

  [1] 【发表于】【年份】【论文名】【团队名】【论文链接】【代码链接】【简介】  
  [2] 👍【发表于】【年份】【论文名】【团队名】【论文链接】【代码链接】【简介】  

##### ➢ 经典项目  

 ○ 【名称】【链接】【简介】

### ✧ 小样本目标检测（Few-shot Object Detection）-> `陈泰岳`
<!--模版-->
#### 论文汇总：论文汇总链接，例如GitHub上的 `Awesome` 系列

##### ➢ 推荐综述  

  [1] 【发表于】【年份】【论文名】【团队名】【论文链接】【代码链接】【简介】  
  [2] 【知乎/微信/博客等网页链接】【内容简介】  

##### ➢ 优秀团队 / 学术大佬

  ■ 【团队名】【团队链接】【所属机构】【细化方向】  
  [1] 【代表论文】  
  ■ 【大佬名】【个人主页】【所属机构】【细化方向】  
  [1] 【代表论文】  

##### ➢ 经典论文：（推荐加“👍”）  

  [1] 【发表于】【年份】【论文名】【团队名】【论文链接】【代码链接】【简介】  
  [2] 👍【发表于】【年份】【论文名】【团队名】【论文链接】【代码链接】【简介】  

##### ➢ 经典项目  

 ○ 【名称】【链接】【简介】

> 参考文档：  
>
> 1. 【在iiplab做科研】 <https://docs.qq.com/pdf/DR3NNa2xqU0Rld1B2>，特别感谢～

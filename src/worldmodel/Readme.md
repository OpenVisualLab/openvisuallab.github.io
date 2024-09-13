

# World-Models-Autonomous-Driving-Latest-Survey
A curated list of world model for autonmous driving. Keep updated.
## 📌 Introduction

## ✧ 世界模型用于自动驾驶场景生成相关文献整理
## ➢ 论文汇总  

[1] <https://github.com/GigaAI-research/General-World-Models-Survey> 该 repo 内有目前世界模型方向的优秀论文汇总，包括基本分类：视频生成、自动驾驶和自主代理。其中自动驾驶分成端到端、以及2D、3D神经模拟器方法。世界模型的文献、 开源code、 综述。

[2] <https://github.com/HaoranZhuExplorer/World-Models-Autonomous-Driving-Latest-Survey>   该repo 内以‘时间’为顺序精选相关世界自动驾驶模型。且并持续更新，包括一些挑战、相关视频，包括机器人领域的世界模型使用（大多数为模仿学习强化学习方向）可参考借鉴。

[3] [Awesome-World-Models-for-AD ](https://github.com/zhanghm1995/awesome-world-models-for-AD?tab=readme-ov-file#Table-of-Content)

[4] [World models paper list from Shanghai AI lab](https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving/blob/main/papers.md#world-model--model-based-rl)

[5] [Awesome-Papers-World-Models-Autonomous-Driving](https://github.com/chaytonmin/Awesome-Papers-World-Models-Autonomous-Driving).

## ➢ 认识世界模型 

<p align="center">
  <img src="/src/worldmodel/world_model.png" width="30%" />
</p>

### 1. 简单介绍（从世界模型--> 自动驾驶世界模型用于场景生成）  

  [1]  世界模型简介：<https://mp.weixin.qq.com/s/UmT0DjFqRPsjv2m28ySvdw>世界模型是一种人工智能技术，旨在通过整合多种感知信息，如视觉、听觉和语言，利用机器学习和深度学习等方法来理解和预测现实世界。它包括感知模块、表征学习、动力学模型和生成模型，用于构建环境的内部表示，不仅能反映当前状态，还能预测未来变化。这种模型在强化学习、自动驾驶、游戏开发和机器人学等领域有广泛应用。Yann LeCun提出的这一概念，强调通过自监督学习让AI像人一样理解世界，形成内部的心理表征，以期实现通用人工智能。Meta的I-JEPA模型是基于这一愿景的实现，它通过分析和补全图像展示了对世界背景知识的应用。 

  [2]  影响较大的早期世界模型文章：2018年Jurgen在NeurIPS 以循环世界模型促进策略演变“Recurrent World Models Facilitate Policy Evolution”的title发表：链接: <https://arxiv.org/abs/1803.10122> 示例: <https://worldmodels.github.io/>  
  
  [3]  世界模型在自动驾驶领域的应用： <https://www.bilibili.com/read/cv34465959/> 
  
  [4]  世界模型用于自动驾驶场景生成以及仿真平台: <https://blog.csdn.net/CV_Autobot/article/details/134002647> 
  
  
### 2.论文综述  

 [1]  2024-Is Sora a World Simulator? A Comprehensive Survey on General World Models and Beyond， __`arxiv`__ [Paper](https://arxiv.org/abs/2403.02622) 极佳科技 （比较全面，该综述通过 260 余篇文献，对世界模型在视频生成、自动驾驶、智能体、通用机器人等领域的研究和应用进行了详尽的分析和讨论。另外，该综述还审视了当前世界模型的挑战和局限性，并展望了它们未来的发展方向。）
  
 [2] 2024-World Models for Autonomous Driving: An Initial Survey，IEEE TIV,澳门大学，夏威夷大学。[Paper](https://arxiv.org/abs/2403.02622)（画风有趣，对自动驾驶世界模型的现状和未来进展进行了初步回顾，涵盖了它们的理论基础、实际应用以及旨在克服现有局限性的正在进行的研究工作。）
   
  [3]2024-Data-Centric Evolution in Autonomous Driving: A Comprehensive Survey of Big Data System, Data Mining, and Closed-Loop Technologies __`arxiv`__ [Paper](https://arxiv.org/pdf/2401.12888.pdf)
    
   [4]2024-Forging Vision Foundation Models for Autonomous Driving: Challenges, Methodologies, and Opportunities __`arxiv`__ [Paper](https://arxiv.org/pdf/2401.08045.pdf)  

## 3.挑战赛 Workshops/Challenges
* 2024-1X World Model Challenge  __`Challenges`__ [Link](https://github.com/1x-technologies/1xgpt)
  
* 2024-CVPR Workshop, Foundation Models for Autonomous Systems, Challenges, Track 4: Predictive World Model __`Challenges`__ [Link](https://opendrivelab.com/challenge2024/)

## Tutorials/Talks/
* 2023 __`from Wayve`__; [Video](https://www.youtube.com/watch?v=lNOs08byOhw)
  
* 2022-Neural World Models for Autonomous Driving [Video](https://www.youtube.com/watch?v=wMvYjiv6EpY)

## ➢ 优秀团队 / 学术大佬/ 公司

#### ■  上海AILab（上海人工智能实验室） <https://opendrivelab.com/publications/> 

#### ■  香港中文大学（陈铠老师团队）Geometric-Controllable Visual Generation: A Systematic Solution  [Video](https://www.bilibili.com/video/BV18T421v7Nf/?spm_id_from=333.337.search-card.all.click) 

#### ■  极佳科技（极佳科技DriveDreamer自动驾驶世界模型、WorldDreamer通用世界模型目前已成功商业化落地。）[推文](https://baijiahao.baidu.com/s?id=1799624134723943641) 

#### ■  Wayve、Tesla、旷视、中科院自动化所

#### ■ 蔚来车企：<https://www.qbitai.com/2024/07/172025.html>

## ➢ 经典论文：（推荐加“👍”）  

#### + World Models are adept at representing an agent's spatio-temporal knowledge about its environment through the prediction of future changes. 

#### + There are two main types of world models in Autonomous Driving aimed at reducing driving uncertainty, i.e., World Model as Neural Driving Simulator and World Model for End-to-end Driving. 

####  +  In the real environment, methods like GAIA-1 and Copilot4D involve utilizing generative models to construct neural simulators that produce 2D or 3D future scenes to enhance predictive capabilities. 

####  + In the simulation environment, methods such as MILE and TrafficBots are based on reinforcement learning, enhancing their capacity for decision-making and future prediction, thereby paving the way to end-to-end autonomous driving.


<p align="center">
  <img src="/src/worldmodel/wm_ad.png" width="80%" />
</p>


###  ■ Neural Driving Simulator based on World Models
####  ■ 2D Scene Generation
+ 👍(2023 Arxiv) GAIA-1: A generative world model for autonomous driving [[Paper](https://arxiv.org/abs/2309.17080)][[Blog](https://wayve.ai/thinking/scaling-gaia-1/)] (Wayve)
+ (2023 CVPR 2023 workshop) [[Video](https://www.youtube.com/watch?v=6x-Xb_uT7ts)] (Tesla)
+ 👍(2023 Arxiv) DriveDreamer: Towards Real-world-driven World Models for Autonomous Driving [[Paper](https://drivedreamer.github.io/)][[Code](https://github.com/JeffWang987/DriveDreamer)] (GigaAI)
+ (2023 Arxiv) ADriver-I: A General World Model for Autonomous Driving [[Paper](https://arxiv.org/abs/2311.13549)] (MEGVII)
+ 👍(2023 Arxiv) DrivingDiffusion: Layout-Guided multi-view driving scene video generation with latent diffusion model [[Paper](https://arxiv.org/abs/2310.07771)] (Baidu)
+ (2023 Arxiv) Panacea: Panoramic and Controllable Video Generation for Autonomous Driving [[Paper](https://panacea-ad.github.io/)][[Code](https://github.com/wenyuqing/panacea)] (MEGVII)
+ 👍(2024 CVPR) Drive-WM: Driving into the Future: Multiview Visual Forecasting and Planning with World Model for Autonomous Driving [[Paper](https://drive-wm.github.io/)][[Code](https://github.com/BraveGroup/Drive-WM)] (CASIA)
+ (2023 Arxiv) WoVoGen: World Volume-aware Diffusion for Controllable Multi-camera Driving Scene Generation [[Paper](https://arxiv.org/abs/2312.02934)] (Fudan)
+ (2024 Arxiv) DriveDreamer-2: LLM-Enhanced World Models for Diverse Driving Video Generation [[Paper](https://drivedreamer2.github.io/)][[Code](https://github.com/f1yfisher/DriveDreamer2)] (GigaAI)
+ (2024 CVPR) GenAD: Generalized Predictive Model for Autonomous Driving [[Paper](https://arxiv.org/abs/2403.09630)][[Code](https://github.com/OpenDriveLab/DriveAGI?tab=readme-ov-file)] (Shanghai AI Lab)
+ (2024 Arxiv) SubjectDrive: Scaling Generative Data in Autonomous Driving via Subject Control [[Paper](https://subjectdrive.github.io/)] (MEGVII)

####  ■ 3D Scene Generation
+ 👍(2024 ICLR) Copilot4D:Learning unsupervised world models for autonomous driving via discrete diffusion [[Paper](https://arxiv.org/abs/2311.01017)] (Waabi)
+ (2023 Arxiv) OccWorld: Learning a 3D Occupancy World Model for Autonomous Driving [[Paper](https://arxiv.org/abs/2311.16038)][[Code](https://github.com/wzzheng/OccWorld)] (THU)
+ (2023 Arxiv) MUVO: A Multimodal Generative World Model for Autonomous Driving with Geometric Representations [[Paper](https://arxiv.org/abs/2311.11762)] (KIT)
+ (2024 Arxiv) LidarDM: Generative LiDAR Simulation in a Generated World [[Paper](https://www.zyrianov.org/lidardm/)][[Code](https://github.com/vzyrianov/lidardm)] (MIT)
  
####  ■ 4D Pre-training for Autonomous Driving
+ (2023 Arxiv) UniWorld: Autonomous Driving Pre-training via World Models [[Paper](https://arxiv.org/abs/2308.07234)] (PKU) 
+ (2024 CVPR) ViDAR: Visual Point Cloud Forecasting enables Scalable Autonomous Driving [[Paper](https://arxiv.org/abs/2312.17655)][[Code](https://github.com/OpenDriveLab/ViDAR)] (Shanghai AI Lab)
+ 👍(2024 CVPR) DriveWorld: 4D Pre-trained Scene Understanding via World Models for Autonomous Driving [[Paper](XXX)] (PKU)
  
###  ■ End-to-end Driving based on World Models
+ 👍(2022 NeurIPS) Iso-Dream: Isolating and Leveraging Noncontrollable Visual Dynamics in World Models [[Paper](https://proceedings.neurips.cc/paper_files/paper/2022/hash/9316769afaaeeaad42a9e3633b14e801-Abstract-Conference.html)] (SJTU)
+ 👍(2022 NeurIPS) MILE: Model-Based Imitation Learning for Urban Driving [[Paper](https://proceedings.neurips.cc/paper_files/paper/2022/hash/827cb489449ea216e4a257c47e407d18-Abstract-Conference.html)][[Code](https://github.com/wayveai/mile)] (Wayve)
+ (2022 NeurIPS Deep RL Workshop) SEM2: Enhance Sample Efficiency and Robustness of End-to-end Urban Autonomous Driving via Semantic Masked World Model [[Paper](https://arxiv.org/abs/2210.04017)] (HIT & THU)
+ (2023 ICRA) TrafficBots: Towards World Models for Autonomous Driving Simulation and Motion Prediction [[Paper](https://ieeexplore.ieee.org/abstract/document/10161243)] (ETH Zurich)
+ (2024 Arxiv) Think2Drive: Efficient Reinforcement Learning by Thinking in Latent World Model for Quasi-Realistic Autonomous Driving (in CARLA-v2) [[Paper](https://arxiv.org/abs/2402.16720)] (SJTU)

###  ■ Others
+ (1989) Using Occupancy Grids for Mobile Robot Perception and Navigation [[paper](http://www.sci.brooklyn.cuny.edu/~parsons/courses/3415-fall-2011/papers/elfes.pdf)]
<p align="center">
  <img src="/src/worldmodel/world_model_ad.png" width="80%" />
</p>
 
## ■  ➢ 发现的新的有意思的研究方向--> 
生成式的World Model可以被用来当作一种仿真工具来生成仿真数据，特别是极为少见的Corner Case的数据。特别是基于LLM的可控条件生成Corner Case，可以进行数据增广，解决真实数据且标注少的现存问题。
然而World Model更有潜力的应用方向是World Model可能会成为像GPT一样的自动驾驶领域的基础模型，而其他自动驾驶具体任务都会围绕这个基础模型进行研发构建。
## ■  ➢可控条件生成--> 
* ○ 可控条件生成-->magicdrive <https://github.com/cure-lab/MagicDrive>   [[paper](https://arxiv.org/abs/2310.02601)] [[Code](https://github.com/cure-lab/MagicDrive)]可作为baseline. 从几何标注中合成的数据可以帮助下游任务,如2D目标检测。因此,本文探讨了text-to-image (T2I)扩散模型在生成街景图像并惠及下游3D感知模型方面的潜力。 
* ○ 可控条件生成-->magicdrive3D  [[paper](https://arxiv.org/abs/2405.14475)] [[Code](https://github.com/flymin/MagicDrive3D)]
* ○ 可控条件生成-->panacea <https://zhuanlan.zhihu.com/p/684249231>用于生成多视角且可控的驾驶场景视频，能够合成无限数量的多样化、带标注的样本，这对于自动驾驶的进步有至关重要的意义。 Panacea解决了两个关键挑战：“一致性”和“可控性”。一致性确保时间和视角的一致性，而可控性确保生成的内容与相应的标注对齐。
* ○ 可控条件生成-->drive-WM hub.io/)]这是第一个与现有端到端规划模型兼容的自动驾驶世界模型。通过由视角[[主页](https://drive-wm.git分解促进的联合空间-时间建模，Drive-WM在驾驶场景中生成高保真度的多视图视频。
* ○ 可控条件生成-->Geodiffusion 
* ○ -->Detdiffusion
* ○ 可控条件生成-->BevControl
* ○ 可控条件生成-->BevControl
*  ○ 可控条件生成--PerLDiff 
*  ○ 可控条件生成学习平台--CarDreamer
*  ○ 可控条件生成学习平台--DriveArena

## ■  ➢occ世界模型--> 
+ 与occ结合的：occworld、Drive-occword、OccLLaMA、Driving in the Occupancy World: Vision-Centric 4D Occupancy Forecasting and Planning via World Models for Autonomous Driving、OccSora
## ■  ➢端到端世界模型--> 
+ GenAD
+ drive-WM

### 1. DEFINITION

每篇文章的创新点从单一多视角到环视视角、从单一输入到多模态输入来提高生成质量。需解决时空不一致性和生成场景连续性。

### 2. RELATED WORK

[1] Joint Detection and Recounting of Abnormal Events by Learning Deep Generic Knowledge (ICCV 2017)  
[2] X-MAN: Explaining multiple sources of anomalies in video (CVPR workshop 2021)  
[3] Discrete neural representations for explainable anomaly detection (WACV 2022)

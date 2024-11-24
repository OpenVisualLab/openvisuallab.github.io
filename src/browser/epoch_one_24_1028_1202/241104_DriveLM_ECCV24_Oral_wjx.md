---
title: DriveLM (Wang Jingxin)
order: 2
---

DriveLM: Driving with Graph Visual Question Answering

分享人: Wang Jingxin (王京新) 

## 收获总结

1、不要讲的太细，像图、表之类的，完全可以再下面**加句话总结**一下，因为做其他方向的，不了解这个指标是什么，只关心背后的思想，得把文章的思想讲出来，而不是说指标结果的好坏；【讲表的时候，主要是讲为什么要设计这个表？（目得），这个表验证了什么？】
2、数据集+图结构方式的创新；
3、讲PPT时，如果自己有问题要提问的话，最好总结一下，把自己的思考展示出来，然后哪里受阻了，再点出来；
4、逻辑关系的真假，或者说强度问题：有的问题加到模型中，反而降点；能否加入强逻辑关系？强逻辑关系是什么？怎么筛选这种强逻辑关系；
5、VLM模型给出了轨迹预测的路径点，怎么更精细化这样的路径点？



## 分享摘要



[腾讯会议链接](https://meeting.tencent.com/crm/Knap5rOlcf) [论文本地连接](/tinyweekly/papers/DriveLM_ECCV24_driving_with_language.pdf) 

[[paper]](https://eccv.ecva.net/virtual/2024/poster/130) [[github🌟870]](https://github.com/OpenDriveLab/DriveLM) [[project page]](https://opendrivelab.com/DriveLM/)
[CVPR Workshop Challenge](https://opendrivelab.com/challenge2024/#driving_with_language)


---

分享摘要：</br>
本篇论文针对将通用视觉-语言模型（VLMs）应用于端到端自动驾驶中的挑战；受到1、大规模预训练的视觉-语言模型在多任务中的通用性和推理能力；2、人类驾驶员会分多个步骤对决策进行推理的启发；提出了DriveLM，一个结合语言输入的自动驾驶框架，包括DriveLM-nuScenes和DriveLM-CARLA两个数据集，任务定义涵盖感知、预测、规划三个阶段，以及相关的评估方法；提升了VLMs 在自动驾驶场景中的适应性和推理能力，尤其是在处理未见场景和传感器配置方面，达到了与专用驾驶模型相媲美甚至超越的表现的效果，验证了语言驱动驾驶的潜力。

---

## 问答简记        

$Q:$ 为什么在nuScense数据集上，什么信息也没用组织，直接用，效果就要比Graph图的方式要高？    
  
$A:$  可能只是拿图结构的方式来用，并没有做指令微调(因为数据量太大了)；重点是表达在新数据上的泛化性。

---

$Q:$ 为什么要提出这个数据集(动机是什么)？

$A:$ 泛化性需要推理来解决，与人交互需要可解释性，模仿人类多步推理的启发，提出图结构的数据集QA。

---

$Q:$ 

$A:$ 


## 相关论文


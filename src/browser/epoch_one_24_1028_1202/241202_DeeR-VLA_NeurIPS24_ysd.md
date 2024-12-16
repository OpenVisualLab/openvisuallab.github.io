---
title: DeeR-VLA (Yang Shedan)
order: 7
---


DeeR-VLA: Dynamic Inference of Multimodal Large Language Models for Efficient Robot Execution

分享人: Yang Shedan (杨社丹) 

## 收获总结

1、分享论文的时候主要讲思想，具体细节可以再少讲一些；分享的时候思路要清晰，讲的时候可以放慢一点速度，尽量让大家都能听的清晰；</br>
2、动态路由思想可以应用到大多数方向，大家都可以借鉴采纳应用到自己的研究方向；可以考虑借鉴到机械臂方向上，根据不同的任务选择不同的方案复杂度；</br>
3、论文的图画得简单易懂，可以借鉴类似的画图风格；实验图表也设计得比较好看，比较用心，后面也可以借鉴一下;</br>

## 分享摘要


[腾讯会议连接](https://meeting.tencent.com/crm/NxvOpB0Y32)
[论文本地连接](/tinyweekly/papers/(DeeR-VLA)2411.02359v1.pdf) [[arXiv]](https://arxiv.org/pdf/2411.02359) [[github]](https://github.com/yueyang130/DeeR-VLA)

![alt text](/tinyweekly/figs/1202_DeeR-VLA.png)


分享摘要：本篇论文针对构建通用机器人MLLM时机器人平台上可用的计算和内存容易有限，而MLLM 的推理涉及存储数十亿个参数并执行大量计算的问题，受到相对简单的情况构成了控制机器人完成各种任务的大部分过程，它们通常需要较小的模型来获得机器人动作这一观察启发，提出了一种机器人视觉-语言-动作模型的动态早退框架 (DeeR-VLA），该框架会根据当前情况自动调整激活的 MLLM 的大小，该方法利用了 MLLM 中的多出口架构，一旦针对特定情况激活了适当大小的模型，该架构便允许模型终止处理，从而避免进一步的冗余计算；根据预定义的需求，建立了早退终止标准；设计了一种定制的训练方法，以合理地预测动作。在 CALVIN 机器人操作基准测试中，DeeR 显示出 LLM 的计算成本显著降低 5.2-6.5 倍，LLM 的 GPU 内存显著降低 2-6 倍，且性能不受影响。
关键词：VLA模型；动态早退；多出口架构



## 问答简记


$Q:$论文中是如何定义任务的简单与困难的？怎么定义终止标准中的阈值的？

$A:$论文里面是没有定义简单与困难任务的，而是判断每一层网络提取的输入观测图像特征是否达到了终止标准，达到了终止标准，就从当前层提取退出，不再经过后面的层，通过这种方式来节省计算成本。退出的比较早的就可能会是相对来说简单一些的任务。终止标准是判断当前层特征预测得到的动作与上一层特征预测得到的动作间的距离是否小于阈值，小于阈值就退出。这个阈值是根据当前的实验设置的计算资源得到的，这些计算资源就包括平均FLOPs,峰值FLOPs，以及GPU内存。

---

$Q:$多模态和动态推理指的是什么意思？

$A:$多模态指的是多模态大语言模型的输入是视觉和文本，就是多种模态的输入，然后模型里面是一个大模型的一个结构。动态推理指的是这篇论文的方法可以根据不同的输入去动态选择不同层的模型结构，有些输入可能需要经过模型的所有层，取最后一层输出特征，有些输入可能只需要经过前几层网络，取前几层的输出特征；这样就可以节省一些计算成本。


---

$Q:$网络里面的每一层都是一个大模型吗？

$A:$不是的，它是将整个大模型的所有层均分为了6层，然后就设置了6个出口，在每个出口判断一次是否达到终止标准，达到终止标准就可以提前退出，不再经过后续的层。


## 相关论文

1、Xinghang Li, Minghuan Liu, Hanbo Zhang, Cunjun Yu, Jie Xu, Hongtao Wu, Chilam Cheang,Ya Jing, Weinan Zhang, Huaping Liu, et al. Vision-language foundation models as effective robot imitators. ICLR, 2024. 2, 3, 4, 7, 8（DeeR-VLA的baseline论文）</br>
2、Oier Mees, Lukas Hermann, Erick Rosete-Beas, and Wolfram Burgard. Calvin: A benchmark for language-conditioned policy learning for long-horizon robot manipulation tasks. IEEE Robotics and Automation Letters, 7(3):7327–7334, 2022. 2, 8（实验数据集论文CALVIN Long-Horizon Multi-Task Language Control benchmark(LH-MTLC)）</br>
3、Anthony Brohan, Noah Brown, Justice Carbajal, Yevgen Chebotar, Xi Chen, Krzysztof Choromanski, Tianli Ding, Danny Driess, Avinava Dubey, Chelsea Finn, et al. Rt-2: Vision-languageaction models transfer web knowledge to robotic control. CoRL, 2023. 2, 3（多模态大模型应用于端到端通用机器人模型VLA）</br>




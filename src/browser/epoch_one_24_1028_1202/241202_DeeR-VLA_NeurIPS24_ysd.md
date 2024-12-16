---
title: DeeR-VLA (Yang Shedan)
order: 7
---


DeeR-VLA: Dynamic Inference of Multimodal Large Language Models for Efficient Robot Execution

分享人: Yang Shedan (杨社丹) 

## 收获总结

1、不要讲的太细，像图、表之类的，完全可以再下面**加句话总结**一下，因为做其他方向的，不了解这个指标是什么，只关心背后的思想，得把文章的思想讲出来，而不是说指标结果的好坏；【讲表的时候，主要是讲为什么要设计这个表？（目得），这个表验证了什么？】</br>
2、数据集+图结构方式的创新；</br>
3、讲PPT时，如果自己有问题要提问的话，最好总结一下，把自己的思考展示出来，然后哪里受阻了，再点出来；</br>


## 分享摘要



[腾讯会议链接]((https://meeting.tencent.com/crm/NxvOpB0Y32))
[论文本地连接](/tinyweekly/papers/清华大学-SparseDrive.pdf) [[arXiv]](https://arxiv.org/abs/2411.02359) [[github🌟376]](https://github.com/yueyang130/DeeR-VLA))  

![alt text](/tinyweekly/figs/1028_clover.png)


分享摘要：本篇论文针对构建通用机器人MLLM时机器人平台上可用的计算和内存容易有限，而MLLM 的推理涉及存储数十亿个参数并执行大量计算的问题，受到相对简单的情况构成了控制机器人完成各种任务的大部分过程，它们通常需要较小的模型来获得机器人动作这一观察启发，提出了一种机器人视觉-语言-动作模型的动态早退框架 (DeeR-VLA），该框架会根据当前情况自动调整激活的 MLLM 的大小，该方法利用了 MLLM 中的多出口架构，一旦针对特定情况激活了适当大小的模型，该架构便允许模型终止处理，从而避免进一步的冗余计算；根据预定义的需求，建立了早退终止标准；设计了一种定制的训练方法，以合理地预测动作。在 CALVIN 机器人操作基准测试中，DeeR 显示出 LLM 的计算成本显著降低 5.2-6.5 倍，LLM 的 GPU 内存显著降低 2-6 倍，且性能不受影响。

![alt text](/tinyweekly/figs/1028_clover_motivation.png)

## 问答简记


$Q:$

$A:$

---

$Q:$

$A:$

---

$Q:$

$A:$


## 相关论文




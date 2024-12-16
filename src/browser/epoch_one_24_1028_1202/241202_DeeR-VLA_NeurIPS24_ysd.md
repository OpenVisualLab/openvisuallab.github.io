---
title: DeeR-VLA (Yang Shedan)
order: 7
---


DeeR-VLA: Dynamic Inference of Multimodal Large Language Models for Efficient Robot Execution

分享人: Yang Shedan (杨社丹) 

## 收获总结

1、
2、
3、


## 分享摘要


[腾讯会议连接](https://meeting.tencent.com/crm/NxvOpB0Y32)
[论文本地连接](/tinyweekly/papers/(DeeR-VLA)2411.02359v1.pdf) [[arXiv]](https://arxiv.org/pdf/2411.02359) [[github]](https://github.com/yueyang130/DeeR-VLA)

![alt text](/tinyweekly/figs/1202_DeeR-VLA.png)


分享摘要：本篇论文针对构建通用机器人MLLM时机器人平台上可用的计算和内存容易有限，而MLLM 的推理涉及存储数十亿个参数并执行大量计算的问题，受到相对简单的情况构成了控制机器人完成各种任务的大部分过程，它们通常需要较小的模型来获得机器人动作这一观察启发，提出了一种机器人视觉-语言-动作模型的动态早退框架 (DeeR-VLA），该框架会根据当前情况自动调整激活的 MLLM 的大小，该方法利用了 MLLM 中的多出口架构，一旦针对特定情况激活了适当大小的模型，该架构便允许模型终止处理，从而避免进一步的冗余计算；根据预定义的需求，建立了早退终止标准；设计了一种定制的训练方法，以合理地预测动作。在 CALVIN 机器人操作基准测试中，DeeR 显示出 LLM 的计算成本显著降低 5.2-6.5 倍，LLM 的 GPU 内存显著降低 2-6 倍，且性能不受影响。
关键词：VLA模型；动态早退；多出口架构



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




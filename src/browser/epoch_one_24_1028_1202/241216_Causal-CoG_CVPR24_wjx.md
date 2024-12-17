---
title: Causal-CoG (Wang Jingxin)
order: 8
---

Causal-CoG: A Causal-Effect Look at Context Generation for Boosting  Multi-modal Language Models

分享人: Wang Jingxin (王京新) 

## 收获总结

1、  
2、  
3、  


## 分享摘要



[腾讯会议链接](https://meeting.tencent.com/crm/N1DLrJE817) [论文本地连接](/tinyweekly/papers/Causal-CoG_CVPR24_VLM.pdf) 

[[paper]](https://papers.cool/arxiv/2312.06685) [[github🌟12]](https://github.com/zhaoshitian/Causal-CoG) 

![alt text](/tinyweekly/figs/1216_Causal_COG.png)


分享摘要：</br>
本篇论文针对多模态大模型的幻觉以及训练成本问题；提出了Causal-CoG，因果上下文生成。上下文生成：即通过简单提示得到多个上下文，然后根据生成的上下文描述提示模型回答问题；Causal：从多个生成的候选者中选择最有帮助的上下文，考虑多个上下文对答案的影响，为不同上下文赋予不同的权重【先过滤，再聚合】；在10个多模态基准数据集上验证，均取得了改进。  

---

## 问答简记        

$Q:$  生成的结构化文本是否因不同的数据集而不同？  
  
$A:$  
---

$Q:$ 上下文和因果的关系？  

$A:$ 

---

$Q:$ TIE值越大，模型输出的结果就一定越好么？  

$A:$ 

---
$Q:$ 自动驾驶中具备因果关系么？  

$A:$ 

## 相关论文
1、因果贝叶斯优化（Causal Bayesian Optimisation, CaBO）  
2、上下文贝叶斯优化（Contextual Bayesian Optimisation, CoBO）  
3、BLIP2 利用Q-Former对齐视觉和语言模态  
4、CAD [30] 关注于强制模型在回答问题时关注上下文。  





import{_ as l}from"./1216_Causal_COG-DqlelKdy.js";import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as r,a,b as s,d as t,f as c}from"./app-DoQuegIW.js";const m={},h=c('<hr><h2 id="title-causal-cog-wang-jingxin-order-8" tabindex="-1"><a class="header-anchor" href="#title-causal-cog-wang-jingxin-order-8"><span>title: Causal-CoG (Wang Jingxin) order: 8</span></a></h2><p>Causal-CoG: A Causal-Effect Look at Context Generation for Boosting Multi-modal Language Models</p><p>分享人: Wang Jingxin (王京新)</p><h2 id="收获总结" tabindex="-1"><a class="header-anchor" href="#收获总结"><span>收获总结</span></a></h2><p>1、这篇论文的核心就是：n个上下文生成-&gt;计算JSD-&gt;因果过滤-&gt;保留有因果关系的上下文-&gt;top-k聚合-&gt;Weighted Majority Vote（加权多数投票）-&gt;对答案影响最大的上下文被挑选出来；</p><p>2、把筛选上下文的思路引入到自动驾驶中，来衡量上下文对结果的影响；【想做进一步的改进，衡量完了之后如何把候选上下文中正确的属性汇总成一个新的上下文信息？】</p><h2 id="分享摘要" tabindex="-1"><a class="header-anchor" href="#分享摘要"><span>分享摘要</span></a></h2>',8),p={href:"https://meeting.tencent.com/crm/N1DLrJE817",target:"_blank",rel:"noopener noreferrer"},u=a("a",{href:"/tinyweekly/papers/Causal-CoG_CVPR24_VLM.pdf"},"论文本地连接",-1),d={href:"https://papers.cool/arxiv/2312.06685",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/zhaoshitian/Causal-CoG",target:"_blank",rel:"noopener noreferrer"},_=a("figure",null,[a("img",{src:l,alt:"alt text",tabindex:"0",loading:"lazy"}),a("figcaption",null,"alt text")],-1),x=a("p",null,"分享摘要： 本篇论文针对多模态大模型的幻觉以及训练成本问题；提出了Causal-CoG，因果上下文生成。上下文生成：即通过简单提示得到多个上下文，然后根据生成的上下文描述提示模型回答问题；Causal：从多个生成的候选者中选择最有帮助的上下文，考虑多个上下文对答案的影响，为不同上下文赋予不同的权重【先过滤，再聚合】；在10个多模态基准数据集上验证，均取得了改进。",-1),w=a("p",null,"论文通过提出Causal Context Generation（Causal-CoG）来解决多模态语言模型（MLMs）在视觉问题回答（VQA）任务中提供事实性和精确性回答的挑战。Causal-CoG包含以下几个关键步骤：",-1),C=a("pre",null,[a("code",null,`1、上下文生成（Context Generation）：  
           通过简单的提示（例如“describe this image”）引导MLM生成关于图像的文本描述，即上下文（Context）。  
           
           通过多次提示运行，可以生成不同的上下文描述，为回答问题提供丰富的信息。  
           
2、因果关系过滤（Causality Filter）：  

           利用因果推断来评估生成的上下文对给定样本的帮助程度。 
           
           通过比较总效应（TE）、自然直接效应（NDE）和总间接效应（TIE）来决定是否应用上下文信息。  
           
           如果TIE大于NDE，则认为间接效应（通过上下文）在回答问题中起更关键作用，选择这样的样本应用CoG技术。

3、候选聚合（Candidate Aggregation）：  

          对于应用CoG的样本，提出了一种聚合方法来得出最终答案，考虑每个候选答案的TIEc值（即上下文对答案的影响）。  
          
          选择TIEc值最高的k个候选答案，并基于这些候选答案进行加权多数投票，得出最终答案。  
`)],-1),k=a("p",null,"通过这种方法，Causal-CoG旨在增强MLMs在VQA任务中的性能，使其能够提供更准确和基于事实的回答。论文通过在10个多模态基准测试上的广泛实验来证明Causal-CoG的有效性，并显示了与直接解码相比的一致改进。",-1),M=a("hr",null,null,-1),f=a("h2",{id:"问答简记",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#问答简记"},[a("span",null,"问答简记")])],-1),b=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Q"),a("mo",null,":")]),a("annotation",{encoding:"application/x-tex"},"Q:")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),a("span",{class:"mord mathnormal"},"Q"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":")])])]),s(" 生成的结构化文本是否因不同的数据集而不同？")],-1),E=a("h2",{id:"是的-根据不同的数据集可能会对一些属性进行修改-但是像类别-与自车位置-距离等空间信息这样的属性是通用的。",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#是的-根据不同的数据集可能会对一些属性进行修改-但是像类别-与自车位置-距离等空间信息这样的属性是通用的。"},[a("span",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"A"),a("mo",null,":")]),a("annotation",{encoding:"application/x-tex"},"A:")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal"},"A"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":")])])]),s(" 是的，根据不同的数据集可能会对一些属性进行修改，但是像类别，与自车位置，距离等空间信息这样的属性是通用的。")])])],-1),y=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Q"),a("mo",null,":")]),a("annotation",{encoding:"application/x-tex"},"Q:")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),a("span",{class:"mord mathnormal"},"Q"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":")])])]),s(" 上下文和因果之间有什么关系？")],-1),G=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"A"),a("mo",null,":")]),a("annotation",{encoding:"application/x-tex"},"A:")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal"},"A"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":")])])]),s(" 论文从因果关系的角度探讨了上下文信息的优势，"),a("strong",null,"引入了因果效应的概念来衡量上下文对答案的影响"),s("。具体来说，论文中定义了总效应（TE）、自然直接效应（NDE）和总间接效应（TIE）来分析图像（I）对答案（Y）的影响，其中TIE表示通过生成的上下文（C）间接影响答案的程度；上下文信息不仅被用来增强VQA任务的精确性，而且通过引入因果效应的分析，论文进一步探讨了"),a("strong",null,"上下文信息对答案的影响程度，并据此选择样本和优化模型性能"),s("。")],-1),L=a("hr",null,null,-1),T=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Q"),a("mo",null,":")]),a("annotation",{encoding:"application/x-tex"},"Q:")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),a("span",{class:"mord mathnormal"},"Q"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":")])])]),s(" TIE值越大，模型输出的结果就一定越好么？")],-1),A=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"A"),a("mo",null,":")]),a("annotation",{encoding:"application/x-tex"},"A:")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal"},"A"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":")])])]),s(" 论文中提到，对于给定的样本，如果NDE（Natural Direct Effect）小于TIE，这意味着间接效应在回答问题时扮演了更重要的角色，表明上下文在有效回答问题中可以发挥重要作用。因此，选择这样的样本应用CoG；相反，对于NDE大于TIE的样本，选择直接由MLM生成的答案作为最终答案。"),a("strong",null,"TIEc值量化了间接效应的程度"),s("，并帮助评估候选答案在利用上下文回答问题时的有效性。论文中的实验结果表明，使用TIEc作为权重聚合候选答案的效果优于使用其他聚合策略，如答案的可能性或图像与生成上下文之间的相似度作为权重。因此，"),a("strong",null,"TIE值越大，意味着上下文对答案的影响越大"),s("，这通常意味着在聚合过程中，"),a("strong",null,"具有较高TIE值的候选答案应该被赋予更大的权重，从而可能提高模型输出结果的质量"),s("。")],-1),I=a("hr",null,null,-1),Q=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Q"),a("mo",null,":")]),a("annotation",{encoding:"application/x-tex"},"Q:")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),a("span",{class:"mord mathnormal"},"Q"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":")])])]),s(" 自动驾驶中具备因果关系么？")],-1),v=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"A"),a("mo",null,":")]),a("annotation",{encoding:"application/x-tex"},"A:")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal"},"A"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":")])])]),s(" 感知得到的信息对于预测和规划阶段至关重要，可以把感知当成因，预测和规划当成果。")],-1),V=a("h2",{id:"相关论文",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#相关论文"},[a("span",null,"相关论文")])],-1),B=a("p",null,[s("1、因果贝叶斯优化（Causal Bayesian Optimisation, CaBO）"),a("br"),s(" 2、上下文贝叶斯优化（Contextual Bayesian Optimisation, CoBO）"),a("br"),s(" 3、BLIP2 利用Q-Former对齐视觉和语言模态"),a("br"),s(" 4、CAD [30] 关注于强制模型在回答问题时关注上下文。")],-1);function D(N,j){const n=o("ExternalLinkIcon");return i(),r("div",null,[h,a("p",null,[a("a",p,[s("腾讯会议链接"),t(n)]),s(),u]),a("p",null,[a("a",d,[s("[paper]"),t(n)]),s(),a("a",g,[s("[github🌟12]"),t(n)])]),_,x,w,C,k,M,f,b,E,y,G,L,T,A,I,Q,v,V,B])}const O=e(m,[["render",D],["__file","241216_Causal-CoG_CVPR24_wjx.html.vue"]]),S=JSON.parse('{"path":"/browser/epoch_two_24_1209_25_0120/241216_Causal-CoG_CVPR24_wjx.html","title":"","lang":"en-US","frontmatter":{"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"title: Causal-CoG (Wang Jingxin)order: 8","slug":"title-causal-cog-wang-jingxin-order-8","link":"#title-causal-cog-wang-jingxin-order-8","children":[]},{"level":2,"title":"收获总结","slug":"收获总结","link":"#收获总结","children":[]},{"level":2,"title":"分享摘要","slug":"分享摘要","link":"#分享摘要","children":[]},{"level":2,"title":"问答简记","slug":"问答简记","link":"#问答简记","children":[]},{"level":2,"title":"是的，根据不同的数据集可能会对一些属性进行修改，但是像类别，与自车位置，距离等空间信息这样的属性是通用的。","slug":"是的-根据不同的数据集可能会对一些属性进行修改-但是像类别-与自车位置-距离等空间信息这样的属性是通用的。","link":"#是的-根据不同的数据集可能会对一些属性进行修改-但是像类别-与自车位置-距离等空间信息这样的属性是通用的。","children":[]},{"level":2,"title":"相关论文","slug":"相关论文","link":"#相关论文","children":[]}],"git":{"createdTime":1734448211000,"updatedTime":1734448438000,"contributors":[{"name":"BigBoom","email":"45707903+BigBoomDream@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":4.77,"words":1430},"filePathRelative":"browser/epoch_two_24_1209_25_0120/241216_Causal-CoG_CVPR24_wjx.md","localizedDate":"December 17, 2024"}');export{O as comp,S as data};
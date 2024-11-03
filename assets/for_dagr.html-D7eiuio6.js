import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as l,a as e,b as a,d as s,f as t}from"./app-DTgkgImb.js";const c={},d={href:"https://www.nature.com/articles/s41586-024-07409-w",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/uzh-rpg/dagr",target:"_blank",rel:"noopener noreferrer"},u={href:"https://zhuanlan.zhihu.com/p/710219004",target:"_blank",rel:"noopener noreferrer"},h={href:"https://mp.weixin.qq.com/s/rVzG9A55KlbbFtNtW9CTFg",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"安装系统及基础软件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装系统及基础软件"},[e("span",null,"安装系统及基础软件")])],-1),b={href:"https://2-mo.github.io/coooder/ubuntu/base/0.%E5%AE%89%E8%A3%85ubuntu%E7%B3%BB%E7%BB%9F.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="安装基础软件" tabindex="-1"><a class="header-anchor" href="#安装基础软件"><span>安装基础软件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">vim</span> net-tools openssh-server <span class="token function">git</span> tmux <span class="token parameter variable">-y</span>
<span class="token comment"># net-tools 然后 ifconfig用来看IP地址</span>
<span class="token comment"># 安装完openssh-server就可以远程使用ssh来配置啦</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装cuda及驱动" tabindex="-1"><a class="header-anchor" href="#安装cuda及驱动"><span>安装CUDA及驱动</span></a></h3>`,3),g={href:"https://developer.nvidia.com/cuda-downloads",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/12.6.1/local_installers/cuda_12.6.1_560.35.03_linux.run
<span class="token function">sudo</span> <span class="token function">sh</span> cuda_12.6.1_560.35.03_linux.run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_={href:"https://developer.nvidia.com/cuda-toolkit-archive",target:"_blank",rel:"noopener noreferrer"},f={href:"https://developer.nvidia.com/cuda-11-3-1-download-archive",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/11.3.1/local_installers/cuda_11.3.1_465.19.01_linux.run
<span class="token function">sudo</span> <span class="token function">sh</span> cuda_11.3.1_465.19.01_linux.run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="写入vim-bashrc" tabindex="-1"><a class="header-anchor" href="#写入vim-bashrc"><span>写入<code>vim ~/.bashrc</code></span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/cuda/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span><span class="token variable">$LD_LIBRARY_PATH</span>:/usr/local/cuda/lib64
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LIBRARY_PATH</span><span class="token operator">=</span><span class="token variable">$LIBRARY_PATH</span>:/usr/local/cuda/lib64 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用nvcc-v查看版本" tabindex="-1"><a class="header-anchor" href="#使用nvcc-v查看版本"><span>使用<code>nvcc -V</code>查看版本</span></a></h4><p>显示版本号表示正常，例如</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvcc: NVIDIA <span class="token punctuation">(</span>R<span class="token punctuation">)</span> Cuda compiler driver
Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2005</span>-2021 NVIDIA Corporation
Built on Mon_May__3_19:15:13_PDT_2021
Cuda compilation tools, release <span class="token number">11.3</span>, V11.3.109
Build cuda_11.3.r11.3/compiler.29920130_0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置ubuntu源-建议在软件更新中使用gui界面设置" tabindex="-1"><a class="header-anchor" href="#配置ubuntu源-建议在软件更新中使用gui界面设置"><span>配置ubuntu源（建议在软件更新中使用GUI界面设置）</span></a></h4>`,7),y={href:"https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"配置虚拟环境及镜像源",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置虚拟环境及镜像源"},[e("span",null,"配置虚拟环境及镜像源")])],-1),A=e("h3",{id:"安装miniconda",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装miniconda"},[e("span",null,"安装miniconda")])],-1),q={href:"https://docs.anaconda.com/miniconda/#quick-command-line-install",target:"_blank",rel:"noopener noreferrer"},L=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/miniconda3
<span class="token function">wget</span> https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh <span class="token parameter variable">-O</span> ~/miniconda3/miniconda.sh
<span class="token function">bash</span> ~/miniconda3/miniconda.sh <span class="token parameter variable">-b</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-p</span> ~/miniconda3
<span class="token function">rm</span> ~/miniconda3/miniconda.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="初始化-重开终端生效-显示-base-表示成功" tabindex="-1"><a class="header-anchor" href="#初始化-重开终端生效-显示-base-表示成功"><span>初始化（重开终端生效，显示（base）表示成功）</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>~/miniconda3/bin/conda init <span class="token function">bash</span>
~/miniconda3/bin/conda init <span class="token function">zsh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置conda源" tabindex="-1"><a class="header-anchor" href="#配置conda源"><span>配置Conda源</span></a></h4>`,4),T={href:"https://mirror.tuna.tsinghua.edu.cn/help/anaconda/",target:"_blank",rel:"noopener noreferrer"},C=t(`<p>写入 <code>vim ~/.condarc</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>channels:
  - defaults
show_channel_urls: <span class="token boolean">true</span>
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置pypi源" tabindex="-1"><a class="header-anchor" href="#设置pypi源"><span>设置PyPi源</span></a></h4>`,3),P={href:"https://help.mirrors.cernet.edu.cn/pypi/",target:"_blank",rel:"noopener noreferrer"},V=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip
pip config <span class="token builtin class-name">set</span> global.index-url https://mirrors.cernet.edu.cn/pypi/web/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="镜像源合集" tabindex="-1"><a class="header-anchor" href="#镜像源合集"><span>镜像源合集</span></a></h4>`,2),B={href:"https://mirrors.cernet.edu.cn/site/CQUPT",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"重邮镜像源，不登录电信移动账号也能用",-1),z={href:"https://help.mirrors.cernet.edu.cn/",target:"_blank",rel:"noopener noreferrer"},D=e("h2",{id:"开工-配置代码环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开工-配置代码环境"},[e("span",null,"开工（配置代码环境）")])],-1),I={href:"https://github.com/uzh-rpg/dagr/tree/master",target:"_blank",rel:"noopener noreferrer"},R=t(`<p>按其<code>README.md</code>来, 下面只记录不同的地方</p><h3 id="mkl找不到版本-加-c-conda-forge" tabindex="-1"><a class="header-anchor" href="#mkl找不到版本-加-c-conda-forge"><span>mkl找不到版本，加 <code>-c conda-forge</code></span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>conda <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token assign-left variable">setuptools</span><span class="token operator">==</span><span class="token number">69.5</span>.1 <span class="token assign-left variable">mkl</span><span class="token operator">==</span><span class="token number">2024.0</span> <span class="token assign-left variable">pytorch</span><span class="token operator">==</span><span class="token number">1.11</span>.0 <span class="token assign-left variable">torchvision</span><span class="token operator">==</span><span class="token number">0.12</span>.0 <span class="token assign-left variable">torchaudio</span><span class="token operator">==</span><span class="token number">0.11</span>.0 <span class="token assign-left variable">cudatoolkit</span><span class="token operator">=</span><span class="token number">11.3</span> <span class="token parameter variable">-c</span> pytorch <span class="token parameter variable">-c</span> conda-forge 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),N={href:"https://anaconda.org/conda-forge/mkl/files",target:"_blank",rel:"noopener noreferrer"},S=t(`<h3 id="git-clone-permission-denied-publickey" tabindex="-1"><a class="header-anchor" href="#git-clone-permission-denied-publickey"><span><code>git clone</code> Permission denied (publickey)</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 生成密钥</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;chs-ll&quot;</span>
<span class="token comment"># 查看密钥</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制显示的内容到github个人账户的 [setting]-&gt;[SSH and GPG keys]-&gt;[New SSH key]</p><h3 id="torch-geometric-和-torch-sparse-可能与-pytorch-1-11-0-不完全兼容" tabindex="-1"><a class="header-anchor" href="#torch-geometric-和-torch-sparse-可能与-pytorch-1-11-0-不完全兼容"><span>torch-geometric 和 torch-sparse 可能与 PyTorch 1.11.0 不完全兼容</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> --force-reinstall torch-geometric torch-sparse <span class="token parameter variable">-f</span> https://data.pyg.org/whl/torch-1.11.0+cu113.html <span class="token parameter variable">--proxy</span><span class="token operator">=</span><span class="token string">&quot;http://10.16.0.81:8888&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="下载没有网络" tabindex="-1"><a class="header-anchor" href="#下载没有网络"><span>下载没有网络</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token string">&#39;http://10.16.0.81:8888&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2>`,8),U={href:"https://2-mo.github.io/coooder/ubuntu/base/1.connect_to_server.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://2-mo.github.io/coooder/ubuntu/base/2.run_code.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://2-mo.github.io/coooder/ubuntu/base/3.in_common_use.html",target:"_blank",rel:"noopener noreferrer"};function G(M,O){const n=o("ExternalLinkIcon");return i(),l("div",null,[e("p",null,[a("Low Latency Automotive Vision with Event Cameras "),e("a",d,[a("paper"),s(n)]),e("a",p,[a("coda"),s(n)]),e("a",u,[a("知乎"),s(n)]),e("a",h,[a("微信公众号"),s(n)])]),m,e("blockquote",null,[e("p",null,[e("a",b,[a("参考链接🔗"),s(n)]),a(" (很久很久没更新，简单看看就行)")])]),v,e("blockquote",null,[e("p",null,[e("a",g,[a("https://developer.nvidia.com/cuda-downloads"),s(n)])])]),k,e("p",null,[a("历史版本："),e("a",_,[a("https://developer.nvidia.com/cuda-toolkit-archive"),s(n)])]),e("p",null,[e("a",f,[a("11.3.1"),s(n)])]),x,e("blockquote",null,[e("p",null,[e("a",y,[a("https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/"),s(n)])])]),w,A,e("blockquote",null,[e("p",null,[e("a",q,[a("https://docs.anaconda.com/miniconda/#quick-command-line-install"),s(n)])])]),L,e("blockquote",null,[e("p",null,[e("a",T,[a("https://mirror.tuna.tsinghua.edu.cn/help/anaconda/"),s(n)])])]),C,e("blockquote",null,[e("p",null,[e("a",P,[a("https://help.mirrors.cernet.edu.cn/pypi/"),s(n)])])]),V,e("blockquote",null,[e("p",null,[e("a",B,[a("https://mirrors.cernet.edu.cn/site/CQUPT"),s(n)])])]),E,e("p",null,[a("镜像配置及使用帮助参考文档: "),e("a",z,[a("https://help.mirrors.cernet.edu.cn/"),s(n)])]),D,e("blockquote",null,[e("p",null,[e("a",I,[a("https://github.com/uzh-rpg/dagr/tree/master"),s(n)])])]),R,e("blockquote",null,[e("p",null,[e("a",N,[a("https://anaconda.org/conda-forge/mkl/files"),s(n)])])]),S,e("p",null,[e("a",U,[a("远程连接服务器"),s(n)])]),e("p",null,[e("a",H,[a("conda 常用命令"),s(n)])]),e("p",null,[e("a",F,[a("ubuntu常用命令"),s(n)])])])}const $=r(c,[["render",G],["__file","for_dagr.html.vue"]]),K=JSON.parse('{"path":"/coooder/for_dagr.html","title":"简单记录📝","lang":"en-US","frontmatter":{"title":"简单记录📝","description":"Low Latency Automotive Vision with Event Cameras paper coda 知乎 微信公众号 安装系统及基础软件 参考链接🔗 (很久很久没更新，简单看看就行) 安装基础软件 安装CUDA及驱动 https://developer.nvidia.com/cuda-downloads 历史版本：https://...","head":[["meta",{"property":"og:url","content":"https://openvisuallab.github.io/coooder/for_dagr.html"}],["meta",{"property":"og:site_name","content":"OpenVisualLab"}],["meta",{"property":"og:title","content":"简单记录📝"}],["meta",{"property":"og:description","content":"Low Latency Automotive Vision with Event Cameras paper coda 知乎 微信公众号 安装系统及基础软件 参考链接🔗 (很久很久没更新，简单看看就行) 安装基础软件 安装CUDA及驱动 https://developer.nvidia.com/cuda-downloads 历史版本：https://..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-21T14:16:08.000Z"}],["meta",{"property":"article:author","content":"OpenVisualLab"}],["meta",{"property":"article:modified_time","content":"2024-09-21T14:16:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简单记录📝\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T14:16:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OpenVisualLab\\",\\"url\\":\\"https://openvisuallab.github.io\\"}]}"]]},"headers":[{"level":2,"title":"安装系统及基础软件","slug":"安装系统及基础软件","link":"#安装系统及基础软件","children":[{"level":3,"title":"安装基础软件","slug":"安装基础软件","link":"#安装基础软件","children":[]},{"level":3,"title":"安装CUDA及驱动","slug":"安装cuda及驱动","link":"#安装cuda及驱动","children":[]}]},{"level":2,"title":"配置虚拟环境及镜像源","slug":"配置虚拟环境及镜像源","link":"#配置虚拟环境及镜像源","children":[{"level":3,"title":"安装miniconda","slug":"安装miniconda","link":"#安装miniconda","children":[]}]},{"level":2,"title":"开工（配置代码环境）","slug":"开工-配置代码环境","link":"#开工-配置代码环境","children":[{"level":3,"title":"mkl找不到版本，加 -c conda-forge","slug":"mkl找不到版本-加-c-conda-forge","link":"#mkl找不到版本-加-c-conda-forge","children":[]},{"level":3,"title":"git clone Permission denied (publickey)","slug":"git-clone-permission-denied-publickey","link":"#git-clone-permission-denied-publickey","children":[]},{"level":3,"title":"torch-geometric 和 torch-sparse 可能与 PyTorch 1.11.0 不完全兼容","slug":"torch-geometric-和-torch-sparse-可能与-pytorch-1-11-0-不完全兼容","link":"#torch-geometric-和-torch-sparse-可能与-pytorch-1-11-0-不完全兼容","children":[]},{"level":3,"title":"下载没有网络","slug":"下载没有网络","link":"#下载没有网络","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1726846147000,"updatedTime":1726928168000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":9}]},"readingTime":{"minutes":1.92,"words":575},"filePathRelative":"coooder/for_dagr.md","localizedDate":"September 20, 2024","excerpt":"<p>Low Latency Automotive Vision with Event Cameras\\n<a href=\\"https://www.nature.com/articles/s41586-024-07409-w\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">paper</a>\\n<a href=\\"https://github.com/uzh-rpg/dagr\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">coda</a>\\n<a href=\\"https://zhuanlan.zhihu.com/p/710219004\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">知乎</a>\\n<a href=\\"https://mp.weixin.qq.com/s/rVzG9A55KlbbFtNtW9CTFg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">微信公众号</a></p>","autoDesc":true}');export{$ as comp,K as data};
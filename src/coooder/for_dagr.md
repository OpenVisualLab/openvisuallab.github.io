## 安装系统及基础软件

参考：https://2-mo.github.io/coooder/ubuntu/base/0.%E5%AE%89%E8%A3%85ubuntu%E7%B3%BB%E7%BB%9F.html

### 安装基础软件

```bash
sudo apt install vim net-tools openssh-server
# net-tools 然后 ifconfig用来看IP地址
# 安装完openssh-server就可以远程使用ssh来配置啦
```

### 安装CUDA及驱动

https://developer.nvidia.com/cuda-downloads

```bash
wget https://developer.download.nvidia.com/compute/cuda/12.6.1/local_installers/cuda_12.6.1_560.35.03_linux.run
sudo sh cuda_12.6.1_560.35.03_linux.run
```

历史版本：https://developer.nvidia.com/cuda-toolkit-archive

#### 写入`vim ~/.bashrc`, 使用`nvcc -V`查看版本

```bash
export PATH=$PATH:/usr/local/cuda/bin
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda/lib64
export LIBRARY_PATH=$LIBRARY_PATH:/usr/local/cuda/lib64 
```

#### 配置ubuntu源（建议在软件更新中使用GUI界面设置）

https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/

## 配置虚拟环境及镜像源

### 安装miniconda

https://docs.anaconda.com/miniconda/#quick-command-line-install

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

#### 初始化（重开终端生效，显示（base）表示成功）

```
~/miniconda3/bin/conda init bash
~/miniconda3/bin/conda init zsh
```

#### 配置清华源

https://mirror.tuna.tsinghua.edu.cn/help/anaconda/

写入 `vim ~/.condarc`

```bash
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
```

#### 设置pypi源

https://mirror.tuna.tsinghua.edu.cn/help/pypi/

#### 镜像源合集

https://mirrors.cernet.edu.cn/site/CQUPT

重邮镜像源，不登录电信移动账号也能用

镜像配置及使用帮助参考文档: https://help.mirrors.cernet.edu.cn/

## 开工（配置代码环境）

https://github.com/uzh-rpg/dagr/tree/master

按其`README.md`来, 下面只记录不同的地方



mkl找不到版本，加 `-c conda-forge`

```bash
conda install -y setuptools==69.5.1 mkl==2024.0 pytorch==1.11.0 torchvision==0.12.0 torchaudio==0.11.0 cudatoolkit=11.3 -c pytorch -c conda-forge 
```

https://anaconda.org/conda-forge/mkl/files




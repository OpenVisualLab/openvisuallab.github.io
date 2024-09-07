---
title: 服务器配置及使用
order: 1
---

## 配置基础环境（sudo 用户）

### 基础设置

```bash
sudo apt install vim  # 安装vim，vi太难用

sudo apt install net-tools

sudo apt install gpustat

sudo apt install tmux

sudo apt install screen
```

### 配置ssh监控端口

```bash
$ sudo vim /etc/ssh/sshd_config
'add' ListenAddress 0.0.0.0:5122(YOUR_PORT)

# 例如：
ListenAddress 0.0.0.0:8989
ListenAddress 0.0.0.0:22

$ service sshd restart  # （如果selinux不设置为disabled，则无法生效）

$ sudo netstat -anp|grep sshd  # 查看端口号

# 如果系统升级过ssh，即使修改配置文件/etc/ssh/sshd_config也不会生效，
# 升级openssh后，配置文件被修改到/usr/local/etc/sshd_config，
# 所以修改这个/usr/local/etc/sshd_config
```

### 挂载磁盘`看情况`

```shell
# 列出所有磁盘
$ sudo fdisk -l

# 查询UUID
$ sudo blkid /dev/sda3

# 编辑/etc/fstab
$ sudo vim /etc/fstab # 或者用 gedit

# <file system> <mount point> <type> <options> <dump> <pass>
'add' UUID=eb7568d0-fa94-4a1a-9fe6-75ff37faa310 /home/leng/NewDisk ext4 defaults 0 2

# 查看挂载
$ sudo mount -a  # 挂载后原来文件夹中的东西覆盖，取消挂载才能看到
$ df -h # 查看挂载

$ du -sh  # 查看当前文件夹大小

# 移除挂载
$ sudo umount /dev/sda3
```

```shell
# 复制 /home 至 / 
$ mkdir home_bak
$ cp -Rvp /home /home_bak

# 取消/home分区的挂载
$ sudo vim /etc/fstab

'#' UUID=eb7568d0-fa94-4a1a-9fe6-75ff37faa310 /home/leng/NewDisk ext4 defaults 0 2
$ umount /home
$ mv home_bak home
$ umount /home

$ reboot
```

```
sudo usermod -d /userHome/guest -m guest
```

### 安装 cuda `可选`

建议安装 11.7 `2023-0506 2132`

```bash
'https://developer.nvidia.com/cuda-downloads'  # 最新版本

'https://developer.nvidia.com/cuda-toolkit-archive'  # 之前版本

$ wget https://developer.download.nvidia.com/compute/cuda/12.1.0/local_installers/cuda_12.1.0_530.30.02_linux.run
$ sudo sh cuda_12.1.0_530.30.02_linux.run
```

<!-- ![image-20230320203122342](步骤.assets/:Users:tiumo:Library:Application Support:typora-user-images:image-20230320203122342.png) -->

```bash
vim ~/.bashrc
```

> ```yaml
> export PATH=/usr/local/cuda-12.1/bin${PATH:+:${PATH}}
> export LD_LIBRARY_PATH=/usr/local/cuda-12.1/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
> 
> export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
> export LD_LIBRARY_PATH=/usr/local/cuda/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
> 
> 
> ###
> export PATH=$PATH:/usr/local/cuda/bin
> export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda/lib64
> export LIBRARY_PATH=$LIBRARY_PATH:/usr/local/cuda/lib64 
>                                          
> ```

### 配置conda

#### 下载miniconda

[Miniconda — conda documentation](https://docs.conda.io/en/latest/miniconda.html)

<!-- <img src="步骤.assets/:Users:tiumo:Library:Application Support:typora-user-images:image-20230320144038499.png" alt="image-20230320144038499" style="zoom:50%;" /> -->

#### 终端安装

````bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
sh Miniconda3-latest-Linux-x86_64.sh
source .bashrc
````

### 设置anaconda组

```bash
$ sudo groupadd anaconda  # 创建anaconda组
$ sudo adduser 'USERNAME' anaconda # 添加用户进组

# 添加新用户后需再设置一次 权限
$ sudo chgrp -R anaconda /opt # 组内共享这个目录下的文件
$ sudo chmod 777 -R /opt # 设置权限


# 设置数据文件夹
$ sudo chgrp -R anaconda /data
$ sudo chmod 777 -R /data
```

## 创建新用户

```bash
$ sudo adduser 'USERNAME'
$ sudo usermod -aG 'GROUPNAME' 'USERNAME'

# 删除用户
$ grep bash /etc/passwd # 查看用户
$ sudo deluser 'USERNAME' sudo  # 移除sudo
$ sudo deluser --remove-home 'USERNAME'
sudo groupdel 'GROUPNAME'
$ sudo deluser --remove-all-files 'USERNAME'  # 删除用户所有
```

#### .bashrc

```bash
sudo cp /home/guest/.bashrc /home/nemo/.bashrc 
sudo chown nemo:nemo /home/nemo/.bashrc
```

> ```yaml
> export PATH=$PATH:/usr/local/cuda/bin/
> 
> # >>> conda initialize >>>
> # !! Contents within this block are managed by 'conda init' !!
> __conda_setup="$('/opt/miniconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
> if [ $? -eq 0 ]; then
>     eval "$__conda_setup"
> else
>     if [ -f "/opt/miniconda3/etc/profile.d/conda.sh" ]; then
>         . "/opt/miniconda3/etc/profile.d/conda.sh"
>     else
>         export PATH="/opt/miniconda3/bin:$PATH"
>     fi
> fi
> unset __conda_setup
> # <<< conda initialize <<<
> ```

#### .condarc  ==User==

```bash
vim ~/.condarc
source ~/.bashrc
```

> ```yaml
> show_channel_urls: true
> 
> channels:
> #  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
> #  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
> #  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
>   - defaults
> 
> envs_dirs:
>   - /home/'YOURNAME'/.conda/envs
> pkgs_dirs:
>   - /home/'YOURNAME'/.conda/pkgs
> ```

#### .pip ==User==

```bash
$ mkdir .pip && cd .pip && vim pip.conf 
'or' mkdir .pip; cd .pip; vim pip.conf 
```

> ```yaml
> [global]
> timeout =6000
> index-url =http://pypi.douban.com/simple/
> [install]
> use-mirrors =true 
> mirrors =http://pypi.douban.com/simple/ 
> trusted-host =pypi.douban.com
> ```

### conda ==User==

```bash
$ conda create -n 'ENV_NMAE'
$ conda activate 'ENV_NMAE'

# https://pytorch.org/get-started/locally/

$ conda install pytorch torchvision torchaudio pytorch-cuda=11.7 -c pytorch -c nvidia
$ pip install opencv-contrib-python
```

#### 查看cuda及cuDNN能否使用

```bash
# 判断是否安装了cuda
$ python
$ import torch
$ print(torch.cuda.is_available())  #返回True则说明已经安装了cuda
# 判断是否安装了cuDNN
$ from torch.backends import  cudnn 
$ print(cudnn.is_available())  #返回True则说明已经安装了cuDNN

ctrl+d 退出
```

```bash
export http_proxy="http://10.16.0.81:8888/"
export https_proxy="http://10.16.0.81:8888/"

export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/opt/miniconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/opt/miniconda3/etc/profile.d/conda.sh" ]; then
        . "/opt/miniconda3/etc/profile.d/conda.sh"
    else
        export PATH="/opt/miniconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
conda activate tai
```

```
1.如何把一个挂载好的200g目录，假设是/data 变成/work
（1）df -Th （查看/data挂载目录的磁盘大小有200g满足需求）
得到 /dev/mapper/centos-swap 200.0G 33M 2.000G 2% /data
（2）umount /data （把/data和挂载磁盘卸载）
（3）mv /data /work （对/data文件改名为目标目录/work）
（4）vim /etc/fstab (编辑fstab，实现永久挂载)
UUID=498ccf9b-926b-43f9-9839-2099cd9b0878 /boot xfs defaults 0 0
/dev/mapper/centos-swap /data xfs defaults 0 0
修改：把其中的/data 变成 /work
（5）mount -a
```

### 免密链接

```shell
# 本地终端
$ ssh-keygen -t rsa -C "ANYTHING"  # 一路 Enter
$ vim "USERPATH/.ssh/id_rsa.pub" #e.g. /Users/tiumo/.ssh/id_rsa.pub # 打开密钥，手动复制

$ cat /Users/tiumo/.ssh/id_rsa.pub | pbcopy  # Mac OS

# 远程终端
$ mkdir .ssh 
$ cd .ssh
$ vim authorized_keys  #/home/leng/.ssh/authorized_keys #手动粘贴
```

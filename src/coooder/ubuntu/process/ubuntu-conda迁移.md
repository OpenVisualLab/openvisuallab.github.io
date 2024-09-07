1. /userdata/archiconda3/etc/profile.d/conda.sh
2. /userdata/archiconda3/bin/conda
3. /opt/miniconda3/bin/conda-env
4. /userdata/archiconda3/bin/activate
5. /userdata/archiconda3/bin/deactivate
6. /userdata/archiconda3/bin/pip
7. /userdata/archiconda3/bin/pip3
8. /userdata/archiconda3/envs/'YOURENVNAME'/bin/pip



$ source ~/.bashrc

上面一堆坑，别弄！



为了使多个用户共享环境，可以做一下设置

```
groupadd anaconda  # 创建anaconda组
chgrp -R anaconda /home/conda # 组内共享这个目录下的文件
chmod 777 -R /home/anaconda # 设置权限
adduser username anaconda # 添加用户进组
```

## 测试

输入conda，如果没反应，进行一下步骤



```
vim /etc/profile

# 在末尾添加 
export PATH="$PATH:/home/conda/bin"  

#输入下面指令激活
source /etc/profile 
```





.condarc

```
show_channel_urls: true
  
channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
  - defaults

envs_dirs:
  - /home/guest/.conda/envs
  - /opt/miniconda3/env
pkgs_dirs:
  - /home/guest/.conda/pkgs
  - /opt/miniconda3/pkgs
```





1）创建~/.pip目录 ，新建 ~/.pip/pip.conf文件，内容如下：

[global]

timeout =6000

index-url =http://pypi.douban.com/simple/

[install]

use-mirrors =true 

mirrors =http://pypi.douban.com/simple/ 

trusted-host =pypi.douban.com

**也可以简写为：**

[global]

index-url =http://pypi.douban.com/simple/

[install]

trusted-host =pypi.douban.com





~/.profile

```
# ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.

# the default umask is set in /etc/profile; for setting the umask
# for ssh logins, install and configure the libpam-umask package.
#umask 022

# if running bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc"
    fi
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi
```



修改系统时区

```shell
1.运行tzselect，选择Asia（亚洲）

2.选择China，然后选定北京时间

$ sudo cp /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime

$ date  # 查看时间


另一种方式：
$ timedatectl list-timezones  # 查看时区列表
$ sudo timedatectl set-timezone Asia/Shanghai


$ timedatectl  # 查看时钟是否与互联网同步
$ sudo timedatectl set-ntp on  # 开启ntp服务同步时间，但是似乎没作用

$ sudo apt-get install ntpdate
$ sudo ntpdate cn.pool.ntp.org

$ date -s '2023-03-20 10:22:00'  # 最后手动改了

```




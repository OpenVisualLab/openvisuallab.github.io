---
title: Docker
order: 7
---

## 参考链接

<https://yeasy.gitbook.io/docker_practice>

<https://blog.csdn.net/weixin_44172157/article/details/121297556?spm=1001.2014.3001.5501>

## 使用不完全指南

### 1.安装

#### 使用脚本自动安装

在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Ubuntu 系统上可以使用这套脚本安装，另外可以通过 --mirror 选项使用国内源进行安装：

若你想安装测试版的 Docker, 请从 test.docker.com 获取脚本

```bash
# $ curl -fsSL test.docker.com -o get-docker.sh
$ curl -fsSL get.docker.com -o get-docker.sh

#网络问题走代理
$ curl -x <proxy_host>:<proxy_port> -fsSL get.docker.com -o get-docker.sh 

$ sudo sh get-docker.sh --mirror Aliyun
# $ sudo sh get-docker.sh --mirror AzureChinaCloud
```

执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker 的稳定(stable)版本安装在系统中。

### 解决连接 宝德

```bash
sudo nano /etc/docker/daemon.json
```

```json
{
  "insecure-registries": ["172.20.5.95:38080"]
}
```

```bash
sudo systemctl restart docker

sudo docker login http://172.20.5.95:38080
```

### 启动 Docker

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

建立 docker 用户组
默认情况下，docker 命令会使用 Unix socket 与 Docker 引擎通讯。而只有 root 用户和 docker 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 root 用户。因此，更好地做法是将需要使用 docker 的用户加入 docker 用户组。

建立 docker 组：

```bash
sudo groupadd docker
```

将当前用户加入 docker 组：

```bash
sudo usermod -aG docker $USER
```

退出当前终端并重新登录，进行如下测试。

### 测试 Docker 是否安装正确

```bash
docker run --rm hello-world
```

```console
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
b8dfde127a29: Pull complete
Digest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit: https://docs.docker.com/get-started/
```

若能正常输出以上信息，则说明安装成功。

### 2.打包

#### 拉取基础镜像

```bash
docker pull pytorch/pytorch
```

<https://www.docker.com/products/docker-hub/>
<https://hub.docker.com/search?q=pytorch>

#### 准备 requirements.txt

```bash
conda activate unimatch && pip freeze > requirements.txt
```

### 构建自定义镜像

```dockerfile
# Dockerfile
FROM pytorch/pytorch:latest

# 安装其他依赖
RUN apt-get update && \
    apt-get install -y wget bzip2 ca-certificates curl git && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# 添加自定义文件
# COPY unimatch.yml /tmp/unimatch.yml
COPY requirements.txt /tmp/requirements.txt

# 设置 pip 源并安装 Python 依赖
RUN pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple && \
    pip install --no-cache-dir -r /tmp/requirements.txt

# 设置工作目录
WORKDIR /ai

# 启动命令
CMD ["run.sh"]
```

```bash
docker build -t unimatch:latest .
```

## 推送 Docker 镜像到内部镜像仓库

```bash
# 1. 新建分组
# 在镜像仓库的分组管理中创建一个新的分组，例如 `test`。

# 2. 登录镜像仓库
docker login 172.20.5.95:38080
# 输入正确的用户名和密码。

# 3. 标记本地镜像
docker tag ori:latest 172.20.5.95:38080/a2d/ori:latest

# 4. 推送镜像到仓库
docker push 172.20.5.95:38080/a2d/ori:latest
```

# TODO

-----------

## 卸载旧版本

旧版本的 Docker 称为 docker 或者 docker-engine，使用以下命令卸载旧版本：

```bash
$ sudo apt-get remove docker \
               docker-engine \
               docker.io 

```

## 使用 APT 安装

由于 apt 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。

```bash
$ sudo apt-get update

$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。

为了确认所下载软件包的合法性，需要添加软件源的 GPG 密钥。

```bash
$ curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 官方源
# $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /u
```

然后，我们需要向 sources.list 中添加 Docker 软件源

```bash
$ echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


# 官方源
# $ echo \
#   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
#   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

以上命令会添加稳定版本的 Docker APT 镜像源，如果需要测试版本的 Docker 请将 stable 改为 test。

### 安装 Docker

更新 apt 软件包缓存，并安装 docker-ce：

```bash
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io
```

新建分组

镜像仓库 > 分组管理中，新建分组

登录镜像仓库

```bash
docker login http://172.20.5.95:38080
```

标记本地镜像

```bash
docker tag <镜像名称>:<版本> 172.20.5.95:38080/<分组名称>/<镜像名称>:<版本>
```

推送至镜像仓库

```bash
docker push 172.20.5.95:38080/<分组名称>/<镜像名称>:<版本>
```

镜像适配

支持手动适配和系统自动适配，系统自动适配代码可自定义编辑

添加镜像标签

在镜像仓库>我的镜像>镜像详情中点击设置标签，勾选对应标签即可（可用模块：开发环境、训练任务、推理服务；镜像类型：tensorflow、pytorch、mpi、ray、matlab；架构：gpu、x86）

### 网络问题（time out）

Please check the DNS settings in /etc/resolv.conf, if you do not sure what to do, just paste this text inside that file (and remove any other nameservers):

nameserver 8.8.8.8
nameserver 8.8.4.4

# 配置 Docker 使用代理（使用 vim）

## 创建或编辑 Docker 守护进程的配置文件

首先，确保 `/etc/systemd/system/docker.service.d` 目录存在。如果不存在，可以创建它：

```bash
sudo mkdir -p /etc/systemd/system/docker.service.d
```

## 使用 `vim` 编辑 `http-proxy.conf` 文件

```bash
sudo vim /etc/systemd/system/docker.service.d/http-proxy.conf
```

## 在 `vim` 中添加以下内容

按 `i` 键进入插入模式，然后添加以下内容：

```ini
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7890"
Environment="HTTPS_PROXY=http://127.0.0.1:7890"
Environment="NO_PROXY=localhost,127.0.0.1"
```

## 保存并退出 `vim`

按 `Esc` 键退出插入模式，然后输入 `:wq` 保存并退出 `vim`。

## 重新加载系统守护进程并重启 Docker

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

# 验证配置

重新配置代理后，尝试再次运行 Docker 容器以验证配置是否成功：

```bash
docker run --rm hello-world
```

# 使用 `curl` 或 `wget` 进行验证

为了验证网络连接是否正常，可以使用 `curl` 或 `wget`：

```bash
curl -I https://registry-1.docker.io/v2/
```

# 检查 Clash 日志

确保 Clash 正常运行，并且代理端口配置正确：

```bash
tail -f ~/.config/clash/logs/clash.log
```

通过这些步骤，你应该能够配置 Docker 使用 Clash 代理，并成功拉取和运行 Docker 镜像。如果仍有问题，请检查 Clash 和 Docker 的日志，以获取更多调试信息。

# Visual-Lab

## 介绍

该平台用于

## 使用文档

### 第一步: 在 `本机` 生成登录所需的公钥

```sh
ssh-keygen -t rsa -C "YOUR_NAME@EMAIL.com" # -C 表示标示符,双引号中内容随意替换
```

输入命令后一路 `Enter` , 然后将 `公钥` 发送给服务器管理员，用于授予权限。

公钥所在路径参考:

```sh
'Mac:' /Users/YOUR_NAME/.ssh/id_rsa.pub  # eg: /Users/tiumo/.ssh/id_rsa.pub
'Windows:' C:\Users\YOUR_NAME\.ssh\id_rsa.pub # eg C:\Users\Administrator\.ssh\id_rsa.pub
'Ubuntu:' /home/YOUR_NAME/.ssh/id_rsa.pub  # eg: /home/guest/.ssh/id_rsa.pub
```

### 第二步: 在 `本机` 安装 `Git` (若已安装则可跳过)

检查 git 是否安装

```sh
git --version  # 出现 版本号 则表示 git 安装成功 (eg: git version 2.25.1)
```

Mac 可使用 [homebrew](https://brew.sh/index_zh-cn) 安装

```sh
brew install git-gui # or brew install git
```

Ubuntu 可使用 apt 安装

```sh
sudo apt update
sudo apt install git
```

Windows 官网下载安装 (Mac/Ubuntu 也可使用这种方式)

<https://git-scm.com/download>

### 第三步: 配置 `Git`  

打开终端

```sh
# 双引号中的内容改为你自己的信息
git config --global user.name "USER_NAME"
git config --global user.email "USER_EMAIL"
```

验证配置 (可跳过)

```sh
git config --list
```

选择本地用于同步的文件夹, 例如 `/Users/tiumo/Projects`

```sh
cd /Users/tiumo/Projects
git clone git@10.16.104.13:/data/git/Visual-Lab.git
```

等待 `clone` 完毕～

### 第四步: 使用 `VSCode` 进行查看与编辑 (可选但推荐👍)

安装 `VSCode` <https://code.visualstudio.com/Download>

由于大部分文件为 `markdown` 格式, 


 git remote rm origin
 git remote add origin git@github.com:FBing/java-code-generator
file_name=>"$basedir$t->{'name'}"

file_name=>"$basedir".to_utf8($t->{'name'})
 
# `ubuntu` 配置 `git` 服务器

## 远程服务器设置

```bash
sudo apt-get install git # 安装git
sudo adduser git # 创建一个git用户, 用来运行git服务

sudo apt install gitweb
https://github.com/kogakure/gitweb-theme  # 主题地址
https://blog.csdn.net/weixin_34008933/article/details/92391431  # 教程
```

收集所有需要登录的用户的公钥，就是他们自己的 `id_rsa.pub` 文件，
把所有公钥导入到 `/home/git/.ssh/authorized_keys` 文件里，一行一个

```bash
cd /data/git
sudo git init --bare Visual-Lab
sudo chown -R git:git Visual-Lab
cd Visual-Lab
sudo git init
```

出于安全考虑，创建的git用户不允许登录shell

```bash
sudo vim /etc/passwd
```

修改 `git:x:1001:1001:,,,:/home/git:/bin/bash`
为 `git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell`

这样，git用户可以正常通过ssh使用git，但无法登录shell，因为我们为git用户指定的git-shell每次一登录就自动退出.

远程仓库地址为 `git@server:/data/git/sample.git`

## 用户权限管理工具

```bash
sudo apt-get install python-setuptools  
git clone https://github.com/res0nat0r/gitosis.git  
cd gitosis/
sudo python setup.py install
```

---

### 本地设置

设置git用户名及邮箱

```bash
ssh-keygen -t rsa -C "mo1031@live.com" 
git config --global user.name USER_NAME
git config --global user.email USER_EMAIL
```

```bash
# git clone git@server:/srv/sample.git
git clone git@10.16.104.13:/data/git/Visual-Lab.git
```

编辑权限

```bash
sudo vim /home/git/.ssh/authorized_keys
```






https://help.mirrors.cernet.edu.cn/anaconda/


```bash
cat <<'EOF' > ~/.condarc
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
EOF
```

https://help.mirrors.cernet.edu.cn/pypi/


### 临时使用
pip install -i https://mirrors.cernet.edu.cn/pypi/web/simple some-package


### 设为默认
pip config set global.index-url https://mirrors.cernet.edu.cn/pypi/web/simple

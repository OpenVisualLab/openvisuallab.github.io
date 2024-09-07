# PyPI 发布记录

参考链接：[Packaging Python Projects - Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/)

## 1.准备工作

### 1.1.注册账号

https://pypi.org 注册正式账号

https://test.pypi.org 注册测试账号（两个账号完全不通用）

双重验证（2FA）用苹果`自带相机`扫码便可获得验证码

Account setting -> Add API tokens [Entire account (all projects)]

`token及时保存，关闭页面后不再显示`

配置<kbd>token</kbd> ==token== 

```bash
$ vim ~/.pypirc
```

```yaml
[testpypi]
  username = tiu
  password = pypi-xxxx

[pypi]
  username = 2-mo
  password = pypi-xxxx
```

### 1.2.安装依赖

```bash
# 1.更新pip
$ python3 -m pip install --upgrade pip

# 2.安装编译工具
$ python3 -m pip install --upgrade build

# 3.安装发布工具

$ python3 -m pip install --upgrade twine
```



## 2. 项目构建

### 2.1.目录结构

```txt
packaging_tutorial/
├── LICENSE
├── pyproject.toml
├── README.md
├── src/
│   └── example_package_YOUR_USERNAME_HERE/
│       ├── __init__.py
│       └── example.py
└── tests/
```

`pyproject.toml` 模版：

```yaml
[project]
name = "example_package_YOUR_USERNAME_HERE"
version = "0.0.1"
authors = [
  { name="Example Author", email="author@example.com" },
]
description = "A small example package"
readme = "README.md"
requires-python = ">=3.8"
classifiers = [
    "Programming Language :: Python :: 3",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent",
]

[project.urls]
Homepage = "https://github.com/pypa/sampleproject"
Issues = "https://github.com/pypa/sampleproject/issues"
```

`LICENSE` 模版：

```txt
Copyright (c) 2018 The Python Packaging Authority

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```



## 3.编译项目

### 3.1.编译

与 `pyproject.toml` 同级目录下

```bash
$ python3 -m build
```

得到：

```txt
dist/
├── example_package_YOUR_USERNAME_HERE-0.0.1-py3-none-any.whl
└── example_package_YOUR_USERNAME_HERE-0.0.1.tar.gz
```



### 3.2.上传

#### 测试开发

```bash
$ python3 -m twine upload --repository testpypi dist/*
```

出现这种表示成功：

```bash
Uploading distributions to https://test.pypi.org/legacy/
Enter your username: __token__
Uploading example_package_YOUR_USERNAME_HERE-0.0.1-py3-none-any.whl
100% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 8.2/8.2 kB • 00:01 • ?
Uploading example_package_YOUR_USERNAME_HERE-0.0.1.tar.gz
100% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 6.8/6.8 kB • 00:00 • ?
```

可在 https://test.pypi.org/project/example_package_YOUR_USERNAME_HERE 查看

#### 正式部署

```bash
$ twine upload dist/*
```

### 3.3.安装

#### 测试开发

```bash
$ python3 -m pip install --index-url https://test.pypi.org/simple/ --no-deps example-package-YOUR-USERNAME-HERE
```

#### 正式部署

```bash
$ python3 -m pip install [your-package]

# 若配置了清华源等需要设置默认源
$ pip install [your-package] -i https://pypi.org/simple/
```

### 3.4.本地测试

```bash
$ python3 -m build
$ python -m pip install -e .
```






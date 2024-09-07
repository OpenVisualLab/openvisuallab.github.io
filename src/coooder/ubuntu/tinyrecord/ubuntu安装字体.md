1.下载字体

2.拷贝字体至文件夹， `/usr/share/fonts` 或 `/usr/local/share/fonts`两个之中随意拷一个就可以

```shell
$ sudo cp /path/to/times_new_roman.ttf /usr/share/fonts/
```

3.**刷新字体缓存：** 复制字体文件后，需要刷新系统的字体缓存，以便系统识别新安装的字体。可以使用以下命令来刷新字体缓存：

```bash
$ sudo fc-cache -f -v
```

4.**确认字体安装成功：** 安装完成后，您可以使用 `fc-list` 命令来查看系统中安装的字体列表，确保 Times New Roman 已经安装并可用：

```bash
$ fc-list | grep "Times New Roman"
```





1.**重启 matplotlib 缓存：** 有时，`matplotlib` 的字体缓存可能会出现问题，您可以尝试清除 matplotlib 缓存并重新生成它：

```bash
$ rm -rf ~/.cache/matplotlib
```

2.**手动指定字体文件：** 如果上述方法都无法解决问题，您可以尝试手动指定字体文件的路径，而不是依赖系统的字体缓存。例如：

```python
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = 'Times New Roman'
plt.rcParams['font.serif'] = '/path/to/your/times_new_roman.ttf'
```




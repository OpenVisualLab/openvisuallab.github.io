ubuntu同步网络时间的方法：

需要借助ntpdate根据完成同步。

1.打开终端输入以下命令安装ntpdate工具。

```javascript
sudo apt-get install ntpdate
```



2.再输入命令设置系统时间与网络时间同步。

```javascript
sudo ntpdate cn.pool.ntp.org
```



3.最后输入命令将时间更新到硬件上即可。

```javascript
sudo hwclock --systohc
```



https://cloud.tencent.com/developer/article/1879686



```bash
sudo date -s "$(wget -S  "https://www.google.com/" 2>&1 | grep -E '^[[:space:]]*[dD]ate:' | sed 's/^[[:space:]]*[dD]ate:[[:space:]]*//' | head -1l | awk '{print $1, $3, $2,  $5 ,"GMT", $4 }' | sed 's/,//')"



sudo date -s "$(wget -S  "https://www.baidu.com/" 2>&1 | grep -E '^[[:space:]]*[dD]ate:' | sed 's/^[[:space:]]*[dD]ate:[[:space:]]*//' | head -1l | awk '{print $1, $3, $2,  $5 ,"GMT", $4 }' | sed 's/,//')"
```


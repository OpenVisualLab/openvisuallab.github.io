程序在服务器后台运行，避免电脑意外关闭时造成程序中断。 

服务器下载tmux： apt-get install tmux  
启动tmux： tmux new -s name， 进入新的tmux环境   
创建新窗口，Ctrl+b松开，再看0可以切换到0窗口，按1可以切换到1窗口   
查看内存使用情况： watch -n 1 free   
让服务器后台运行，自己本地电脑关闭： Ctrl+b松开，再按d，此时tmux窗口关闭   
通过命令tmux查看正在开启的tmux窗口   
使用命令： tmux a -t name 进入之前的tmux窗口   

其他：   
1、查看tmux窗口： tmux ls   
2、进入指定tmux窗口： tmux attach -t 0(进入0)   
3、关闭某个tmux窗口： tmux kill-window -t 0(关闭0)   

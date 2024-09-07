

Markdown 中我们经常会看到这样的描述目录的结构，但是 Markdown 并没有这样的语法用来生成这样的目录描述，那是怎么搞的呢？难道一个个字符的输入？

实际上一些第三方工具可以生成这样的目录结构文本，然后拷贝到 Markdown 中。

比如在 Mac 上，可以使用 brew install tree 安装 tree 命令，这个命令就能用来在终端中输出这样的目录结构文本，然后拷贝就行。Linux 和 Windows 也有 tree 命令，具体使用方式自行 Google 一下就行。

tree 命令部分常用命令
tree -a 显示所有
tree -d 只显示文档夹
tree -L n 显示项目的层级，n表示层级数，比如想要显示项目三层结构，可以用tree -l 3；
tree -I pattern 用于过滤不想要显示的文档或者文档夹。比如你想要过滤项目中的 node_modules 文档夹，可以使用 tree -I "node_modules"；
tree > tree.md 将项目结构输出到 tree.md 这个文档
tree -N 防止中文名乱码
生成目录，过滤 node_modules，防止中文乱码，输出到 目录结构.md 的 demo:

tree -N -d -I "node_modules" > 目录结构.md


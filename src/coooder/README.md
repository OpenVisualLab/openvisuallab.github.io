---
title: Coding
order: 4
---

## nihaonihao

### 好用的代码库

[ViT](https://github.com/lucidrains/vit-pytorch)

### 统计代码数量

```bash
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```

### 统计提交次数

```bash
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r
```

### 查看个人提交

```bash
git log --author="username" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```

# Git

-----------------------text-----------------



备份、代码还原、协同开发、追溯代码



SVN

![截屏2022-02-09 12.40.04](/Users/wenboran/Desktop/截屏2022-02-09 12.40.04.png)



#### 基本概念

##### 工作流程



##### 分支

git branch

git branch dev01

切换

git checkout 分支名

合并到master

git merge dev01





##### 原则和流程

master（生产）分支

develop（开发）分支

feature分支



hotfix分支



## 环境配置

### 下载安装



Git GUI



Git Bash



### 基本配置

#### 创建全局用户名、邮箱

```shell
git config --global user.name "your_name"  
git config --global user.email "your_email@youremail.com"
```



#### 查看配置信息

```shell
git config --list
```



#### Mac配置git别名

##### 修改.bash_profile

vi ~/.bash_profile

##### 添加配置

alias git-log='git log --pretty=oneline --all --graph --abbrev-commit'

##### 保存退出、执行source生效

source ~/.bash_profile



GitBash中文乱码

打开GitBash执行下面命令

git config --global core.quotepath false

$	{git_home}/etc/bash.bashre 文件最后加入下面两行

export LANG="zh_CN.UTF-8"

export LC_ALL="zh_CN.UTF-8" 



本地仓库初始化

git init



创建远程仓库



配置ssh

ssh-keygen -t rsa

获取公钥

cat ~/.ssh/id_rsa.pub

连接

ssh -T git@github.com



添加远程仓库

git remote add origin git@github.com:Cai-Cei/git_text.git





### 基础操作



git add .

git commit -m '注释'



git status



git log 

git reset --hard commitID

git reflog

git branch -vv

git clone

git fetch

git pull



##### 添加文件至忽略列表

创建.gitignore

添加

*.a	.a结尾文件忽略管理


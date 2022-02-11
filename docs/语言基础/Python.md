# Python 学习笔记 



注释 ctrl + c

小写字符串 str.lower()

大写字符串 str.upper()

#### 格式化字符串

```python
output = 'Hello,' + name
output = 'Hello,{0}{1}'.format(name1,name2)
output = f'Hello,{name}'
```

#### 异常

~~~python
try:
	pass
except expression as identifier:
	pass
else:
	pass
finally: #总会执行
	pass
~~~

#### if语句

```python
if tax = 1:
	pass
elif tax =2:
	pass
elif tax in(3,4,5):
  pass
else: 
  pass
```

#### 列表

```python
name = ['A','B']
name.append('C')#	插入

print(name[1])# B
print(name[0:2])# A,B

#数组
from array import array
name = array('d')#float类型数组

```

​	区别：

数组存储同一类型

列表存储任意类型

操作：

​	len(names) 	获取长度

​	insert(0, 'Bill') 插入

​	sort() 字母顺序排序

#### 字典

```python
person = {'first':'Christopher'}
person['last']='Harrison'

print(person['first'])

for key1,value1 in text.items():
  pass
```

#### 循环

```python
for name in['Christopher',Susan]:
	pass

for name range(0,2):# 0,1
	pass

while True:
	pass
```

#### 函数

```python
def print_time(time):
	pass
print_time('123')

def print_time(time,day):
	pass
print_time(day=1,time='123')
```

#### 模块

```
import helpers
herlpers.display()

from helpers import *
display()

from helpers import display
display()
```

#### 虚拟环境





#### json

person_json = json.dumps(person_dict)#		转换为json对象



#### 环境变量

```python
import os
os_version = os.getenv('OS')
print(os_version)
```



#### 装饰器

```python
def logger(func):
	def wrapper():
		print('2')
		func()
		print('3')
	return wrapper

@logger
def sample():
	print('1')

sample() #2,1,3
```





### 格式化

用空格而不是Tab

变量名用下划线，不用驼峰或Pascal



#### 类型指示器

def get_greeting(name : str) -> str:

​	return 'Hello,' + name





#### Lambda



def sorter(item):

​	return item['name']



lambda item:item['name']





#### 类

```python
class presenter():
	def __init__(self,name):#构造函数
    self.name = name
```

所有都是public

_意味着避免使用

__意味着不要使用
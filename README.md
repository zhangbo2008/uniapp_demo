#2025-01-03,10点47  下面是自己写的学习笔记
项目原始地址:[](https://ext.dcloud.net.cn/plugin?id=9617)
目前把这个前端项目学通, 然后后端部分重写.因为php太旧了也不安全.
先记录前端项目的代码分析来学习.
1. tuniao-ui是一个uniapp的框架. (https://vue2.tuniaokj.com/components/setting.html)
2. vuex是状态管理工具，状态即数据。是vue的一个库.
		state：提供数据源的属性，存放所有共享的数据

		mutations：存放修改state中属性的方法，且方法的第一个参数都是state

		actions：存放处理异步操作的方法

		getters：基于state派生的状态，依赖于state，类似于计算属性

		modules：模块化Vuex
3. uniapp运行顺序: main.js是整个程序的入口, 然后是pages.json里面的第一个页面.
				  页面里面上来走script里面的onload函数.
4. 
	export default用于导出模块的默认值，而命名导出使用export关键字后跟变量名或函数名。一个模块只能有一个默认导出，但可以有多个命名导出。 import导入.
	默认的JS文件中是不支持es6中的import、export语法的。因为Node.js 在早期版本中采用的是 CommonJS 模块规范，它使用 require 和 module.exports 来导入和导出模块。


5. mixin其实就是对变量和方法的复用。但是他们的数据不是共用的（和vuex共享数据不同，数据是独立的）

Vuex公共状态管理，如果在一个组件中更改了Vuex中的某个数据，那么其它所有引用了Vuex中该数据的组件也会跟着变化。
Mixin中的数据和方法都是独立的，组件之间使用后是互相不影响的。

6.  页面顺序
	main.js
	App.vue
	\pages/index        虚拟首页,作为跳转,这样程序一打开就就会打开上次关闭时候的页面.
	\pages\home         程序的第一个tab页首页.

8. api  在tools/siteinfo.js
	const host = `http://quan.51duoke.cn/`;










######################下面是原始项目的readme


![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan/head2.jpg)


<h3 align="center">多客圈子社区系统开源版1.2.1版</h3> 

  

 - 她是谁？？？ 她是一款全开源支持免费商用的圈子社区论坛系统；是的!对!没看错! 她就是我们技术宅男的女神，我们为她熬夜伤肝，我们为她牵肠挂肚，我们为她彻夜难眠！
 
 - 多客开源团队（www.51duoke.cn)2022年伤肝之作！系统基于TP6+Uni-app框架开发；客户移动端采用uni-app开发，管理后台TH6开发。

 - 系统支持微信公众号端、微信小程序端、H5端、PC端多端账号同步，可快速打包生成APP；

 - 我们为你准备了完善的后台管理，不需要你懂PHP，按照教程3分钟安装完即可使用，堪比深夜的杜蕾斯还方便。

 - 我们为你准备漂亮的UI前端，导入UNI,2分钟编译为小程序，3分钟编译为安卓app，5分钟编译为ios系统。

 

 - 如果，我是说如果，你啥都不会，服务器不会架设，数据库也不会操作，打包也不会，联系我们即可。

 - 我们提供一整套安装调试上架服务。

 - 当然我们后续也会有商业版出品plus版，增加各种酷炫功能。
 
 - 当然我们也会接二次定制开发的版本，只要你想，你就可以拥有。


 ![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan/quanhanner.jpg)


后端下载地址：https://gitee.com/multi-customer-open-source/multi-social

后端程序目录
===============

**系统需求**

- PHP >= 7.2.5
- MySQL >= 5.6.3
- Redis

## uniapp安装

将前端UNI目录导入到你的HBuilder里

修改tools/siteinfo.js 里的域名为你的域名即可

如果打包小程序及app 请参考uniapp官方文档




## 后端安装
将后端php代码放到你的网站根目录即可

====运行WEB目录====
public

====数据库====
导入目录下的  db.sql 文件
修改目录下的  .env 数据库配置

配置文件路径/.env
~~~
APP_DEBUG = true

[APP]
DEFAULT_TIMEZONE = Asia/Shanghai

[DATABASE]
TYPE = mysql
HOSTNAME = 127.0.0.1 #数据库连接地址
DATABASE = test #数据库名称
USERNAME = username #数据库登录账号
PASSWORD = password #数据库登录密码
HOSTPORT = 3306 #数据库端口
CHARSET = utf8
DEBUG = true

[LANG]
default_lang = zh-cn

[REDIS]
REDIS_HOSTNAME = 127.0.0.1 # redis链接地址
PORT = 6379 #端口号
REDIS_PASSWORD = 123456 #密码
SELECT = 0 #数据库
~~~
3.修改目录权限（linux系统）777
/public


====后台登陆====
http://域名/admin
默认账号：admin 密码：6192652

## 后台功能简介


进入后台后，请在基础配置里配置你的参数即可。

H5和APP是手机号登陆，如果需要发送验证码，已经集成了阿里云的sms

上传集成阿里云oss和七牛云，也可以本地储存

内容监控和屏蔽，采用七牛云，请在上传配置出配置name和key



 
 ```
 Admin（后台功能）
 ├─ 管理首页
 |  ├─介绍版本信息、数据统计、常用模块、Echart数据概览
 ├─ 菜单管理
 |  ├─后台权限菜单管理 编辑访客权限，处理菜单父子关系，被权限系统依赖（极为重要）
 ├─ 系统管理
 |  ├─ 用户管理 - 添加新用户，封号，删号以及给账号分配权限组
 |  ├─ 权限管理 - 权限组管理，给权限组添加权限，将用户提出权限组
 |  └─ 上传管理 - 记录所有上传的图片文件信息、定位文件位置大小以及上传时间
 ├─ 配置管理
 |  ├─ 基本设置 - 配置网站基本信息：标题、域名、客服电话、前端主题配色、前端字体颜色等前端基础配置信息修改
 |  ├─ 上传配置 - 文件存储方式选择：本地存储、阿里云OSS、七牛云配置
 |  └─ 操作日志 - 记录管理员的操作，用于追责，回溯和备案
 ├─ 站点设置
 |  ├─ 广告管理 - 删改查
 |  ├─ 首页管理 - ....
 |  └─ 单页管理 - ....
 ├─ 圈子管理
 |  ├─ 圈子列表 - ....
 |  └─ 话题管理 - ....
 ├─ 会员管理
 |  ├─ 会员列表 - ....
 |  └─ 勋章管理 - ....
 ├─ ......
 ```
 ### 前端页面展示

 **首页和广场**
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan/qianduan/1.jpg)

**圈子和帖子**

![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan/qianduan/2.jpg)

**个人主页**

![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan/qianduan/3.jpg)


### 页面展示
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//1.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//2.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//3.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//4.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//5.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//6.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//7.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//8.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//9.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//10.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//11.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//12.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//13.jpg)

![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//15.jpg)
![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan//16.jpg)

## 文档

[TP6开发手册](https://www.kancloud.cn/manual/thinkphp6_0/content)

[uniapp开发手册](https://uniapp.dcloud.net.cn/)


![输入图片说明](http://guanwang.qiniu.51duoke.cn/quan/quanhanner.jpg)

## 更新计划

多客圈子社交系统商业版 1.3.0版升级计划

本次版本计划偏向于社交属性。适合做婚恋、交友等。

1、即时聊天功能，对方未回复，只能发送最多3条记录。支持发送语音 图片 文字。

2、增加音乐随声听，后台管理音乐库，用户可选择播放和关闭，播放器。

3、发布帖子增加仅自己可见和@关注的好友。

4、增加生成个人主页海报并附上小程序二维码。

5、个人资料增加 年龄、标签。

6、增加派对频道，增加聊天房间（文字聊天室），可邀请好友加入，或用户主动进入。

7、其他更多等你来提意见


## 特别鸣谢

排名不分先后，感谢这些软件的开发者：thinkphp、小牛admin、图鸟UI、vue、mysql、redis、uniapp等！


## 开源版使用须知

1.允许用于个人学习、毕业设计、教学案例、公益事业、商业使用;

2.如果商用必须保留版权信息，请自觉遵守;

3.禁止将本项目的代码和资源进行任何形式的出售，产生的一切任何后果责任由侵权者自负。

## 版权信息


版权所有Copyright © 2016-2022 by 四川掌上时代科技有限公司旗下多客开源事业部 (http://www.51duoke.cn   http://www.siyibang.com)

All rights reserved。

著作权所有者为四川掌上时代科技有限公司。"# uniapp_demo" 

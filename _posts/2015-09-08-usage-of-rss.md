---
title: "RSS 的使用方法"
date: 2015-09-08 13:54 +1000
categories: 软件 扫盲
---

![Akregator 界面截图]({{ site.baseurl }}/images/2015/09/akregator.png)

RSS 是一种获取新闻或博客更新的一种十分便捷的方式，但是似乎随着几年前 [Google Reader](http://www.google.com/reader/about/) 的倒下， RSS 也变得越来越不景气了，想来真是可惜。

# RSS 是什么，有什么优点？

就来段 [RSS 的维基百科条目](https://zh.wikipedia.org/wiki/RSS)吧。 (CC-BY-SA 3,0)

>	RSS（简易信息聚合）是一种消息来源格式规范，用以聚合经常发布更新数据的网站，例如博客文章、新闻、音频或视频的网摘。RSS文件（或称做摘要、网络摘要、或频更新，提供到频道）包含全文或是节录的文字，再加上发用者所订阅之网摘布数据和授权的元数据。
>	
>	Really Simple Syndication“聚合真的很简单”就是RSS的英文原意。把新闻标题、摘要（Feed）、内容按照用户的要求，“送”到用户的桌面就是RSS的目的。RSS一词有时候大体上意为社会性书签，包括各种RSS的不同格式。例如，Blogspace对使用网摘于一集成器内之动作标为RSS info和RSS reader。虽然它的第一个句子就包含明确的Atom格式：“RSS和Atom文件能够用简单的格式从网站更新消息至你的电脑!”
>	
>	RSS摘要可以借由RSS阅读器、feed reader或是aggregator等网页或以桌面为架构的软件来阅读。标准的XML文件式可允许信息在一次发布后通过不同的程序阅览。用户借由将网摘输入RSS阅读器或是用鼠标点取浏览器上指向订阅程序的RSS小图标之URI（非通常称为URL）来订阅网摘。RSS阅读器定期检阅是否有更新，然后下载给监看用户接口。

说白了， RSS 就是一个以特定格式写成的文件，里面包含了一条一条的新闻（或者更新）内容，它被放在网站服务器上。在有内容更新的时候，这些网站的管理员也会在 RSS 里面加入新的内容。要获取更新的通知，人们需要安装一个 RSS 客户端，它会每隔一段时间从你设定好的地址下载 RSS 的内容并保存下来，如果它发现有内容更新了，就会提醒你。

在以前， RSS 的好处是，你不用每隔一段时间手动打开你想看的新闻网站或博客，电脑会自动帮你做这些并在有更新的时候提醒你。  
在现在， RSS 的好处是，你只需要一个客户端即可接受所有网站的更新，不用有一堆进程运行在后台占内存，也方便管理。 RSS 十分清爽，没有任何多余的功能，没有广告啥的。

即使是现在， RSS 还没有一个能完全代替它的替代品。

# 我该怎么使用呢？

首先你需要一个 RSS 的客户端， RSS 客户端有很多，已经倒下的 Google Reader 就是其中之一，不过既然它已经倒下了，我们就得换一个。

虽然大家各有各的喜好，不过我在这里推荐 [Akregator](https://userbase.kde.org/Akregator/zh-cn) ，为什么我要推荐它呢？因为它是 [KDE](https://www.kde.org/) 的一部分。

你或许已经有了其他的 RSS 客户端，不过我这里只拿 Akregator 为例子，别担心，操作都大同小异。

## 安装

-	Linux
	
	-	Debian/Ubuntu/Linux Mint
		
			sudo apt-get install akregator
		
	-	Fedora
		
			sudo dnf install akregator
		
	-	Arch Linux/Manjaro
		
			sudo pacman -S akregator
		
-	Mac OS X&reg;
	
	因为我没用过，所以我也不清楚，这个只好说声抱歉了。另外欢迎知道的人进行补充。
	
-	Microsoft&reg; Windows&reg;
	
	按照[这个](https://techbase.kde.org/Projects/KDE_on_Windows/Installation?setlang=zh-cn#KDE_Installer_for_Windows)页面的指示进行安装。英文的，不过别怕，看图就行了。
	
	记得在选择安装的包的时候选中 Akregator ，当然如果是我的话我就会全选啦。


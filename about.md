---
layout: page
title: 关于
permalink: /about/
sitemap: true
---

:laughing:欢迎来到 FiveYellowMice 的博客！因为我给了这个网站很高的期望，所以你可能会看到一些狂妄自大的话，这点还请见谅。

## 我为什么建这个博客？ {#why-build-blog}

俗话说的好，人类是一种犯贱的生物，你越不让它做某件事情，它就越想去做，当条件宽松了，反而没有做的欲望了。  
中国禁止未成年人进网吧，但不禁止喝酒；澳大利亚禁止未成年人喝酒，但不禁止进网吧。但结果呢？中国未成年人进网吧的比澳大利亚还多，澳大利亚未成年人喝酒的也比中国多（我说的是比例）。

几个月前我的时间比较宽松，结果什么都不干，看看动漫混过去了。  
倒是这几个月，学习忙起来了，我反而开了一大堆坑……:sweat:

好吧我也不知道我能不能一个个把这些坑填完，总之就这么看吧，也别指靠我能干出什么大事。

## 我主要在这里发布哪些内容？ {#put-what-content}

老实说吧，没什么特定的主题，想写啥就写啥，完全凭借自己的主管观点和热情写、转载或翻译文章。也许你能够发现我特别喜欢写关于某个领域的文章，但那也不代表我的博客就是以此为主题的。可能上一篇是面向大众的激情澎湃的演讲稿，下一篇就是生涩难懂且语调平淡的批判。你不一定对所有的领域都感兴趣，但那有什么关系呢？我又不是记者，也不是专栏作家，也不是砖家:stuck_out_tongue:。

本来我计划一个星期更新一次的，但是大多数时候我肚子里显然没那么多货，“每周更新”也就没有实现。有时候我兴致比较高涨，还会一周发一篇以上——总之就是时间没有规律。大家也别催更啊，当然贡献点子的话我还是比较喜欢的。

除了博客之外，之前说我开了一大堆坑，那这些坑都在哪里呢？在这个网站的[我开的坑]({{ site.baseurl }}/projects/)页面有一些。对，仅仅是一些，还有许多小的、相对不是很重要的坑，因为太多了，没法整理出来做成一个列表。

## 自我介绍 {#self-introduce}

如同在首页顶端所说的一样，我就是个早就不该中二的中二少年。纯正的中国大陆人，爱好是电脑技术以及动漫。目前在澳大利亚进行高中学习。没有恋爱经验。

我也挺喜欢关注一些政治的敏感内容，比如坦克啦，蟾蜍啦，包子啦……不过还是不敢写太多相关的东西，怕水表:anguished:。

我也是一名自由软件狂热者，最重要的一点，我用 Linux 。如果要问我我的宗教信仰是什么，大概我会回答 [GNU](https://www.gnu.org) :ox:吧。

## 版权 {#copyright}

我热爱自由，并且想让这份自由保持下去，所以我的所有文章都尽可能的使用 [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 进行授权。也就是说，如果你要转载或者引用我的文章， **不需要** 问我，你只要标明这篇文章是我写的、原链接、还有它采用 CC-BY-SA 4.0 进行授权就可以了。当然，如果你重新混合、修改、或者在我的基础上再进行创作的话，你的作品也 **必须** 采用 CC-BY-SA 4.0 协议。

不过并不是博客上所有的内容都采用 CC-BY-SA 4.0 协议，有例外的话，我会在明显的位置作出说明。

我的博客中也包含许多别人的作品，这些作品当然也大都是自由协议的。不过不管怎么样我都会尽量的尊重原作者的版权，标上说明，如果你发现哪个地方侵犯了你的版权的话，比起打官司我更希望先给我一次悔改的机会，发邮件让我更改。

在这个博客中经常有使用的别人的作品有：<a id="show-more" href="javascript:void(0)"></a>

随机背景图片： Plasma Workspace Wallpapers, GPL v2, [KDE Visual Design Group](http://vdesign.kde.org/)  
Emoji ： [Noto Emoji](https://github.com/googlei18n/noto-emoji), Apache License, Copyright &copy; 2015 Google Inc.  
悬浮动作按钮的图标： [Material Icons](https://design.google.com/icons/), CC-BY, Google Inc.  
繁简转换： [jquery-s2t](https://github.com/hustlzp/jquery-s2t), MIT, Copyright 2013-2014 hustlzp  
以上人或组织没有特别授权我对这些东西的使用。

<script>
	document.addEventListener("DOMContentLoaded", function() {
		var more = $("#show-more");
		var work = $("p:contains(Copyright)");
		
		more.html("点击展开 &darr;");
		work.hide();
		
		more.click(function(event) {
			more.hide();
			work.velocity("slideDown", { duration: 500, easing: "easeOutQuad" });
		});
	});
</script>

## 隐私 {#privacy}

我非常在意自己的隐私并且希望你也这么做，所以不以身作则给自己的博客写一个隐私政策是不好滴。首先，我不会收集你的隐私。

网站的服务器是 [DigitalOcean](https://www.digitalocean.com/) 的 VPS ，服务器的日志只会被用作调试用途，我不会主动把它交给第三方（除非服务器被黑了然后日志被人看到）。

除此之外我还使用了 Google Analytics ，这货可以让我方便我查看网站的访问量，不过放心，它只收集匿名数据，详细的看 [Google 的隐私政策](https://www.google.com/intl/zh-CN/policies/)。实在不行你可以用 [Tor](https://www.torproject.org/) ，我没意见。

评论系统是 [Disqus](https://disqus.com/) 的，也不是我自己的，我能看到的信息不比任何一个能看到网页的人多，所以我也没法收集你的数据。不过至于 Disqus ，你得看[他们的隐私政策](https://help.disqus.com/customer/portal/articles/466259-privacy-policy)。

网站会在你的浏览器里保存 Cookie ，不过我不会保存用于追踪的 Cookie ，许多 Cookie 也不是我设的，而是 GitHub / Microsoft / Creative Commons / CloudFlare / Google / Disqus 等等服务设的，我管不着。除此之外我会在你的浏览器里保存 Local Storage 和 Session Storage ，以此来提升网页体验，但这些数据将仅在客户端保存和使用，不会被上传（除非你故意这么做）。

## 杂碎 {#miscell}

如果你有兴趣搞个 VPS ，可以用一下我的这个[推广链接](https://www.digitalocean.com/?refcode=0c345677cabb)，这是个 DigitalOcean 的优惠政策，用它的话呢，你只要注册并验证完信用卡，它就会送你 $10 ，然后在你花了 $25 以后我就会得到 $25 。利人利己，怎么样？当然你要是不舒服、不希望我得到好处的话，就直接上 [DigitalOcean 的官网](https://www.digitalocean.com/) 就好了。  
另外如果你是学生的话，别用我这个，学生可以获得 $50 ，但不能跟推广链接的钱同时使用。显然学生的钱比较多，如果你想搞的话，上网搜一下就可以了。

我自豪地使用 Jekyll 来建立博客，这玩意比较轻量，还不用整数据库和 Apache （我用 Nginx ），自由度也比较大（但是你得懂 HTML 和 CSS ）。对于我这种人来说是非常好的选择，如果你想整这个的话，看看 [Jekyll 官网](https://jekyllrb.com/) 或者其他爱好者做的[中文翻译版官网](http://jekyllcn.com/)（但是没 HTTPS :-1:）。

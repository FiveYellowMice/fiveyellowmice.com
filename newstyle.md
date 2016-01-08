---
layout: page
title: 网页更换新样式
permalink: /newstyle/
comments: true
---

最近我给我的博客写了一个全新的样式，采用了 [Material Design](https://www.google.com/design/spec/material-design/introduction.html) 。因为之前的老样式是 [Jekyll](http://jekyllrb.com) 自带的默认样式，感觉容易跟别人撞车，而且不是自己写的东西用起来总是感觉不爽的嘛。所以我就删除了[旧的样式](#old-style)，然后从头开始写自己的样式。

<a name="old-style"></a>
旧的样式：  
![旧的样式]({{ site.baseurl }}/images/oldstyle.png)

新的样式对于 HTML 5 和 CSS 3 有着强烈的依赖，所以有些旧的浏览器（比如 IE 8 ）显示出来的网页肯定是惨不忍睹的，不过没关系，我想现在的人也很少有用 IE 8 了吧，即使是国产壳牌浏览器，那也都是用的或新或旧的 Chromium 内核，应该也不会有问题吧。

那么这个页面是用来做什么的呢？就是用来给大家方便提出建议的，如果你发现你用了一个[靠谱的浏览器](#reliable-browser)，但网页显示不正常，那我是非常希望你能够告诉我的。鉴于在 GitHub 上拉 Issue 和发电子邮件都比较麻烦，干脆就设个页面，有问题就发在下面的评论里好了。

<a name="reliable-browser"></a>
“靠谱的浏览器”不包括 IE 10 及旧版本，如果你碰巧是这些浏览器的用户，为什么不升级到最新的 IE 11 呢？不行的话 Chrome 和 Firefox 是更好的选择。  
“靠谱的浏览器”也不包括国产壳牌浏览器（比如 360 安全/极速、百度、猎豹、傲游、 UC 等等），因为它们经常使用旧版 Chromium ，与其使用旧版的，为什么不紧随[上游](https://zh.wikipedia.org/wiki/%E4%B8%8A%E6%B8%B8_(%E8%BB%9F%E9%AB%94%E9%96%8B%E7%99%BC))，直接用 Chrome 呢？

<script>
	document.addEventListener("DOMContentLoaded", function() {
		$("p:contains(旧的样式：)").hide();
		$("p:contains(“靠谱的浏览器”不包括 IE 10 及旧版本)").hide()
		
		$("a[href=#old-style]").click(function() {
			$("p:contains(旧的样式：)").slideDown(500);
		});
		$("a[href=#reliable-browser]").click(function() {
			$("p:contains(“靠谱的浏览器”不包括 IE 10 及旧版本)").slideDown(500);
		});
	});
</script>

---
title: 《如何使用 FFmpeg 进行视频转码》 v0.2 发布！
date: 2015-10-11 08:23
tags: FFmpeg 更新
headpic: ffmpeg-v0.2-git-log.png
headpic_alt: 教程的 Git 记录
---

今天，《[如何使用 FFmpeg 进行视频转码][repo]》的第 2 个放出版本， v0.2 发布了！相比于 [v0.1][] ，这次更新经过了 [39 次 commit][compare] ，更改了 20 个文件，增加了 632 行文本，删除了 50 行文本。

<!--more-->

好吧，以上都是 Git 能告诉我的废话，我还是来说点实质的更新内容吧。这次更新我主要的还是添加了第 6, 7, 8 章，分别是“转码时能顺便一起做的事情”、“字幕”和“不同编码器特有的设定”。使这个教程离最终的完成又进了一步。

这三个新增的章节都是相对比较高级的功能了，所以如果你没有读过前面几章的话，就不要逞能去读了。当然，这三个章节是非常有用的，你读过了之后——我相信你一定能够开始抛弃其他的转码软件了（特别是格式工厂之流）。

按照计划，我还有一章没有写完，这章的标题叫“不仅能转码”，从[目录][toc]中你也能够看到这样一个没有链接的目录项。这一章中讲什么内容说实话我还没有完全想好，不过我想这一定会是使你最终抛弃 LGPL 破坏者的关键一环。  
不知道什么是 LGPL 破坏者？大多数国产播放器加转码软件就是 LGPL 破坏者，在[第 1 章][chapter 1]中其实就有过说明了。

那么现在就访问本计划的 [GitHub Repository][repo] ，开始在线阅读或下载吧！如果你喜欢我的教程（或者 FFmpeg ），别忘了告诉你身边的人，将自由的精神传播出去！

>	投资成功与否并非取决于你了解的东西, 而在于你能否老老实实地承认你所不知道的东西。投资人并不需要做对很多事情, 重要的是不要犯重大的错误。    ——巴菲特

对了，[点这儿][release notes]查看 v0.2 的更新日志。

[repo]: https://github.com/FiveYellowMice/how-to-convert-videos-with-ffmpeg-zh
[v0.1]: https://fiveyellowmice.github.io/posts/2015/09/how-ffmpeg-convert-release-0-1.html
[compare]: https://github.com/FiveYellowMice/how-to-convert-videos-with-ffmpeg-zh/compare/v0.1...v0.2
[toc]: https://github.com/FiveYellowMice/how-to-convert-videos-with-ffmpeg-zh/blob/master/index.md
[chapter 1]: https://github.com/FiveYellowMice/how-to-convert-videos-with-ffmpeg-zh/blob/master/01-write-in-front.md
[release notes]: https://github.com/FiveYellowMice/how-to-convert-videos-with-ffmpeg-zh/releases/tag/v0.2

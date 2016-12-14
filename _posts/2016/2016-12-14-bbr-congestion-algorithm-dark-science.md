---
title: BBR 阻塞算法，真是黑科技
date: 2016-12-14 05:34
tags: GFW Linux 个人 教程
shortlink: bbr
excerpt: |
  以前我看到许多人翻墙，总是要追求“锐速”、“FinalSpeed”之类的玩意，据说可以为 Shadowsocks 之类的东西进行加速，对此我一直都是嗤之以鼻。直到我真正在 2016 年底，到墙内用了一下未加任何优化的 Shadowsocks ，才终于理解了它们的心情。
---

以前我看到许多人翻墙，总是要追求“锐速”、“FinalSpeed” 还有 “KCP” 之类的玩意，据说可以为 Shadowsocks 之类的东西进行加速。对此我一直都是嗤之以鼻：一个 Shadowsocks 用得好好地，非要搞这种花架子，整这些乱七八糟的玩意，真是没事找事。

没事找事也就算了，可其中锐速还是[国产闭源软件](https://github.com/91yun/serverspeeder)——伙计们，国产闭源软件啊！真够有胆子的，这简直就是把潜在的国安请到了自己的 VPS 上，还深深地嵌入内核之中，仿佛自己被国产闭源软件强奸得还不够似的。但自己愿意被强奸也就算了，可不论是锐速、 FinalSpeed 还是 KCP ，虽然我没有研究过，但听大佬们说它们都是通过暴力发包来“提升”网络速度的，令本来就拥挤的国际带宽更加拥挤，总之就是[损人利己](https://plus.google.com/104603245338932141930/posts/MoTmxcgbUp3)，因此这样的做法还被一些人归纳为“中国人的劣根性”之一[^1]。

直到我真正在 2016 年底，到墙内用了一下未加任何优化的 Shadowsocks ，才终于理解了它们的心情，发现自己毕竟还是 too young 。在此我表示对上述软件用户和开发者的歉意。

---------

一开始，我以为拿着两个自己搭的 Shadowsocks 就可以轻轻松松地解决在墙内的上网问题，然而现实没有我想象的那么乐观。去年用同样的 VPS 以同样的方式上网，还能够有挺不错的速度，可今年就彻底悲剧了，平常的下载速度只有 10KB/s ，这比南非博茨瓦纳的网速[^2]还慢了。

我倒也不追求特别快的网速、特别低的延迟，但是这 10KB/s 还是太难受了。难道我不得不用之前被自己鄙视的锐速、 FinalSpeed 或者 KCP 了吗？还好，我非常幸运地赶上了一个新技术的诞生，那就是由 Google 开发的 [BBR 阻塞控制算法](https://lwn.net/Articles/701165/)。具体的技术细节我也看不懂，但既然这是一个不会损人利己且效果明显的加速方式，那就试试看吧。

## 装 4.9 内核

BBR 这个特性其实是在 [Linux 内核 4.9](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/log/?id=refs/tags/v4.9) 才计划加入的，而在写这篇文章的时候，它还非常新，没有被各大发行版使用。即使是最激进的 Arch 和 Fedora 也只有 4.8 （虽然我相信它们过两个星期就会更新到 4.9 的）。因此，要使用 BBR ，必须用 4.9 或更新的内核，当然你也可以自己给旧内核打 [patch](https://patchwork.ozlabs.org/patch/671069/) 。

我本来想自己给 4.8 打 patch 然后自己编译的，但不翻墙下载内核源码的速度十分悲惨，就算翻墙也只有 10KB/s 的网速，还经常断，导致我下载了一晚上还没有下载好，于是放弃了——咱还是装现成的 4.9 新内核吧。

装发行版不提供的内核是件挺麻烦的事，还好 Fedora 已经有好心人准备好了他编译好的 4.9 内核，所以按照 [Fedora Wiki](https://fedoraproject.org/wiki/Kernel_Vanilla_Repositories) 上提供的说明，只要三步。但如果你不用 Fedora 的话（我觉得大多数人都是如此），咱可就要偷笑咯 :smirk: 。

1. 添加 kernel-vanilla 源。  
  `curl -s https://repos.fedorapeople.org/repos/thl/kernel-vanilla.repo | sudo tee /etc/yum.repos.d/kernel-vanilla.repo`
2. 带着新加的源，更新所有的包，这样那新的内核就会被更新上，代替旧的内核。  
  `sudo dnf --enablerepo=kernel-vanilla-mainline-wo-mergew update`  
  它可能会问你要不要导入新的密钥，那么……你要装这个人打包的内核，只能按 y 信任咯。当然确认一下显示的 fingerprint 是否跟 Wiki 上所说的相同（我就不复制了，请自己点上面的链接去看，因为它可能会随着时间变化而改变）。
3. 重启。

当然了，如果你是在很长时间之后才看到的这篇文章，可能你 VPS 的内核早就达到甚至超过了 4.9 版本了，这时候就不用麻烦了。

## 启用 BBR

装内核实际上才是最麻烦的步骤，装好了之后，下面的操作就行云流水了。

1. 加载内核模块。  
  先运行 `sudo modprobe tcp_bbr` 看一看，没问题的话，就创建一个 `/etc/modules-load.d/80-bbr.conf` ，里面写上 `tcp_bbr` 七个字，就会每次开机自动加载 tcp_bbr 模块了。
2. 让内核使用 BBR 为阻塞控制算法。  
  `cat /proc/sys/net/ipv4/tcp_available_congestion_control` 看看里面有没有 `bbr` 三个字。  
  没问题的话， `sudo sysctl net.ipv4.tcp_congestion_control=bbr` 来启用 BBR 。  
  除非你想每次开机都运行一遍 sysctl ，记得创建一个 `/etc/sysctl.d/80-bbr.conf` ，写上 `net.ipv4.tcp_congestion_control = bbr` 就可以了。

你要是有强迫症的话就重启一下，事实上不重启也没事。

-------------------

最后我来说下我的成果吧，这是启用 BBR 之前的测速结果[^3]：  
![BBR Before]({{ site.baseurl }}/images/2016/12/bbr-before.png)

这是启用 BBR 之后的测速结果：  
![BBR After]({{ site.baseurl }}/images/2016/12/bbr-after.png)

这效果真的不能用显著来形容了！简直就是黑科技啊！ Google 大法好，退锐保平安！


[^1]: 本来我想在这里放个出处的链接，不过在写博文的时候没有找到那篇帖子，等找到了我再加上链接。
[^2]: 南非博茨瓦纳是一个比较落后的地方，平常网速据说只有 20~30 KB/s 。
[^3]: 如果你没看懂这个结果是什么意思的话，其实就是连接超时。 :joy:

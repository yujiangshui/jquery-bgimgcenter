jquery-bgimgcenter
=====================

jquery.bgimgcenter.js 让背景图片 无拉伸、无变形、无缝隙、很居中


##产生原因

当使用背景图片的时候，使用常规的 CSS 来布局图片，都会遇到 有缝隙、被浏览器拉伸变形 等等。但是又有这种需求，我就封装了这样一个小插件。先来看下效果

![jquery-bgimgcenter 效果](http://jiangshui.b0.upaiyun.com/works/bgimgcenter/bgimgcenter.gif)

##插件原理

看一下源代码就可以明白，就是计算一下窗口的宽高和图片的宽高，然后计算偏移量使其居中并且占满窗口高度或者宽度，很简单的小玩意~

##使用方法

推荐查看 [Demo](http://jsfiddle.net/yujiangshui/7YtPq/)，这里面有具体的代码示例。

###引入文件

下载压缩包，将 `jquery.bgimgcenter.min.js` 文件引入页面中。

###HTML 和 CSS 代码

为了控制更加灵活同时兼顾兼容性，所以使用 img 来“模拟”背景图片，而不是 CSS background 的方法。你需要对插件传递进去一个 img 元素。

模拟背景图片常用和推荐的结构：

	<div class="body-bg">
		<img src="images/body-bg.jpg" alt="" width="1000" height="667">
	</div> 

通常还需要设置下面 CSS：

	.body-bg{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	    z-index: 1;
	}

这样就模拟出一个固定的背景图片。当然，上面代码只是推荐代码，你可以根据你的项目需求，自定义结构。

###调用插件

使用如下代码启用这个插件：

	$('.body-bg img').bgimgcenter({
	    width: 1000,
	    height: 667
	});

`width` 和 `height` 分别是图片的原始尺寸，是必须传递的参数。为什么没有用程序自动获取图片的尺寸而需要人工传递？因为图片加载需要一定时间，图片先加载完之后，JS 才进行计算处理的话，会出现闪烁的情况。

因为调整窗口之后，需要重新计算位置，所以一般使用下面代码：

	$(document).ready(function() {
		$('.body-bg img').bgimgcenter({
		    width: 1000,
		    height: 667
		});
	});
	
	$(window).resize(function(){
	    $('.body-bg img').bgimgcenter({
	        width:1000,
	        height:667
	    });
	
	});

当然，你完全可以使用函数节流的方法，对 `resize` 时间进行性能优化处理，这里就按照你的需求来吧！

##使用协议

基于 MIT 协议。

免费开源，自由使用，像 WordPress 那样 ：D
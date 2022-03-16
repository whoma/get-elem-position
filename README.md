# get-elem-position
获取图片内某个元素的大小及位置(width、height、top、left)

## 背景
在页面开发中，可能会有对图片内某元素进行绑定事件操作(比如一张图片，里面有个按钮，需要在按钮添加点击事件)，这个时候就需要知道该元素所在的位置及大小，通过**点击区域判断**或**在对应的区域加个 div 进行绑定**。

若以**在对应的区域加个 div 进行绑定**，那么图片外面需要加个父元素，父元素内部再加个 div 进行绑定事件，如下列所示，元素 clickHandle 的位置及大小要和图片某元素点击操作区域重合。

所以需要知道该点击元素所在的width、height、top、left，当然可以手动去计算获取，本解决方案将通过画布进行**标注图片获取元素的位置和大小**。

```html
<style>
.container {
	position: relative;
}
.clickHandle {
	position: position
}
</style>
<div class="container">
	<div class="clickHandle"></div>
	<img />
</div>
```
## 方案解析
将图片上传至 canvas，标注需要点击的元素，导出该元素的大小及位置，考虑到图片可能是适配的，支持导出数据为百分比(%)和固定大小(px)。

// todo 说明清楚原理

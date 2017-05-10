## Picture uploader - Vue2.X
将之前项目中使用到的一个文件上传组件提取出来，单独做一个图片上传组件
（虽然现在有许多功能齐全的上传组件，但是由于关乎程序大小和精简化，所以自己做一个简化的上传组件）

### 预览图
<img src="https://github.com/watson-yan/vue-uploader/blob/master/static/preview.png" width="502" height="400"/>
忽略图片的内容，因为都是表情包

#### How to start
* 下载依赖项/install dependencies
> npm install

* 运行服务/run server
> npm run test

* 程序默认运行在3000端口: localhost:3000

#### Description
在全局注册或者局部注册完成后使用组件:
``` javascript
<uploader :src="'/api/imgs'"></uploader>
```
（该组件源码为components文件夹下面的uploader.vue文件， 其余文件是搭建了一个简易的框架和后端配置（为了测试上传进度））

* Props:

	src - 后台文件上传的地址, 在Demo中就是 '/api/imgs'

* 选取图片:

	支持PC端多选,如果移植到移动端根据各机型不同可能有差异

* 图片预览:

	选取图片后，脚本会将图片转成BASE64格式并传给img标签显示

* 上传

	当点击上传按钮时，将会遍历所有选中的文件，并添加到自定义的FormData中, 代码如下:
	
```javascript
const formData = new FormData()
this.files.forEach((item) => {
	formData.append(item.name, item.file)
})
```
上传的时候上传进度将会已百分比以及进度条的形式显示在上传按钮的右边


#### License
MIT


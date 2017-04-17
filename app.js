var express = require('express')
var multiparty = require('multiparty')
var path = require('path')
var util = require('util')
var fs = require('fs')
var app = express()

app.engine('html', require('ejs').renderFile) // 模板引擎设置
app.set('views', __dirname)
// 脚本请求定向到dist目录
app.get('/dist/*', function(req, res) {
    var filePath = req.path
    res.sendFile(path.join(__dirname, req.path))
})
// 配置图片上传的路由        
app.post('/api/imgs', function(req, res) {
    var form = new multiparty.Form({uploadDir: path.join(__dirname, '../static')})
    form.parse(req, function(err, fields, files) {
        var filesTmp = JSON.stringify(files, null, 2)
        if (err) {
            console.log('parse error:' + err)
        } else {
            console.warn(files)
            for (f in files) {
                var inputFile = files[f][0]
                console.log('inputFile:' + JSON.stringify(inputFile))
                var uploadedPath = inputFile.path
                var dstPath = path.join(__dirname, '../static/' + inputFile.originalFilename)
                //重命名为真实文件名
                fs.rename(uploadedPath, dstPath, function(err) {
                    if(err){
                        console.log('rename error: ' + err)
                    } else {
                        console.log('rename ok');
                    }
                })
            }
            
        }
        res.status(200).end()
    })
})
// 所有页面请求定向到index.html
app.get('/*', function(req, res) {
	res.render('index.html')
})

var server = app.listen(3000, function(){
    var port = server.address().port
    console.log('App listening at port:%s', port)
})
//http模块：编写服务器

//1.加载http核心模块

var http = require('http')

//2.创建一个web服务器

var server = http.createServer()

//3.发请求
//  接受请求
//  处理请求
//  发送响应

server.on('request',function(){
    console.log("收到请求了")
})


//4.绑定端口号，启动服务器
server.listen(3000, function(){
    console.log("服务器启动成功")
})
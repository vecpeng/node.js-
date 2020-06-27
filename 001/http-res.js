var http = require('http')

var server = http.createServer()

// request 请求事件处理函数， 需要接受两个参数：
// request和response
server.on('request',function(request,response){
    console.log("收到请求了")
       response.write("dfsfs")
    response.end()
})


//4.绑定端口号，启动服务器
server.listen(8080, function(){
    console.log("服务器启动成功")
   
})
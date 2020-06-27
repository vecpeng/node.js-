var http = require('http')

var server = http.createServer()

// request 请求事件处理函数， 需要接受两个参数：
// request和response
server.on('request',function(req,res){
    console.log("收到请求了")
    var url = req.url
    //响应对象只能是二进制数据或者字符串
    if(url === '/')
    {
        res.end("index page")
    }
    else if(url=== '/product')
    {
        var product=[
            {
                name:'a',
                age:'b'
            }
        ]
        res.end(JSON.stringify(product))//对象数组转字符串
    }
    res.end()
})


//4.绑定端口号，启动服务器
server.listen(4000, function(){
    console.log("服务器启动成功")
   
})
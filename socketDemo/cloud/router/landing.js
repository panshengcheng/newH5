let http = require('http');
let fs = require('fs');
let io = require('socket.io');
let documentRoot = 'E:/HTML5/websocket/www';
let app = http.createServer(function(req,res){
    let url = req.url;
    let file = documentRoot + url;
    fs.readFile(file,function(err,data){
        if(err){
            res.writeHeader('404',{
                'content-type':'text/html;charset="utf-8"'
            })
            res.write('<h1>404</h1><p>没有你要找的页面</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type':'text/html;charset="utf-8"'
            })
            res.write(data);
            res.end()
        }
    })
}).listen(8900);
let socket = io.listen(app);
socket.sockets.on('connection',function(socket){
    //on 监听connect事件
    console.log('有人通过socket进来了');
    //事件发送器emit('事件名称','需要发送的数据')
    socket.emit('hello','欢迎');
    socket.on('hellotoo', function(data){
        console.log(data)
    })
    //广播事件
    socket.broadcast.emit('a',"有新人进来了");
})

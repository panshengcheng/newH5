'use strict'
var config = require('./config');
var Wechat = require('./wechat/wechat');

var wechatApi = new Wechat(config.wechat);

exports.reply = function *(next){
    var message = this.weixin;
    //微信分为：普通消息和事件推送两种
    if(message.MsgType === 'event'){//事件推送
        if(message.Event === 'subscribe'){
            if(message.EventKey){
                console.log("扫描二维码进来的："+ message.EventKey + ' '+message.ticket);
            }
            this.body = '哈哈, 你订阅了这个号\r\n'+'消息ID：'+ message.MsgId;
        }else if(message.Event === 'unsubscribe'){
            console.log("您已经取消了关注该订阅号!");
            this.body = '';
        }else if(message.Event === 'LOCATION'){
            this.body = "您上报的位置是："+message.Latitude + '/' +
            message.Longitude + '_'+message.Precision
        }else if(message.Event === 'CLICK'){
            this.body = '您点击了菜单：'+message.EventKey
        }else if(message.Event === 'SCAN'){
            console.log("关注后扫描二维码："+message.EventKey+" "+message.Ticket);
            this.body = '看到你扫了一下哦';
        }else if(message.Event === 'VIEW'){
            this.body = '您点击了菜单中的链接:'+message.EventKey
        }
    }else if(message.MsgType === 'text'){//纯文本
        var content = message.Content;
        var reply = '额，你说的'+message.Content + ' 太复杂了';
        if(content ==='1'){
            reply =' 停下1 ';
        }else if(content === '2'){
            reply =' 开始2 ';
        }else if(content === '3'){
            reply =' 暂停3 ';
        }else if(content === '4'){
            reply =' 播放4 ';
        }else if(content ==='5'){
            reply = [{
                title:'技术改变世界',
                description:'全文描述',
                picUrl:'http://res.cloudinary.com/moveha/image/upload/v1441184110/assets/Mask-min.png',
                url:'https://github.com/'
            },{
                title:'Node.js 微信开发',
                description:'全文描述',
                picUrl:'http://res.cloudinary.com/moveha/image/upload/v1441184110/assets/Mask-min.png',
                url:'https://github.com/'
            }]
        }else if(content ==='6'){
            var data = yield wechatApi.uploadMaterial('image',__dirname +'/2.jpg');
            reply = {
                type:'image',
                mediaId:data.media_id,
            }
        }else if(content ==='7'){
            var data = yield wechatApi.uploadMaterial('video',__dirname +'/sougang.mp4');
            reply = {
                type:'video',
                title:'视频播放',
                description:'测试视频',
                mediaId:data.media_id,
            }
        }else if(content ==='8'){
            var data = yield wechatApi.uploadMaterial('image',__dirname +'/2.jpg');
            reply = {
                type:'video',
                title:'听音乐',
                description:'赢大奖',
                musicUrl:'http://mpge.5nd.com/2015/2015-9-12/66325/1.mp3',
                mediaId:data.media_id,
            }
        }
    }
    yield next
}
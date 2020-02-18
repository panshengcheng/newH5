'use strict'

var sha1 = require('sha1');//加密
var getRawBody = require('raw-body');//
var Wechat = require('./wechat');
var util = require('./util');

module.exports = function(opts){
    var wechat = new Wechat(opts);
    return function *(next){
        console.log(this.query);
        var that = this;
        var token = opts.token;
        var signature = this.query.signature;
        var nonce = this.query.nonce;
        var timestamp = this.query.timestamp;
        var echostr = this.query.echostr;
    
        var str = [token, timestamp, nonce].sort().join('');//对微信传入的值进行排序
        var sha = sha1(str);//得到排序的值进行加密
        //验证通过get为获取微信数据，post不一定微信也有可能是测试数据
        if(this.method === 'GET'){
            if(sha === signature){
                this.body = echostr + '';
            }else{
                this.body = "wrong";
            }
        }else if(this.method === 'POST'){
            if(sha !== signature){
                this.body = 'wrong';
                return false;
            }
            var data = yield getRawBody(this.req, {
                length: this.length,
                limit: '1mb',
                encoding: this.charset
            })
            //console.log(data.toString());
            var content = yield util.parseXMLAsync(data);
    
            var message = util.formatMessage(content.xml);
            console.log(message);

            // if(message.MsgType === 'event'){//拿到事件
            //     if(message.Event === 'subscribe'){//subacribe 订阅事件
            //         var now = new Date().getTime()
            //         that.status = 200;
            //         that.type = 'application/xml';
            //         that.body = xml;
            //       return
            //     }
            // }
            this.weixin = message;
            //交出控制权给业务逻辑层处理
            yield handler.call(this, next);

            wechat.reply.call(this);
        }
         
    }
}
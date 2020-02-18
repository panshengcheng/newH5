'use strict'

var Koa = require('koa');
var path = require('path');
var wechat = require('./wechat/g');
var util = require('./libs/util');
var config = require('./config');
var weixin = require('./weixin');
var wechat_file = path.join(__dirname,'./config/wechat.text');

var app = new Koa();
app.use(wechat(config.wechat, weixin.reply));//传入wechat参数

app.listen(1234);
console.log("listen:1234");
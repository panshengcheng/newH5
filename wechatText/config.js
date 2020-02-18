
'use strict'
var path = require('path');
var util = require('./libs/util');
var wechat_file = path.join(__dirname,'./config/wechat.text');
var config = {
    wechat:{
        appID:'wx7531b4026b1854ad',//微信开发者ID
        appSecret:'0d89edcbdb801722caa6f0131b41a58c',
        token:'imoocisareallpanshengchengtext',//微信开发者自己设置的随机数
        getAccessToken:function(){
            return util.readFileAsync(wechat_file);
        },
        saveAccessToken:function(data){
            data = JSON.stringify(data);
            return util.writeFileAsync(wechat_file,data);
        }
    }
}
module.exports = config;
'use strict'
//专门处理和微信交互的逻辑
var Promise = require('bluebird');
var reqs = require('request');
var request = Promise.promisify(reqs);//向某一个服务器发送请求数据
var util = require('./util');
var prefix = 'https://api.weixin.qq.com/cgi-bin/';
var api ={
    accessToken:prefix+'token?grant_type=client_credential',
    temporary:{
        //存放临时素材地址
        upload:prefix+'media/upload?',
    },
    permanent:{
        upload:perfix+'material/add_material?',
        uploadNews:prefix+'material/add_news?',
        uploadNewsPic:prefix+'material/uploadimg?'
    }
    
}

//用于查询当前票据是否过期，过期的话重新生成
function Wechat(opts){
    var that = this;
    this.appID = opts.appID;//微信ID
    this.appSecret = opts.appSecret;//
    this.getAccessToken = opts.getAccessToken;//获得微信全局唯一票据
    this.saveAccessToken = opts.saveAccessToken;//保存微信全局唯一票据

    this.fetchAccessToken()
}

//在微信的原型链上判断是否过期
Wechat.prototype.isValidAccessToken = function(data){
    if(!data || !data.access_token || !data.expires_in){
        return false;
    }

    var access_token =  data.access_token;
    var expires_in = data.expires_in;
    var now = (new Date().getTime());

    if(now < expires_in){
       
        return true;
    }else{
       
        return false;
    }
}
//更新票据
Wechat.prototype.updateAccessToken = function(){
    var appID = this.appID;
    var appSecret = this.appSecret;
    var url = api.accessToken+"&appid="+appID+'&secret='+appSecret;
    
    return new Promise(function(resolve,reject){
        request(url,function(err,res,body){
            if(err){
                console.log(err);
                throw err;
            }else{
                var data =JSON.parse(body);
                var now = (new Date().getTime());
                var expires_in = now + (data.expires_in - 20)*1000;
                data.expires_in = expires_in;
                resolve(data);
            }
        })
        // request({url:url,json:true}).then(function(response){
        //     var data = response[1];
        //     var now = (new Date().getTime());
        //     console.log(data);
        //     var expires_in = now + (data.expires_in - 20)*1000//生成新的过期时间，提前20秒刷新

        //     data.expires_in = expires_in
        //     resolve(data);
        // })
    })
    
}

Wechat.prototype.uploadMaterial = function(type, filepath, permanent){
    //access_token=ACCESS_TOKEN&type=TYPE
    var that = this;
    var form = {};
    var uploadUrl = api.temporary.upload;
    if(permanent){
        uploadUrl = api.permanent.upload;
        __dirname.extend(form, permanent)
    }
    if(type === 'pic'){
        uploadUrl = api.permanent.uploadNewsPic;
    }
    if(type === 'news'){
        uploadUrl = api.permanent.uploadNews;
        form = material;
    }else{
        form.media = fs.createReadStream(material);
    }
   
  
    
    return new Promise(function(resolve,reject){
        that.fetchAccessToken().then(function(data){
            var url = api.upload+"&access_token="+data.access_token+'&type='+type;
        
            request({method:'POST',url:url,formData:form,json:true}).then(function(response){
                var _data = response[1];
                if(_data){
                    resolve(_data);
                }else{
                    throw new Error('Upload material fails')
                }

                data.expires_in = expires_in
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    })
}

Wechat.prototype.fetchAccessToken = function(type, filepath){
    var that = this;
    if(this.access_token && this.expires_in){
        if(this.isValidAccessToken(this)){
            return Promise.resolve(this);
        }
    }
    this.getAccessToken()
        .then(function(data){
            try{
                console.log(data.toString());
                data = JSON.parse(data);
                
            }catch(e){
                console.log("从这里进入1")
                return that.updateAccessToken();//更新票据
            }
            
            if(that.isValidAccessToken(data)){//判断数据是否合法
                console.log("从这里进入3"+data.toString())
                return Promise.resolve(data)
            }else{
                console.log("从这里进入2")
                return that.updateAccessToken();
            }
        }).then(function(data){
            //最终票据结果
            console.log(data)
            that.access_token = data.access_token;//全局唯一票据
            that.expires_in = data.expires_in;//过期字段
            that.saveAccessToken(data);
            return Promise.resolve(data);
        })
}

Wechat.prototype.reply = function(){
    var content = this.body;
    var message = this.weixin;
    var xml = util.tpl(content, message);

    this.status = 200;
    this.type = 'applieation/xml';
    this.body = xml;
}

module.exports = Wechat;
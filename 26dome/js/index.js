window.onload = init();

function init(){
    //let verifyBtn = document.getElementById('verifyBtn');
    let submit = document.getElementById('btn');
    
    
    // verifyBtn.addEventListener("touchend", getSMSInfo, false);
    // function getSMSInfo(){
    //     if(!mobile.test(phones)){
    //         alert("请填写正确的手机号");
    //         return;
    //     }
    //     let codes =('000000'+Math.floor(Math.random()*999999)).slice(-6);
    //     if(smsFlag){
    //         smsFlag = false;
    //         $.ajax({
    //             //url:"http://www.ulifecity.com:4011/getNote",
    //             type:"get",
    //             data:JSON.stringify({
    //                 phone:phones,
    //                 code:codes
    //             }),
    //             contentType:"application/json",
    //             success : function(res){
    //                 console.log(res);
    //                 if(res){
    //                     //开始计时，设置过期时间
    //                     sms = res.result;
    //                     smsFlag = true;
                        
    //                     setTime(obj);
    //                     //60s倒计时实现逻辑
    //                     var countdown = 60;
    //                     function setTime(obj) {
    //                         if (countdown == 0) {
    //                             obj.prop('disabled', false);
    //                             obj.text("点击获取验证码");
    //                             countdown = 60;//60秒过后button上的文字初始化,计时器初始化;
    //                             sms ="";//短信验证码清空
    //                             return;
    //                         } else {
    //                             obj.prop('disabled', true);
    //                             obj.text("("+countdown+"s)后重新发送") ;
    //                             countdown--;
    //                         }
    //                         setTimeout(function() { setTime(obj) },1000) //每1000毫秒执行一次
    //                     }
    //                 }
    //             },
    //             error : function(res){
    //                 smsFlag = true;
    //                 console.log(res);
    //             }
                
    //         })
    //     }else{
    //         alert("请等待短信发送")
    //     }
    // }
    submit.addEventListener("touchend", addUserInfo, false);  
    function addUserInfo(){
        //提交报名信息
        //if(sms !="" && sms){
            let phones = document.getElementById("phone");
            let userPhone = phones.value;
            let names = document.getElementById('myName');
            let userName = names.value;
            let createTime ="";//当前时间
            let expirationTime ="";//到期时间
            let sms = "";//短信验证码
            let mobile = /^1[\d]{10}$/;
            let str = /^[\u4e00-\u9fa5]{2,5}$/;
            let smsFlag = true;
            let flag = true;
            if(!str.test(userName)){
                alert('请填写正确的姓名');
                return;
            }
            if(!mobile.test(userPhone)){
                alert("请填写正确的手机号");
                return;
            }
            let UNNID = uuid(8, 16);
            if(flag){
                flag = false;
                expirationTime = GetDateStr(6);//获取到期时间
                createTime = new Date().Format("yyyy-MM-dd HH:mm:ss");//获取当前时间
                $.ajax({
                    url:"http://www.ulifecity.com:4088/userInfo",
                    type: "POST",
                    contentType: "application/json",
                    data:JSON.stringify({
                        user_name:userName,
                        phone:userPhone,
                        createTime:createTime,
                        expirationTime:expirationTime,
                        unnId:UNNID
                    }),
                    success: function(res){
                        flag = true;
                        console.log(res);
                        if(res.code =="1"){
                            alert("您已经报过名");
                        }else if(res.code == "2"){
                            alert("抱歉，票已经派发完成");
                        }else{
                            location.href="success.html?unnid="+UNNID+"&expirationTime="+expirationTime;
                        }
                    },
                    error: function(res){
                        flag = true;
                        console.log(res);
                    }
                })
            }else{
                alert("请勿重复提交，等待提交结果");
            }
        // }else{
        //     alert("您的短信验证码已过期");
        // }
    }
    
    //键盘监听事件
    $('input').on('blur',function(){
    　　window.scrollTo(3000,7000);
    });
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
//获取到期时间
function GetDateStr(AddDayCount) {   
    var dd = new Date();  
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期  
    var y = dd.getFullYear();   
    var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0  
    var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0  
    return y+"-"+m+"-"+d;   
 }

 function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
   
    if (len) {
    
     for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
     
     var r;
   
     
     uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
     uuid[14] = '4';
   
  
     for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
       r = 0 | Math.random()*16;
       uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
     }
    }
   
    return uuid.join('');
  };
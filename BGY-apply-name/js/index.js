music();
function music(){
    //音乐
    let objMusic = document.getElementById('bgMusic');
    let musicState = true;
    function musicPlay(){
        $(".music").removeClass('musicStop').addClass('musicPlay');  
        if(objMusic.paused){
            objMusic.play();
            objMusic.muted=false;
        } 
        document.addEventListener("WeixinJSBridgeReady",function(){
            objMusic.play();
            objMusic.muted=false;
        },false)    
    }


    function musicStop(){
        objMusic.pause();
        document.addEventListener("WeixinJSBridgeReady",function(){
            objMusic.pause();
            objMusic.muted=true;
        },false)
        $(".music").removeClass('musicPlay').addClass('musicStop');
        
    }
    musicPlay();
    $('.music').bind("touchend",function(){
        if(musicState){
            musicStop();
            musicState=false;
        }else{
            musicPlay();
            musicState=true;
        }
    })
}

document.getElementById('submit').addEventListener("touchend",addUserInfo,false);

function addUserInfo(){
    let flag = true;
    let name = $("#name").val();
    let phone = $("#phone").val();
    let time = new Date().Format("yyyy-MM-dd HH:mm:ss");
    let mobile = /^1[\d]{10}$/;
    let str = /^[\u4e00-\u9fa5]{2,5}$/;
    if(!str.test(name)){
        alert('请填写正确的姓名');
        return;
    }
    if(!mobile.test(phone)){
        alert("请填写正确的手机号");
        return;
    }
    if(flag){
        flag = false;
        $.ajax({
            url:"http://www.ulifecity.com:4088/addBGYUserInfo",
            type:"POST",
            data:JSON.stringify({
                name:name,
                phone:phone,
                times:time
            }),
            contentType: "application/json",
            success:function(res){
                if(res.code == 1){
                    alert('您已经报过名了');
                    flag = true;
                }else{
                    $("#onPage").css("display","none");
                    $("#success").css("display","block");
                    flag = true;
                }
            },
            error:function(e){
                console.log(e);
                flag = true;
            }
        })
    }else{
        alert("网络加载延迟，请等待提交结果")
    }
}
//键盘隐藏
// $("#name").on('blur', function(){
//     window.scroll(0,0);
// })
$("#phone").on('blur', function(){
    window.scroll(0,0);
})

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
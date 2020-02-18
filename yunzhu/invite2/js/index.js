imgLoading();
//图片预加载
function imgLoading(){
    var loading = document.querySelector(".loading");
    var loadingProcess = loading.getElementsByTagName("p")[0];
    var swiperWrapper = document.querySelector(".swiper-wrapper");
    var picArr = [
        "./img/fengxiang.jpg","./img/6.png",
        "./img/page1/bj.png","./img/page1/dibu.png","./img/page1/title.png","./img/page1/vtitle.png",
        "./img/page2/bj.png","./img/page2/count.png","./img/page3/bj.png","./img/page3/count.png",
        "./img/page4/bj.png","./img/page4/count.png","./img/page4/yuan.png","./img/page4/yuanshang.png",
        "./img/page5/bj.png","./img/page5/time.png","./img/page5/title.png"
    ]
    var img =  new Image();
    var sum = picArr.length;
    var now = 0;
    loadImg();
    function loadImg(){
        img.src = picArr[now]; 
        function go () {
            now ++ ;
            loadingProcess.innerHTML ="已加载 "+ parseInt( now/sum *100 ) + "%";
            if(now < picArr.length){
                loadImg()
            }else{
                loading.style.display = "none";
                swiperWrapper.style.display = "block";
                init();
            }
        }
        img.onerror = go;
        img.onload = go;
    }
}
//获取用户报名信息
function init(){

    $('#canvas').fireworks({ 
        sound: false, 
        opacity: 0.2, 
        width: '100%', 
        height: '100%'
      });	

    $("#submit").on('click',getUserInfo);

    function getUserInfo(){
        let name = $("#name").val();
        let phone = $("#phone").val();
        let time = new Date().Format("yyyy-MM-dd HH:mm:ss");
        let flag = true;
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
                url:"http://192.168.137.1:81/yunzhu/invite2/server/server.php",
                type:"post",
                data:{
                    "name":name,
                    "phone":phone,
                    "applyTime":time
                },
                success: function(data){
                    flag = true;
                    console.log(data);
                    let val =eval('('+data+')');
                    
                    if(val.code ==1){
                        alert("报名成功!");
                    }else{
                        alert("你已经报过名了");
                    }
                },
                error : function(e){
                    flag = true;
                    console.log(e);
                }
                
            })
        }else{
            alert("请等待提交结果！");
        }
    }
}
let keyTimer = null;
    document.body.addEventListener('focusin', () => {
    //软键盘弹起事件
clearInterval(keyTimer);
    $("#baoming").css({"height":"100vh"});
    });
document.body.addEventListener('focusout', () => {
    // 软键盘关闭事件
    window.scrollTo(0, 0);
    keyTimer = setTimeout(() => {
    if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
    }
    }, 200);
});
let devH = document.documentElement.clientHeight+"px";
let u = navigator.userAgent;
let isAndroid = u.indexOf('Android')>-1 || u.indexOf('Adr')>-1;
console.log(devH+" 高度: "+isAndroid);
if(isAndroid){
    $('#name').focus(function(e){
        let target = this;
        setTimeout(function(){
            $("#baoming").css({'height':devH,'position':'absolute'});
            target.scrollIntoViewIfNeeded();
            e.target.scrollIntoView(true);
        },20)
    })
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
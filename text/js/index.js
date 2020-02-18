/**
 * Created by Administrator on 2019/9/17.
 */
$(function(){
    // 禁止屏幕滑动
    document.addEventListener("touchmove",function(e){
       e.preventDefault();
       e.stopPropagation();
    },false);

    var imgArray=["http://images.fifad.cn/20190919/vankeChangTu/img3/bj.jpg","http://images.fifad.cn/20190919/vankeChangTu/img3/loading.gif",
        "http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_01.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_02.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_03.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_04.gif",
        "http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_05.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_06.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_07.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_08.gif",
        "http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_09.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_10.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_11.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_12.gif",
        "http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_13.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_14.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_15.gif","http://images.fifad.cn/20190919/vankeChangTu/img3/donghua_16.gif"
    ];
    function loadImg(arr, callback) {
        //获取元素
        //设置变量
        var cur = 0;
        var curfalse = 0;
        var total = arr.length;
        //循环加载图片
        for (var i = 0; i < total; i++) {
            var img = new Image();
            //加载失败的图片
            img.onerror = function () {
                curfalse++;
            };
            //加载成功的图片
            img.onload = function () {
                cur++;
                $("#baifenbi").text(parseInt(cur/total*100)+"%");
                // $("#tiao").css("width",parseInt(cur/total*186)+"px");
                if ((cur + curfalse) == total) {
                    if (callback) callback();
                }
            };
            img.src = arr[i];
        }
    }
    var bg=document.getElementById("bg");
    function fon() {
        document.addEventListener("WeixinJSBridgeReady", function () {
            $("#bg").attr("loop");
            bg.play();
            $("#music").get(0).style.webkitAnimation=" round 10s  infinite linear";
        }, false);
        $("#loadIng").hide();
        $("#backTop,#fx").animate({"bottom":"80px"},600);
    }

    loadImg(imgArray, fon);

    // document.addEventListener("WeixinJSBridgeReady", function () {
    //     bg.play();
    // }, false);


    $("#music").on("touchstart",function(){
        // if(bg.paused){
        //     $("#bg").attr("loop");
        //     bg.play();
        //     $("#music").get(0).style.webkitAnimation=" round 10s  infinite linear";
        // }else{
        //     $("audio").removeAttr("loop");
        //     bg.pause();
        //     $("#music").get(0).style.webkitAnimation="";
        // }
        if(bg.muted==true){
            bg.muted=false;
            $("#music").get(0).style.webkitAnimation=" round 10s  infinite linear";
        }else {
            bg.muted=true;
            $("#music").get(0).style.webkitAnimation="";
        }
    });

    var box=document.getElementById("box");
    var bar=document.getElementById("bar");
    var bar11 = new Hammer(bar);
    function pdPlay(audioSrc) {
        var c1Src=$("#bg").attr("src");
        console.log(c1Src);
        if(c1Src==audioSrc){

        }else{
            $("audio").removeAttr("loop");
            $("#bg").attr("src",audioSrc).attr("loop","loop");
            bg.play();
        }
    }
    function pdHeight(){
        if(ch<=600){
            pdPlay("http://images.fifad.cn/20190919/audios/a1.mp3");
        }
        // else if(ch>600&&ch<=1680){
        //     pdPlay("http://images.fifad.cn/20190919/audios/a2.mp3")
        // }
        else if(ch>1680&&ch<=3050){
            pdPlay("http://images.fifad.cn/20190919/audios/a3.mp3")
        }else if(ch>3050&&ch<=3900){
            pdPlay("http://images.fifad.cn/20190919/audios/a4.mp3")
        }else if(ch>3900&&ch<=5255){
            pdPlay("http://images.fifad.cn/20190919/audios/a5.mp3")
        }else if(ch>5255&&ch<=6100){
            pdPlay("http://images.fifad.cn/20190919/audios/a6.mp3")
        }else if(ch>6100&&ch<=6700){
            pdPlay("http://images.fifad.cn/20190919/audios/a7.mp3")
        }
        else if(ch>7300&&ch<=9960){//成都购书中心
            pdPlay("http://images.fifad.cn/20190919/audios/shudian.mp3")
        }

        else if(ch>9960&&ch<=11400){//超级女声
            pdPlay("http://images.fifad.cn/20190919/audios/chaojinvsheng.mp3")
        }else if(ch>11400&&ch<=13600){//明廷饭店
            pdPlay("http://images.fifad.cn/20190919/audios/mingtingfandian.mp3")
        }else if(ch>13600&&ch<=14800){//地铁
            pdPlay("http://images.fifad.cn/20190919/audios/ditie.mp3")
        }
        else if(ch>14800&&ch<=15850){//熊猫乐园
            pdPlay("http://images.fifad.cn/20190919/audios/xiongmaoleyuan.mp3")
        }
        else if(ch>16350&&ch<=18000){//太古里
            pdPlay("http://images.fifad.cn/20190919/audios/taiguli.mp3")
        }


        else if(ch>19200&&ch<=20400){//堵车
            pdPlay("http://images.fifad.cn/20190919/audios/duche.mp3")
        }

        else if(ch>20500&&ch<=21400){//k11
            pdPlay("http://images.fifad.cn/20190919/audios/k11.mp3")
        }
        else if(ch>22200&&ch<=23800){//乐跑
            pdPlay("http://images.fifad.cn/20190919/audios/lepao.mp3")
        }
    }

    bar11.on("swipeup", function(ev) {
        console.log(1111111);
        //var wst = $(window).scrollTop(); //滚动条距离顶端值
        // console.l
        // og("上滑"+wst);
        $("#backTop,#fx").animate({"bottom":"-150px"},600);
    });
    bar11.on("swipedown", function(ev) {
        console.log(22222222222222);
        //var wst = $(window).scrollTop(); //滚动条距离顶端值
        // console.log("下滑"+wst);
        $("#backTop,#fx").animate({"bottom":"80px"},600);
    });


    var barHeight=$("#bar").height();
    console.log(barHeight);
    var boxHeight=$("#box").height();
    var h=barHeight-boxHeight;
    var ch=0;
    var box1 = new Dragdealer('box', {
        x: 0,
        y: 0,
        vertical: true,
        speed:0.1,
        loose: false,
        slide:true,
        snap:false,
        css3:true,
        requestAnimationFrame: true,
        animationCallback:function(x, y){
        },
        dragStopCallback:function(x,y){
            ch=parseInt(y*barHeight);
            console.log("这是放手后"+ch);
            pdHeight();
            if(ch>=23940){
                $("#backTop,#fx").hide();
            }else{
                $("#backTop,#fx").show();
            }
        }
    });
    $("#backTop,#backTop1").on("click",function(){
        box1.setValue(0, 0, snap=false);
        ch=0;
        pdHeight();
    });
    $("#maskFx").on("click",function(){
        $("#maskFx").hide();
    });
    $("#fx,#fx1").on("click",function(){
        $("#maskFx").show();
    });
    $(".quanW").on("click",function () {
       var obj="#mask"+$(this).attr("data-num");
       $(".mask").hide();
       $(obj).show();
    });
    $(".close").on("click",function(){
        $(".mask").hide();
    })

});

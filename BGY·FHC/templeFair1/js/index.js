
let t1 = new TimelineMax();
$(function(){
    // 禁止屏幕滑动
    document.addEventListener("touchmove",function(e){
       e.preventDefault();
       e.stopPropagation();
    },false);
    
    var imgArray=[
        "./img/bj/1-1.gif","./img/bj/2-2.gif","./img/bj/3-3.gif","./img/bj/4-4.gif","./img/bj/5-5.gif","./img/bj/6.jpg",
        // "./img/yuansu/01/denglong.png","./img/yuansu/01/suangguang.png","./img/yuansu/02/hubian.png",
        // "./img/yuansu/03/qifu.png","./img/yuansu/03/yinghua.png",
        // "./img/yuansu/04/denglong.png","./img/yuansu/04/shu.png",
        // "./img/yuansu/05/dengshu.png","./img/yuansu/05/qifu.png",
        // "./img/yuansu/06/denglong.png","./img/yuansu/06/erweima.png","./img/yuansu/06/fx.png","./img/yuansu/06/shu1.png",
        // "./img/yuansu/mask/P1.png","./img/yuansu/mask/P3.png","./img/yuansu/mask/P4.png","./img/yuansu/mask/P5.png",
        // "./img/yuansu/mask/P6.png","./img/yuansu/mask/P7.png","./img/yuansu/mask/P8.png","./img/yuansu/mask/P10.png",
        "./img/shou.gif","./img/yuansu/tiran.gif"//,"./img/fx.png"
    ];
    function loadImg(arr, callback) {
        var cur = 0;
        var curfalse = 0;
        var total = arr.length;
        for (var i = 0; i < total; i++) {
            var img = new Image();
            img.onerror = function () {
                curfalse++;
            };
            img.onload = function () {
                cur++;
                $("#baifenbi").text("已加载 "+parseInt(cur/total*100)+" %");
                if ((cur + curfalse) == total) {
                    if (callback){
                        callback();
                    } 
                }
            };
            img.src = arr[i];
        }
    }
    var bg=document.getElementById("bg");
    var yanhuaArr = [
        $('.yanhua1'),
        $('.yanhua2')
    ]
    function fon() {
        document.addEventListener("WeixinJSBridgeReady", function () {
            $("#bg").attr("loop");
            bg.play();
            $("#music").get(0).style.webkitAnimation=" round 10s  infinite linear";
        }, false);

        $("#loadIng").hide();
        t1.from("#train1",50,{
            y:-7000,
            repeat:-1,
        },1);
        t1.from(yanhuaArr,1,{
            opacity:1,
            repeat:-1,
            yoyo:true
        },1);
    }

    loadImg(imgArray, fon);

    $("#music").on("touchstart",function(){
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
    var ch=0;
    function pdPlay(audioSrc) {
        var c1Src=$("#bg").attr("src");
        if(c1Src==audioSrc){

        }else{
            $("audio").removeAttr("loop");
            $("#bg").attr("src",audioSrc).attr("loop","loop");
            bg.play();
        }
    }
    function pdHeight(){
        pdPlay("./mp3/bj.mp3");
        // if(ch<=1000){
        //     pdPlay("./mp3/DMX.mp3");
        // }
        // else if(ch>1000&&ch<=2500){
        //     pdPlay("./mp3/BP.mp3");
        // }else if(ch>2500&&ch<=4000){
        //     pdPlay("./mp3/HC.mp3");
        // }else if(ch>4000&&ch<=6000){
        //     pdPlay("./mp3/DG.mp3");
        // }else if(ch>6500 && ch<=8021){
        //     pdPlay('./mp3/bj7.mp3');
        // }

    }

    bar11.on("swipeup", function(ev) {
        
        $("#backTop,#fx").animate({"left":"-150px"},600);
    });
    bar11.on("swipedown", function(ev) {
        
        if(ch>10643){

        }else{
            $("#backTop,#fx").animate({"left":"80px"},600);
        }
        
    });


    var barHeight=$("#bar").height();
    var boxHeight=$("#box").height();
    var h=barHeight-boxHeight;
    
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
            pdHeight();
            if(ch>=12000 || ch <=1000){
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

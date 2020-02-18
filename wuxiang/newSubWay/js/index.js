
let t1 = new TimelineMax();
let t2 = new TimelineMax();
$(function(){
    // 禁止屏幕滑动
    document.addEventListener("touchmove",function(e){
       e.preventDefault();
       e.stopPropagation();
    },false);
    
    var imgArray=["./img/fx.png","./img/shou.gif","./img/page2/train.png","./img/page2/xian.png",
        "./img/page2/01/bj.png","./img/page2/01/pavilion.png","./img/page2/01/people.png","./img/page2/01/platform1.png","./img/page2/01/submit.png",
        "./img/page2/01/tishi.png","./img/page2/01/title.png","./img/page2/01/vtitle.png","./img/page2/01/xian.png",
        "./img/page2/02/bj.png","./img/page2/02/huacao.png","./img/page2/02/platfrom2.png","./img/page2/02/platfromRen.png","./img/page2/02/ren1.png","./img/page2/02/ren2.png",
        "./img/page2/02/title.png","./img/page2/02/vtitle1.png","./img/page2/02/yun.png","./img/page2/03/bj.png","./img/page2/03/pavilion3.png","./img/page2/03/platfrom.png",
        "./img/page2/03/ren.png","./img/page2/03/title.png","./img/page2/03/vtitle1.png","./img/page2/03/yun.png","./img/page2/03/zixingche.png",
        "img/page2/04/bj.png","img/page2/04/dtitle.png","img/page2/04/pavilion4.png","img/page2/04/platfrom.png","img/page2/04/ren1.png","img/page2/04/ren2.png",
        "img/page2/04/title.png","img/page2/04/wenzi.png","img/page2/04/yun.png","./img/page2/05/bj.png","./img/page2/05/platfrom.png","./img/page2/05/ren.png","./img/page2/05/ren2.png",
        "./img/page2/05/title.png","./img/page2/05/yun.png","./img/page2/05/zi.png","./img/page2/06/bj.png","./img/page2/06/pavilion.png",
        "./img/page2/06/platfrom.png","./img/page2/06/ren1.png","./img/page2/06/ren2.png","./img/page2/06/title.png","./img/page2/06/yun.png",
        "./img/page2/07/bj.png","./img/page2/07/btn.png","./img/page2/07/btn1.png","./img/page2/07/dtitle.png","./img/page2/07/platfrom.png",
        "./img/page2/07/ren1.png","./img/page2/07/ren2.png","./img/page2/07/title.png","./img/page2/07/yanhua1.png","./img/page2/07/yanhua2.png","./img/page2/07/yanhua3.png",
        "./img/page2/07/yanhua4.png","./img/page2/07/yanhua5.png","./img/page2/07/yun.png",
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
                $("#baifenbi").text("已加载 "+parseInt(cur/total*100)+" %");
                // $("#tiao").css("width",parseInt(cur/total*186)+"px");
                if ((cur + curfalse) == total) {
                    if (callback){
                        callback();
                        // t1.to("#train",2,{
                        //     y:700,
                        //     onComplete:function(){
                        //         callback();
                        //     }
                        // })
                    } 
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
        t1.to(".yun",8,{
            y:100,
            repeat:-1,
            yoyo:true
        })
        t1.to("#title1",5,{
            opacity:1
        },2).to("#tishi1",3,{
            opacity:1,
            repeat:-1,
            yoyo:true
        },2)
        t1.from("#train1",8,{
            y:-10000
        },1)
        $("#backTop,#fx").animate({"left":"80px"},600);
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
        console.log(c1Src);
        if(c1Src==audioSrc){

        }else{
            $("audio").removeAttr("loop");
            $("#bg").attr("src",audioSrc).attr("loop","loop");
            bg.play();
        }
    }
    function pdHeight(){
        if(ch<=2222){
            pdPlay("./mp3/bj1.mp3");
        }
        else if(ch>2222&&ch<=3250){
            pdPlay("./mp3/bj2.mp3");
            t1.to("#title2",8,{
                opacity:1,
            },2);
            
        }else if(ch>3250&&ch<=5236){
            pdPlay("./mp3/bj3.mp3");
            if(ch>3800){
                t1.to("#title3",3,{
                    opacity:1,
                },.9)
            }
            
        }else if(ch>5236&&ch<=7463){
            pdPlay("./mp3/bj4.mp3");
            if(ch > 5300){
                t1.to("#title4",3,{
                    opacity:1,
                },2)
            }
        }else if(ch>7463&&ch<=9143){
            pdPlay("./mp3/bj5.mp3");
           if(ch > 7500){
                t1.to("#title5",3,{
                    opacity:1,
                },2)
           }
        }else if(ch>9143&&ch<=11937){
            pdPlay("./mp3/bj6.mp3");
            if(ch > 9500){
                t1.to("#title6",3,{
                    opacity:1,
                },2)
            }
        }
        else if(ch>11937&&ch<=13291){
            pdPlay("./mp3/bj7.mp3");
            
            if(ch > 12500){
                t1.to("#title7",3,{
                    opacity:1,
                },2)
            }
            t2.staggerTo([".yanhua1",".yanhua2",".yanhua3",".yanhua4",".yanhua5"],2,{
                opacity:1,
                repeat:-1,
                yoyo:true
            },.5)
        }

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
    console.log(barHeight);
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
            console.log("这是放手后"+ch);
            pdHeight();
            if(ch>=12000 || ch <=1500){
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

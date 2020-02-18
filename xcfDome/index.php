<?php
//include_once "E:\www\wx.uvcsi.com\api\wechatShare\wechat.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>致尚·西宸府</title>
    <script>
        (function () {
            var html = document.documentElement;
            var width = html.getBoundingClientRect().width;
            var fs = width/16;
            html.style.fontSize = fs+"px";
        })()
    </script>
    
    <link rel="stylesheet" media="all and (orientation:portrait)" href="./css/index.css"/>
    <link rel="stylesheet" media="all and (orientation:landscape)" href="./css/index1.css"/>
    <script src="./libs/jquery.min.js"></script>
</head>
<body>
    <div class="music">
        <audio id="bgMusic" src="./mp3/music.mp3?t=1" autoplay="autoplay" preload="true" loop="loop"></audio>
    </div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="./image/P-1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-1-1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-2-1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-2-2.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-2-3.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-2-4.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-3-1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-3-2.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-3-3.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-3-4.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-3-5.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-4-1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-4-2.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-4-3.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-4-4.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-4-5.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-4-6.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-4-7.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-5-1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-5-2.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-5-3.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-5-4.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-6-1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-6-2.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-6-3.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-6-4.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/P-6-5.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/H-1-1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/H-1-2.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./image/H-1-3.jpg" id="sun"/>
            </div>
            
        </div>
        <div class="swiper-pagination"></div>
        <div class="tubiao">
            <img src="./image/arrow.png" style="width:77px;height:50px; top:93%; left:47%;" id="array" class="resize">
        </div>
    </div>
    <script src="./libs/swiper.min.js"></script>
    <script>

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

        let swiper = new Swiper(".swiper-container",{
            direction: 'vertical', // 垂直切换选项
           
            on:{
                slideChangeTransitionStart:function(){
                    if(this.activeIndex === 29){
                        $("#array").hide();
                    }else{
                        $("#array").show();
                    }
                }
            }
            
        })
    </script>
    <div style="display:none">
        <?php
        include_once "cata_wechat.php";
        ?>
    </div>
</body>
</html>
<?php
    include_once "E:\www\wx.uvcsi.com\api\wechatShare\wechat.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>陈老师私人烟斗展</title>
    <link rel="stylesheet" href="./css/swiper.min.css"/>
    <script src="lib/jquery.min.js"></script>
    <style>
        *{margin: 0;padding: 0;}
        html body{
            width: 100%;
            height: 100%;
            overflow-y: hidden;
        }
        body {
            font-family: "microsoft yahei";
        }

        .swiper-container {
            width: 100%;
            height: 100%;
            background: #000;
        }

        .swiper-slide {
            width: 100%;
            height: 100%;
        }
        .swiper-slide a{
            position: absolute;
            top:32vh;
            left:32vw
        }
        .swiper-slide a #img{
            width: 50%;
            height: 10%;
        }
        img {
            /* display: block; */
            width: 100vw;
            height: 100vh;
        }
        
        .logoin{background-color: rgb(16,45,85);width: 100%; height: 100vh;}
        .logoin span{text-align: center;width: 100%;position: absolute;top: 45%;color: aliceblue;}
        /* 音乐样式 */
        .music{
            width:30px;
            height: 30px;
            position: absolute;
            top: 3%;
            right: 4%;
            z-index: 100;
        
        }
        .musicPlay{
            background: url(./images/Music.png);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            -webkit-animation: reverseRotataZ 1.2s linear infinite;
        }

        .musicStop{
            background: url(./images/Music.png);
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        @-webkit-keyframes reverseRotataZ{
            0%{-webkit-transform: rotateZ(0deg);}
            100%{-webkit-transform: rotateZ(-360deg);}
        }
        @-webkit-keyframes rotataZ{
            0%{-webkit-transform: rotateZ(0deg);}
            100%{-webkit-transform: rotateZ(0deg);}
        }
        #array {
            position: absolute;
            z-index: 999;
            -webkit-animation: start 1.5s infinite ease-in-out;
        }
        @-webkit-keyframes start {

        0%,
        30% {
        opacity: 0;
        -webkit-transform: translateY(5px) rotate(0deg);
        }

        60% {
        opacity: 1;
        -webkit-transform: translateY(-10px) rotate(0deg);
        }

        100% {
        opacity: 0;
        -webkit-transform: translateY(5px) rotate(0deg);
        }
        }

        @-moz-keyframes start {

        0%,
        30% {
        opacity: 0;
        -moz-transform: translateY(5px) rotate(0deg);
        }

        60% {
        opacity: 1;
        -moz-transform: translateY(-10px) rotate(0deg);
        }

        100% {
        opacity: 0;
        -moz-transform: translateY(5px) rotate(0deg);
        }
        }

        @keyframes start {

        0%,
        30% {
        opacity: 0;
        transform: translateY(5px) rotate(0deg);
        }

        60% {
        opacity: 1;
        transform: translateY(-10px) rotate(0deg);
        }

        100% {
        opacity: 0;
        transform: translateY(5px) rotate(0deg);
        }
        }
    </style>
</head>
<body>
    <div class="music">
        <audio id="bgMusic" src="./mp3/gq.mp3?t=1" autoplay="autoplay" preload="true" loop="loop"></audio>
    </div>
    <div class="swiper-container imgInfo">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./images/1.jpg"/></div>
            <div class="swiper-slide"><img src="./images/2.jpg"/></div>
            <div class="swiper-slide"><img src="./images/3.jpg"/></div>
            <div class="swiper-slide"><img src="./images/4-bj.jpg"/>
                <a id="position" href="https://uri.amap.com/marker?position=106.6115220000,26.6369710000&name=贵州省贵阳市观山湖区观山西路中铁阅山湖云著营销中心">
                    <img id="img" src="./images/dh.png"/>
                </a>
            </div>
        </div>
        <div class="tubiao" id="tubiao">
            <img src="./images/arrow.png" style="width:30px;height:20px; top:90vh; left:45vw;" id="array" class="resize">
        </div>
    </div>
    <script src="./lib/swiper.min.js"></script>
    <!-- <script src="./js/index.js"></script> -->
    <script>
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
        let mySwiper = new Swiper('.swiper-container',{
            direction: 'vertical',
            freeMode : false,
            on:{
                slideChangeTransitionStart:function(){
                    if(this.activeIndex === 3){
                        $("#tubiao").css("display","none");
                    }else{
                        $("#tubiao").css("display","block");
                    }
                }
            } 
        })
        
    </script>
    <?php
        include_once "cata_wechat.php";
    ?>
</body>
</html>
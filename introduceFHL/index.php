<?php
//include_once "E:\www\wx.uvcsi.com\api\wechatShare\wechat.php";
?>
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>“梵”华共鉴·财富传奇</title>
  <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
  <link rel="stylesheet" href="css/swiper.min.css">
  <link rel="stylesheet" href="css/animate.min.css">
  <script src="js/swiper.min.js"></script>
  <script src="js/swiper.animate.min.js"></script>
  <script src="js/jquery.min.js"></script>

  <!--<link rel="stylesheet" href="/dist/css/swiper.min.css">
<link rel="stylesheet" href="/dist/css/animate.min.css">
<script src="/dist/js/swiper.min.js"></script>
<script src="/dist/js/swiper.animate.min.js"></script>-->

  <style>
    * {
      margin: 0;
      padding: 0;
    }

    html,
    body {
      height: 100%;
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
      background: url(images/bg.jpg) no-repeat left top;
      background-size: 100% 100%;

    }

    img {
      display: block;
      width: 100vw;
      height: 100vh;
    }

    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      background: #fff;
      opacity: .4;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
    }
    @-webkit-keyframes start {

      0%,
      30% {
        opacity: 0;
        -webkit-transform: translate(0, 10px);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate(0, 0);
      }

      100% {
        opacity: 0;
        -webkit-transform: translate(0, -8px);
      }
    }

    @-moz-keyframes start {

      0%,
      30% {
        opacity: 0;
        -moz-transform: translate(0, 10px);
      }

      60% {
        opacity: 1;
        -moz-transform: translate(0, 0);
      }

      100% {
        opacity: 0;
        -moz-transform: translate(0, -8px);
      }
    }

    @keyframes start {

      0%,
      30% {
        opacity: 0;
        transform: translate(0, 10px);
      }

      60% {
        opacity: 1;
        transform: translate(0, 0);
      }

      100% {
        opacity: 0;
        transform: translate(0, -8px);
      }
    }

    .ani {
      position: absolute;
    }

    .txt {
      position: absolute;
    }

    #array {
      position: absolute;
      z-index: 999;
      -webkit-animation: start 1.5s infinite ease-in-out;
    }

    /* music */
    @-webkit-keyframes reverseRotataZ{
      0%{-webkit-transform: rotateZ(0deg);}
      100%{-webkit-transform: rotateZ(-360deg);}
    }
    @-webkit-keyframes rotataZ{
      0%{-webkit-transform: rotateZ(0deg);}
      100%{-webkit-transform: rotateZ(360deg);}
    }
    #musicControl { position:fixed;right:10px;top:40px;margin-top:0;display:inline-block;z-index:99999999}
    #musicControl a { display:inline-block;width:25px;height:25px;overflow:hidden;background:url('./img/music.png') no-repeat;background-size:100%;}
    #musicControl a audio{width:100%;height:56px;}
    #musicControl a.stop { background-position:left bottom;}
    #musicControl a.on { background-position:0px 1px;-webkit-animation: reverseRotataZ 1.2s linear infinite;}
    #music_play_filter{width:100%;height:100%;overflow:hidden;position:fixed;top:0;left:0;z-index:99999998;}
  </style>
</head>

<body>
<span id="musicControl">
        <a id="mc_play" class="on">
            <audio id="musicfx" src="mp3/chure-MP3.mp3" loop="loop" autoplay="autoplay">
                
            </audio>
        </a>
  </span>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-------------slide1----------------->
      <section class="swiper-slide swiper-slide1">
        <img src="./img/1.jpg"/>
       
      </section>
      <!---------------slide1-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="./img/2.jpg"/>
      </section>
      <!---------------slide2-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="./img/3.jpg"/>
      </section>
      <!---------------slide3-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="./img/4.jpg"/>
      </section>
      <!---------------slide4-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="./img/5.jpg"/>
      </section>
      <!---------------slide5-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="./img/6.jpg"/>
      </section>
      <!---------------slide6-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="./img/7.jpg"/>
      </section>
      <!---------------slide7-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="./img/8.jpg"/>
      </section>
      <!---------------slide8-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="./img/9.jpg"/>
      </section>
      <!---------------slide9-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="img/10.jpg"/>
      </section>
      <!---------------slide10-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="img/11.jpg"/>
      </section>
      <!---------------slide11-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="img/12.jpg"/>
      </section>
      <!---------------slide12-------------->
      <section class="swiper-slide swiper-slide2">
            <img src="img/13.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
             <img src="img/14.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
            <img src="img/15.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
            <img src="img/16.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
            <img src="img/17.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
             <img src="img/18.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
            <img src="img/19.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
            <img src="img/20.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
            <img src="img/21.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
             <img src="img/22.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
            <img src="img/23.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
            <img src="img/24.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
            <img src="img/25.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
             <img src="img/27.jpg"/>
      </section>
      <section class="swiper-slide swiper-slide2">
            <img src="img/28.jpg"/>
      </section>   
    </div>
    <div class="tubiao">
        <img src="images/arrow.png" style="width:20px;height:15px; top:460px; left:150px;" id="array" class="resize">
    </div>
    
    <div class="swiper-pagination"></div>
  </div>

    
  <script>
    
    //播放音乐 
    var myVid=document.getElementById("musicfx");
    
    //其他移动端浏览器只能让用户自己触发
    $(window).on('touchstart', function(){
        $("audio")[0].play();
        myVid.muted=false;
    });
    // 兼容微信(微信可以自动播放)
    document.addEventListener("WeixinJSBridgeReady", function () {
        $("audio")[0].play();
        myVid.muted=false;
        plays();
    }, false);
    function plays(){
            document.getElementById('musicfx').play();
    }

    //用于确定当前是否处于播放状态
    var isPlay = 1;
    $("#musicControl").on("click", function(){
      if(isPlay == 1){
            //处于播放状态
            $("audio")[0].pause();
            isPlay=0;
          }else{
            //处于暂停状态
            $("audio")[0].play();
            isPlay=1
          }
    })

    scaleW = window.innerWidth / 320;
    scaleH = window.innerHeight / 480;
    var resizes = document.querySelectorAll('.resize');
    for (var j = 0; j < resizes.length; j++) {
      resizes[j].style.width = parseInt(resizes[j].style.width) * scaleW + 'px';
      resizes[j].style.height = parseInt(resizes[j].style.height) * scaleH + 'px';
      resizes[j].style.top = parseInt(resizes[j].style.top) * scaleH + 'px';
      resizes[j].style.left = parseInt(resizes[j].style.left) * scaleW + 'px';
    }

    var mySwiper = new Swiper('.swiper-container', {
      //direction: 'vertical',
      pagination: '.swiper-pagination',
      //virtualTranslate : true,
      mousewheelControl: true,
      onInit: function (swiper) {
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
      },
      onSlideChangeEnd: function (swiper) {
        swiperAnimate(swiper);
      },
      onTransitionEnd: function (swiper) {
        swiperAnimate(swiper);
      },


      watchSlidesProgress: true,

      onProgress: function (swiper) {
        for (var i = 0; i < swiper.slides.length; i++) {
          var slide = swiper.slides[i];
          var progress = slide.progress;
          var translate = progress * swiper.height / 4;
          scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
          var opacity = 1 - Math.min(Math.abs(progress / 2), 0.5);
          slide.style.opacity = opacity;
          es = slide.style;
          es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + translate + 'px,-' + translate + 'px) scaleY(' + scale + ')';

        }
      },

      onSetTransition: function (swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++) {
          es = swiper.slides[i].style;
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';

        }
      },
    })
    //监听是否为最后一张
    // let btn = document.getElementById("btn");
    // btn.addEventListener("click", function(){
        
    // });
    
  </script>
   <?php
    include_once "cata_wechat.php";
    ?>
</body>

</html>
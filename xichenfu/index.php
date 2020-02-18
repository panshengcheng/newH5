<?php
//include_once "E:\www\wx.uvcsi.com\api\wechatShare\wechat.php";
?>
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title></title>
  <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
  <link rel="stylesheet" href="css/swiper.min.css">
  <link rel="stylesheet" href="css/animate.min.css">
  <link rel="stylesheet" href="css/index.css">
  <script src="js/swiper.min.js"></script>
  <script src="js/swiper.animate.min.js"></script>
  <script src="js/jquery.min.js"></script>
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
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-------------slide1----------------->
      <section class="swiper-slide swiper-slide1">
        <img src="./image/bj1.png"/>
        <img id="img1" src="./image/LOGO.png"/>
        <img id="img2" src="./image/page1/viceLogo.png"/>
        <img id="img3" src="./image/page1/zi01.png"/>
        <img id="img4" src="./image/page1/zi02.png"/>
        <img id="img5" src="./image/page1/zi03.png"/>
        <img id="img6" src="./image/page1/zi04.png"/>
        <img id="img7" src="./image/page1/zi05.png"/>
        <img id="img8" src="./image/page1/zi06.png"/>
        <img id="img9" src="./image/page1/zi07.png"/>
        <img id="img10" src="./image/page1/zi08.png"/>
        <img id="img11" src="./image/page1/zi09.png"/>
        <img id="img12" src="./image/page1/slogin.png"/>
        <img id="img13" src="./image/page1/time.png"/>
        <img id="img14" src="./image/page1/address.png"/>
        <img id="img15" src="./image/page1/viceLogo1.png"/>
        <img id="img16" src="./image/page1/book.png" alt="">
        <!-- <img src="img/logo.png" class="ani resize" style="width:150px;height:88px;left:100px;top:20px;z-index:1;"
          swiper-animate-effect="bounceInDown" swiper-animate-duration="1.5s" swiper-animate-delay="0.5s"> -->
        <!-- <img src="img/logo.png?t=1" class="ani resize" style="width:320px;height:180px;left:0px;top:60px;z-index:3;"
        swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" swiper-animate-delay="0.5s"> -->
      </section>
    
      <section class="swiper-slide swiper-slide2">
          <img src="./image/bj1.png"/>
          <img id="img17" src="./image/LOGO.png"/>
          <img id="img18" src="./image/page2/viceLogo.png"/>
          <img id="img19" src="./image/page2/mainBody1.png">
          <img id="img20" src="./image/page2/box1.png">
          <img id="img21" src="./image/page2/img1.png">
          <img id="img22" src="./image/page2/mainBody2.png">
          <img id="img23" src="./image/page2/box2.png">
          <img id="img24" src="./image/page2/img2.png">
          <img id="img25" src="./image/page2/rulerAndPen.png">
          <img id="img26" src="./image/page2/1.png">
          <img id="img27" src="./image/page2/2.png">
          <img id="img28" src="./image/page2/3.png">
          <img id="img29" src="./image/page2/4.png">
          <img id="img30" src="./image/page2/5.png">
          <img id="img31" src="./image/page2/6.png">
          <img id="img32" src="./image/page2/7.png">
          <img id="img33" src="./image/page2/8.png">
      </section>
  
      <section class="swiper-slide swiper-slide2">
          <img src="./image/bj2.png"/>
          <img id="img34" src="./image/LOGO.png"/>
          <img id="img35" src="./image/page3/viceLogo.png"/>
          <img id="img36" src="./image/page3/vice01.png"/>
          <img id="img37" src="./image/page3/01.png"/>
          <img id="img38" src="./image/page3/vice02.png"/>
          <img id="img39" src="./image/page3/02.png"/>
          <img id="img40" src="./image/page3/vice03.png"/>
          <img id="img41" src="./image/page3/03.png"/>
          <img id="img42" src="./image/page3/vice04.png"/>
          <img id="img43" src="./image/page3/04.png"/>
          <img id="img44" src="./image/page3/success.png"/>
      </section>

      <section class="swiper-slide swiper-slide2" id="data">
          <img src="./image/bj2.png"/>
          <img id="img45" src="./image/LOGO.png"/>
          <img id="img46" src="./image/page4/ITT.png"/>
          <img id="img47" src="./image/page4/box.png"/>
          <img id="img48" src="./image/page4/boxInfo.png"/>
          <img id="img49" src="./image/page4/myInfo.png"/>
          <img id="img50" src="./image/page4/name.png"/>
          <input type="text" id="name" placeholder="该怎么称呼您"/>
          <img id="img51" src="./image/page4/phone.png"/>
          <input type="number" id="phone" placeholder="请输入您的联系方式"/>
          <img id="img52" src="./image/page4/submit.png"/>
      </section>
      <!-- <section class="swiper-slide swiper-slide2">
          <img src="img/9.jpg?t=1"/>
          <img src="img/logo.png" class="ani resize" style="width:150px;height:88px;left:100px;top:50px;z-index:1;"
          swiper-animate-effect="bounceInDown" swiper-animate-duration="1.0s" swiper-animate-delay="0.5s">
          <img src="img/info1.png" class="ani resize" style="width:130px;height:40px;left:100px;top:160px;z-index:1;"
          swiper-animate-effect="bounceInDown" swiper-animate-duration="1.0s" swiper-animate-delay="0.5s">

          <input type="text" id="names" class="ani resize" placeholder="姓名" style="position:absolute; width:85px;height:20px;left:143px;top:149px;z-index:1;BACKGROUND-COLOR: transparent;border:none;outline:none;"
          swiper-animate-effect="bounceInDown" swiper-animate-duration="1.0s" swiper-animate-delay="0.5s"/>
          <input type="number" id="phones" class="ani resize" placeholder="电话" style="position:absolute; width:85px;height:20px;left:143px;top:177px;z-index:1;BACKGROUND-COLOR: transparent;border:none;outline:none;"
          swiper-animate-effect="bounceInDown" swiper-animate-duration="1.0s" swiper-animate-delay="0.5s"/>

          <img src="img/btn.png" id="btn" class="ani resize" style="width:130px;height:40px;left:100px;top:210px;z-index:1;"
          swiper-animate-effect="bounceInDown" swiper-animate-duration="1.0s" swiper-animate-delay="0.5s">
      </section> -->
    </div>
    <div class="tubiao">
        <img src="images/arrow.png" style="width:20px;height:15px; top:460px; left:150px;" id="array" class="resize">
    </div>
    
    <div class="swiper-pagination"></div>
  </div>
    <span id="musicControl">
        <a id="mc_play" class="on" οnclick="play_music();">
            <audio id="musicfx" src="mp3/chure-MP3.mp3" muted=false loop="loop" autoplay="autoplay">
                
            </audio>
        </a>
  </span>
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
      direction: 'vertical',
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
    let btn = document.getElementById("btn");
    btn.addEventListener("click", function(){
        let names =$("#names").val();
        let phones =$("#phones").val();
        let mobile = /^1[\d]{10}$/;
        let str = /^[\u4e00-\u9fa5]{2,5}$/;
        if(!str.test(names)){
            alert('请填写正确的姓名');
            return;
        }
        if(!mobile.test(phones)){
            alert("请填写正确的手机号");
            return;
        }
        var dataTime = new Date().Format("yyyy-MM-dd HH:mm:ss"); 
        let flag = true;
        if(flag){
            flag = false;
           
            $.ajax({
                 url:"http://www.ulifecity.com:4088/addXPHUserInfo",
                 type:"POST",
                 data:JSON.stringify({
                     user_name : names,
                     phone : phones,
                     data_time : dataTime
                 }),
                 contentType: "application/json",
                 success : function(data){
                     if(data.code =='1'){
                         alert("您已经报过名了");
                     }else if(data.code == '2'){
                         alert("报名成功!");
                     }
                 },
                 error : function(err){
                     console.log(err);
                     flag = true;
                 }
            
             })
        }else{
            alert("请等待提交结果");
        }
    });

    
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
    
  </script>
  <div style="display:none;">
   <?php
    include_once "cata_wechat.php";
    ?>
    </div>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title></title>
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
      background: url(upload/bg.jpg) no-repeat left top;
      /* background : url(img/cata/bm1.jpg) no-repeat left top; */
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
        <img src="img/cata/sy1.jpg"/>
        <img src="img/cata/sy2.png" class="ani resize" style="width:320px;height:180px;left:0px;top:60px;z-index:3;"
          swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" swiper-animate-delay="0s">
        <!-- <img src="upload/bonus_02.jpg" class="ani resize" style="width:320px;height:27px;left:0px;top:75px;z-index:3;"
          swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">
        <img src="upload/001.png" class="ani resize" style="width:320px;height:188px;left:0;top:140px;z-index:2;"
          swiper-animate-effect="rotateInDownLeft" swiper-animate-duration="0.5s" swiper-animate-delay="2s">
        <img src="upload/002.png" class="ani resize" style="width:320px;height:188px;left:0px;top:140px;z-index:1;"
          swiper-animate-effect="bounceInDown" swiper-animate-duration="1.5s" swiper-animate-delay="2.5s">
        <img src="upload/003.png" class="ani resize" style="width:320px;height:112px;left:0px;top:320px;z-index:1;"
          swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="4s">-->

      </section>
      <!---------------slide2-------------->
      <section class="swiper-slide swiper-slide2">
          <img src="img/cata/js1.jpg"/>
        <img src="img/cata/js2.png" class="ani resize" style="width:320px;height:165px;left:4px;top:25.6px;z-index:5; "
          swiper-animate-effect="bounce" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
        <!-- <img src="img/cata/js3.png" class="ani resize" style="width:320px;height:42px;left:0px;top:100px;z-index:4;"
          swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s"> -->
        <img src="img/cata/js3.png" class="ani resize" style="width:450px;height:264px;left:-65px;top:160px;z-index:3;"
          swiper-animate-effect="zoomInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1s">

      </section>
      <!----------------slide3-------------->
      <section class="swiper-slide swiper-slide3">
          <img src="img/cata/gz1.jpg"/>
        <img src="img/cata/gz2.png" class="ani resize" style="width:320px;height:150px;left:0px;top:-20px;z-index:5; "
          swiper-animate-effect="bounce" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
        <!-- <img src="upload/008.png" class="ani resize" style="width:320px;height:192px;left:0px;top:220px;z-index:4;"
          swiper-animate-effect="bounceInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="1s">
        <img src="upload/009.png" class="ani resize" style="width:320px;height:77px;left:0px;top:110px;z-index:3;"
          swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
        <img src="upload/010.png" class="ani resize" style="width:320px;height:192px;left:0px;top:220px;z-index:2;"
          swiper-animate-effect="bounceInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.5s"> -->


      </section>
      <!-------------slide4----------------->
      <section class="swiper-slide swiper-slide4">
        <img src="img/cata/jp1.jpg" />
        <img src="img/cata/jp2.png" class="ani resize" style="width:100px;height:100px;left:210px;top:20px;z-index:3;"
          swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" swiper-animate-delay="0s">
        <!-- <img src="upload/001.jpg" class="ani resize" style="width:320px;height:46px;left:0;top:20px;z-index:2;"
          swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
        <img src="upload/002.jpg" class="ani resize" style="width:320px;height:327px;left:0px;top:100px;z-index:1;"
          swiper-animate-effect="zoomInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">  -->
      </section>

      <!-------------slide5----------------->
      <section class="swiper-slide swiper-slide5">
          <img src="img/cata/sj0.jpg" />
          <img src="img/cata/sj4.png" class="ani resize" style="width:300px;height:180px;left:10px;top:-35px;z-index:3;"
          swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" swiper-animate-delay="0s">
          <img src="img/cata/sj1.png" class="ani resize" style="width:320px;height:130px;left:0px;top:90px;z-index:3;"
          swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
          <img src="img/cata/sj2.png" class="ani resize" style="width:320px;height:130px;left:0px;top:200px;z-index:2;"
          swiper-animate-effect="bounceInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.0s">
          <img src="img/cata/sj3.png" class="ani resize" style="width:320px;height:130px;left:0px;top:330px;z-index:2;"
          swiper-animate-effect="bounceInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">
      </section>

      <!-------------slide6----------------->
      <section class="swiper-slide swiper-slide6">
          <img src="img/cata/bm1.jpg" id="baoming" class="beijing6"/>
          <img src="img/cata/bm2.png" class="ani resize" style="width:200px;height:88px;left:160px;top:20px;z-index:1;"
          swiper-animate-effect="bounceInDown" swiper-animate-duration="1.5s" swiper-animate-delay="0.5s">
          <input type="text" id="names" class="ani resize" placeholder="姓名" style="position:absolute; width:140px;height:20px;left:90px;top:226px;z-index:1;"
          swiper-animate-effect="bounceInDown" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"/>
          <input type="number" id="phone" class="ani resize" placeholder="电话" style="width:140px;height:20px;left:90px;top:260px;z-index:1;"
          swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.7s"/>
          <button id="btn" class="ani resize" style="width:60px;height:20px;left:130px;top:300px;z-index:1;color: cyan;background-color: forestgreen;border-radius: 8px;"
          swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1.0s">提 交</button>
      </section>
      



    </div>
    <div class="tubiao">
        <img src="images/arrow.png" style="width:20px;height:15px; top:460px; left:150px;" id="array" class="resize">
    </div>
    
    <div class="swiper-pagination"></div>
  </div>

    <span id="musicControl">
        <a id="mc_play" class="on" οnclick="play_music();">
            <audio id="musicfx" src="mp3/LOVE POWER.mp3" loop="loop" autoplay="autoplay">
                
            </audio>
        </a>
  </span>
  <script>

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
    //监听提交按钮
    let btn = document.getElementById("btn");
    btn.addEventListener("click", function(){
        let userName ="";
        let userPhone ="";
        let name = document.getElementById("names");
        let phone = document.getElementById("phone");
        let time = GetDateT();
        let num = true;
        let falg = true;
        let mobile = /^1[\d]{10}$/;
        let str = /^[\u4e00-\u9fa5]{2,4}$/; 
        if(!str.test(name.value)){
          alert("请填写真实的姓名！");
          falg=false;
          return falg;
        }
        if(!mobile.test(phone.value)){
          alert("请填写正确的电话号码！");
          falg=false;
          return falg;
        }
        userName = name.value;
        userPhone = phone.value;
        if(falg){
          if(num){
            num = false;
            $.ajax({
              url: "http://www.ulifecity.com:4088/addCateInfo",
              type: "POST",
              contentType: "application/json",
              data:JSON.stringify({
                user_name : userName,
                phone : userPhone,
                invite_time : time
              }),
              success : function(res){
                console.log(res.result.length);
                if(res){
                  alert("报名成功！");
                  window.location.href ="scuess.html?id="+res.result[0].invite_id;
                }
              },
              error: function(){
                num = true;
                alert("提交失败！");
              }
            })
          }else{
            alert("请等待提交结果!");
          }
        }

    });
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

    function GetDateT()
    {
      var d,s;
      d = new Date();            
      s = d.getFullYear() + "-";        //取年份
      s = s + (d.getMonth() + 1) + "-";//取月份
      s += d.getDate() + " ";         //取日期
      s += d.getHours() + ":";       //取小时
      s += d.getMinutes() + ":";    //取分
      s += d.getSeconds();         //取秒
      
      return(s);  
      
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

    //监听键盘升起的高度
    var deviceH = document.documentElement.clientHeight+"px";
    // $("input").on("click", function(){
    //   $("body").attr("style","background:url('img/cata/bm1.jpg') no-repeat; width:100%; heigth:"+deviceH+"; background-size:100%"+deviceH);
    // })
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    if(isAndroid == true){
        $('input').focus(function(e){
              var target = this;
              setTimeout(()=>{
                $("#baoming").height(deviceH);
                target.scrollIntoViewIfNeeded();
                e.target.scrollIntoView(true); 
              },200);    
        })
    } 
    
  </script>
  <?php include_once "wechat.php"; ?> 
</body>

</html>
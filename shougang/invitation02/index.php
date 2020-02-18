<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首钢·贵州之光</title>
    <script>
        (function () {
            var html = document.documentElement;
            var width = html.getBoundingClientRect().width;
            var fs = width/16;
            html.style.fontSize = fs+"px";
        })()
    </script>
    <link rel="stylesheet" href="./css/swiper.min.css"/>
    <link rel="stylesheet" href="./css/animate.min.css"/>
    <link rel="stylesheet" href="./css/index.css?t=1"/>
    <script src="./js/jquery.min.js"></script>
    <?php 
     //include_once "cata_wechat.php"; 
    ?>
</head>
<body>
    <div class="music">
        <audio id="bgMusic" src="./mp3/gq.mp3?t=1" autoplay="autoplay" preload="true" loop="loop"></audio>
    </div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <section class="swiper-slide page1">
                <img id="img1" src="./img/page1/logo.png"/>
                <img class="ani img2" src="./img/page1/0.png" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani img3" src="./img/page1/1.png" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani img4" src="./img/page1/2.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani img5" src="./img/page1/9.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani" id="img6" src="./img/page1/ztitle.png?t=1" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s"/>
                <img class="ani" id="img7" src="./img/page1/vTitle.png?t=1" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"/>
                <img class="ani" id="img8" src="./img/page1/vTitle1.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1s"/>
                <!-- <img class="ani" id="img9" src="./img/page1/adderss.png" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.5s" swiper-animate-delay="1.2s"/> -->
            </section>
            <section class="swiper-slide page2">
                    <img class="ani img10" src="./img/page2/box.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"/>
                    <img class="ani img11" src="./img/page2/box.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"/>
                    <img class="ani img2" src="./img/page1/0.png" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.1s"/>
                    <img class="ani img3" src="./img/page1/1.png" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.2s"/>
                    <img class="ani img4" src="./img/page1/2.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                    <img class="ani img5" src="./img/page1/9.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.4s"/>
                    <img class="ani" id="img12" src="./img/page2/zTitle.png" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s"/>
                    <img class="ani" id="img13" src="./img/page2/vTitle.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                    <img class="ani" id="img14" src="" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s">
                    <img class="ani" id="img15" src="./img/page2/infoName.png" swiper-animate-effect="flipInX" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                    <div class="ani" id="myName" swiper-animate-effect="flipInX" swiper-animate-duration="1s" swiper-animate-delay="0.8s"></div>
                    <img class="ani" id="img16" src="./img/page2/weicom.png" swiper-animate-effect="flipInX" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                    <img class="ani" id="img17" src="./img/page2/hx.png" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                    <img class="ani" id="img18" src="./img/page2/boxInfo.png" swiper-animate-effect="fadeInUp" swiper-animate-duration="2.5s" swiper-animate-delay="1.2s"/>
                    <img class="ani" id="img19" src="./img/page2/dTitle.png" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.5s" swiper-animate-delay="2.5s"/>
            </section>
            <section class="swiper-slide page3">
                    <img class="ani img10" src="./img/page3/box.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"/>
                    <img class="ani img11" src="./img/page3/box.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0.3"/>
                    <img class="ani img2" src="./img/page1/0.png" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.1s"/>
                    <img class="ani img3" src="./img/page1/1.png" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.1s"/>
                    <img class="ani img4" src="./img/page1/2.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.1s"/>
                    <img class="ani img5" src="./img/page1/9.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.1s"/>
                    <img class="ani" id="img20" src="./img/page3/zTitle.png?t=1" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                    <img class="ani" id="img21" src="./img/page3/vTitle.png?t=1" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                    <!-- <img class="ani newImg1" src="./img/page3/applyTime.png" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="1s"/> -->
                    <img class="ani" id="img22" src="./img/page3/sx.png" swiper-animate-effect="fadeIn" swiper-animate-duration="2s" swiper-animate-delay="1.5s"/>
                    <img class="ani round" id="img23" src="./img/page3/round.png" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.2s"/>
                    <img class="ani round" id="img24" src="./img/page3/round.png" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.5s"/>
                    <img class="ani round" id="img25" src="./img/page3/round.png" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.8s"/>
                    <img class="ani round" id="img26" src="./img/page3/round.png" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.1s"/>
                    <img class="ani round" id="img27" src="./img/page3/round.png" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.4s"/>
                    <img class="ani round" id="img28" src="./img/page3/round.png" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.7s"/>
                    <img class="ani round" id="img29" src="./img/page3/round.png" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.9s"/>
                    <img class="ani" id="img30" src="./img/page3/time1.png?t=1" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.2s"/>
                    <img class="ani" id="img31" src="./img/page3/time2.png?t=1" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.5s"/>
                    <img class="ani" id="img32" src="./img/page3/time3.png?t=1" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.8s"/>
                    <img class="ani" id="img33" src="./img/page3/time4.png?t=1" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="2.1s"/>
                    <img class="ani" id="img34" src="./img/page3/time5.png?t=1" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="2.4s"/>
                    <img class="ani" id="img35" src="./img/page3/time6.png?t=1" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="2.7s"/>
                    <img class="ani" id="img36" src="./img/page3/time7.png?t=1" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="2.9s"/>
                    <img class="ani newImg2" src="./img/page3/homeTime.png?t=1" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="3.2s"/>
                    <img class="ani newImg3" src="./img/page3/instructions.png?t=1" swiper-animate-effect="bounceInUp" swiper-animate-duration="1s" swiper-animate-delay="3.5s"/> 
                    <!-- <img class="ani" id="img37" src="./img/page3/dTitle.png" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.5" swiper-animate-delay="2.5s"/> -->
            </section>
            <section class="swiper-slide page4">
                    <img class="ani img10" src="./img/page4/box.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"/>
                    <img class="ani img11" src="./img/page4/box.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"/>
                    <img class="ani img2" src="./img/page1/0.png" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                    <img class="ani img3" src="./img/page1/1.png" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                    <img class="ani img4" src="./img/page1/2.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                    <img class="ani img5" src="./img/page1/9.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                    <img class="ani" id="img38" src="./img/page4/zTitle.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                    <img class="ani" id="img39" src="./img/page4/vTitle.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                    <img class="ani" id="img40" src="./img/page4/img1.png" swiper-animate-effect="fadeInDown" swiper-animate-duration="1.5s" swiper-animate-delay="1.5s"/>
                    <img class="ani" id="img41" src="./img/page4/img2.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="1.5s"/>
                    <img class="ani" id="img42" src="./img/page4/img3.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="1.5s"/>
                    <img class="ani" id="img43" src="./img/page4/dTitle.png" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.5" swiper-animate-delay="2.5s"/>
            </section>
            <section class="swiper-slide page5">
                <img class="ani img10" src="./img/page5/box.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"/>
                <img class="ani img11" src="./img/page5/box.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"/>
                <img class="ani img2" src="./img/page1/0.png" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani img3" src="./img/page1/1.png" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani img4" src="./img/page1/2.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani img5" src="./img/page1/9.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani" id="img44" src="./img/page5/zTitle.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                <img class="ani" id="img45" src="./img/page5/vTitle.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                <a class="ani" id="img46" href="https://uri.amap.com/marker?position=106.7183268070,26.5754351184&name=贵州省贵阳市南明区凯宾斯基大酒店"
                swiper-animate-effect="bounceIn" swiper-animate-duration="1.5" swiper-animate-delay="1.5s">
                    <img id="position" src="./img/page5/address.png"/>
                </a>
                <img class="ani" id="img47" src="./img/page5/visic.png" swiper-animate-effect="fadeInDown" swiper-animate-duration="1.5" swiper-animate-delay="2.0s"/>
                <img class="ani" id="img48" src="./img/page5/hx.png" swiper-animate-effect="fadeIn" swiper-animate-duration="1.5" swiper-animate-delay="2.5s"/>
                <!-- <img class="ani" id="img49" src="./img/page5/time.png" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.5" swiper-animate-delay="2.0s"/> -->
                <img class="ani" id="img50" src="./img/page5/dTitle.png" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.5" swiper-animate-delay="2.0s"/>
            </section>
            <section class="swiper-slide page6">
                <img class="ani img10" src="./img/page6/box.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"/>
                <img class="ani img11" src="./img/page6/box.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"/>
                <img class="ani img2" src="./img/page1/0.png" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani img3" src="./img/page1/1.png" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani img4" src="./img/page1/2.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani img5" src="./img/page1/9.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.3s"/>
                <img class="ani" id="img51" src="./img/page6/logo.png" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                <img class="ani" id="img52" src="./img/page6/vTitle.png" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.8s"/>
                <img class="ani" id="img53" src="./img/page6/Qr-code.png" swiper-animate-effect="bounceIn" swiper-animate-duration="1" swiper-animate-delay="1.5s"/>
                <img class="ani" id="img54" src="./img/page6/phone.png" swiper-animate-effect="fadeInDown" swiper-animate-duration="1" swiper-animate-delay="2s"/>
                <img class="ani" id="img55" src="./img/page6/dTitle.png" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.5" swiper-animate-delay="2.5s"/>
            </section>
        </div>
        <div class="swiper-pagination"></div>
        <div class="tubiao" id="tubiao">
            <img src="./img/arrow.png" style="width:30px;height:20px; top:95vh; left:45vw;" id="array" class="resize">
        </div>
        <div class="loading">
            <p>0%</p>
        </div>
    </div>
    <script src="./js/swiper.min.js"></script>
    <script src="./js/swiper.animate.min.js"></script>
    <script src="./js/index.js"></script>
</body>
</html>
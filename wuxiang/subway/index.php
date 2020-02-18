<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no,maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <META HTTP-EQUIV="pragma" CONTENT="no-cache"> 
    <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate"> 
    <META HTTP-EQUIV="expires" CONTENT="0">

    <title>每一条回家的路都是心安的路</title>
    <link rel="stylesheet" href="./css/animate.css"/>
    <link rel="stylesheet" href="./css/aos.css"/>
    <link rel="stylesheet" href="./css/index.css"/>
    <script src="./js/jquery.min.js"></script>
    <!-- <script src="./js/wow.js"></script> -->
    
</head>
<body>
    <div class="music">
        <audio id="bgMusic" src="./mp3/bj.mp3?t=1" autoplay="autoplay" preload="true" loop="loop"></audio>
    </div>
    <section class="page one" style="display: none;">
        <div class="wapp">
            <img src="./img/page1/bj.png" class="bj">
            <img src="./img/page1/hicetea2.png" class="logo"/>
            <div class="tileInfo">
                <img src="img/page1/hicetea9.png" class="box"/>
                <div class="countent">
                    <img id="hicetea6" src="./img/page1/hicetea6.png"/>
                    <img id="hicetea7" src="./img/page1/hicetea7.png"/>
                </div>
            </div>
            <img src="./img/page1/hicetea8.png" class="hicetea8"/>
            <img src="./img/page1/hicetea3.png" class="hicetea3"/>
            <img src="./img/page1/hicetea13.png" class="hicetea13"/>
            <img src="./img/page1/hicetea11.png" class="hicetea11"/>
            <img src="./img/page1/hietea12.png" class="hicetea12"/>
            <img src="./img/page1/hicetea10.png" class="hicetea10"/>
            <img src="./img/page1/startBtn.png" class="startbtn" id="startBtn"/>
        </div>
    </section>
    <img src="./img/mask.png" id="mask">
    <section class="page two" style="display: none;" id="min">
        <img src="./img/page2/bj.png" class="bj2"/>
        <div class="page2Info">
            <img src="./img/page2/title.png" class="title"/>
            <img src="./img/page2/pavilion.png" class="pavilion"/>
            <div class="HC">
                <img src="./img/page2/train.png" class="train"/>
                <img src="./img/page2/xain.png" class="xian"/>
            </div>
            <img class="hicetea15" src="./img/page2/hicetea15.png"/>
            <img src="./img/page2/taiyang.png?t=1" class="taiyang"/>
            <img src="./img/page2/hicetea16.png" class="hicetea16" aos="fade-right"/>
            <div class="click DJ1">
                <img src="./img/page2/hicetea17.png" class="wow DJ hicetea17" data-wow-iteration="1" data-wow-delay=".5s" data-wow-duration="3s"/>
                <img src="./img/page2/hicetea17-1.png" class="wow DJ hicetea17-1" data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s"/>
                <img src="./img/page2/hicetea17-2.png" class="wow DJ hicetea17-2" data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s"/>
            </div>
            <div class="people1">
                <img src="./img/page2/figure1.png" id="fBtn1-1">
                <img src="./img/page2/figure.png" id="fBtn1-2"/>
                <img src="./img/page2/figure1-1.png" id="fBtn1-3"/>
                <img src="./img/page2/sunmit2.png?t=1" class="prompt"/>
                <img src="./img/quan.png" class="scaleout" id="scaleout1"/>
                <img src="./img/quan.png" class="scaleout" id="scaleout2"/>
                <img src="./img/quan.png" class="scaleout" id="scaleout3"/>
            </div>
            <script>
                $("#scaleout3").on('click',function(){
                    $(".hicetea17").hide();
                    $(".hicetea17").removeClass("fadeIn");
                    $(".hicetea17-2").hide();
                    $(".hicetea17-2").removeClass("fadeIn");
                    $(".hicetea17-1").show();
                    $(".hicetea17-1").css("opacity",1);
                    $(".hicetea17-1").addClass("fadeIn");
                })
                $("#scaleout2").on("click",function(){
                    $(".hicetea17-1").hide();
                    $(".hicetea17-1").removeClass("fadeIn");
                    $(".hicetea17").hide();
                    $(".hicetea17").removeClass("fadeIn");
                    $(".hicetea17-2").show();
                    $(".hicetea17-2").addClass("fadeIn");
                    $(".hicetea17-2").css("opacity",1);
                })
                $("#scaleout1").on("click",function(){
                    $(".hicetea17-2").hide();
                    $(".hicetea17-2").removeClass("fadeIn");
                    $(".hicetea17-1").hide();
                    $(".hicetea17-1").removeClass("fadeIn");
                    $(".hicetea17").show();
                    $(".hicetea17").addClass("fadeIn");
                    $(".hicetea17").css("opacity",1);
                })
            </script>
            <img src="./img/page2/hicetea18.png" class="wow fadeInRight hicetea18" data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s"/>
            <div class="click DJ2">
                <img src="./img/page2/hicetea19.png" class="wow DJ hicetea19" data-wow-iteration="1" data-wow-delay=".5s" data-wow-duration="3s"/>
                <img src="./img/page2/hicetea19-1.png" class="wow DJ hicetea19-1"  data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s"/>
                <img src="./img/page2/hicetea19-2.png" class="wow DJ hicetea19-2"  data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s"/>
            </div>
            <div class="people2">
                <img src="./img/page2/figure2.png" id="fBtn2-1"/>
                <img src="./img/page2/figure2-1.png" id="fBtn2-2"/>
                <img src="./img/page2/figure2-2.png" id="fBtn2-3"/>
                <img src="./img/page2/sunmit2.png?t=1" class="prompt"/>
                <img src="./img/quan.png" class="scaleout" id="scaleout4"/>
                <img src="./img/quan.png" class="scaleout" id="scaleout5"/>
                <img src="./img/quan.png" class="scaleout" id="scaleout6"/>
            </div>
            <script>
                $("#scaleout6").on('click',function(){
                    $(".hicetea19").hide();
                    $(".hicetea19").removeClass("fadeIn");
                    $(".hicetea19-2").hide();
                    $(".hicetea19-2").removeClass("fadeIn");
                    $(".hicetea19-1").show();
                    $(".hicetea19-1").css("opacity",1);
                    $(".hicetea19-1").addClass("fadeIn");
                })
                $("#scaleout5").on("click",function(){
                    $(".hicetea19-1").hide();
                    $(".hicetea19-1").removeClass("fadeIn");
                    $(".hicetea19").hide();
                    $(".hicetea19").removeClass("fadeIn");
                    $(".hicetea19-2").show();
                    $(".hicetea19-2").addClass("fadeIn");
                    $(".hicetea19-2").css("opacity",1);
                })
                $("#scaleout4").on("click",function(){
                    $(".hicetea19-2").hide();
                    $(".hicetea19-2").removeClass("fadeIn");
                    $(".hicetea19-1").hide();
                    $(".hicetea19-1").removeClass("fadeIn");
                    $(".hicetea19").show();
                    $(".hicetea19").addClass("fadeIn");
                    $(".hicetea19").css("opacity",1);
                })
            </script>
            <img src="./img/page2/hicetea20.png" class="wow fadeInRight hicetea20" data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s"/>
            <div class="click DJ3">
                <img src="./img/page2/hicetea21.png" class="DJ hicetea21 wow" data-wow-iteration="1" data-wow-delay=".5s" data-wow-duration="3s"/>
                <img src="./img/page2/hicetea21-1.png" class="DJ hicetea21-1 wow"  data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s"/>
                <img src="./img/page2/hicetea21-2.png" class="DJ hicetea21-2 wow"  data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s"/>
            </div>
            <div class="people3">
                <img src="./img/page2/figure4-2.png" id="fBtn4-1"/>
                <img src="./img/page2/figure4-1.png" id="fBtn4-2"/>
                <img src="./img/page2/figure4.png" id="fBtn4-3"/>
                <img src="./img/quan.png" class="scaleout" id="scaleout7"/>
                <img src="./img/quan.png" class="scaleout" id="scaleout8"/>
                <img src="./img/quan.png" class="scaleout" id="scaleout9"/>
            </div>
            <img src="./img/page2/sunmit2.png?t=1" class="prompt3"/>
            <script>
                $("#scaleout9").on('click',function(){
                    $(".hicetea21").hide();
                    $(".hicetea21").removeClass("fadeIn");
                    $(".hicetea21-2").hide();
                    $(".hicetea21-2").removeClass("fadeIn");
                    $(".hicetea21-1").show();
                    $(".hicetea21-1").css("opacity",1);
                    $(".hicetea21-1").addClass("fadeIn");
                })
                $("#scaleout8").on("click",function(){
                    $(".hicetea21-1").hide();
                    $(".hicetea21-1").removeClass("fadeIn");
                    $(".hicetea21").hide();
                    $(".hicetea21").removeClass("fadeIn");
                    $(".hicetea21-2").show();
                    $(".hicetea21-2").addClass("fadeIn");
                    $(".hicetea21-2").css("opacity",1);
                })
                $("#scaleout7").on("click",function(){
                    $(".hicetea21-2").hide();
                    $(".hicetea21-2").removeClass("fadeIn");
                    $(".hicetea21-1").hide();
                    $(".hicetea21-1").removeClass("fadeIn");
                    $(".hicetea21").show();
                    $(".hicetea21").addClass("fadeIn");
                    $(".hicetea21").css("opacity",1);
                })
            </script>
            <img src="./img/page2/figure5.png" id="fBtn5" class="animated"/>
            <img src="./img/page2/tree.png" class="tree"/>
            <img src="./img/page2/hicetea22.png" class="hicetea22 wow fadeInRight" data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s"/>
            <img src="./img/page2/hicetea23.png" class="hicetea23 wow" data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s"/>
            <img src="./img/page2/sunmit2.png?t=1" class="prompt4"/>
            <img src="./img/quan.png" class="scaleout" id="scaleout10"/>
            <img src="./img/page2/hicetea24.png" class="hicetea24 wow fadeIn" data-wow-offset="20" data-wow-iteration="1" data-wow-delay="3s" data-wow-duration="2s"/>
            <img src="./img/page2/hicetea25.png" class="hicetea25 wow fadeInRight" data-wow-offset="20" data-wow-iteration="1" data-wow-delay="3.5s" data-wow-duration="3s"/>
            <img class="wow fadeInLeftBig hicetea27" data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="3s" src="./img/page2/hicetea27.png"/>
            <img src="./img/page2/hicetea26.png" class="hicetea26 wow fadeIn" data-wow-iteration="1" data-wow-delay="5.5s" data-wow-duration="3s"/>
        </div>
    </section>
    <section class="page loading">
        <div class="loadingInfo">
            <img src="./img/fenxaing.jpeg"/>
            <p id="p">0%</p>
        </div>
    </section>
    <script src="./js/TweenMax.min.js"></script>
    <script src="./js/aos.js"></script>
    <script src="./js/index.js"></script>
    <script>
        $("#scaleout10").on("click",function(){
            $(".hicetea23").show();
            $(".hicetea23").addClass("fadeIn");
            $(".hicetea23").css("opacity",1);
        })
        AOS.init({
			easing: 'ease-out-back',
			duration: 1000
		});
        // if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        //     new WOW().init();
            
        //     $('body').bind('touchmove', function(el) { 
        //     if($(this).scrollTop()==0||$(this).scrollTop()==$('#min').height()){
        //         if(e.preventdefault()){
        //             e.preventdefault();
        //         }else{
        //             window.event.returnValue == false;
        //         }
                
        //     } 
        //         console.log($(this).scrollTop()); // 计算你的屏幕高度
        //     });
        // };
        //new WOW().init();
        // document.getElementById('min').onclick = function(){
        //     let img<link rel="stylesheet" href="./css/animate.css"/>
        // }
    </script>
    
    <div style="display:none">
            <?php include_once "wechat.php"; ?>
    </div>
</body>
</html>
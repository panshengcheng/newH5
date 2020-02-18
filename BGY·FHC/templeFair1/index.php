<div style="display:none">
    <?php include_once "wechat.php"; ?>
</div>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="user-scalable=no width=750 maximum-scale=1.0"/>
    <meta content="telephone=no" name="format-detection">
    <title>碧桂园|凤凰游园会</title>
    <link rel="stylesheet" href="css/dragdealer.css"/>
    <link rel="stylesheet" href="css/index.css"/>
</head>
<body>

<audio id="bg" src="./mp3/bj.mp3"  preload="auto"  style="display: none">
</audio>
<div id="loadIng">
    <div class="loading">
        <span></span>
    </div>
    <div id="loadBox">
        <div id="baifenbi">0%</div>
    </div>
</div>
    <img src="./img/Music.png" alt="" id="music">
    <img src="./img/btn.png" alt="" id="backTop" class="backTop">
    <img src="./img/btn1.png" alt="" id="fx" class="fx">
    <div id="box" class="dragdealer" >
        <div class="handle" id="bar">
            <img src="./img/bj/1-1.gif" alt="" style="width: 100%">
            <img src="./img/bj/2-2.gif" alt="" style="width: 100%">
            <img src="./img/bj/3-3.gif" alt="" style="width: 100%">
            <img src="./img/bj/4-4.gif" alt="" style="width: 100%">
            <img src="./img/bj/5-5.gif" alt="" style="width: 100%">
            <img src="./img/bj/6.jpg" alt="" style="width: 100%">
            <div class="trainInfo">
                <img src="./img/yuansu/tiran.gif" alt="火车" class="train" id="train1"/>
            </div>
            <div class="page one">
                <img src="./img/yuansu/01/denglong.png" class="denglong"/>
                <img src="./img/yuansu/01/suangguang.png" class="suangguang"/>
            </div>
           <div class="page two">
                <img src="./img/yuansu/02/hubian.png" class="huabian" id="title2"/>
                <img src="./img/yuansu/06/yanhua1.png" class="yanhua1"/>
                <img src="./img/yuansu/06/yanhua2.png" class="yanhua2"/>
            </div>
           <div class="page three">
                <img src="./img/yuansu/03/yinghua.png" class="yinghua" id="title3">
                <img src="./img/yuansu/03/qifu.png" class="qifu"/>
                <img src="./img/yuansu/06/yanhua1.png" class="yanhua1"/>
                <img src="./img/yuansu/06/yanhua2.png" class="yanhua2"/>
            </div>
            <div class="page four">
                <img src="./img/yuansu/04/shu.png" class="shu"/>
                <img src="./img/yuansu/04/denglong.png" class="denglong"/>
                <img src="./img/yuansu/06/yanhua1.png" class="yanhua1"/>
                <img src="./img/yuansu/06/yanhua2.png" class="yanhua2"/>
            </div>
            <div class="page five">
                <img src="./img/yuansu/05/qifu.png" class="qifu" id="title5"/>
                <img src="./img/yuansu/05/dengshu.png" class="dengshu"/>
                <img src="./img/yuansu/06/yanhua1.png" class="yanhua1"/>
                <img src="./img/yuansu/06/yanhua2.png" class="yanhua2"/>
            </div>
            <div class="page six">
                <img src="./img/yuansu/06/shu1.png" class="shu1" id="title6"/>
                <img src="./img/yuansu/06/erweima.png" class="erweima"/>
                <img src="./img/yuansu/06/fx.png" class="fxBtn" id="fx1"/>
                <img src="./img/yuansu/06/denglong.png" class="denglong"/>
                <img src="./img/yuansu/06/yanhua1.png" class="yanhua1"/>
                <img src="./img/yuansu/06/yanhua2.png" class="yanhua2"/>
            </div>
            <div class="quanW" id="quan2" data-num="2">
              <div class="quanN"></div>
                <img src="./img/shou.gif" alt="" class="shou">
            </div>
            <div class="quanW" id="quan3" data-num="3">
                -<div class="quanN"></div>
                <img src="./img/shou.gif" alt="" class="shou">
            </div>
            <div class="quanW" id="quan4" data-num="4">
                <div class="quanN"></div>
                <img src="./img/shou.gif" alt="" class="shou">
            </div>
            <div class="quanW" id="quan5" data-num="5">
                <div class="quanN"></div>
                <img src="./img/shou.gif" alt="" class="shou">
            </div>
            <div class="quanW" id="quan6" data-num="6">
                <div class="quanN"></div>
                <img src="./img/shou.gif" alt="" class="shou">
            </div>
            <div class="quanW" id="quan7" data-num="7">
                <div class="quanN"></div>
                <img src="./img/shou.gif" alt="" class="shou">
            </div>
            <div class="quanW" id="quan8" data-num="8">
                <div class="quanN"></div>
                <img src="./img/shou.gif" alt="" class="shou">
            </div>
            <div class="quanW" id="quan9" data-num="9">
                <div class="quanN"></div>
                <img src="./img/shou.gif" alt="" class="shou">
            </div>
        </div>
        
    </div>
    <div class="mask" id="mask2" >
        <div class="maskBox" style="width: 400px;height: 562px">
            <img src="./img/yuansu/mask/P1.png" alt="">
            <span class="close" style="top: 500px;right: 5px"></span>
        </div>
    </div>
    <div class="mask" id="mask3" >
        <div class="maskBox" style="width: 400px;height: 562px">
            <img src="./img/yuansu/mask/P3.png" alt="">
            <span class="close" style="top: 500px;right: 5px"></span>
        </div>
    </div>
    <div class="mask" id="mask4">
        <div class="maskBox" style="width: 400px;height: 562px">
            <img src="./img/yuansu/mask/P4.png" alt="">
            <span class="close" style="top: 500px;right: 5px"></span>
        </div>
    </div>
    <div class="mask" id="mask5" >
        <div class="maskBox" style="width: 400px;height: 562px">
            <img src="./img/yuansu/mask/P6.png" alt="">
            <span class="close" style="top: 500px;right: 5px"></span>
        </div>
    </div>
    <div class="mask" id="mask6" >
        <div class="maskBox" style="width: 400px;height: 562px">
            <img src="./img/yuansu/mask/P7.png" alt="">
            <span class="close" style="top: 500px;right: 5px"></span>
        </div>
    </div>
    <div class="mask" id="mask7" >
        <div class="maskBox" style="width: 400px;height: 562px">
            <img src="./img/yuansu/mask/P8.png" alt="">
            <span class="close" style="top: 500px;right: 5px"></span>
        </div>
    </div>
    <div class="mask" id="mask8" >
        <div class="maskBox" style="width: 400px;height: 562px">
            <img src="./img/yuansu/mask/P5.png" alt="">
            <span class="close" style="top: 500px;right: 5px"></span>
        </div> 
    </div>
    <div class="mask" id="mask9" >
        <div class="maskBox" style="width: 400px;height: 562px">
            <img src="./img/yuansu/mask/P10.png" alt="">
            <span class="close" style="top: 500px;right: 5px"></span>
        </div> 
    </div>
    <div class="mask" id="maskFx">
        <img src="./img/fx.png" alt="" style="width: 100vw;height:100vh;position: absolute;right: 0px;
top: 0px">
    </div>
<script src="lib/jquery-1.8.3.min.js"></script>
<script src="lib/hammer.min.js"></script>
<script src="lib/dragdealer.js"></script>
<script src="./lib/TweenMax.min.js"></script>
<!-- <script src="./lib/TimelineMax.js"></script> -->
<script src="js/index.js"></script>

</body>
</html>
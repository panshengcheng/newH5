<div style="display:none">
        <?php include_once "wechat.php"; ?>
</div>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>抽奖页面</title>
    <link rel="stylesheet" href="./css/index.css"/>
    <script src="./js/jquery.min.js"></script>
</head>
<body>
    <audio src="../invitation02/mp3/gq.mp3"></audio>
    <section class="fixedPage">
        <button id="xBtn">活动详情</button>
        <button id="pBtn">排名列表</button>
    </section>
    <!-- 活动首页 -->
    <section class="homePage">
        <img id="them" src="http://placehold.it/300x100" alt="主标"/>
        <div class="buttonInfo">
            <img id="infoBtn" src="http://placehold.it/70x30" alt="活动详情按钮">
            <img id="startBtn" src="http://placehold.it/70x30" alt="开始按钮按钮">
        </div>
        <!-- <img id="ruleMask" src="http://placehold.it/250x400" alt="活动规则信息"> -->
    </section>
    <!-- 抽奖页 -->
    <section class="turantablePage">
        <canvas id="canvas"></canvas>
    </section>
    <!-- 活动介绍页 -->
    <section class="troducePage">
            <div class="troduce">
                <img id="cBtn" src="./img/clon.png"/>
                <img id="conner" src="http://placehold.it/300x100"/>
            </div>
    </section>
    <!-- 活动中奖者名单 -->
    <section class="gainerPage">

    </section>
    <!-- 我的奖品页 -->
    <section class="myGainerPage">

    </section>
    <!-- 加载页 -->
    <section class="loading">
        <img src="http://placehold.it/640x1080" alt="">
        <div id="loadInfo">
            <img src="http://placehold.it/100x100" alt="" id="loadImg">
            <p id="loadNum">已加载0%</p>
        </div>
    </section>
    <script src="./js/pixi5.min.js"></script>
    <script src="./js/TweenMax.min.js"></script>
    <script src="./js/turntable.js"></script>
</body>
</html>
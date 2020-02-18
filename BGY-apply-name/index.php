<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>碧桂园·凤凰城</title>
    <div style="display:none">
        <?php include_once "wechat.php"; ?>
    </div>
    <link rel="stylesheet" href="./css/index.css?t=2"/>
</head>
<body>
    <div class="music">
        <audio id="bgMusic" src="./mp3/bj.mp3?t=1" autoplay="autoplay" preload="true" loop="loop"></audio>
    </div>
    <div class="container" id="onPage">
        <img src="./image/page1.png" alt="背景页" id="bj">
        <div class="info">
            <input type="text" maxlength="5" id="name" placeholder="请输入您的姓名"/>
            <input type="number" id="phone" placeholder="请输入您的联系方式"/>
            <img id="submit" src="./image/submit.png"/>
        </div>
    </div>
    <div class="success" id="success" style="display: none;">
        <img src="./image/page2.png"/>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/index.js?t=3"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>声音沙盘邀您共鉴原乡</title>
    <link rel="stylesheet" href="./css/index2.css">
    <script src="./libs/jquery.min.js"></script>
</head>
<body>
    
    <div class="page2">
        <img id="bj" src="./image/640x1900.png" alt="">
        <div class="radio">
            <img id="page1-1" src="./image/zj.png" alt="">
            <img id="page1-2" src="./image/fj.png" alt="">
            <img id="startBtn" src="./image/btn.png" alt="">
        </div>
        <div class="yf">
             <img class="yf1" src="./image/yinying.png" alt="">
             <img class="yf2" src="./image/yinying.png" alt="">
             <img class="yf3" src="./image/yinying.png" alt="">
             <img class="yf4" src="./image/yinying.png" alt="">
        </div>
    </div>
    <audio id="music" src="../shougang/invitation02/mp3/gq.mp3"></audio>
    <script>
        $(".yf").hide();
        $("#startBtn").on("click",startMusic);
        let music = document.getElementById("music");
        function startMusic(){
            if(music.paused){
                $(".yf").show();
                $("#page1-1").addClass("musicPlay");
                $("#page1-2").removeClass("musicFJStop");
                $("#page1-2").addClass("musicFJPlay");
                music.play();
            }else{
                $(".yf").hide();
                $("#page1-2").removeClass("musicFJPlay");
                $("#page1-2").addClass("musicFJStop");
                $("#page1-1").removeClass("musicPlay");
                music.pause();
            }
        }
    </script>
    <div style="display:none;">
        <?php
            include_once "wechat.php";
        ?>
    </div>
</body>
</html>
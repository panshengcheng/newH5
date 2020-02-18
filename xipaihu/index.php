<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>中国铁建·西派府艺术品质臻装</title>
    <link rel="stylesheet" href="./css/index.css"/>
    <script src="./js/jquery.min.js"></script>
</head>
<body>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="./img/H5-P9.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./img/H5-P1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./img/H5-P2.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./img/H5-P3.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./img/H5-P4.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./img/H5-P5.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./img/H5-P6.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./img/H5-P7.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./img/H5-P8.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./img/one.jpg" id="sun"/>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="tubiao">
            <img src="./img/arrow.png" style="width:40px;height:30px; top:93%; left:43%;" id="array" class="resize">
        </div>
    </div>
    <script src="./js/swiper.min.js"></script>
    <script>
        let swiper = new Swiper(".swiper-container",{
            direction: 'vertical', // 垂直切换选项
           
            on:{
                slideChangeTransitionStart:function(){
                    if(this.activeIndex === 9){
                        $("#array").hide();
                    }else{
                        $("#array").show();
                    }
                }
            }
            
        })
    </script>
    <?php
        include_once "wechat.php";
    ?>
</body>
</html>
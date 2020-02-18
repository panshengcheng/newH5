<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    <?php
    include_once "res.php";
    ?>
</head>

<body>
        
    <div class="box">
        <img class="img-fluid" src="http://wx.uvcsi.com/html5/sunac/vote/lib/imgs/souye.jpg">
        <!-- <div class="container">
            <div class="row">
                <div class="col no-padding">
                    <img class="img-fluid" src="http://placehold.it/640x1080">
                </div>
            </div>
        </div>
         <div class="container margin-tb-15"> 
            <div class="row">
                <div class="col">
                    <h4>活动介绍</h4>
                    <p class="card-text">
                        一个粉丝，每日只能投一票,次日还可以再投一票，以此累推！
                    </p>
                    <p class="card-text">
                        排名顺序以得票数进行降序，同票数以报名时间靠前排列
                    </p>
                    <p class="card-text">
                        底部懒加载：排名列表，每次向服务器服务器获取10位用户，当滚动条到达底部时再向服务器索取10个用户，直到排名列表获取完为止，当启用搜索功能时候，底部懒加载功能被禁止；
                    </p>
                    <p class="card-text">
                        模糊搜索：搜索用户姓名，采用模糊匹配，只要包含关键字就会匹配成功
                    </p>
                    <p class="card-text">
                        拍照，当照片大于屏幕宽度则等比例缩小，否则不变，根据手机的exif信息获取照片方向，自动旋转，因设备支持而异，如果不能获取exif，也可以通过UI按钮组进行手动控制
                    </p>
                    <p class="card-text">
                        选手与粉丝都可以分享选手的投票页面直接给其他人投票，分享文字包含有粉丝与选手、活动等命名规则
                    </p>
                </div>
            </div>
        </div> -->
    </div>
    <?php include_once "wechat.php"; ?>
    <?php include "footer.php"; ?>
</body>

</html>
<?php
include_once "E:\www\wx.uvcsi.com\api\wechatShare\wechat.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    <script src="js/jquery.min.js"></script>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            width: 100%;
            height: 100%;
        }
        .images img{
            width: 100vw;
            height: 100vh;
        }
        .images .orderId{
            position: absolute;
            top: 51.5vh;
            left: 69.5vw;
            width: 30px;
            border: 0px;
            color: red;
            font-size: 20px;
            background-color: rgba(255,255,255,0);
        }
    </style>
</head>
<body>
    <div class="images">
        <img src="./img/cata/cata07.jpg?t=4" alt="预约成功"/>
        <input type="text" id="orderId" class="orderId" disabled="disabled" value="0"/>
    </div>
    <script>
        var url = location.search;
        if(url.indexOf("?")!=-1){
            let str = url.substr(1);
            let strs = str.split("=");
            let id = strs[1];
            //给input赋值
            $("#orderId").val(id);
        }
    </script>
    <?php
    include_once "cata_wechat.php";
    ?>
</body>
</html>
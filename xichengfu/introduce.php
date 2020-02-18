<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>贵高速·花溪26°</title>
    <style>
        *{
            margin: 0;
        }
        html body{
            overflow-x: hidden;
            width: 100vw;
        }
        .info{
            width: 100%;
            position: relative;
        }
        .introduce{
            width: 100%;
        }
        .btn{
            position: fixed;
            right: 5%;
            bottom: 5%;
            width: 50px;
            height: 50px;
            border: 1px solid rgba(255,255,255,0.5);
            border-radius: 50%;
            background-color: rgba(255,255,255,0.5);
            text-align: center;
            padding: 2%;
            font-size: 18px;
        }
        .btn a{
            color: white;
            text-decoration: none;
        }
        /**
            图标
        */
        #array {
            position: fixed;
            z-index: 999;
            -webkit-animation: start 1.5s infinite ease-in-out;
            
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
    </style>
</head>
<body>
    <div class="info">
        <img class="introduce" src="./img/ZK.jpg"/>
    </div>
    <div class="tubiao">
        <img src="./img/arrow.png" style="width:41px;height:30px; top:93%; left:41%;" id="array" class="resize">
    </div>
    <div class="btn">
        <a href="./messageInfo.php">
            参与活动
        </a>
    </div>
    <script src="./lib/jquery.min.js"></script>
    <script>
        $(window).scroll(function(){
            let scrollTop = $(this).scrollTop();
            let scrollHeight=$(document).height();
            let windowHeight=$(this).height();
            if(scrollTop+windowHeight==scrollHeight){
                $(".tubiao").hide();
            }else{
                $(".tobiao").show();
            }
        })
    </script>
    <div style="display:none">
        <?php include_once "wx_wechat.php"; ?>
    </div>
</body>
</html>
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
        <div class="container">
            <div class="row">
                <div class="col no-padding">
                    <img class="img-fluid" src="http://wx.uvcsi.com/html5/sunac/vote/lib/imgs/paiming.jpg">
                </div>
            </div>
        </div>
        <div class="container margin-tb-15">
            <div class="row">
                <div class="col-12">
                    <div class="form flex-x-center">
                        <input id="name" type="text" class="form-control" placeholder="请输入选手姓名" maxlength="5" />
                        <button id="search" class="btn btn-primary"><i class="fa fa-search"></i></button>
                        <button id="close" class="btn btn-danger" style="display:none;">
                            <i class="fa fa-close"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row" id="rankingContent">
            </div>
        </div>
    </div>
    <?php include_once "wechat.php"; ?>
    <?php include "footer.php"; ?>
</body>

</html>
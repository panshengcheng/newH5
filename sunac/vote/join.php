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
    <input type="text" id="player_id" hidden value="<?php echo $_GET["id"];?>">
    <div class="box">
        <div class="fix-box">
            <div id="control" class="fill">
                <canvas id="canvas"></canvas>
                <div id="userMessage" class="none">
                    <div class="row">
                        <div class="col">
                            <input id="name" type="text" placeholder="请输入姓名" maxlength="5" class="form-control" />
                        </div>
                        <div class="col">
                            <input id="phone" type="number" placeholder="请输入电话" maxlength="11" class="form-control" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col offlin-activity">  
                            <input id="age" type="number" placeholder="请输入您的年龄" min="1" max="2" maxlength="2" class="form-control number" />
                        </div>
                        <div class="col fiont-color">   
                            <div>是否参加线下活动：</div>
                            <input type="radio" name="activity" value="是" checked="checked">是
                            <input type="radio" name="activity" value="否">否
                        </div>
                    </div>
                    <textarea id="message" type="text" placeholder="请输入一句座右铭" maxlength="50" class="form-control"></textarea>
                </div>
                <img id="preview" src="" alt="" class="wImg">
                <div class="btn-group none" id="btn-control">
                    <button class="btn btn-primary" id="sPlus">
                        <i class="fa fa-search-plus"></i>
                    </button>
                    <button class="btn btn-primary" id="sMinus">
                        <i class="fa fa-search-minus"></i>
                    </button>
                    <button class="btn btn-primary" id="rLeft">
                        <i class="fa fa-rotate-left"></i>
                    </button>
                    <button class="btn btn-primary" id="rRight">
                        <i class="fa fa-rotate-right"></i>
                    </button>
                    <button class="btn btn-primary" id="reset">
                        <i class="fa fa-eraser"></i>
                    </button>
                </div>
                <div id="btn-end" class="none">
                    <button class="btn btn-info btn-lg" id="previewBtn">生成</button>
                    <button class="btn btn-dark btn-lg" id="commitBtn">提交</button>
                </div>
            </div>
            <div id="select" class="fill flex-center">
                <div id="camera" class="form-group">
                    <label class="fa fa-camera fa-3x" for="inputfile">
                    </label>
                    <input type="file" id="inputfile" accept="image/*" hidden>
                </div>
            </div>
        </div>
    </div>
    <?php include_once "wechat.php"; ?>
    <?php include "footer.php"; ?>
</body>

</html>
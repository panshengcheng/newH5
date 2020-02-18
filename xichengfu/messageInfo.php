<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>贵高速·花溪26°</title>
    <div style="display:none">
        <?php include_once "wechat.php"; ?>
    </div>
    <style type="text/css" media="screen">
        *{margin:0;padding:0;list-style-type:none;}
        a,img{border:0;}
        html{ 
            overflow: hidden; 
        }
        body{width:100vw; height: 100vh;font:12px/180% Arial, Helvetica, sans-serif, "新宋体";background: url(./img/background.gif) no-repeat; background-size: 100% 100%;overflow-y: hidden;padding-left: calc(100vw - 100%);}
        .video{width: 100%;position: relative;}
        #video{width: 100%; height: 30vh;}
        .magInfo{width: 100%; height: 70vh;position: relative;}
        .demo{width:100%;margin:10px auto 10PX auto;}
        .demo .name{position: relative; width: 60%; height: 30px;border: 1px solid #000; border-radius: 10px;padding-left: 20px;display:inline-block}
        .demo .query{position: absolute;width: 10%;height: 50px;top: -1.8%;}
        .demo h2{font-size:16px;color:#333;height:52px;line-height:24px;}
        /* sidebar */
        #sidebar{color:white;background:rgba(255,255,255,0);float:left;width:100%;margin-top: 3%;}
        /* .spy{padding-left: 10%;margin-top: 10%;}
        #sidebar li{height:60px;overflow:hidden;}
        #sidebar li h5{color:#A5A9AB;font-size:1em;margin-bottom:0.5em;}
        #sidebar li h5 a{color:wheat;text-decoration:none;}
        #sidebar li .like{float:right;margin-right:38px;display:inline;background: url(./img/xin.png) no-repeat; background-size: 100% 100%;width: 30px;height: 30px;}
        #sidebar li .likes{float:right;margin-right:38px;display:inline;background: url(./img/xin1.png) no-repeat; background-size: 100% 100%;width: 30px;height: 30px;}
        #sidebar li .info{color:wheat;font-size:1em;}
        #sidebar .spyWrapper{height:100%;overflow:hidden;position:relative;} */
        .huadong {width: 90%;height:100%;padding: 0.5rem 0 0.3rem 0; position:relative;font: 12px/1.5 "Hiragino Sans GB","Microsoft YaHei",simsun;margin:0 auto;}
        .huadong .huabox {  margin:0 auto; width: 100%; line-height: 4rem;}
        .huadong .notice_active {float: left;width: 100%;height: 70vh;padding: 0;overflow: hidden;position: relative;}
        .huadong .notice_active li{list-style-type:none;line-height: 2.4rem;overflow: hidden;}
        .huadong .notice_active li.notice_active_ch span {color:white;font-size:1rem;display: block;overflow: hidden; width:70%;float: left;
        overflow: hidden;margin:0 0 1rem 0;line-height: 30px;}
        .huadong .notice_active li.notice_active_ch em {text-align:right;float:right;color:white;font-size:0.8rem;font-style:normal; width: 25%;margin-right: 5%; }
        .huadong .notice_active li.notice_active_ch em .like{float: right;margin: 0 auto;width: 6vw;height: 3vh;margin-top: 13%; background: url(./img/xin.png) no-repeat; background-size: 100% 100%;}
        .huadong .notice_active li.notice_active_ch em .likes{float: right;margin: 0 auto;width: 6vw;height: 3vh;margin-top: 13%; background: url(./img/xin1.png) no-repeat; background-size: 100% 100%;}
        .huadong .notice_active li.notice_active_ch em strong{margin-right: 10%;}
        .apply{position: fixed;width: 30px;height: 30px;border: 1px solid wheat;border-radius: 50%;text-align: center;margin: 0 auto;right: 3%;bottom: 1%;z-index: 10; background-color: wheat;color: black;font-size: 12px;padding:5px 10px 10px 10px;}
        .lianjie{bottom: 9%;color: blueviolet;}
        .more{bottom: 1%;}
        .more a{text-decoration: none;}
        .myInfo{width: 100vw;height: 100vh;background-color: rgba(0,0,0,0.5);position: absolute;top:0;z-index: 100;}
        .popOut{border-radius: 15px;text-align: center;width: 80%;height: 55vh; position: relative;top: 15%;margin: auto; background-color: rgba(255,255,255,0.9);}
        .close{ font-size: 30px; border: 1px solid #000;border-radius: 50%;position: absolute;right: 10px;top: 10px; padding: 6px;}
        .tableInfo{position: absolute;top: 40px;line-height: 30px;text-align: center;width: 100%;}
        .tableInfo input{height: 30px;border-radius: 10px;padding-left: 10px;margin-bottom: 7%;}
        .text{width: 73%;height: 70px;border-radius: 10px;font-size: 18px;}
        .login{width: 87%;text-align: center;letter-spacing: 20px;font-size: 20px;margin-top: 5%;border-radius: 10px;height: 35px;background-color: cadetblue;}
        .alertInfo{position: absolute;top: 0vh;left: 0vw;width: 100vw;height: 100vh;background-color: rgba(0,0,0,0.8);display:none}
        .alertInfo img{position: absolute;top: 30vh;left: 10vw;width: 81vw;height: 33vh;}
        </style>
        <link rel="stylesheet" href="./css/index.css"/>
        <script type="text/javascript" src="./lib/jquery.min.js"></script>
        
</head>
<body>
    <div class="wap-app">
        <div class="video">
            <video id="video" src="./mp4/xichengfu2.mp4?t=2"  style="object-fit: fill" muted="false" autoplay="autoplay" loop
        x5-playsinline="" playsinline="" webkit-playsinline=""  x-webkit-airplay="allow" controls 
            >
            您当前浏览器不支持该视频播放
            </video>
        </div>
        <div class="magInfo">
            <div class="demo">
                <div style="text-align:center;vertical-align:middle;">
                    <input type="text" id="name" class="name" placeholder="请输入呢称"/>
                    <img id="query" class="query" src="./img/query.png" alt="查找"/>
                </div>
                <div id="sidebar">
                    <div class="huadong">
                        <div class="huabox">
                            <div class="notice_active">
                                <ul id="ul">
                                    <!-- <li class="notice_active_ch">
                                        <span><strong>小王</strong><br/>滑动轮播1a去哦我我iwoi我i滑动轮播3滑</span>
                                        <em><span class="like" id="wx65387cc5f1ccc0ee" data-openid="1"></span><br/><strong>0</strong></em>
                                    </li>
                                    <li class="notice_active_ch">
                                        <span><strong>小强</strong><br/>滑动轮播2滑动轮播3</span>
                                        <em><span class="like"></span><br/><strong>0</strong></em>
                                    </li>
                                    <li class="notice_active_ch">
                                        <span><strong>小清</strong><br/>滑动轮播3滑动轮播3</span>    
                                        <em><span class="like"></span><br/><strong>0</strong></em>
                                    </li>
                                    <li class="notice_active_ch">
                                        <span><strong>康胶囊咖啡</strong><br/>滑动轮播1a去哦我我iwoi我i滑动轮播3滑</span>
                                        <em><span class="like"></span><br/><strong>0</strong></em>
                                    </li>
                                    <li class="notice_active_ch">
                                        <span><strong>能看见你付款</strong><br/>滑动轮播2滑动轮播3</span>
                                        <em><span class="like"></span><br/><strong>0</strong></em>
                                    </li>
                                    <li class="notice_active_ch">
                                        <span><strong>斯诺克</strong><br/>滑动轮播3滑动轮播3</span>    
                                        <em><span class="like"></span><br/><strong>0</strong></em>
                                    </li>
                                    <li class="notice_active_ch">
                                        <span><strong>是课件萨克</strong><br/>滑动轮播1a去哦我我iwoi我i滑动轮播3滑</span>
                                        <em><span class="like"></span><br/><strong>0</strong></em>
                                    </li>
                                    <li class="notice_active_ch">
                                        <span><strong>你看撒</strong><br/>滑动轮播2滑动轮播3</span>
                                        <em><span class="like"></span><br/><strong>0</strong></em>
                                    </li>
                                    <li class="notice_active_ch">
                                        <span><strong>妇女快乐的农</strong><br/>滑动轮播3滑动轮播3</span>    
                                        <em><span class="like"></span><br/><strong>0</strong></em>
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                    </div>  
                    <div class="apply more"><a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyNDc0MjYwMA==&scene=124#wechat_redirect">了解更多</a></div>
                    <div class="apply lianjie" id="apply">参与留言</div>
                </div>
            </div>
        </div>
        <div class="myInfo" style="display: none;">
            <div class="popOut" id="popOut">
                <span title="关闭" class="close" id="close"> x </span>
                <div class="tableInfo">
                    <caption><h3>报名留言</h3></caption>
                    <div>
                        昵称：
                        <input type="text" style="width: 70%;" id="myName" class="inp" placeholder="请输入用户名" />
                    </div>
                    <div>
                        电话：
                        <input type="number" style="width: 70%;" id='phone' class="inp" placeholder="请输入电话号码" />
                    </div>
                    <div>
                        留言：
                        <textarea maxlength='20' id="text" class="text" placeholder="最大只能输入20个字符"></textarea>
                    </div>
                    <div>
                        <button class="login" id="addMsg">提交</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="alertInfo">
            <img src="./img/alert.png"/>
        </div>
    </div>
    <script src="./js/alert.js"></script>
    <script src="./lib/TweenMax.min.js"></script>
    <script>
        //视频播放
        var myVid=document.getElementById("video");
        //其他移动端浏览器只能让用户自己触发
        $(window).on('touchstart', function(){
            $("video")[0].play();
            myVid.muted=false;
        });
        // 兼容微信(微信可以自动播放)
        document.addEventListener("WeixinJSBridgeReady", function () {
            $("video")[0].play();
            myVid.muted=false;
            plays();
        }, false);
        function plays(){
                document.getElementById('video').play();
        }
        //获取留言列表
        getMsgInfo();
        document.getElementById('query').addEventListener("touchend",getMsgInfo,false);
        function getMsgInfo(){
            let names =$('#name').val();
            $.ajax({
                url:"http://www.ulifecity.com:4088/getMsgUserAll",
                    type:"POST",
                    data:JSON.stringify({
                        name:names
                    }),
                    contentType: "application/json",
                    success:function(res){
                        let data = res.result;
                        if(res.code == 1){
                            $("#ul").html('')
                            if(data.length >0){
                                for(let i=0; i<data.length; i++){
                                    let li = document.createElement('li');
                                    li.className="notice_active_ch";
                                    let span = document.createElement('span');
                                    let strong = document.createElement('strong');
                                    strong.innerHTML=data[i].name;
                                    span.appendChild(strong);
                                    let br = document.createElement('br');
                                    span.appendChild(br);
                                    let p = document.createElement("p");
                                    p.innerHTML = data[i].message;
                                    span.appendChild(p);
                                    li.appendChild(span);

                                    let em = document.createElement('em');
                                    let span1 = document.createElement('span');
                                    span1.className="like";
                                    span1.id = data[i].openid;
                                    //span.data-openid = data[i].openid;
                                    em.appendChild(span1);
                                    let br1 = document.createElement('br');
                                    em.appendChild(br1); 
                                    let strong1 = document.createElement('strong');
                                    strong1.innerHTML=data[i].likes;
                                    em.appendChild(strong1);
                                    li.appendChild(em);
                                    $("#ul").append($(li));
                                }
                                if(data.length>5){
                                    gundong();
                                }
                                $('.like').on('click',addlike);
                            }else{
                                alert("没有查询到任何用户!");
                                
                            }
                            
                        };
                        
                    },
                    error:function(e){
                        console.log(e)
                    }
            })
        }

        let openID=$("#openid").val();
        alert(openID)
        //滚动
        function timer(opj){
            $(opj).find('ul').animate({
                marginTop : "-3.5rem"  
                },500,function(){  
                $(this).css({marginTop : "0.7rem"}).find("li:first").appendTo(this);  
            })  
        }
        //gundong();
        function gundong(){ 
            var num = $('.notice_active').find('li').length;
            if(num > 1){
            var time=setInterval('timer(".notice_active")',3500);
                $('.gg_more a').mousemove(function(){
                    clearInterval(time);
                }).mouseout(function(){
                    time = setInterval('timer(".notice_active")',3500);
                }); 
            }
            
            $(".news_ck").click(function(){
                location.href = $(".notice_active .notice_active_ch").children(":input").val();
            })
        };
        
        
        $('.like').on('click',addlike);
        function addlike(){
            let that = $(this).attr("id");
            if(!confirm('每人每天只能点一次赞')){
                
            }else{
                let flag = true;
                let bOpenid = $(this).attr("id");
                if(openID){
                    if(flag){
                        flag = true;
                        let likeTime = new Date().Format("yyyy-MM-dd");
                        $.ajax({
                            url:"http://www.ulifecity.com:4088/addLike",
                            type:"POST",
                            data:JSON.stringify({
                                openid:openID,
                                bOpenid:bOpenid,
                                likeTime:likeTime,
                            }),
                            contentType: "application/json",
                            success:function(res){
                                let data = res.result;
                                if(res.code == 1){
                                    alert('您已经点过赞了');
                                }else{
                                    $("#"+that).removeClass("like").addClass('likes');
                                    let num = $("#"+that).nextAll()[1].innerText;
                                    $("#"+that).nextAll()[1].innerHTML = parseInt(num) + 1;
                                    alert("点赞成功")
                                }
                            },
                            error:function(e){
                                console.log(e)
                            }
                        })
                    }else{
                        alert('请等待点赞结果');
                    }
                }
            }
        }
        //留言弹框
        document.getElementById('apply').addEventListener("touchend",function(){
            $(".myInfo").css("display","block");
        },false)
        document.getElementById('close').addEventListener("touchend", function(){
            $(".myInfo").css("display","none");
        },false)

        //添加留言信息
        $('#addMsg').on('click',addMsgUser);
        function addMsgUser(){
            let name = $('#myName').val();
            let phone = $('#phone').val();
            let msg = $("#text").val();
            let msgTime = new Date().Format("yyyy-MM-dd HH:mm:ss");
            let flag = true;
            let mobile = /^1[\d]{10}$/;
            let str = /^[\u4e00-\u9fa5]{2,5}$/;
            if(!str.test(name)){
                alert('请填写正确的姓名');
                return;
            }
            if(!mobile.test(phone)){
                alert("请填写正确的手机号");
                return;
            }
            if(!msg.length>=20){
                alert("您的留言过长");
                return;
            }
            if(openID){
                if(flag){
                    $.ajax({
                        url:"http://www.ulifecity.com:4088/addMsgUser",
                        type:"POST",
                        data:JSON.stringify({
                            name:name,
                            phone:phone,
                            openid:openID,
                            message:msg,
                            msgTime:msgTime
                        }),
                        contentType: "application/json",
                        success:function(res){
                            let data = res.result;
                            if(res.code == 1){
                                $(".myInfo").css("display","none");
                                alert('您已经提交过留言了');
                            }else{
                                $(".myInfo").css("display","none");
                                $(".alertInfo").css("display","block");
                                getMsgInfo();
                            }
                        },
                        error:function(e){
                            console.log(e)
                        }
                    })
                }else{
                    alert('请等待提交结果');
                }
            }else{
                alert("无法获取您的个人信息，请刷新页面");
            }
            
        }
        //提示消息
        $(".alertInfo > img").on("click",function(){
            $(".alertInfo").css("display","none");
        })
        //监听键盘点击事件:背景被压缩，注：图片定位改为absolute，width 100%
        let popOut = $("#popOut").height();
        $(window).resize(function(){
            $("#popOut").height(popOut)
        })
        //let noneId = document.getElementById("popOut");
        const inputItems = document.querySelectorAll("input");
            inputItems.forEach(function(ele){
            ele.addEventListener("blur",function(){
                window.scrollTo(0,0)
                //noneId.style.display ="block";
            })
        });
        const textarea = document.querySelectorAll("textarea");
            textarea.forEach(function(ele){
                ele.addEventListener("blur",function(){
                    window.scrollTo(0,0)
                    //noneId.style.display ="block";
                })
        });
        //键盘遮挡事件
        $('input[type="text"],textarea').on('click', function () {
            var target = this;
            setTimeout(function(){
                
                  //target.scrollIntoView();
                  console.log('scrollIntoViewIfNeeded');
                    //noneId.style.display ="none";
                },40);
          });
        Date.prototype.Format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "H+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    </script>
</body>
</html>
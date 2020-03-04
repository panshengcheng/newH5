
window.onload=init();

function init(){
    //用户微信信息
    let wechatInfo ={
        openid:$("#openid").val(),
        userName:$("#nickname").val(),
        userImg:$("#headimgurl").val(),
        timeData: getFormatDate()
    }
    console.log("当前微信用户的图像为："+wechatInfo.userImg+"当前时间为："+wechatInfo.timeData);
    addWechat();
    function addWechat(){
        $.ajax({
            url:"http://www.ulifecity.com:4088/addAwardUserInfo",
            type:"post",
            data:JSON.stringify({
              userImgs:wechatInfo.userImg,
              openId:wechatInfo.openid,
              timeData:wechatInfo.timeData
            }),
            contentType:"application/json",
            success:(data)=>{
                console.log(data)
                loadData();
            },
            error:(e)=>{
              console.log(e);
            }
        })
    }
    music();
    function music(){
        //音乐
        let objMusic = document.getElementById('bgMusic');
        let musicState = true;
        function musicPlay(){
            $(".music").removeClass('musicStop').addClass('musicPlay');  
            if(objMusic.paused){
                objMusic.play();
                objMusic.muted=false;
            } 
            document.addEventListener("WeixinJSBridgeReady",function(){
                objMusic.play();
                objMusic.muted=false;
            },false)    
        }
        function musicStop(){
            objMusic.pause();
            document.addEventListener("WeixinJSBridgeReady",function(){
                objMusic.pause();
                objMusic.muted=true;
            },false)
            $(".music").removeClass('musicPlay').addClass('musicStop');
            
        }
        musicPlay();
        $('.music').bind("touchend",function(){
            if(musicState){
                musicStop();
                musicState=false;
            }else{
                musicPlay();
                musicState=true;
            }
        })
    }
    function loadData(){
        
        //图片预加载
        let imgArr = [
            "./images/mask-img.png","./images/1.png","./images/2.png","./images/3.png","./images/4.png","./images/5.png","./images/6.png","./images/7.png",
            "./images/againBtn.png","./images/bj.png","./images/close.png","./images/introduce.png","./images/myjp.png","./images/ok.png","./images/ok1.png",
            "./images/title.png","./images/yh.png","./images/bjg.png"
        ];
        let sum =0;
        let imgLenght = imgArr.length;
        let img = new Image();
        loading();
        function loading(){
            img.src=imgArr[sum];
            function go(){
                sum ++;
                $("#loading").html("已加载 "+parseInt(sum/imgLenght * 100) + "%");
                if(sum < imgLenght){
                    loading()
                }else{
                   $(".onePage").hide();
                    $(".main_box").show();
                   homePage();
                }
            }
            img.onerror = go;
            img.onload = go;
        }
    }
    
    let cMusic = document.getElementById('clickMp3');
    let awardSum = 0;
    //主页
    function homePage(){
        $("#jsBtn").on("click", getIntroduce);
        $("#myBtn").on("click", getMyAward);
        let flag = true;
        if(flag){
            flag = false;
            $.ajax({
                url:"http://www.ulifecity.com:4088/awardInfo",
                data:{
                    openid:wechatInfo.openid
                },
                type:"get",
                contentType: "application/json",
                success:(res)=>{
                    flag = true;
                    console.log(res);
                    if(res.code ==12){
                        //中奖
                        let num = res.data;
                        awardSum = num;
                        if(num >0 && num <=7){
                            $("#mask-bj").attr("src","images/" + num + ".png");
                            $("#awarImg").attr("src","images/" + num + ".png");
                            if(num ==1 ){
                                $("#awarNum").text("年货大礼包");
                            }else if(num ==2){
                                $("#awarNum").text("年货小礼包");
                            }else if(num ==3){
                                $("#awarNum").text("暖风机一台");
                            }else if(num ==4){
                                $("#awarNum").text("锅具一个");
                            }else if(num ==5){
                                $("#awarNum").text("暖手宝一个");
                            }else if(num ==6){
                                $("#awarNum").text("手机支架一个");
                            }else if(num ==7){
                                $("#awarNum").text("手机壳一个");
                            }
                            $("#zBtn").hide();
                            $('#redux').eraser( {
                                size: 25,   //设置橡皮擦大小
                                completeRatio: .5, //设置擦除面积比例
                                completeFunction: showAwardInfo
                            });
                        }
                    }else if(res.code == 4){
                        $("#zBtn").hide();
                        if(res.data[0].awardNum >=3){
                            alert("您今天的抽奖次数已经用完");
                        }else{
                            alert("今天您已经中奖了哦！明天再来吧～");
                        }
                    }else{
                        $("#mask-bj").attr("src","images/noAward.png");
                        $("#awarImg").attr("src","images/noAward.png");
                        $("#awarNum").text("很遗憾未中奖");
                        $("#zBtn").show();
                        //未中奖或已经中奖显示对应的按钮
                        $("#zBtn").off('click');//点击之前解除重复点击事件
                        $("#zBtn").on('click',function(){
                            cMusic.play();
                            $("#zBtn").hide();
                            $('#redux').eraser('reset');
                            homePage();
                        });
                        if(res.code == 8){
                            $('#redux').eraser( {
                                size: 25,  
                                completeRatio: .5, 
                                completeFunction: showAwardInfo
                            });
                        }
                    }
                    //刮完奖品发送到后台
                    function showAwardInfo(){
                        $(".show").show();
                        $("#close3").on("click",function(){
                            $(".show").hide();
                        })
                        
                        if(awardSum > 0){
                            $.ajax({
                                url:"http://www.ulifecity.com:4088/updaAward",
                                data:JSON.stringify({
                                    openId:wechatInfo.openid,
                                    num:awardSum
                                }),
                                type:"post",
                                contentType: "application/json",
                                success:(res)=>{
                                    console.log(res);
                                },
                                error:(e)=>{
                                    console.log(e);
                                }
                            })
                        }
                    }
                },
                error:(e)=>{
                    flag = true;
                    console.log(e);
                }
            })
        }
    }
    //微信分享

    //我的奖品
    function getMyAward(){
        $("#myBtn").addClass("tada");
        cMusic.play();
        let h = window.innerHeight;
        $.ajax({
            url:"http://www.ulifecity.com:4088/getMyAward",
            data:{
                openId:wechatInfo.openid
            },
            type:"get",
            contentType: "application/json",
            success:(res)=>{
                console.log(res);
                if(res.code == 2){
                    let myInfo = res.data;
                    if(myInfo.length > 0){
                        let table = $(".table");
                        // $(".table tr:gt(0)").empty();
                        $(".table tr").not(':eq(0)').detach();//删除之前已添加的元素
                        for(let i=0; i<myInfo.length; i++){
                            let tr = document.createElement('tr');
                            let td0 = document.createElement('td');
                            td0.innerText = i+1;
                            let td = document.createElement('td');
                            td.innerText = myInfo[i].prizeName;
                            let td1 = document.createElement('td');
                            td1.innerText = myInfo[i].prizeInfo;
                            let td2 = document.createElement('td');
                            td2.innerText =new Date(myInfo[i].dateTime).format();
                            tr.append(td0,td,td1,td2);
                            table.append(tr);
                        }
                    }else{
                        $("#myH3").show();
                    }
                }else{
                    alert("查询数据失败");
                }
                $("#myAwardMask").show();
                TweenMax.set("#myAwardMask",{y:0})
                TweenMax.from("#myAwardMask",1,{
                    y:-h
                })
            },
            error:(e)=>{
                console.log(e);
            }
        })
        $("#close2").on("click", function(){
            $("#myBtn").removeClass("tada");
            TweenMax.to("#myAwardMask",1,{y:-h,onComplete:function(){
                $("#myAwardMask").hide();
            }})
        })
        
    }
    //活动介绍弹框
    function getIntroduce(){
        $("#jsBtn").addClass("tada");
        cMusic.play();
        TweenMax.set("#introduceMask",{scale:0});
        $("#introduceMask").show();
        TweenMax.to("#introduceMask",1,{
            scale:1
        })
        $("#close1").on("click",function(){
            TweenMax.to("#introduceMask",1,{
                scale:0,
                onComplete:function(){
                    $("#jsBtn").removeClass("tada");
                    $("#introduceMask").hide();
                }
            })
            
        })
    }
   
}

//格式化数据库时间
Date.prototype.format = function(format){
    if(isNaN(this.getMonth())){
        return '';
    }
    if(!format){
        format = 'yyyy-MM-dd hh:mm:ss';
    }
    var o = {
        //month
        "M+" : this.getMonth() + 1,
        //day
        "d+" : this.getDate(),
        //hour
        "h+" : this.getHours(),
        //minute
        "m+" : this.getMinutes(),
        //second
        "s+" : this.getSeconds(),
        //quarter
        "q+" : Math.floor((this.getMonth() + 3) / 3),
        //millisecond
        "s" : this.getMilliseconds()
    };
    if(/(y+)/.test(format)){
        format = format.replace(RegExp.$1,(this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for(var k in o){
        if(new RegExp("(" + k + ")").test(format)){
            format = format.replace(RegExp.$1,RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};
function getFormatDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentDate = date.getFullYear() + "-" + month + "-" + strDate
            + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return currentDate;

  }
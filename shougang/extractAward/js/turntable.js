window.onload = loading();

function loading(){
    //获取用户信息
    let time =getFormatDate();
    console.log(time);
    let wechatInfo ={
      openid:$("#openid").val(),
      userName:$("#nickname").val(),
      userImg:$("#headimgurl").val(),
      timeData:time
    }
    let option = {
        'width':640,
        'height':1080,
        'resolution':2,
        'forceCanvas':false,
        'view':document.getElementById("canvas")
    }
    let imgArr =[
        "./img/640x1080.png",
        // "http://wx.uvcsi.com/html5/lewan/zhuanpan/images/一等奖.jpg",
        // "http://wx.uvcsi.com/html5/lewan/zhuanpan/images/p1bg.jpg",
        // "http://wx.uvcsi.com/html5/lewan/zhuanpan/images/p1zhuanpan.png",
        // "http://wx.uvcsi.com/html5/lewan/zhuanpan/images/p1zhizhen.png",
        // "http://wx.uvcsi.com/html5/lewan/zhuanpan/images/p1btn.png",
        // "http://wx.uvcsi.com/html5/lewan/zhuanpan/images/p1btn2.png"
    ];
    let app = new PIXI.Application(option);
    $(".loading").css({"display":"block"});
    //顶部按钮
    $("#xBtn").on("click",troducePage);
    $("#pBtn").on("click",gainerPage);
    let loader = new PIXI.Loader();
        //加载音频
        loader.add("../invitation02/mp3/gq.mp3").add(imgArr);
        loader.on("progress",function(load){
            $("#loadNum").html("已加载:"+Math.floor(load.progress)+"%");
        })
        loader.load(showHomePage);
    // 首页
    function showHomePage(){
        $(".loading").css({"display":"none"});
        $(".homePage").css({"display":"block"});
        $(".fixedPage").show();
        //向后台发送数据
        console.log(wechatInfo.userImg)
        $.ajax({
          url:"http://www.ulifecity.com:4088/addAwardUserInfo",
          type:"post",
          data:JSON.stringify({
            userName:wechatInfo.userName,
            userImg:wechatInfo.userImg,
            openid:wechatInfo.openid,
            timeData:wechatInfo.timeData
          }),
          contentType:"application/json",
          success:(data)=>{
            console.log(data);
            $("#infoBtn").on("click", troducePage);
            $("#startBtn").on("click",turantablePage);
          },
          error:(e)=>{
            console.log(e);
          }
        })
        
    }
    //活动介绍页
    function troducePage(){
        alert("这是活动介绍页面")
        $(".troducePage").show();
        $("#cBtn").on("click",function(){
          //关闭当前页面
          $(".troducePage").hide();
        })
    }

    //转盘抽奖页
    function turantablePage(){
        $(".homePage").css({"display":"none"});
        $(".turantablePage").show();
        var bg = PIXI.Sprite.fromImage("./img/p1bg.jpg");
        var zhuanpan = PIXI.Sprite.fromImage("./img/p1zhuanpan.png");
        zhuanpan.anchor.set(0.5);
        zhuanpan.position.set(324.10,482.05);

        var zhizhen = PIXI.Sprite.fromImage("./img/p1zhizhen.png");
        zhizhen.anchor.set(0.5);
        zhizhen.scale.set(1.2);
        zhizhen.position.set(326,482.05);

        var btn = PIXI.Sprite.fromImage("./img/p1btn.png");
        btn.position.set(130,796);


        var btn2 = PIXI.Sprite.fromImage("./img/p1btn2.png");
        btn2.position.set(126,796);
        btn2.alpha = 0;
        var btn3 = PIXI.Sprite.fromImage("./img/p2btn.png");
        btn3.position.set(126,796);
        btn3.alpha = 0;
        app.stage.addChild(bg,zhuanpan,zhizhen,btn,btn2,btn3);

        let awardUrl ="";
        let noAward = "";
        btn.interactive = true;
        btn.on("pointertap",function(){
            let flag = true;
            let angle = 0;
            if(!wechatInfo.openid){
              return alert("请登陆后在抽奖");
            }else{
              if(flag){
                flag =false;
                $.ajax({
                  url:"http://www.ulifecity.com:4088/awardInfo",
                  data:{
                    openid:wechatInfo.openid
                  },
                  type:"get",
                  contentType: "application/json",
                  success:(res)=>{
                    flag =true;
                      if(res.code ==4){
                        //已经中过奖品了，跳转下一个页面
                        myGainerPage();
                        return;
                      };
                      if(res.code == 5){//当天抽奖次数已经用完,可分享一次增加抽奖次数
                        alert("当天抽奖次数已经用完，分享至朋友圈可额外获得一次抽奖机会");
                        return;
                      }
                      if(res.code == 7 || res.code == 11){//未中奖
                        noAward ="thankyou";
                        awardUrl = "./img/thankyou.jpg";
                        angle = 70 + 360*6;
                        clickAward(angle);
                        return;
                      }
                        if(res.code == 12){//已中奖
                          let isAwardNum = res.data;
                        if(isAwardNum == 1){
                          awardUrl = "./img/one.jpg";
                          angle = 360 + 45*0.5+360*6;
                        }else if(isAwardNum == 2){
                          awardUrl = "./img/one.jpg";
                          angle = 180 + 90 + 45*0.5 + 360*6;
                        }else if(isAwardNum == 3){
                          awardUrl = "./img/one.jpg";
                          angle = 116 + 360*6;
                        }else if(isAwardNum == 4){
                          awardUrl = "./img/one.jpg";
                          angle = 180 + 45*0.5 + 360*6;
                        }else if(isAwardNum == 5){
                          awardUrl = "./img/one.jpg";
                          angle = 70 + 360*6;
                        }else{
                          noAward ="thankyou";
                          awardUrl = "./img/thankyou.jpg";
                          angle = 70 + 360*6;
                        }
                        clickAward(angle);
                      }
                    
                  },
                  error:(e)=>{
                    flag =true;
                    console.log(e);
                  }
                })
              }
            }
        })
        function clickAward(angle){
            console.log(angle);
            btn.interactive = false;  //关闭重复抽奖
            //btn.destroy();
            btn.alpha =0;
            TweenMax.set(zhuanpan,{
                rotation:0,
            });
            TweenMax.to(zhuanpan,4,{
                rotation:angle * Math.PI/180,
                onComplete:next
            },2);
        }
        function next(){
            let award = PIXI.Sprite.from(awardUrl);
            app.stage.addChild(award);
            if(noAward =="thankyou"){
              alert("谢谢参与");
              btn3.alpha = 1;
              btn3.interactive = true;
              btn3.on("pointertap",function(){
                //隐藏当前背景页面
                btn3.interactive = false;
                //app.stage.removeChild(award,btn3);
                award.alpha =0;
                btn3.alpha = 0;
                btn.alpha = 1;
                btn.interactive = true;
              })
            }else{
                TweenMax.to([bg,zhuanpan,zhizhen],1,{alpha:0});
                btn2.alpha = 1;
                btn2.interactive = true;
                btn2.on("pointertap",function (){
                  btn2.interactive = false;
                  app.stage.removeChild(award,btn2);
                  myGainerPage();
                });
            }
        };
    }
    //我的奖品页
    function myGainerPage(){
      alert("这是我的奖品页面");
    }
    //排名页面
    function gainerPage(){
      alert("这是排名页面");
    }
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

}

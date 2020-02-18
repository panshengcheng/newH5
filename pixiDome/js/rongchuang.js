
window.onload = init();
function init(){
    let userName = "";
    let phone = "";
    let myDate=GetDateT();
    let userInfo ={
        user_name : userName,
        phone : phone,
        order_time : myDate
    }
    //使用pixi创建画布
    let app = new PIXI.Application({
        width:640, 
        height:1080,
        antialias :true,
        resolution:1
    });
    app.renderer.resize(window.innerWidth, window.innerHeight);
    document.body.appendChild(app.view);
    //加载背景图片
    let sprite1 = new PIXI.Sprite.from("img/beijing01.jpg");
    sprite1.width = app.screen.width;
    sprite1.height = app.screen.height;
    app.stage.addChild(sprite1);
    //创建一个精灵容器
    let container = new PIXI.Container();
    let sprite2 = new PIXI.Sprite.from("img/login.png");
    sprite2.width = app.screen.width;
    sprite2.height = app.screen.height;
    container.addChild(sprite2);
    //添加页面主信息1
    let sprite3 = new PIXI.Sprite.from("img/zhulogin.png");
    // sprite3.width = app.screen.width;
    // sprite3.height = app.screen.height;
    //缩放
    sprite3.scale.set(0.5, 0.5);
    sprite3.x =40,
    sprite3.y =130,
    container.addChild(sprite3);
    //添加页面表单信息信息
    let sprite4 = new PIXI.Sprite.from("img/name.png");
    sprite4.scale.set(0.5, 0.5);
    sprite4.x =30,
    sprite4.y =350,
    container.addChild(sprite4);
    //添加电话信息
    let sprite5 = new PIXI.Sprite.from("img/phone.png");
    sprite5.scale.set(0.5, 0.5);
    sprite5.x =30,
    sprite5.y =385,
    container.addChild(sprite5);
    //添加提交按钮
    let sprite6 = new PIXI.Sprite.from("img/submit.png");
    sprite6.scale.set(0.5, 0.5);
    sprite6.x =30,
    sprite6.y =450,
    container.addChild(sprite6);
    app.stage.addChild(container);

    sprite6.interactive = true;
    //给提交精灵添加提交事件
    sprite6.on("pointerdown",submitOrder);
    function submitOrder(){
        userName = $("#userName").val();
        phone = $("#phone").val();
        //添加正则判断
        let str =/^([\u4e00-\u9fa5]){2,5}$/;
        let ifPhone = /^1[3456789]\d{9}$/;

        if(!str.test(userName)){
            alert("对不起，您输入的用户名有误，请重新输入！");
            sprite6.interactive = true;
            return;
        }
        if(!ifPhone.test(phone)){
            alert("对不起，您输入的电话号码有误，请重新输入！");
            sprite6.interactive = true;
            return;
        }
        console.log(userInfo.order_time);
        sprite6.interactive = false;
        $.ajax({
            "url" : "http://www.ulifecity.com:4003/insertUserInfo",
            "type": "POST",
            "contentType":"application/json",
            "data":JSON.stringify(userInfo),
            "success": function(data){
                if(data.code == 1){
                    console.log(data.userValue);
                    window.location.href = "succeed.html?info="+data.userValue;
                }
            },
            "error": function(err){
                console.log(err);
            }
        });
    }

}
function GetDateT()
 {
  var d,s;
  d = new Date();            
  s = d.getFullYear() + "-";        //取年份
  s = s + (d.getMonth() + 1) + "-";//取月份
  s += d.getDate() + " ";         //取日期
  s += d.getHours() + ":";       //取小时
  s += d.getMinutes() + ":";    //取分
  s += d.getSeconds();         //取秒
  
  return(s);  
  
 } 


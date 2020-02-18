window.onload=init();

function init(){
    //1.用户登陆，获取用户openID查询用户是否可以执行抽奖
    let opengId = "";
    $.ajax({
        url:"http://www.ulifecity.com:4088/getUserInfo",
        type: "get",
        data: opengId,
        contentType: "application/json",
        scuess : function(data){
            //查询或增加用户信息成功
            if(data.result.length>0){
                window.location.href ="index.html";
            }else{
                //还没有注册
                window.location.href ="login.html";
            }
        },
        error : function(e){
            console.log(e);
        }
    });

    //检测用户摇晃手机
    if(window.DeviceMotionEvent){
        window.addEventListener("devicemotion",deviceMotionHandler,false);
    }

    function deviceMotionHandler(){
        //查询用户是否中奖,和抽奖次数
        $.ajax({
            url:"http://www.ulifecity.com:4088/getDrawNumber",
            type: "get",
            data: opengId,
            contentType: "application/json",
            scuess : function(data){
                if(data.code ==1){
                    alert("已经中过奖了");
                }else if(data.code == 2){
                    alert("抽奖次数已经用完！");
                }else{
                    //可以进行抽奖
                    let ran = Math.ceil(Math.random()*100);
                    //控制中奖率
                    if(55<ran<=80){
                        //中奖率在55%
                        prizes(3);
                        //let needNum = Math.ceil(Math.random()*10);//该中奖率在10%
                    }else if(80<ran<=95){
                        //该中奖率40%
                        //let needNum1 = Math.ceil(Math.random()*10);//该中奖率在10%
                        prizes(2);
                    }else if(95<ran<100){
                        //该中奖率在5%
                        //let needNum2 = Math.ceil(Math.random()*10);//该中奖率在10%
                        prizes(1);
                    }else{
                        alert("很遗憾，您本次没中奖");
                    }
                }
            },
            error : function(e){
                console.log(e);
            }
        }) 
    }

}

//查询中奖数量和修改中奖的产品数量
function prizes(number){
    //查询奖品数量
    $.ajax({
        url:"http://www.ulifecity.com:4088/getDraw",
        type: "post",
        data: JSON.stringify({
            prize_id:number,
            draw_opendId:opengId
        }),
        contentType: "application/json",
        scuess : function(res){
            console.log(res.result);
            if(res.code == 1){
                alert("恭喜您中奖了");
            }else{
                //没有奖品了
                alert("很遗憾，您没有中奖!");
            }
        },
        error : function(e){
            console.log(e);
        }
    })
}
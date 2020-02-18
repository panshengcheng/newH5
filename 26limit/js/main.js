window.onload=init();

function init(){
    let userName="";
    let userPhone="";
    let userSole = "";
    
    //1.1获取用户数据和保存用户数据
   userSole = localStorage.getItem("sole"); 
    // 1.2 获取数据库数据
    if(userSole){
        //没有注册信息
        $.ajax({
            url:"http://www.ulifecity.com:4088/getUserInfo",
            type:"GET",
            data:JSON.stringify({
                sole:userSole
            }),
            contentType: "application/json",
            scuess : function(res){
                //2.把得到的本地数据+服务器数据进行比较
                if(res.result.data[0].soleId == userSole){
                    //数据对得上，跳转排名页面
                    //window.location.href = "ranking.html?sole="+sole;
                    ranking();
                }
            },
            error : function(err){
                console.log(err);
            }
            
        })
    }else{
        alert("你还没有注册，请先注册");
    }
    //监听用户的注册提交事件
    let btn = document.getElementById("btn");
    btn.addEventListener("change", addUserInfo);

    function addUserInfo(){
        //获取用户信息
        userName = document.getElementById("name");
        userPhone = document.getElementById("phone");
        //生成一个唯一编号
        userSole = generateUUID();
        console.log(userSole);
        $.ajax({
            url:"http://www.ulifecity.com:4088/addVoteUserInfo",
            type:"POST",
            data:JSON.stringify({
                user_name : userName,
                phone : userPhone,
                soleId:userSole
            }),
            contentType: "application/json",
            scuess : function(res){
                //注册成功跳转到注册成功页面
                if(res){
                    //给成功页面赋值
                    localStorage.setItem("sole",userSole);
                    $("#name").val(userName);
                    $("#phones").val(userPhone);
                    $("#serialnumber").val(userSole);
                    window.location.href = "scuess.html";
                }
            },
            error : function(err){
                console.log(err);
            }
        })

    }
    //用户注册成功，点击跳转页面
    let button = document.getElementById("button");
    button.addEventListener("change", ranking);
    function ranking(){
        //请求城市数据
        $.ajax({
            url:"http://www.ulifecity.com:4088/getCity",
            type:"GET",
            data:JSON.stringify({
                sole:userSole
            }),
            contentType: "application/json",
            scuess : function(res){
                //2.把得到的本地数据+服务器数据进行比较
                if(res){
                    //给城市动态赋值
                    let data = res.result.data;
                    for (var i = 0; i < data.length; i++) {
                        var li = document.createElement("li");
                        li.className = "col-6 margin-tb-15";
                        // var a = document.createElement("a");
                        // a.href = "my_info.php?id=" + tempPlayers[i].player_id;
                        // a.id = tempPlayers[i].player_id;
                        var card = document.createElement("div");
                        card.className = "data";
                        var imgdiv = document.createElement("div");
                        imgdiv.className ="imgs"
                        var img = document.createElement("img");
                        img.src = data[i].img;
                        img.className = "card-img-top";
                        imgdiv.appendChild(img);
                        var cardBody = document.createElement("div");
                        cardBody.className = "info";
                        var cardTitle = document.createElement("input");
                        cardTitle.type = "hidden";
                        cardTitle.id="orderId"+data[i].orderId;
                        cardTitle.value=data[i].orderId;
                        cardBody.appendChild(cardTitle);
                        var span = document.createElement("span");
                        span.innerText=data[i].city;
                        cardBody.appendChild(span);
                        var cardText = document.createElement("span");
                        cardText.innerText = "当前票数："+data[i].poll ;
                        cardBody.appendChild(cardText);
                        card.appendChild(cardBody);
                        li.appendChild(card);
                        $("#rankingContent").append($(li));
                    }

                }
            },
            error : function(err){
                console.log(err);
            }
            
        })
    }

    //监听用户投票事件
    let img = document.getElementsByClassName("img");
    img.addEventListener("change", voteInfo);

    function voteInfo(){
        //调取投票提示页面
        window.location.href="dialog.html";
        //获取值
        let val = document.getElementsByClassName("quren").value;
        if(val == "2"){
            //获取投票人信息
            let input = document.getElementById("orderId");//待议
            let city = document.getElementsByTagName("span");
            let myDate=GetDateT();
            let userName = userName;
            let soles = soleId;

            //请求城市数据
            $.ajax({
                url:"http://www.ulifecity.com:4088/addVote",
                type:"GET",
                data:JSON.stringify({
                    orderId : input,
                    data_time : myDate,
                    userName = userName,
                    vote_city:city,
                    sole:soles
                }),
                contentType: "application/json",
                scuess : function(res){
                    //2.把得到的本地数据+服务器数据进行比较
                    if(res){
                        //给城市动态赋值
                        if(res.code == "0"){
                            //没有注册
                            window.location.href ="apply.html";
                        }else if(res.code == "1"){
                            //已经投过票了
                            alert("您已经投过票了");
                        }else{
                            //投票成功
                            alert("投票成功");
                        }
                    }
                },
                error : function(err){
                    console.log(err);
                }
                
            })
        }
        
    }

}
//生成唯一ID
function generateUUID() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

//获取当前时间
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
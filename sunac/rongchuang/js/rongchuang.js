
window.onload = init();
function init(){
    //使用pixi创建画布
    var app = new PIXI.application();
    document.body.appendChild(app.view);
}
//获取表单信息
let userName = document.getElementById("username");
let phone = document.getElementById("phone");
let timeDate = new Date();
let userInfo ={
    user_name : userName,
    phone : phone,
    order_time : timeDate
}
function getUserInfo(){
    console.log(userName.value);
    console.log(phone.value);
    console.log(timeDate);
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
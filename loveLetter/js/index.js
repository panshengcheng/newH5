

let loading = document.querySelector(".loading");
let loadingProcess = loading.getElementsByTagName("p")[0];

let name ="";
let gender = "";
let age ="";

var picArr = [
    "./images/bg.png","./images/xf.png","./images/xf.gif","./images/save-tips.png","./images/musicPlay.png","./images/musicStop.png",
    "./images/two/name.png","./images/two/g.png","./images/two/n.png","./images/two/gender.png","./images/two/bj2.jpg","./images/two/btn.png",
    "./images/three/00.png","./images/three/80.png","./images/three/90.png","./images/three/btnImg1.png","./images/three/title.png",
    "./images/four/00.png","./images/four/80.png","./images/four/90.png","./images/four/btnImg2.png","./images/four/title.png",
    "./images/five/btnImg2.png","./images/five/isSingleton.png","./images/five/isSinleton.png","./images/five/noSingleton.png",
    "./images/xb/6.png","./images/xb/5.png","./images/xb/4.png","./images/xb/3.png","./images/xb/2.png","./images/xb/1.png",
    "./music/bj.mp3"
];
var img =  new Image();
var sum = picArr.length;

var now = 0;

loadImg();
function loadImg(){
	img.src = picArr[now]; 
	function go () {
		now ++ ;
		console.log(now);
		loadingProcess.innerHTML = parseInt( now/sum *100 ) + "%";
		if(now < picArr.length){
			loadImg()
		}else{
			console.log("全部加载完成");
            //loading.style.display = "none";
            $("#loading").css("display","none");
            $("#zy").css("display","block");
            musicPlay();
		}
	}
	img.onerror = go;
	img.onload = go;
}
// getData();
// function getData(){
//     let loaded ="";
//     var xhr = new XMLHttpRequest();
//     xhr.onprogress = function(event){
//         if(event.lengthComputable){
//             loaded = parseInt(event.loaded/event.total*100)+"%";
//             console.log(loaded);
//             $('#pros').width(loaded);
//             $('#pros').text(loaded);
//         }
//     }
//     xhr.open("get", "imgInfo.json", true);
//     xhr.send(null);
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4 && xhr.status == 200){
//             $("#loading").css("display","none");
//             $("#zy").css("display","block");
//             musicPlay();
//             start();
//         }
//     }
    
// }
window.onload=start();
function musicPlay(){
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

function start(){
    console.log("进来了")
    var snowflakeURl = [
        './images/xb/1.png',
        './images/xb/2.png',
        './images/xb/3.png',
        './images/xb/4.png',
        './images/xb/5.png',
        './images/xb/6.png'
        ]
   var container = $("#content");
       visualWidth = container.width();
       visualHeight = container.height();
       　　
        function snowflake() {
            // 雪花容器
            var $flakeContainer = $('#snowflake');
        　　　　　　
            // 随机六张图
            function getImagesName() {
                return snowflakeURl[[Math.floor(Math.random() * 6)]];
            }
            // 创建一个雪花元素
            function createSnowBox() {
                var url = getImagesName();
                return $('<div class="snowbox" />').css({
                'width': 60,
                'height': 60,
                'position': 'absolute',
                'backgroundSize': 'cover',
                'zIndex': 100000,
                'top': '-41px',
                'backgroundImage': 'url(' + url + ')'
                }).addClass('snowRoll');
            }
            // 开始飘花
            setInterval(function() {
                // 运动的轨迹
                 var startPositionLeft = Math.random() * visualWidth - 100,
                //var startPositionLeft = Math.random() * visualWidth + 100,
                startOpacity = 1,
                endPositionTop = visualHeight+1000,
                endPositionLeft = startPositionLeft - 100 + Math.random() * 1000,
                
                duration = visualHeight * 10 + Math.random() * 5000;
                
                // 随机透明度，不小于0.5
                var randomStart = Math.random();
                randomStart = randomStart < 0.5 ? startOpacity : randomStart;
                // 创建一个雪花
                var $flake = createSnowBox();
                // 设计起点位置
                $flake.css({
                    left: startPositionLeft,
                    opacity : randomStart
                });
                // 加入到容器
                $flakeContainer.append($flake);
                // 开始执行动画
                $flake.transition({
                    top: endPositionTop,
                    left: endPositionLeft,
                    opacity: 0.7
                }, 15500, 'ease-out', function() {
                    $(this).remove() //结束后删除
                });       
            }, 200);
        } 　　
    snowflake();
    
    let img1 = document.getElementById("img2");
    img1.addEventListener("touchend", function(){
        //把图片替换成GIF
        $("#img2").attr('src','./images/xf.gif');
        $("#img2").css({"width":"70%","position":"absolute","top":"26%","left":"15%"})
        setTimeout(()=>{
            $("#img2").remove();
            $("#zy").css("display","none");
            $("#info").css("display","block");
        },1600);
    }, false);
    let btnImg =document.getElementById("btnImg");
    btnImg.addEventListener("touchend",function(){
        let names =$("#name").val();
        let genders = $("input[name='gender']:checked").val();
        let mobile = /^1[\d]{10}$/;
        let str = /^[\u4e00-\u9fa5]{2,5}$/;
        if(names){
            if(str.test(names)){
                name = names;
            }else{
                alert("请输入正确的用户名");
                return;
            }
        }else{
            alert("昵称不能为空");
            return;
        }
        if(!genders){
            alert("请选择您的性别");
            return;
        }else{
            gender = genders;
        }
        if(gender =="male"){
            //男
            $("#info").css("display","none");
            $("#males").css("display","block");
            let btn1 = document.getElementById("btn1");
            btn1.addEventListener("touchend", genderInfo, false);
        }else{
            //女
            $("#info").css("display","none");
            $("#womans").css("display","block");
            let btn2 = document.getElementById("btn2");
            btn2.addEventListener("touchend", genderInfo, false);
        }
    },false)
}
function genderInfo(){
    let ages = $("input[name='age']:checked").val();
    if(!ages){
        alert("请选择您的年龄");
        return;
    }else{
        age = ages;
    }
    
    $(".ages").css("display","none");
    $(".five").css("display","block");
    let singleton = document.getElementById("btn3");
    singleton.addEventListener("touchend", function(){
        let sin =$("input[name='isOne']:checked").val();
        if(!sin){
            alert("请选择您当前状况");
            return;
        }
        console.log("您的名字："+name+"，性别："+gender+"，年龄："+age+",是否单身："+sin);
        location.href='./result1.html?name='+name+'&gender='+gender+'&age='+age+'&isSin='+sin;
        //根据给出的数据，判断当前选择的人
        
    },false)
    
}


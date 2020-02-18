var loading = document.querySelector(".loading");
var loadingProcess = loading.getElementsByTagName("p")[0];
var swiperWrapper = document.querySelector(".swiper-wrapper");
var swiperSlide = document.querySelectorAll(".swiper-slide");
var picArr = [
	"./img/loading.jpg","./img/page1/0.png","./img/page1/1.png","./img/page1/2.png","./img/page1/9.png","./img/page1/ztitle.png",
    "./img/page1/vTitle.png","./img/page1/vTitle1.png","./img/page1/adderss.png","./img/page2/box.png",
    "./img/page2/zTitle.png","./img/page2/vTitle.png","./img/page2/infoName.png","./img/page2/weicom.png","./img/page2/hx.png",
    "./img/page2/boxInfo.png","./img/page2/dTitle.png","./img/page2/box.png","./img/page3/box.png","./img/page3/time2.png",
    "./img/page3/zTitle.png","./img/page3/vTitle.png","./img/page3/sx.png","./img/page3/round.png","./img/page3/time1.png",
    "./img/page3/applyTime.png","./img/page3/homeTime.png","./img/page3/instructions.png","./img/page3/dTitle.png",
    "./img/page3/time3.png","./img/page3/time4.png","./img/page3/time5.png","./img/page3/time6.png","./img/page3/time7.png",
    "./img/page4/box.png","./img/page4/zTitle.png","./img/page4/vTitle.png","./img/page4/img1.png","./img/page4/img2.png","./img/page4/img3.png",
    "./img/page4/dTitle.png","./img/page5/box.png","./img/page5/zTitle.png","./img/page5/vTitle.png","./img/page5/visic.png","./img/page5/hx.png",
    "./img/page5/time.png","./img/page5/dTitle.png","./img/page6/box.png","./img/page6/logo.png","./img/page6/vTitle.png","./img/page6/Qr-code.png",
    "./img/page6/phone.png","./img/page6/dTitle.png","./img/arrow.png","./img/bj.png","./img/Music.png"
]
var img =  new Image();
var sum = picArr.length;
var now = 0;
loadImg();
function loadImg(){
	img.src = picArr[now]; 
	function go () {
		now ++ ;
		loadingProcess.innerHTML ="已加载 "+ parseInt( now/sum *100 ) + "%";
		if(now < picArr.length){
			loadImg()
		}else{
			loading.style.display = "none";
            swiperWrapper.style.opacity = "1";
            music();
			action();
		}
	}
	img.onerror = go;
	img.onload = go;
}
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
function action(){
    //获取微信图像及昵称
    let imgWX = $("#headimgurl").val();
    let nameWX = $("#nickname").val();
    if(nameWX && imgWX){
        $("#myName").html(nameWX);
        $("#img14").attr("src",imgWX);
    }
    
    let mySwiper = new Swiper('.swiper-container',{
        direction:"vertical",
        initialSlide : 0,
        followFinger : false,
        touchRatio : 0.2,
        pagination: {
            el: '.swiper-pagination',
        },
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            }, 
                slideChangeTransitionEnd: function(){ 
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            },
            slideChangeTransitionStart:function(){
                if(this.activeIndex === 5){
                    $("#array").hide();
                }else{
                    $("#array").show();
                }
            },
        },
        
        onSlideChangeEnswiperSlided: function(swiper){
            swiperSlide[swiper.previousIndex].style.transform = "translateY(0px) scale(1)";
            swiperSlide[swiper.previousIndex].style.zIndex = 0;
            swiperSlide[swiper.previousIndex].style.webkitFilter = "brightness(1)"
        },
    })
}
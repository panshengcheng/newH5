imgLoading();
//图片预加载
function imgLoading(){
    var loading = document.querySelector(".loading");
    var loadingProcess = loading.getElementsByTagName("p")[0];
    var swiperWrapper = document.querySelector(".swiper-wrapper");
    
    var picArr = [
        "./img/page1/logo.png","./img/arrow.png","./img/Music.png",
        "./img/page1/bj.png","./img/page1/content.png","./img/page1/title.png","./img/page1/vtitle.png","./img/page1/time.png",
        "./img/page2/bj.png","./img/page2/box-count.png","./img/page2/box.png","./img/page2/d-title.png","./img/page2/title.png",
        "./img/page3/bj.png","./img/page3/d-title.png","./img/page3/dh-btn.png","./img/page3/dh-img.png","./img/page3/number.png","./img/page3/time.png","./img/page3/title.png",
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
                swiperWrapper.style.display = "block";
                
                playMusic();
                getSwiper();
            }
        }
        img.onerror = go;
        img.onload = go;
    }
}
    //音乐
function playMusic(){
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
function getSwiper(){
    $("#tubiao").css("opacity",1);
    let mySwiper = new Swiper('.swiper-container',{
        direction: 'vertical',
        touchRatio : 0.1,
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            }, 
            slideChangeTransitionStart:function(){
                    if(this.activeIndex === 3){
                        $("#tubiao").css("display","none");
                    }else{
                        $("#tubiao").css("display","block");
                    }
                },
            slideChangeTransitionEnd: function(){ 
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            } 
        }
    })
}

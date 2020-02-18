addLoading();
function addLoading(){
    let p = document.getElementById("p");
    let imgArr =[
        "./img/fenxaing.jpeg","./img/page1/bj.png","./img/page1/hicetea2.png","./img/page1/hicetea3.png","./img/page1/hicetea6.png","./img/page1/hicetea7.png",
        "./img/page1/bj.png","./img/page1/hicetea8.png","./img/page1/hicetea9.png","./img/page1/hicetea10.png","./img/page1/hicetea11.png","./img/page1/hietea12.png","./img/page1/startBtn.png",
        "./img/page2/bj.png","./img/page2/figure.png","./img/page2/figure1-1.png","./img/page2/figure1.png","./img/page2/figure2.png",
        "./img/page2/figure2-1.png","./img/page2/figure2-2.png","./img/page2/figure4.png","./img/page2/figure4-1.png","./img/page2/figure4-2.png",
        "./img/page2/figure5.png","./img/page2/hicetea15.png","./img/page2/hicetea16.png","./img/page2/hicetea17.png","./img/page2/hicetea17-1.png",
        "./img/page2/hicetea17-2.png","./img/page2/hicetea18.png","./img/page2/hicetea19.png","./img/page2/hicetea19-1.png","./img/page2/hicetea19-2.png",
        "./img/page2/hicetea20.png","./img/page2/hicetea21.png","./img/page2/hicetea21-1.png","./img/page2/hicetea21-2.png","./img/page2/hicetea22.png",
        "./img/page2/hicetea23.png","./img/page2/hicetea24.png","./img/page2/hicetea25.png","./img/page2/hicetea26.png","./img/page2/hicetea27.png",
        "./img/page2/pavilion.png","./img/page2/submit1.png","./img/page2/sumit.png","./img/page2/taiyang.png","./img/page2/title.png",
        "./img/page2/train.png","./img/page2/xain.png","./mp3/bj.mp3"
    ];
    let img = new Image();
    let sum = imgArr.length;
    let now = 0;
    loadImg();
    function loadImg(){
        img.src = imgArr[now]; 
        function go () {
            now ++ ;
            p.innerText="已加载 "+ parseInt( now/sum *100 ) + "%";
            if(now < sum){
                loadImg()
            }else{
                $('.loading').css("display","none");
                $('.one').css("display","block");
                music();
                showOnePage();
            }
        }
        img.onerror = go;
        img.onload = go;
    }
}

function music(){
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
let t1 = new TimelineMax();
function showOnePage(){
    t1.from('.hicetea13',2,{x:50,y:40,opacity:0},1)
      .to(".logo",3,{opacity:1},1)
      .to(".box",2,{opacity:1},2.5)
      .to("#hicetea6",3,{opacity:1},3)
      .to("#hicetea7",3,{opacity:1},4)
      .to('.hicetea3',1,{opacity:1},3)
      .to("#startBtn",2,{
          opacity:1,
          onComplete:function(){
              $("#startBtn").addClass('startbtnScale');
          }},2)
      .from(".hicetea8",2,{
          left:500,
          top:50
      },2)
      .from(".hicetea12",2.5,{
          x:-500,
          onComplete:function(){
              let flag=true;
            $("#startBtn").on('click',function(){
                if(flag){
                    flag=false;
                    $(this).addClass('tm');
                    t1.to(".hicetea12",1,{
                        x:200,
                        onComplete:function(){
                            $("#mask").show();
                            $("#mask").on('click',function(){
                                $(this).hide();
                                showTwoPage();
                            })
                        }
                    })
                }
            });
          }
      },4)  
}

   
function showTwoPage(){
    let t2 = new TimelineMax();
    $('.one').css("display","none");
    $('.two').css("display","block");
    t2.to('.title',2.5,{opacity:1},1.5)
      .to(".hicetea15",3.5,{opacity:1},2)
      .from(".train",6,{
          y:-2500
      },.8)
    // $(window).scroll(function(){
    //     let scrollTop = $(window).scrollTop();
    //     console.log(scrollTop)
    //     if( scrollTop< 110){
    //         $('.hicetea16').addClass("");
    //     }else if(110<= scrollTop <300){
    //         $('.hicetea17').addClass("fadeIn");
    //     }
    // })
}
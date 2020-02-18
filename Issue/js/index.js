
 let loading = document.querySelector(".loading");
 let loadingProcess = loading.getElementsByTagName("p")[0];

var picArr = [
    "./images/1/1-bj.png","./images/1/1-btton.png","./images/1/1-logo.png","./images/1/1-title.png","./images/1/1-title1.png",
    "./images/2/1-title.png","./images/2/2-btn.png","./images/2/2-opionA.png","./images/2/2-opionB.png","./images/2/2-opionC.png","./images/2/2-title1.png",
    "./images/3/3-opionA.png","./images/3/3-opionB.png","./images/3/3-opionC.png","./images/3/3-title.png","./images/3/3-title1.png",
    "./images/4/4-A.png","./images/4/4-B.png","./images/4/4-C.png","./images/4/4-D.png","./images/4/4-E.png","./images/4/4-title.png","./images/4/4-title1.png",
    "./images/5/5-A.png","./images/5/5-B.png","./images/5/5-C.png","./images/5/5-D.png","./images/5/5-E.png","./images/5/5-title.png","./images/5/5-title1.png",
    "./images/6/6-A.png","./images/6/6-B.png","./images/6/6-C.png","./images/6/6-D.png","./images/6/6-E.png","./images/6/6-title.png","./images/6/6-title1.png",
    "./images/7/jq.png","./images/7/r-bj.png","./images/7/7-A.png","./images/7/7-B.png","./images/7/7-C.png","./images/7/7-D.png","./images/7/7-E.png","./images/7/7-title.png","./images/7/7-title1.png",
    "./images/8/A.png","./images/8/B.png","./images/8/C.png","./images/8/D.png","./images/8/E.png","./images/8/kuang.png","./images/8/thanks.png",
    "./images/repeat/22.gif","./images/repeat/btn.png","./images/repeat/btn-x.png","./images/repeat/musicPlay.png","./images/repeat/bgy-logo.png","./images/repeat/title.png",
];
var img =  new Image();
var sum = picArr.length;
var now = 0;

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


loadImg();
function loadImg(){
	img.src = picArr[now]; 
	function go () {
		now ++ ;
		loadingProcess.innerHTML = parseInt( now/sum *100 ) + "%";
		if(now < picArr.length){
			loadImg()
		}else{
            init();
		}
	}
	img.onerror = go;
	img.onload = go;
}

function init(){
    let data = {
        t1:"",
        t2:"",
        t3:"",
        t4:"",
        t5:"",
        t6:""
    }
    // -----------------第一屏动画------------------
    var html = document.documentElement;
    var width = html.getBoundingClientRect().width;
    var height = html.getBoundingClientRect().height;
    var fs = width/16;
    var hs = height/16;
     
    //var choose = document.getElementById("choose");
    $("#loading").css("display","none");
    $("#one").css("display","block");
    //$(".one").css("display","block");
    let t1 = new TimelineMax();
    t1.to("#title",2,{
        y:4*fs,
        opacity:1,
    }).to('#title1',1,{opacity:1
    }).to("#statrtBtn",1.5,{
        x:15*fs,
        ease: Bounce.easeOut,
    }).to('#statrtBtn',0.2,{scale:1.1,repeat:3,yoyo:true,
        onComplete:function(){
            $("#statrtBtn").on('click',twoPage);
        }
    });
    //--------------------第二页动画------------------------
   
    function twoPage(){
        $(".one").css("display","none");
        $(".two").css("display","block");
        let tl21 = new TimelineMax();
        let title = document.getElementsByClassName("title");
        let bottomTextImg = document.querySelector(".bottomText p img");
        let bottomTextSpanBox = document.querySelectorAll(".bottomTextSpanBox em");
        let bottomBorder = document.querySelectorAll(".bottomBorder");
        tl21.from(title,1.5,{
            top:-20*hs,
            opacity:0
        }).from(bottomBorder,.2,{
            left:6.17*hs,
            width:0,
        })
        .from(".sideBorder",1,{
            height:0
        })
        .from(".topBorder",.2,{
            width:0
        })
        .from(bottomTextImg,.2,{
            y:3*fs,
            delay:.2
        })
        .from(bottomTextSpanBox,1,{
            y:-25*fs,
            
        })
    
        $(".answer").on("click", oneAnswer);
        let prev = false;
        function oneAnswer() {
            let selected = $(this).attr("data-target");
            let btn = $(this).attr("data-btn");
            let id = $(this).attr("id");
            let topic = id.substr(0, 2);
            let answer = id.substr(2, 1);
            data[topic] = answer;
            $("#" + btn).attr({
                "data-status": 1
            });
           
            let X = $(this).position().top;
            let Y = $(this).position().left;
            
            if (prev) {
                $(prev).css({
                    "opacity": "0.4"
                });
            }
            $(this).css({
                "opacity": "1"
            });
            prev = this;
            //choose.play();
        }
        $("#btn1").on("click", oneBtn);
        function oneBtn() {
            if ($(this).attr("data-status") === "0") {
                alert("请您选择其中一项");
            }
            else {
                threePage();
            }
        }
        
    }
    //--------------------第三页动画------------------------
    function threePage(){
        $(".two").css("display","none");
        $(".three").css("display","block");
        let tl21 = new TimelineMax();
        let title = document.querySelector(".three .title");
        let bottomTextImg = document.querySelector(".three .page2 p img");
        let bottomTextSpanBox = document.querySelectorAll(".three .page2 .bottomTextSpanBox em");
        let bottomBorder = document.querySelectorAll(".three .page2 .bottomBorder");
        let threesid = document.getElementsByClassName("threesid");
        let threetop = document.getElementsByClassName("threetop");
        let btn2 = document.getElementById("btn2");
        tl21.from(title,1.5,{
            top:-20*hs,
            opacity:0
        }).from(bottomBorder,.2,{
            left:6.17*hs,
            width:0,
        })
        .from(threesid,1,{
            height:0
        })
        .from(threetop,.2,{
            width:0
        })
        .from(bottomTextImg,.2,{
            y:3*fs,
            delay:.2
        })
        .from(bottomTextSpanBox,1,{
            y:-25*fs,
            
        })
        $(".answer").on("click", twoAnswer);
        var prev = false;
        function twoAnswer() {
            let selected = $(this).attr("data-target");
            let btn = $(this).attr("data-btn");
            let id = $(this).attr("id");
            let topic = id.substr(0, 2);
            let answer = id.substr(2, 1);
            data[topic] = answer;
            
            $("#" + btn).attr({
                "data-status": 1
            });
            if (prev) {
                $(prev).css({
                    "opacity": "0.4"
                });
            }
            $(this).css({
                "opacity": "1"
            });
            prev = this;
            //choose.play();
        }
        $("#btn2").on("click", twoBtn);
        function twoBtn() {
            if (data.t2 == '') {
                alert("请您选择其中一项");
                return;
            }
            else {
                fourPage();
            }
        }
    }
     //--------------------第四页-----------------------------
    function fourPage(){
        $(".three").css("display","none");
        $(".four").css("display","block");
        let tl21 = new TimelineMax();
        let title = document.querySelector(".four .title");
        let bottomTextImg = document.querySelector(".four .page3 p img");
        let bottomTextSpanBox = document.querySelectorAll(".four .page3 .bottomTextSpanBox em");
        let bottomBorder = document.querySelectorAll(".four .page3 .bottomBorder");
        let foursid = document.getElementsByClassName("foursid");
        let fourtop = document.getElementsByClassName("fourtop");
        tl21.from(title,1.5,{
            top:-20*hs,
            opacity:0
        }).from(bottomBorder,.2,{
            left:6.17*hs,
            width:0,
        })
        .from(foursid,1,{
            height:0
        })
        .from(fourtop,.2,{
            width:0
        })
        .from(bottomTextImg,.2,{
            y:3*fs,
            delay:.2
        })
        .from(bottomTextSpanBox,1,{
            y:-25*fs,
            
        })
        $(".answer").on("click", fourAnswer);
        var prev = false;
        function fourAnswer() {
            let selected = $(this).attr("data-target");
            let btn = $(this).attr("data-btn");
            let id = $(this).attr("id");
            let topic = id.substr(0, 2);
            let answer = id.substr(2, 1);
            data[topic] = answer;
           
            $("#" + btn).attr({
                "data-status": 1
            });
            
            if (prev) {
                $(prev).css({
                    "opacity": "0.5"
                });
            }
            $(this).css({
                "opacity": "1"
            });
            prev = this;
            //choose.play();
        }
        $("#btn3").on("click", threeBtn);
        function threeBtn() {
            if ($(this).attr("data-status") === "0") {
                alert("请您选择其中一项");
            }
            else {
                fivePage();
            }
        }
    }
    //--------------------第五页-----------------------------
   function fivePage(){
        $(".four").css("display","none");
        $(".five").css("display","block");
        let tl21 = new TimelineMax();
        let title = document.querySelector(".five .title");
        let bottomTextImg = document.querySelector(".five .page4 p img");
        let bottomTextSpanBox = document.querySelectorAll(".five .page4 .bottomTextSpanBox em");
        let bottomBorder = document.querySelectorAll(".five .page4 .bottomBorder");
        let fivesid = document.getElementsByClassName("fivesid");
        let fivetop = document.getElementsByClassName("fivetop");
        tl21.from(title,1.5,{
            top:-20*hs,
            opacity:0
        }).from(bottomBorder,.2,{
            left:6.17*hs,
            width:0,
        })
        .from(fivesid,1,{
            height:0
        })
        .from(fivetop,.2,{
            width:0
        })
        .from(bottomTextImg,.2,{
            y:3*fs,
            delay:.2
        })
        .from(bottomTextSpanBox,1,{
            y:-25*fs,
            
        })

        $(".answer").on("click", fiveAnswer);
        var prev = false;
        function fiveAnswer() {
            let selected = $(this).attr("data-target");
            let btn = $(this).attr("data-btn");
            let id = $(this).attr("id");
            let topic = id.substr(0, 2);
            let answer = id.substr(2, 1);
            data[topic] = answer;
            $("#" + btn).attr({
                "data-status": 1
            });
            
            if (prev) {
                $(prev).css({
                    "opacity": "0.4"
                });
            }
            $(this).css({
                "opacity": "1"
            });
            prev = this;
            //choose.play();
        }
        $("#btn4").on("click", fourBtn);
        function fourBtn() {
            if ($(this).attr("data-status") === "0") {
                alert("请您选择其中一项");
            }
            else {
                sixPage();
            }
        }
    }
   
    //--------------------第六页-----------------------------
    function sixPage(){
        $(".five").css("display","none");
        $(".six").css("display","block");
        let tl21 = new TimelineMax();
        let title = document.querySelector(".six .title");
        let bottomTextImg = document.querySelector(".six .page5 p img");
        let bottomTextSpanBox = document.querySelectorAll(".six .page5 .bottomTextSpanBox em");
        let bottomBorder = document.querySelectorAll(".six .page5 .bottomBorder");
        let sixsid =document.getElementsByClassName("sixsid");
        let sixtop = document.getElementsByClassName("sixtop");
        tl21.from(title,1.5,{
            top:-20*hs,
            opacity:0
        }).from(bottomBorder,.2,{
            left:6.17*hs,
            width:0,
        })
        .from(sixsid,1,{
            height:0
        })
        .from(sixtop,.2,{
            width:0
        })
        .from(bottomTextImg,.2,{
            y:3*fs,
            delay:.2
        })
        .from(bottomTextSpanBox,1,{
            y:-25*fs,
            
        })
        $(".answer").on("click", sixAnswer);
        var prev = false;
        function sixAnswer() {
            let selected = $(this).attr("data-target");
            let btn = $(this).attr("data-btn");
            let id = $(this).attr("id");
            let topic = id.substr(0, 2);
            let answer = id.substr(2, 1);
            data[topic] = answer;
           
            $("#" + btn).attr({
                "data-status": 1
            });
           
            if (prev) {
                $(prev).css({
                    "opacity": "0.4"
                });
            }
            $(this).css({
                "opacity": "1"
            });
            prev = this;
            //choose.play();
        }
        $("#btn5").on("click", fiveBtn);
        function fiveBtn() {
            if ($('#btn5').attr("data-status") === "0") {
                alert("请您选择其中一项");
                return;
            }
            else {
                sevenPage();
            }
        }
    }
    //--------------------第七页-----------------------------
    function sevenPage(){
        $(".six").css("display","none");
        $(".seven").css("display","block");
        let tl21 = new TimelineMax();
        let title = document.querySelector(".seven .title");
        let bottomTextImg = document.querySelector(".seven .page6 p img");
        let bottomTextSpanBox = document.querySelectorAll(".seven .page6 .bottomTextSpanBox em");
        let bottomBorder = document.querySelectorAll(".seven .page6 .bottomBorder");
        let sixsid =document.getElementsByClassName("sevensid");
        let sixtop = document.getElementsByClassName("seventop");
        tl21.from(title,1.5,{
            top:-20*hs,
            opacity:0
        }).from(bottomBorder,.2,{
            left:6.17*hs,
            width:0,
        })
        .from(sixsid,1,{
            height:0
        })
        .from(sixtop,.2,{
            width:0
        })
        .from(bottomTextImg,.2,{
            y:3*fs,
            delay:.2
        })
        .from(bottomTextSpanBox,1,{
            y:-25*fs,
            
        })
        $(".answer").on("click", sixAnswer);
        var prev = false;
        function sixAnswer() {
            let selected = $(this).attr("data-target");
            let btn = $(this).attr("data-btn");
            let id = $(this).attr("id");
            let topic = id.substr(0, 2);
            let answer = id.substr(2, 1);
            data[topic] = answer;
           
            $("#" + btn).attr({
                "data-status": 1
            });
           
            if (prev) {
                $(prev).css({
                    "opacity": "0.4"
                });
            }
            $(this).css({
                "opacity": "1"
            });
            prev = this;
            //choose.play();
        }
        $("#btn6").on("click", fiveBtn);
        function fiveBtn() {
            if ($('#btn6').attr("data-status") === "0") {
                alert("请您选择其中一项");
                return;
            }
            else {
                console.log("您当前选择的是1："+data.t1+",2: "+data.t2+",3: "+data.t3+",4: "+data.t4+",5: "+data.t5+",6："+data.t6);
                if(data.t1 !="" && data.t2 !="" && data.t3 !="" && data.t4 !="" && data.t5 !="" && data.t6 !=""){
                    let arrData = [];
                    for(let i in data){
                        arrData.push(data[i]);
                    }
                    console.log(arrData);
                    let a=0;
                    let b=0;
                    let c=0;
                    let d=0;
                    let e=0;
                    for(let j=0; j<arrData.length; j++){
                        if("A"==arrData[j]){
                            a +=1;
                        }else if("B"==arrData[j]){
                            b +=1;
                        }else if("C"==arrData[j]){
                            c +=1;
                        }else if("D"==arrData[j]){
                            d +=1;
                        }else{
                            e +=1;
                        }
                    }
                    let sum ='';
                    if(a>=b && a>=c && a>=d && a>=e){
                        sum ="A";
                    }else if(b>=a && b>=c && b>=d && b>=e){
                        sum ="B";
                    }else if(c>=a && c>=b && c>=d && c>=e){
                        sum ="C";
                    }else if(d>=a && d>=b && d>=c && d>=e){
                        sum ="D";
                    }else{
                        sum ="E";
                    }
                    resultPage(sum)
                    
                }else{
                    alert("您有未选项，请刷新页面重新填写");
                    return;
                }
            }
        }
    }

    //--------------------第八页-----------------------------
    function resultPage(sum){
        $(".seven").css("display","none");
        $(".result").css("display","block");
        
        console.log(sum);
        let x = 98.5;
        let y = 85;
        let rand = parseInt(Math.random()*(x - y +1)+y);
        $("#pnumber").html(rand);
        if(sum == 'A'){
            $("#finfo").attr("src","./images/8/A.png");
        }else if(sum == 'B'){
            $("#finfo").attr("src","./images/8/B.png");
           
        }else if(sum == "C"){
            $("#finfo").attr("src","./images/8/C.png");
        }else if(sum == "D"){
            $("#finfo").attr("src","./images/8/D.png");
        }else{
            $("#finfo").attr("src","./images/8/E.png");
        }
        let finfo = document.getElementById("finfo");
        let work = document.querySelector(".work");
        let tl3 = new TimelineMax();
        let str = "";
		let  workObj = {
			col : 5,
			row : 3,
			workWidth : parseInt( work.getBoundingClientRect().width),
			workHeight : parseInt( work.getBoundingClientRect().height)
		}
		workObj.eachSqrtWidth = parseInt( workObj.workWidth/workObj.col );
		workObj.eachSqrtHeight = parseInt( workObj.workHeight/workObj.row );
		for (let i = 0; i < workObj.row; i++) {
			for( let j = 0;j<workObj.col; j++ ){
				let classStr = "cover";
				if( i==0 ){
					classStr += " borderTop";
				}
				if( i==workObj.row-1 ){
					classStr += " borderBottom";
				}
				if( j==0 ){
					if(i==1){
						classStr += " borderRight";
					}else{
						classStr += " borderLeft";
					}
				}
				if( j==workObj.col-1 ){
					if(i==1){
						classStr += " borderLeft";
					}else{
						classStr += " borderRight";
					}
                }
               
				str += "<div class='"+ classStr +"' style='width:"+ workObj.eachSqrtWidth +"px;height:"+workObj.eachSqrtHeight+"px'>"; 
			}
		}
		for (let i = 0; i < workObj.row*workObj.col; i++) {
			str += "</div>";
		}
		work.innerHTML += str;
		
//			修改p中间的文字为span包裹
		let ps = document.querySelectorAll(".third p");
		for (let i = 0; i < ps.length; i++) {
            let str = "";
          
			for(let j = 0;j<ps[i].innerHTML.length;j++){
				str += "<span>"+ps[i].innerHTML.charAt(j)+"</span>";
			}
			ps[i].innerHTML = str;
		}
		let spans1 = document.querySelectorAll(".work span");
		
		let ran = 5,
			nowTop = 0,
			lineindex = 0,
			baseTop = 100,
			reverse = -1;
		let covers1 = document.querySelectorAll(".work .cover");
		let w = workObj.eachSqrtWidth; 
		let h = workObj.eachSqrtHeight;
		tl3.set(covers1,{transformPerspective:100})
		.set( covers1[0],{transformOrigin:"left"})
		.set( covers1[1],{x:w,transformOrigin:"left"} )
		.set( covers1[2],{x:w,transformOrigin:"left"} )
		.set( covers1[3],{x:w,transformOrigin:"left"} )
		.set( covers1[4],{x:w,transformOrigin:"left"} )
		.set( covers1[5],{y:h,transformOrigin:"top"} )
		.set( covers1[6],{x:-w,transformOrigin:"right"} )
		.set( covers1[7],{x:-w,transformOrigin:"right"} )
		.set( covers1[8],{x:-w,transformOrigin:"right"} )
		.set( covers1[9],{x:-w,transformOrigin:"right"} )
		.set( covers1[10],{y:h,transformOrigin:"top"} )
		.set( covers1[11],{x:w,transformOrigin:"left"} )
		.set( covers1[12],{x:w,transformOrigin:"left"} )
		.set( covers1[13],{x:w,transformOrigin:"left"} )
		.set( covers1[14],{x:w,transformOrigin:"left"} )
		.from( "#r-title",1.5,{
            y:-6*fs,
            ease: Elastic.easeOut,
            opacity: 1,
			delay:0.5
		})
		.staggerFrom(covers1,0.5,{
			cycle:{
				rotationY:function(index){
					if( (index>=0&&index<=4) || (index>=6&&index<=9) || (index>=11&&index<=14) ){
						if(index%2){
							return 130
						}else{
							return -130
						}
					}
				},
				rotationX:function(index){
					if(!index%5){
						return -130
					}
				}
			},
			opacity:0
		},0.1)
		tl3.staggerFrom(spans1,1,{
			cycle:{
				y:function(index){
					if(spans1[index].offsetTop != nowTop){
						nowTop = spans1[index].offsetTop
						ran = parseInt( Math.random()*10 );
						lineindex = 0;
						baseTop = 50*Math.random()+50;
						reverse = reverse*-1;
					}
					lineindex++;
					return (baseTop-(ran-lineindex)*(ran-lineindex))*reverse;
				},
				x:function(index){
					return 50*reverse;
				}
			},
			ease:Circ.easeOut,
			scale:0
        },0.003)
        tl3.from(".kuang",1,{
            x:12*fs,
            ease: Elastic.easeOut,
            opacity:0,
        })
        tl3.from(finfo,1.5,{
            x:-6*fs,
            ease: Elastic.easeOut,
            opacity:0,
        }).from("#flogo",2,{
            y:6*fs,
            opacity:0,
        })
    }       
   
}
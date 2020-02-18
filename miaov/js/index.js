var loading = document.querySelector(".loading");
var loadingProcess = loading.getElementsByTagName("p")[0];
var swiperWrapper = document.querySelector(".swiper-wrapper");
var swiperSlide = document.querySelectorAll(".swiper-slide");
var picArr = [
	"img/bg1.png","img/2017_0.png","img/2017_1.png","img/2017_2.png","img/2017_7.png","img/chainLeft.png","img/chainRight.png","img/fence.png","img/first_circle.png","img/gear1.png","img/gear2.png","img/gear3.png","img/gear4.png","img/gear5.png","img/gear6.png","img/gear7.png","img/gear8.png","img/line1.png","img/line10.png","img/line11.png","img/line12.png","img/line13.png","img/line14.png","img/line2.png","img/line3.png","img/line4.png","img/line5.png","img/line6.png","img/line7.png","img/line8.png","img/line9.png","img/M.png","img/next.png","img/paw.png","img/pawLeft.png","img/pawRight.png","img/first_people.png","img/first_people2.png"
	,"img/bg2.png","img/bottomTextLogo.png","img/second_words.png"
	,"img/bg3.png","img/third_condition.png","img/third_dot1.png","img/third_work.png"
	,"img/bg4.png","img/forth_demon.png","img/forth_demon1.png","img/forth_demon2.png","img/forth_demon3.png","img/forth_demon4.png","img/forth_yello.png","img/intro.png"
	,"img/bg5.png","img/cube.png","img/fifth_demon.png","img/fifth_dot.png","img/fifth_dot1.png","img/QRCode.png" 
]
var img =  new Image();
var sum = picArr.length;
//console.log( picArr[40] ); 
var now = 0;

loadImg();
function loadImg(){
	img.src = picArr[now]; 
	
	function go () {
		now ++ ;
//		console.log(now);
		loadingProcess.innerHTML = parseInt( now/sum *100 ) + "%";
		if(now < picArr.length){
			loadImg()
		}else{
//			console.log("全部加载完成");
			loading.style.display = "none";
			swiperWrapper.style.opacity = "1";
			action();
		}
	}
	img.onerror = go;
	img.onload = go;
}
function action(){
	document.getElementsByTagName("html")[0].style.background = "black"
	var mySwiper = new Swiper('.swiper-container', {
	direction : '',
	initialSlide : 0,
	speed:800,
	followFinger : false,
	touchRatio : 0.1,
	resistanceRatio : 0,
	onSlideChangeStart:function(swiper){
		
		swiperSlide[swiper.previousIndex].style.zIndex = -9999;
		for (var i = 0; i < swiperSlide.length; i++) {
			swiperSlide[i].classList.add("swiper-no-swiping")
		}
		setTimeout(function(){
			for (var i = 0; i < swiperSlide.length; i++) {
				if(i!=1){
					swiperSlide[i].classList.remove("swiper-no-swiping")
				}
			}
		},1000)
		
		if(swiper.activeIndex>swiper.previousIndex){
			swiperSlide[swiper.previousIndex].style.transform = "translateY("+ mySwiper.height +"px) scale(0.8)";
			swiperSlide[swiper.previousIndex].style.webkitFilter = "brightness(0.5)";
		}else{
			swiperSlide[swiper.previousIndex].style.transform = "translateY("+ -mySwiper.height +"px) scale(0.8)";
			swiperSlide[swiper.previousIndex].style.webkitFilter = "brightness(0.5)"
		}

		if(swiper.activeIndex === 0){
			
//			tl2.pause();
//			tl21.pause();
//			tl3.pause();
//			tl4.pause();
//			tl41.pause();
			
			first();
		}
		if(swiper.activeIndex === 1){
			
//			tl.pause();
//			tl3.pause();
//			tl4.pause();
//			tl41.pause();
			second();
		}
		if(swiper.activeIndex === 2){
			
			console.log(1);
			
//			tl.pause();
//			tl2.pause();
//			tl21.pause();
//			tl4.pause();
//			tl41.pause();
			third();
		}
		if(swiper.activeIndex === 3){
			
//			tl.pause();
//			tl2.pause();
//			tl21.pause();
//			tl3.pause();
			forth();
		}
		if(swiper.activeIndex === 4){
			
//			tl.pause();
//			tl2.pause();
//			tl21.pause();
//			tl3.pause();
//			tl4.pause();
//			tl41.pause();
			fifth();
		}
	},
	onSlideChangeEnd: function(swiper){
//		swiperSlide[swiper.previousIndex].style.transform = "translateY(0px) translateZ(0px)";
		swiperSlide[swiper.previousIndex].style.transform = "translateY(0px) scale(1)";
		swiperSlide[swiper.previousIndex].style.zIndex = 0;
		swiperSlide[swiper.previousIndex].style.webkitFilter = "brightness(1)"
  },
	nextButton:'.next',
	noSwiping : true
})

//console.log( mySwiper.activeIndex );
var mySwiperH = mySwiper.height;
//var now = mySwiper.activeIndex;
//for (var i = 0; i < swiperSlide.length; i++) {
//	swiperSlide[i].style.top = -mySwiperH + "px";
//}
//swiperSlide[now].style.top = "0";


//----------------------------------------------------------------------第一屏-------
var html = document.documentElement;
var width = html.getBoundingClientRect().width;
var fs = width/16;
tl = new TimelineMax();
var onoff = true;
first ();
function first () {
	//第一屏动画
	var timeBoxSpan = document.querySelectorAll(".timeBox span");
	for (var i = 0; i < timeBoxSpan.length; i++) {
		timeBoxSpan[i].index = i;
	}
	if(onoff){
//		栅栏掉下
		tl.set( timeBoxSpan,{className:""} )
		tl.staggerFrom(".timeBox",3,{
			y:-6*fs,
			ease:Elastic.easeOut,
			delay:0.5
		})
//		2017弹动
		.staggerTo(timeBoxSpan,1,{
			scale:1,
			ease:Elastic.easeOut,
			onComplete:function(){
				for (var i = 0; i < timeBoxSpan.length; i++) {
					if(i==0){
						timeBoxSpan[i].className = "goDown";
					}
					if(i==1){
						timeBoxSpan[i].className = "goUp";
					}
					if(i==2){
						timeBoxSpan[i].className = "goDown2";
					}
					if(i==3){
						timeBoxSpan[i].className = "goDown";
					}
				}
			}
		},.2,"-=1.5")
//		爪子落下来
		.staggerTo(".pawsbox",1.2,{
			top:0
		},"-=0.3")
//		爪子张开
		.staggerTo(".paws",.1,{
			cycle:{
	 			rotation:[25,-25]
	 		},
	 		ease:Circ.easeIn
		})
//		M掉下
		.staggerTo(".M",.8,{
			y:3*fs,
			ease:Bounce.easeOut
		})
//		链子出现
		.staggerTo(".chain",.5,{opacity:1})
//		爪子合并
		.staggerTo(".paws",.1,{
 			rotation:0
		},"-=0.3")
//		爪子收起
		.staggerTo(".paw",.3,{
			y:-1*fs
		},'-=.1')
//		爪子倾斜右移
		.staggerTo(".paw",0.9,{
			rotation:5,
			x:4*fs,
			ease:Linear.easeIn
		},"-=.1")
		.set(".paw", {x:5*fs,transformOrigin: "top center"})
//		晃动
		.staggerTo(".paw",2.5,{
			rotation:0,
			ease:Elastic.easeOut,	
//			onComplete:function(){
//				var swiperSlides = document.querySelectorAll(".swiper-slide");
//				for (var i = 0; i < swiperSlides.length-1; i++) {
////					swiperSlides[i].classList.add( "swiper-no-swiping" );
//				}
//				swiperSlides[0].classList.remove( "swiper-no-swiping" );
//			}
		})
//		.staggerTo(".paw",0.5,{
//			rotate:
//		})
		onoff = false;
	}else{
		tl.restart();
	}
}
//----------------------------------------------------------------------第二屏-------
var tl2 = new TimelineMax();
var tl21 = new TimelineMax();
var timesec = 0;
var onoff2 = true;
var outer;
var ori;
var timer; 
var timer2;
function second () {
	if(onoff2){
		onoff2 = false;
//			生成box中盒子
		var str = "<div class='ori'></div>";
		var colarr = ["#020e4e","#dbe3f3","#6581bf","#8da2d2","#ffffff","#6b86c3"]
		var word = document.querySelector(".word");
		for (var i = 0; i < 14; i++) {
			for(var j = 0;j<14;j++){
				str += "<div class='outer' style='background:"+colarr[(i*14+j)%6]+"'></div>";
			}
		}
		word.innerHTML = str;
		outer = document.querySelectorAll(".outer ");
		ori = document.querySelector(".ori");
		var bottomTextImg = document.querySelector(".bottomText p img");
		var bottomTextSpanBox = document.querySelectorAll(".bottomTextSpanBox em");
		
		tl2.set(outer,{opacity:1,x:900,y:800,z:2050,transformPerspective:1000});
		tl2.staggerTo(outer,2.5,{
			cycle:{
				bezier:function(){
					return [
						{x:Math.random()*300+400, y:Math.random()*200+500,z:1050},
						{x:Math.random()*300+200, y:Math.random()*200+300,z:550},
						{x:Math.random()*100, y:Math.random()*200+300,z:500},
						{x:Math.random()*100-300, y:Math.random()*100+200,z:450},
						{x:Math.random()*100-300, y:Math.random()*20+60,z:400},
						{x:Math.random()*50-150, y:Math.random()*100-200,z:350},
						{x:Math.random()*100+150, y:Math.random()*100-200,z:300},
						{x:Math.random()*100+220, y:Math.random()*100+20,z:400},
						{x:Math.random()*10+100, y:Math.random()*100+30,z:350},
						{x:0, y:0,z:0}
					]
				},
				rotationX:function(){
					return Math.random()*70
				},
				rotationY:function(){
					return Math.random()*70
				},
//				onComplete:function(){
//					console.log(this);
//					this.style.opacity = 0
//				}
			}
		},0.011);
		timesec = tl2.totalDuration();
		
		var bottomBorder = document.querySelectorAll(".bottomBorder");
		var sideBorder = document.querySelectorAll(".sideBorder");
		var topBorder = document.querySelectorAll(".topBorder");
		tl21.from(bottomBorder,.2,{
			left:6.17*fs,
			width:0,
			delay:3
		})
		.from(".sideBorder",.2,{
			height:0
		})
		.from(".topBorder",.2,{
			width:0
		})
		.from(bottomTextImg,.2,{
			y:2*fs,
			delay:.2
		})
		.from(bottomTextSpanBox,.2,{
			y:-4*fs
//			onComplete:function(){
//				var swiperSlides = document.querySelectorAll(".swiper-slide");
//				for (var i = 0; i < swiperSlides.length-1; i++) {
////					swiperSlides[i].classList.add( "swiper-no-swiping" );
//				}
//				swiperSlides[1].classList.remove( "swiper-no-swiping" );
//			}
		})
	}else{
		tl2.restart();
		tl21.restart();
	}
	
	ori.style.height = 0;
	clearTimeout(timer);
	clearInterval(timer2);
	timer = setTimeout(function(){
		var num = 0
		var timer2 = setInterval(function(){
//			console.log( outer );
			outer[num].style.opacity = 0;
			var h = Math.floor(num/14)/14*15*fs;
			ori.style.height = h +"px";
			num++;
			if(num >= 196){
				num = 0;
				clearTimeout(timer)
				clearInterval(timer2);
				swiperSlide[1].classList.remove("swiper-no-swiping")
			}
		},1)
	},(timesec*1000)-2200)
//	},(timesec*1000)-2050)//17:12
	
}
//----------------------------------------------------------------------第三屏-------
var work = document.querySelector(".work");
var condition = document.querySelector(".condition");
var tl3 = new TimelineMax();
var onoff3 = true;
function third () {
	if(onoff3){
		onoff3 = false;
		var str = "";
		var workObj = {
			col : 5,
			row : 3,
			workWidth : parseInt( work.getBoundingClientRect().width),
			workHeight : parseInt( work.getBoundingClientRect().height)
		}
		workObj.eachSqrtWidth = parseInt( workObj.workWidth/workObj.col );
		workObj.eachSqrtHeight = parseInt( workObj.workHeight/workObj.row );
		for (var i = 0; i < workObj.row; i++) {
			for( var j = 0;j<workObj.col; j++ ){
				var classStr = "cover";
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
		for (var i = 0; i < workObj.row*workObj.col; i++) {
			str += "</div>";
		}
		work.innerHTML += str;
		
//			修改p中间的文字为span包裹
		var ps = document.querySelectorAll(".third p");
		for (var i = 0; i < ps.length; i++) {
			var str = "";
			for(var j = 0;j<ps[i].innerHTML.length;j++){
				str += "<span>"+ps[i].innerHTML.charAt(j)+"</span>";
			}
			ps[i].innerHTML = str;
		}
		var spans1 = document.querySelectorAll(".work span");
		
		var ran = 5,
			nowTop = 0,
			lineindex = 0,
			baseTop = 100,
			reverse = -1;
		
//			condition动画
		var conditionObj = {
			col : 5,
			row : 3,
			conditionWidth : parseInt( condition.getBoundingClientRect().width),
			conditionHeight : parseInt( condition.getBoundingClientRect().height)
		}
		conditionObj.eachSqrtWidth = parseInt( conditionObj.conditionWidth/conditionObj.col );
		conditionObj.eachSqrtHeight = parseInt( conditionObj.conditionHeight/conditionObj.row );
		str = "";
		for (var i = 0; i < conditionObj.row; i++) {
			for( var j = 0;j<conditionObj.col; j++ ){
				var classStr = "cover";
				if( i==0 ){
					classStr += " borderTop";
				}
				if( i==conditionObj.row-1 ){
					classStr += " borderBottom";
				}
				if( j==0 ){
					if(i!=1){
						classStr += " borderRight";
					}else{
						classStr += " borderLeft";
					}
				}
				if( j==conditionObj.col-1 ){
					if(i!=1){
						classStr += " borderLeft";
					}else{
						classStr += " borderRight";
					}
				}
				str += "<div class='"+ classStr +"' style='width:"+ conditionObj.eachSqrtWidth +"px;height:"+conditionObj.eachSqrtHeight+"px'>"; 
			}
		}
		for (var i = 0; i < conditionObj.row*conditionObj.col; i++) {
			str += "</div>";
		}
		condition.innerHTML += str;
		var covers1 = document.querySelectorAll(".work .cover");
		var w = workObj.eachSqrtWidth; 
		var h = workObj.eachSqrtHeight;
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
		.from( ".work img",1,{
			y:-6*fs,ease: Elastic.easeOut,
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
		var covers2 = document.querySelectorAll(".condition .cover");
		var spans2 = document.querySelectorAll(".condition span");
		var cw = conditionObj.eachSqrtWidth;
		var ch = conditionObj.eachSqrtHeight;
		tl3.set(covers2,{transformPerspective:100})
		.set( covers2[0],{transformOrigin:"right"})
		.set( covers2[1],{x:-cw,transformOrigin:"right"} )
		.set( covers2[2],{x:-cw,transformOrigin:"right"} )
		.set( covers2[3],{x:-cw,transformOrigin:"right"} )
		.set( covers2[4],{x:-cw,transformOrigin:"right"} )
		.set( covers2[5],{y:ch,transformOrigin:"top"} )
		.set( covers2[6],{x:cw,transformOrigin:"left"} )
		.set( covers2[7],{x:cw,transformOrigin:"left"} )
		.set( covers2[8],{x:cw,transformOrigin:"left"} )
		.set( covers2[9],{x:cw,transformOrigin:"left"} )
		.set( covers2[10],{y:ch,transformOrigin:"top"} )
		.set( covers2[11],{x:-cw,transformOrigin:"right"} )
		.set( covers2[12],{x:-cw,transformOrigin:"right"} )
		.set( covers2[13],{x:-cw,transformOrigin:"right"} )
		.set( covers2[14],{x:-cw,transformOrigin:"right"} )
		.from( ".condition img",.6,{
			y:-17*fs,
			ease: Back.easeInOut
		})
		.staggerFrom(covers2,.5,{
			cycle:{
				rotationY:function(index){
					if( (index>=0&&index<=4) || (index>=6&&index<=9) || (index>=11&&index<=14) ){
						if(index%2){
							return -130
						}else{
							return 130
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
		tl3.staggerFrom(spans2,1,{
			cycle:{
				y:function(index){
					if(spans2[index].offsetTop != nowTop){
						nowTop = spans2[index].offsetTop
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
//			onComplete:function(){
//				var swiperSlides = document.querySelectorAll(".swiper-slide");
//				for (var i = 0; i < swiperSlides.length-1; i++) {
////					swiperSlides[i].classList.add( "swiper-no-swiping" );
//				}
//				swiperSlides[2].classList.remove( "swiper-no-swiping" );
//			}
		},0.003)
		
	}else{
		tl3.restart();
	}
}

//----------------------------------------------------------------------第四屏-------


var tl4 = new TimelineMax();
var tl41 = new TimelineMax();
var onoff4 = true;

function forth () {
	if(onoff4){
		onoff4 = false;
		var ps = document.querySelectorAll(".introduce p")[0],
			psInner = ps.innerHTML,
			psL = ps.innerHTML.length,
			str = "";
		for(var j = 0;j<psL;j++){
			str += "<span>"+psInner.charAt(j)+"</span>";
		}
		ps.innerHTML = str;
		
		var str = "";
		for (var i = 0; i < 8; i++) {
			for(var j = 0; j < 8; j++) {
				classStr = "cover";
				if( i==0 ){
					classStr += " borderTop";
				}
				if( i==7 ){
					classStr += " borderBottom";
				}
				if( j==0 ){
					classStr += " borderLeft";
				}
				if( j==7 ){
					classStr += " borderRight";
				}
				str += "<div class='"+classStr+"'></div>";
			}
		}
		
		var coverBox = document.querySelector(".coverBox");
		var introduce = document.querySelector(".introduce");
//		coverBox.style.width = introduce.offsetHeight + "px" ;
//		coverBox.style.height = introduce.offsetWidth + "px" ;
		coverBox.innerHTML = str;
		var covers = coverBox.getElementsByTagName("div");
		var intro = document.querySelector(".intro");
		var h = parseInt(covers[0].offsetHeight);	
		var w = parseInt(covers[0].offsetWidth);
		for (var i = 0; i < covers.length; i++) {
			covers[i].style.cssText = "width:"+ (w-1) +"px;height:"+ h +"px;"
		}
//		tl4.staggerFrom(spans,1.5,{
//			cycle:{
//				y:function(index){
//					if(spans[index].offsetTop != nowTop){
//						nowTop = spans[index].offsetTop;
//						ran = parseInt( Math.random()*10 );
//						lineindex = 0;
//						baseTop = 50*Math.random()+50;
//						reverse = reverse*-1;
//					}
//					lineindex++;
//					return (baseTop-(ran-lineindex)*(ran-lineindex))*reverse;
//				},
//				x:function(index){
//					return 50*reverse;
//				}
//			},
//			delay:3,
//			scale:0,
//			ease:Quint.easeOut,
//			onComplete:function(){
//				var swiperSlides = document.querySelectorAll(".swiper-slide");
//				for (var i = 0; i < swiperSlides.length-1; i++) {
////					swiperSlides[i].classList.add( "swiper-no-swiping" );
//				}
//				swiperSlides[3].classList.remove( "swiper-no-swiping" );
//			}
//		},0.002)
		
	}else{
		tl4.restart();
		tl41.restart();
	}
	
	var coverBox = document.querySelector(".coverBox");
	var covers = coverBox.getElementsByTagName("div");
	
	for (var i = 0; i < covers.length; i++) {
		covers[i].style.transition = "0s";
		covers[i].style.transform = "scale(0) rotateX(180deg)";
	}
	
	setTimeout(function(){
		for (var i = 0; i < covers.length; i++) {
			covers[i].style.transition = "1.5s";
			covers[i].style.transitionDelay = (i%8)*0.1 + "s";
			covers[i].style.transform = "scale(1) rotateX(0deg)";
		}
	},300)
	
	
//	if(true)return
	var ran = 5,
		nowTop = 0,
		lineindex = 0,
		baseTop = 100,
		reverse = -1;
	
//	console.log("action");
	var spans = document.querySelectorAll(".introduce span");
		for (var i = 0; i < spans.length; i++) {
			if(spans[i].offsetTop != nowTop){
				nowTop = spans[i].offsetTop;
				ran = parseInt( Math.random()*10 );
				lineindex = 0;
				baseTop = 50*Math.random()+50;
				reverse = reverse*-1;
			}
			lineindex++;
			ty = (baseTop-(ran-lineindex)*(ran-lineindex))*reverse;
//			console.log( ty );
			spans[i].style.transition = "0s";
			spans[i].style.transform = "translateX("+reverse*50+"px) translateY("+ty+"px) scale(0)";
		}
		setTimeout(function(){
			for (var i = 0; i < spans.length; i++) {
				spans[i].style.transition = "2.5s";
				spans[i].style.transform = "translateX(0px) translateY(0px) scale(1)";
			}
		},1800)
}

//----------------------------------------------------------------------第五屏-------
var boxWrap = document.getElementById("boxWrap");
var tl5 = new TimelineMax();
var tl51 = new TimelineMax();
var tl52 = new TimelineMax();
var onoff5 = true; 
function fifth () {
	if(onoff5){
		onoff5 = false;
		var str = "";
		var pos1 = [[0,fs],[0,6.15*fs],[0,11.32*fs],[0,14.75*fs],[3.12*fs,4.47*fs],[3.12*fs,13.03*fs],[6.21*fs,fs],[7.81*fs,7.03*fs],[9.375*fs,9.5*fs],[7.81*fs,15.62*fs]];
		
		var pos2 = [[0,9.48*fs],[0,12.88*fs],[0,16.28*fs],[0,19.72*fs],[3*fs,12.88*fs],[5.44*fs,16.28*fs],[7.76*fs,12.88*fs],[10.88*fs,9.48*fs],[10.88*fs,12.88*fs],[10.88*fs,16.28*fs],[10.88*fs,19.72*fs]];
		
		for (var i = 0; i < pos1.length; i++) {
			str += "<div class='cube1' style='left:"+ pos1[i][0] +"px;top:"+  pos1[i][1]+"px'></div>";
		}
		for (var i = 0; i < pos2.length; i++) {
			str += "<div class='cube2' style='left:"+ pos2[i][0] +"px;top:"+  pos2[i][1]+"px'></div>";
		}
		boxWrap.innerHTML = str;
		var cube1 = document.querySelectorAll(".cube1");
		var cube2 = document.querySelectorAll(".cube2");
		tl5.set([cube1,cube2],{
			x:16*fs,
			y:-5.5*fs
		})
		.staggerTo( cube1,1,{
			x:0,
			y:0,
			ease:Circ.easeOut
		},.05 )
		.staggerTo( cube1,2,{
			x:-16*fs,
			y:5.5*fs,
			ease:Circ.easeOut,
			delay:2
		},.05 )
		.staggerTo( cube2,1,{
			x:0,
			y:0,
			ease:Circ.easeOut
		},.08,"-=1.5" )
		.staggerTo( cube2,2,{
			x:-17*fs,
			y:6*fs,
			ease:Circ.easeOut,
			delay:2
		},.05 )
		tl5.repeat(-1);
		tl5.repeatDelay(-1.1)
		
		var textContent = document.querySelector(".textContent");
		tl51.to(textContent,4,{
			y:-50,
			ease:Cubic.easeInOut
		})
		.to(textContent,4,{
			y:0,
			ease:Cubic.easeInOut
		})
		tl51.repeat(-1);
		
		var dotts = document.querySelectorAll(".fifth_dot");
		tl52.to(dotts,2,{
			y:20
		})
		.staggerTo(dotts,2,{
			y:0,
			delay:1
		},.5)
		tl52.repeat(-1);
		
	}else{
		tl5.restart();
		tl51.restart();
		tl52.restart();
	}
}
//mySwiper.disableTouchControl();
}

<?php
 //include 'wechat/jssdk.php';
 //$wx = new jssdk('wx0cd265e680c6f782','d987fe7d0e19fcfcdc238ce2979f173d');
 include 'Wechatf.php';
 $wx = new Wechatf('wx0cd265e680c6f782','d987fe7d0e19fcfcdc238ce2979f173d');
 $wxinfo = $wx->getSignPackage();
 //$uinfo = $wx->getinfo();
 
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no,maximum-scale=1.0">
		<title>花溪26度楼书</title>
		<link rel="stylesheet" type="text/css" href="css/main.css"/>
		<link rel="stylesheet" type="text/css" href="css/animate.css"/>
		<script src="js/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/wow.js"></script>
		<style type="text/css">
			#musicControl { position:fixed;right:10px;top:20px;margin-top:0;display:inline-block;z-index:99999999}
			#musicControl a { display:inline-block;width:25px;height:25px;overflow:hidden;background:url('./img/mcbg.png') no-repeat;background-size:100%;background-position:left top;}
			#musicControl a audio{width:100%;height:56px;}
			#musicControl a.stop { background-position:left bottom;}
			#musicControl a.on { background-position:0px 1px;-webkit-animation: reverseRotataZ 1.2s linear infinite;}
			#music_play_filter{width:100%;height:100%;overflow:hidden;position:fixed;top:0;left:0;z-index:99999998;}
	
		</style>
		
	<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?6fa525e1819046febc5507c7a678200a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
	</head>
	<body>
		<!--<img id="du26" src="img/26.jpg"/>-->
		
		<div class="loading">
			
		</div>
		<span id="musicControl">
        <a id="mc_play" class="on" onclick="play_music();">
            <audio id="musicfx" loop="loop" autoplay="autoplay">
                <source src="./mp3/music.mp3" type="audio/mpeg">
            </audio>
        </a>
 </span>
		<div class="star">
			
			<img  id="a1" class="wow fadeInLeft " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/LOGO.png"/>
			<img  id="a2" class="wow fadeInLeft " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/1-title.png"/>
			<img  id="a3" class="wow titleRight " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/1-title3.png"/>
		</div>
		
		<div id="main">
			<img id="mainImg" src="images/bj-2.jpg"/>
			<img  id="a3-2" data-id="1" class="wow  slideInLeft" data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/2-title.png"/>
			<img  id="a4" class="wow slideInDown " data-wow-iteration="1"  data-wow-duration="2s" src="images/yuansu/2-title1.png"/>
			<img  id="a5" class="wow slideInDown " data-wow-iteration="1" data-wow-duration="2s" src="images/yuansu/2-title2.png"/>
			<img  id="a6" class="wow slideInDown " data-wow-iteration="1" data-wow-duration="2s" src="images/yuansu/2-title3.png"/>

			<!-- <img  id="a3-2" data-id="1" class="wow  slideInLeft" data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/3-title.png"/> -->
			<img  id="b1" class="wow slideInRight " data-wow-iteration="1"  data-wow-delay="0.8s" data-wow-duration="3.15s" src="images/yuansu/3-title.png"/>
			

			<img  id="q2" class="wow fadeInLeft " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="2s" src="images/yuansu/4-title.png"/>
			<img  id="q3" class="wow fileDown " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/4-title1.png"/>
			<img  id="qs3" class="wow slideInLeft " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/4-title2.png"/>


			<img  id="q4" class="wow fadeInLeft " data-wow-iteration="1" data-wow-delay="1s" data-wow-duration="4s" src="images/yuansu/5-title.png"/>
			<img  id="q5" class="wow fileDown " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/6-title.png"/>

			<img  id="q6" class="wow titleRight " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/7-title.png"/>

			<img  id="q8" class="wow fadeInLeft " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/9-title.png"/>
			<img  id="q7" class="wow fadeInLeft " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/8-title.png"/>
			<img  id="q10" class="wow fileDown " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/9-title1.png"/>
			<img  id="q11" class="wow fileDown " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/9-title2.png"/>

			<img  id="q9" class="wow fadeInLeft " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="images/yuansu/10-title.png"/>
			
		</div>
	</body>
	<script type="text/javascript">
  	function play_music(){
        if ($('#mc_play').hasClass('on')){
            $('#mc_play audio').get(0).pause();
            $('#mc_play').attr('class','stop');
        }else{
            $('#mc_play audio').get(0).play();
            $('#mc_play').attr('class','on');
        }
        $('#music_play_filter').hide();
        event.stopPropagation(); //阻止冒泡 
    }
  	
  	
  	console.log()
    function just_play(id){
        $('#mc_play audio').get(0).play();
        $('#mc_play').attr('class','on');
        if (typeof(id)!='undefined'){
            $('#music_play_filter').hide();
        }
        event.stopPropagation(); //阻止冒泡 
    } 
    function is_weixn(){
        return false;
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            return true;
        } else {
            return false;
        }
    }
    var play_filter=document.getElementById('music_play_filter');
    // play_filter.addEventListener('click', function(){
    //     just_play(1);
    // });
    // play_filter.addEventListener('touchstart', function(){
    //     just_play(1);
    // });
    // play_filter.addEventListener('touchend', function(){
    //     just_play(1);
    // });
    // play_filter.addEventListener('touchmove', function(){
    //     just_play(1);
    // });
    // play_filter.addEventListener('mousedown', function(){
    //     just_play(1);
    // });
    // play_filter.addEventListener('mouseup', function(){
    //     just_play(1);
    // });
    // play_filter.addEventListener('mousemove',function(){
    //     just_play(1);
    // });
    window.onload=function(){
        if (!is_weixn()){
            just_play();
        }
    } 
	
	
	
	
  </script>
	<script>
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
		
		$('body').bind('touchmove', function(e) { 
			
		if($(this).scrollTop()==0||$(this).scrollTop()==$('#main').height()){
			//evt.preventdefault();
			return false;
		} else{
			evt.preventdefault();
		}
			console.log($(this).scrollTop()); // 计算你的屏幕高度
		});
	};
	</script>
	<div style="display:none">
        <?php include_once "wx_wechat.php"; ?>
    </div>
	
</html>

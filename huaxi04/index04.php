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
		<script src="js/jquery-2.1.0.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/main.js" type="text/javascript" charset="utf-8"></script>
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
                <source src="./img/music_2.mp3" type="audio/mpeg">
            </audio>
        </a>
 </span>
		<div class="star">
			
			<img  id="a1" class="wow fadeInLeft " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="img/a1.png"/>
			<img  id="a2" class="wow fadeInLeft " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="img/a2.png"/>
			<img  style="position: absolute;
    top: 62vw;
    left: 3vw;
    width: 4.5vw;opacity:0.7;
filter:alpha(opacity=70); " class="wow fadeInLeft " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="img/hd.png"/>
		</div>
		
		<div id="main">
			<img id="mainImg" src="img/bj.jpg"/>
			<img  id="a3" data-id="1" class="wow slideInDown " data-wow-iteration="1" data-wow-delay="0.5s" data-wow-duration="4s" src="img/a3.png"/>
			<img  id="a4" class="wow slideInLeft " data-wow-iteration="1"  data-wow-duration="3s" src="img/a4.png"/>
			<img  id="a5" class="wow bounce " data-wow-iteration="1" data-wow-duration="5s" src="img/a5_1.png"/>
			
			<img  id="b1" class="wow slideInRight " data-wow-iteration="1"  data-wow-delay="0.8s" data-wow-duration="3.15s" src="img/b1.png"/>
			<div class="quan" id="t1"><img class="scaleout" src="img/quan.png" >
			</div>
			<img id="ts1" class="ts" src="img/1.png"/>
			<img id="close1" class="close" src="img/close.png"/>
			<div class="quan" id="t2"><img class="scaleout" src="img/quan.png" >
			</div>
			<img id="ts2" class="ts" src="img/2.png"/>
			<img id="close2" class="close" src="img/close.png"/>
			
			<img  id="b2" class="wow slideInRight " data-wow-iteration="1" data-wow-duration="5s" src="img/b2.png"/>
			<div class="quan" id="t3"><img class="scaleout" src="img/quan.png" >
				
			</div>
			<img id="ts3" class="ts" src="img/3.png"/>
			<img id="close3" class="close" src="img/close.png"/>
			
			<div class="quan" id="t4"><img class="scaleout" src="img/quan.png" ></div>
			<img id="ts4" class="ts" src="img/4.png"/>
			<img id="close4" class="close" src="img/close.png"/>
			
			<div class="quan" id="t5">
				<img class="scaleout" src="img/quan.png" >
			</div>
			<img id="ts5" class="ts" src="img/5.png"/>
			<img id="close5" class="close" src="img/close.png"/>
			
			<div class="quan" id="t6"><img class="scaleout" src="img/quan.png" >
			</div>
			<img id="ts6" class="ts" src="img/6.png"/>
			<img id="close6" class="close" src="img/close.png"/>
			
			
			<div class="quan" id="t7"><img class="scaleout" src="img/quan.png" >
			</div>
			<img id="ts7" class="ts" src="img/7.png"/>
			<img id="close7" class="close" src="img/close.png"/>
			
			<img  id="b3" class="wow slideInRight " data-wow-iteration="1"  data-wow-delay="0.8s" data-wow-duration="3.15s" src="img/b3.png"/>
			<div class="quan" id="t8"><img class="scaleout" src="img/quan.png" >
			</div>
			<img id="ts8" class="ts" src="img/8.png"/>
			<img id="close8" class="close" src="img/close.png"/>
			
			<img  id="b4" class="wow slideInRight " data-wow-iteration="1"  data-wow-duration="4s" src="img/b4.png"/>
			<div class="quan" id="t9"><img class="scaleout" src="img/quan.png" >			</div>
			<img id="ts9" class="ts" src="img/9.png"/>
			<img id="close9" class="close" src="img/close.png"/>
			
			<img  id="b5" class="wow slideInRight " data-wow-iteration="1"  data-wow-duration="4s" src="img/b5.png"/>
			<div class="quan" id="t10"><img class="scaleout" src="img/quan.png" >			</div>
			<img id="ts10" class="ts" src="img/10.png"/>
			<img id="close10" class="close" src="img/close.png"/>
			
			<img  id="ewm" class="wow slideInRight " data-wow-iteration="1"  data-wow-delay="0.8s" data-wow-duration="3.15s" src="img/ewm.png"/>
			<a href="tel:0851-88633999"><img  id="bohao" class="wow flash " data-wow-iteration="5" data-wow-duration="3.15s" src="img/bohao.png"/></a>
			<img  id="dianhua" class="wow slideInRight " data-wow-iteration="1"  data-wow-delay="0.8s" data-wow-duration="3"  src="img/dianhua.png"/>
			<img  id="dizhi" class="wow slideInRight " data-wow-iteration="1"  data-wow-delay="0.5s" data-wow-duration="2.5s"  src="img/dizhi.png"/>
			
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
    play_filter.addEventListener('click', function(){
        just_play(1);
    });
    play_filter.addEventListener('touchstart', function(){
        just_play(1);
    });
    play_filter.addEventListener('touchend', function(){
        just_play(1);
    });
    play_filter.addEventListener('touchmove', function(){
        just_play(1);
    });
    play_filter.addEventListener('mousedown', function(){
        just_play(1);
    });
    play_filter.addEventListener('mouseup', function(){
        just_play(1);
    });
    play_filter.addEventListener('mousemove',function(){
        just_play(1);
    });
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
    	if($(this).scrollTop()==0||$(this).scrollTop()==$('#main').height()){e.preventdefault();} 
    	
    console.log($(this).scrollTop()); // 计算你的屏幕高度
});
	};
	</script>
	<script>
		$('#t1').click(function(){
			$('#ts1,#close1').show();
		})
		$('#close1').click(function(){
			$('#ts1,#close1').hide();
		})
		$('#t2').click(function(){
			$('#ts2,#close2').show();
		})
		$('#close2').click(function(){
			$('#ts2,#close2').hide();
		})
		$('#t3').click(function(){
			$('#ts3,#close3').show();
		})
		$('#close3').click(function(){
			$('#ts3,#close3').hide();
		})
		$('#t4').click(function(){
			$('#ts4,#close4').show();
		})
		$('#close4').click(function(){
			$('#ts4,#close4').hide();
		})
		$('#t5').click(function(){
			$('#ts5,#close5').show();
		})
		$('#close5').click(function(){
			$('#ts5,#close5').hide();
		})
		$('#t6').click(function(){
			$('#ts6,#close6').show();
		})
		$('#close6').click(function(){
			$('#ts6,#close6').hide();
		})
		$('#t7').click(function(){
			$('#ts7,#close7').show();
		})
		$('#close7').click(function(){
			$('#ts7,#close7').hide();
		})
		$('#t8').click(function(){
			$('#ts8,#close8').show();
		})
		$('#close8').click(function(){
			$('#ts8,#close8').hide();
		})
		$('#t9').click(function(){
			$('#ts9,#close9').show();
		})
		$('#close9').click(function(){
			$('#ts9,#close9').hide();
		})
		$('#t10').click(function(){
			$('#ts10,#close10').show();
		})
		$('#close10').click(function(){
			$('#ts10,#close10').hide();
		})
	</script>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<script type="text/javascript">
		
    (function wechatConfig(){
      wx.config({
        debug: false,
        appId: '<?=$wxinfo['appId']?>',
        timestamp: '<?=$wxinfo['timestamp']?>',
        nonceStr: '<?=$wxinfo['nonceStr']?>',
        signature: '<?=$wxinfo['signature']?>',
        jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'onMenuShareWeibo'
        ]
      });
    })();
    document.addEventListener("WeixinJSBridgeReady",wechat,false);
    function wechat(){
      var titleValue = "贵高速·花溪26°——隽美之著 山河之图";
      var linkValue = "http://wx.uvcsi.com/huaxi/index.php";
      var imgUrlValue = "http://wx.uvcsi.com/huaxi/img/tb.jpg";
      var descValue = "贵州高速，千亿国企，致献花溪，百万方山河人居版图";

      document.getElementById("musicfx").play();    //music autoplay

      wx.onMenuShareAppMessage({     //share wechat friend
        title: titleValue, // 分享标题
        desc: descValue, // 分享描述
        link: linkValue, // 分享链接
        imgUrl: imgUrlValue // 分享图标
      });

      wx.onMenuShareTimeline({     //share wechat moment
        title: titleValue, // 分享标题
        link: linkValue, // 分享链接
        imgUrl: imgUrlValue // 分享图标
      });
    };
  </script>
	
	
</html>

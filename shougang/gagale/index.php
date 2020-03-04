<div style="display:none">
	<?php include_once "wechat.php"; ?>
</div>
<!DOCTYPE html>
<html style="font-size: 40px;">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>首钢刮刮乐，大奖送不停！</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta http-equiv="Cache-Control" content="no-transform">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="layoutmode" content="standard">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="renderer" content="webkit">

		<!--uc浏览器判断到页面上文字居多时，会自动放大字体优化移动用户体验。添加以下头部可以禁用掉该优化-->
		<meta name="wap-font-scale" content="no">

		<meta content="telephone=no" name="format-detection">
		<meta http-equiv="Pragma" content="no-cache">

		<script type="text/javascript">
			//html root的字体计算应该放在最前面，这样计算就不会有误差了/
			//2016.3.23 wjq update 之所以要加个判断返回一个20.5，是因为当用户在谷歌等浏览器直接输入手机端网站网址时，如果用户设置模块自定义样式的高度比较小，由于这时候的clientWidth为1920px，及返回的_htmlFontSize为40，这时候就会使模块太小，展示不完全，因此先取一个较为准确的值去展示。Mobi.resetHtmlFontSize()顺便也加了
			var _htmlFontSize = (function() {
				var clientWidth = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
				if(clientWidth > 640) clientWidth = 640;
				document.documentElement.style.fontSize = clientWidth * 1 / 16 + "px";
				return clientWidth * 1 / 16;
			})();
		</script>
		<link rel="stylesheet" type="text/css" href="css/base.min.css"/>
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script>
			var _hmt = _hmt || [];
			(function() {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?60bd71bfe43cd3aa3918d67c340d610b";
			var s = document.getElementsByTagName("script")[0]; 
			s.parentNode.insertBefore(hm, s);
			})();
		</script>

	</head>

	<body>
		<div class="music">
			<audio id="bgMusic" src="./mp3/music.mp3?t=1" autoplay="autoplay" preload="true" loop="loop"></audio>
		</div>
		<audio id="clickMp3" src="./mp3/click.mp3"></audio>
		<div class="main_box">
			<div class="fBtn">
				<img id="jsBtn" src="./images/introduce.png" alt="活动介绍">
				<img id="myBtn" src="./images/myjp.png" alt="我的奖品">
			</div>
			<img id="title" src="./images/title.png" alt="">
			<img id="yh" src="./images/yh.png" alt="">
			<div class="box">
				<div class="bg_in">
					<div class="title">•&nbsp;刮奖区&nbsp;•</div>
				</div>
				<div class="content">
					<div id="mask_img_bg"><img id="mask-bj" src="images/noAward.png" /></div>
					<img id="redux" src="images/mask-img.png" />
				</div>
			</div>
			<img src="./images/againBtn.png" id="zBtn" alt="再刮一次">
			<!-- 中奖区 -->
			<div class="show">
				<div class="awardInfo">
					<img class="show_bg" src="images/bjg.png">
					<img class="show_bg1" src="images/ok1.png">
					<img class="show_food" id="awarImg" src="images/noAward.png" />
					<a id="close3" class="close"><img src="./images/close.png" alt="" style="width: 100%;"></a>
					<a id="awarNum">很遗憾未中奖</a>
				</div>
			</div>
			<!-- 我的活动 -->
			<div id="introduceMask">
				<div class="intinfo">
					<img id="close1" src="./images/close.png" alt="">
					<h2><span>活动介绍</span></h2>
					<h4><span>主办单位</span></h4>
					<p class="borderBottom">首钢·贵州之光</p>
					<h4><span>活动时间</span></h4>
					<p class="borderBottom">3月4日 10:00 - 3月10日 22:00</p>
					<h4><span>领奖时间</span></h4>
					<p class="borderBottom">3月11日 10:00 - 4月11日 18:00</p>
					<h4><span>活动规则</span></h4>
					<p>1.每位用户每日有三次刮奖机会，每日仅能中奖一次；</p>
					<p>2.活动期限内同一微信账号每日获奖奖品可累计兑换；</p>
					<p class="borderBottom">3.同一身份证用户使用多个微信账户刮奖，奖品不可累计兑换。</p>
					<h4><span>活动奖品</span></h4>
					<p>一等奖：年货大礼包</p>
					<p>二等奖：年货小礼包</p>
					<p>三等奖：暖风机</p>
					<p>温暖奖：锅具</p>
					<p>生活奖：暖手宝</p>
					<p class="borderBottom">科技奖：手机壳、手机支架</p>
					<h4><span>领奖规则</span></h4>
					<p>1.本次活动不支持邮寄等形式派送奖品，需用户至首钢·贵州之光营销中心领取奖品；</p>
					<p>2.中奖用户须带手机、身份证前往，在首钢·贵州之光营销中心出示中奖微信号，以及实名登记之后，方可领取个人礼品；</p>
					<p>3.本活动奖品不支持由他人代领，不支持奖品转让；</p>
					<p>4.本活动奖品不支持折现，不支持退换货；</p>
					<p>5.所有礼品皆为免费赠品，活动主办方不承担质量保障及维修服务等；</p>
					<p>6.中奖用户如在主办方规定领奖时间内未亲自到首钢·贵州之光营销中心领取奖品，则视为用户主动放弃奖品；</p>
					<p>7.用户来到首钢·贵州之光营销中心领奖时，需做好防疫措施，方可进场；</p>
					<p>8.如在活动期间，有不可抗力情况发生，主办方有权调整领奖时间，请用户及时关注官方渠道声明；</p>
					<p>9.因疫情期间需避免人群聚集，可能会在领取时间及方式上有变化，主办方有权作出相应调整，请用户及时关注官方渠道声明；</p>
					<p>10.活动最终解释权归首钢·贵州之光所有。</p>
				</div>
			</div>
			<!-- 我的奖品 -->
			<div id="myAwardMask">
				<div class="myInfo">
					<h3>暂无中奖记录</h3>
					<img id="close2" src="./images/close.png" alt="">
					<table class="table table-striped">
						<tr>
							<th>编号</th>
							<th>奖品名称</th>
							<th>奖品描述</th>
							<th>中奖时间</th>
						</tr>
					</table>
				</div>
			</div>
			<div class="fx">
				<img id="fxImg" src="./images/fenx.png" alt="">
				<img id="close4" src="./images/close.png" alt="">
			</div>
		</div>
		<div class="onePage">
			<div class="loading">
				<img src="../invitation02/img/logo.png" alt="" style="width:150px; height:150px; border-radius: 50%;">
				<p id="loading" style="font-size: 20px;margin-top: 3%;">0%</p>
			</div>
		</div>
		
	
		<script type="text/javascript" src="js/jquery.eraser.js" ></script>
		<script src="./js/TweenMax.min.js"></script>
		<script src="./js/index.js?t=1"></script>
	</body>

</html>
<?php
include_once "E:\www\wx.uvcsi.com\api\wechatShare\wechat.php";
?>
<input type="text" id="headimgurl" value="<?php echo $_SESSION['user']['headimg']; ?>" hidden>
<input type="text" id="openid" value="<?php echo $_SESSION['user']['openid']; ?>" hidden>
<input type="text" id="nickname" value="<?php echo $_SESSION['user']['nickname']; ?>" hidden>
<script src="http://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
   <script>
       wx.config({
           debug: false,
           appId: '<?php echo $share['appId']; ?>',
           timestamp: '<?php echo $share['timestamp']; ?>',
           nonceStr: '<?php echo $share['nonceStr']; ?>',
           signature: '<?php echo $share['signature']; ?>',
           jsApiList: [
                'checkJsApi',
               'updateAppMessageShareData',
               'updateTimelineShareData',
           ]
       });
       var timestamp1 = Date.parse(new Date());
       var stitle = "碧桂园|凤凰游园会 "; // 分享标题
       var simg = "http://wx.uvcsi.com/html5/BGY/templeFair1/img/zBiao.png?t=3";
       var link = "http://wx.uvcsi.com/html5/BGY/templeFair1/index.php?t="+timestamp1; // 分享链接
       var sdesc = "新春不打烊 畅玩凤凰艺术公园活动必玩，点击即享"; // 分享描述

       weChat();

       function weChat() {
           wx.ready(function() {
               //朋友
               wx.updateAppMessageShareData({
                   title: stitle,
                   link: link,
                   imgUrl: simg,
                   desc: sdesc
               });
               //朋友圈
               wx.updateTimelineShareData({
                   title: stitle,
                   link: link,
                   imgUrl: simg
               });
           })
       };
   </script> 
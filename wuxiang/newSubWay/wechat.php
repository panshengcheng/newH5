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
       var stitle = "新年回家日，天涯共此时。踏上旅程，回到心安的故乡吧"; // 分享标题
       var simg = "http://wx.uvcsi.com/html5/wuxiang/subway/img/fenxaing.jpeg?t=3";
       var link = "http://wx.uvcsi.com/html5/wuxiang/newSubWay/index.php?t="+timestamp1; // 分享链接
       var sdesc = "世界再美，心安吾乡"; // 分享描述

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
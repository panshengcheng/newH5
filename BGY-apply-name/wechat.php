﻿<?php
include_once "E:\www\wx.uvcsi.com\api\wechatShare\wechat.php";
?>
<input type="text" id="headimgurl" value="<?php echo $_SESSION['user']['headimg']; ?>" hidden>
<input type="text" id="openid" value="<?php echo $_SESSION['user']['openid']; ?>" hidden>
<input type="text" id="nickname" value="<?php echo $_SESSION['user']['nickname']; ?>" hidden>
<script src="http://res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>
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
       var stitle = "碧桂园·凤凰城"; // 分享标题
       var simg = "http://wx.uvcsi.com/html5/BGY/apply-name/image/fx.png?t=3";
       var link = 'http://wx.uvcsi.com/html5/BGY/apply-name/index.php'; // 分享链接
       var sdesc = "报名即可领取凤凰艺术公园门票"; // 分享描述

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
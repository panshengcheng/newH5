<?php
include_once "E:\www\wx.uvcsi.com\api\wechatShare\wechat.php";
?>
<input type="text" id="headimgurl" value="<?php echo $_SESSION['user']['headimg']; ?>" hidden>
<input type="text" id="openid" value="<?php echo $_SESSION['user']['openid']; ?>" hidden>
<input type="text" id="nickname" value="<?php echo $_SESSION['user']['nickname']; ?>" hidden>
<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
   <script>
       wx.config({
           debug: false,
           appId: '<?php echo $share['appId']; ?>',
           timestamp: '<?php echo $share['timestamp']; ?>',
           nonceStr: '<?php echo $share['nonceStr']; ?>',
           signature: '<?php echo $share['signature']; ?>',
           jsApiList: [
               'checkJsApi',
               'onMenuShareTimeline',
               'onMenuShareAppMessage',
               'onMenuShareQQ',
               'onMenuShareWeibo'
           ]
       });
       var stitle = "郎朗同台琴童直通车"; // 分享标题
       var simg = "http://wx.uvcsi.com/html5/sunac/memories/images/favicon.jpg?t=2";
       var link = 'http://wx.uvcsi.com/html5/sunac/vote/ranking.php'; // 分享链接
       var sdesc = "点击助力完成梦想"; // 分享描述

       weChat();

       function weChat() {
           wx.ready(function() {
               //朋友
               wx.onMenuShareAppMessage({
                   title: stitle,
                   link: link,
                   imgUrl: simg,
                   desc: sdesc
               });
               //朋友圈
               wx.onMenuShareTimeline({
                   title: stitle,
                   link: link,
                   imgUrl: simg,
                   desc: sdesc
               });
           })
       };
   </script> 
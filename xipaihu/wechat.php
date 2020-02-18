<?php
include_once "E:\www\wx.uvcsi.com\api\wechatShare\wechat.php";
?>
<input type="text" id="headimgurl" value="<?php echo $_SESSION['user']['headimg']; ?>" hidden>
<input type="text" id="openid" value="<?php echo $_SESSION['user']['openid']; ?>" hidden>
<input type="text" id="nickname" value="<?php echo $_SESSION['user']['nickname']; ?>" hidden>
<script src="http://res2.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
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
       var stitle = "中国铁建·西派府艺术品质臻装"; 
       var simg = "http://wx.uvcsi.com/html5/xipaihu/img/fenxiang.jpg?t=1";
       var link = 'http://wx.uvcsi.com/html5/xipaihu/index.php';
       var sdesc = "8大精装关怀系统，40项匠心细节"; 

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
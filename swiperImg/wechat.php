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
               'onMenuShareWeibo'
           ]
       });
        var stitle = "公寓投资财富指南"; // 分享标题
        var simg = "http://wx.uvcsi.com/html5/shougang/swiperImg/img/logo.png?t=6";
        var link = "http://wx.uvcsi.com/html5/shougang/swiperImg/index3.php"; // 分享链接
        var sdesc = "首钢·贵州之光";
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
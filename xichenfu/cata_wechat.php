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
        var stitle = "出彩少年，星动西宸"; // 分享标题
        var simg = "http://wx.uvcsi.com/html5/sunac/foodFestival/img/cata/sy2.png?t=6";
        var link = "http://wx.uvcsi.com/html5/sunac/foodFestival/index.php"; // 分享链接
        var sdesc = "给才艺俱佳的孩子一个展现自我的平台";
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
                    title: "出彩少年，星动西宸",
                    link: link,
                    imgUrl: simg
                });
                
            })
        };
    
</script>
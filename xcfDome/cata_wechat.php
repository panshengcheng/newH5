
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
        var stitle = "悠居西宸府 品致尚生活"; // 分享标题
        var simg = "http://wx.uvcsi.com/html5/xcfDome/image/fenxiang.jpg?t=6";
        var link = "http://wx.uvcsi.com/html5/xcfDome/index.php"; // 分享链接
        var sdesc = "观山之西·全维配套·低密住区·7+1垂直森氧建筑";
        weChat();

        function weChat() {
            wx.ready(function() {
                //朋友
                wx.updateAppMessageShareData({
                    title: stitle,
                    link: link,
                    imgUrl: simg,
                    desc: sdesc,
                    success: function () {
                        console.log("分享成功")
                    },
                });
                //朋友圈
                wx.updateTimelineShareData({
                    title: stitle,
                    link: link,
                    imgUrl: simg,
                    success: function () {
                        console.log("分享成功")
                    },
                });
                wx.onMenuShareWeibo({
                    title: stitle, // 分享标题
                    desc: sdesc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: simg, // 分享图标
                    success: function () {
                        console.log("分享成功")
                    },
                    
                });
      
            })
        };
    
</script>
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
        var stitle = "“梵”华共鉴·财富传奇"; // 分享标题
        var simg = "http://wx.uvcsi.com/html5/introduceFHL/images/fenxiang.jpg?t=6";
        var link = "http://wx.uvcsi.com/html5/introduceFHL/index.php"; // 分享链接
        var sdesc = "革新贵阳商业纪元，梵华里招商盛启！！！";
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
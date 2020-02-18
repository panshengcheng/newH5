<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
    let url = "http://wx.uvcsi.com/html5/sunac/memories/index.php";
    let config = {
        debug: false,
        appId: '',
        timestamp: '',
        nonceStr: '',
        signature: '',
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
        ]
    }

    var data = JSON.stringify({
        url:"http://wx.uvcsi.com/html5/sunac/memories/index.php"
    });

    $.ajax({
        url: "http://www.ulifecity.com:4001/wechat_jsdk",
        type: "POST",
        contentType: "application/json",
        data: data,
        success: function(data) {
            config.appId = data.result.appId;
            config.timestamp = data.result.timestamp;
            config.nonceStr = data.result.nonceStr;
            config.signature = data.result.signature;
            next();
        },
        error: function(err) {
            console.log(err);
        }
    })

    function next() {
        wx.config(config);
        var stitle = "贵高速花溪26度户型图"; // 分享标题
        var simg = "https://wx.uvcsi.com/html5/huaxi26/lib/images/icon.jpg"; // 分享图标
        var link = url; // 分享链接
        var sdesc = "湖山之上 原乡美宅"; // 分享描述
        var track1 = document.getElementById("track1");

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
                //track1.play();
            })
        };
    }
</script>
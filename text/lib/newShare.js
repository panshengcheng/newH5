/**
 * Created by Administrator on 2019/9/17.
 */
var href = window.location.href.split('#')[0];
var title = "谢谢你的爱1999";
var desc = "一起回到悠长岁月";
var shareimgurl = "http://project.mi-world.cn/vankeChangTu/img/share.jpg";
$.ajax({
    url: "http://web.mi-world.cn/Wechat/GetShareSign",
    type: "post",
    data: {
        "url": href
    },
    beforeSend: function () {

    },
    success: function (data) {
        // console.log(data)
//                $(".wx_appId").val(data.appId)
//                $(".wx_nonceStr").val(data.nonceStr)
//                $(".wx_timestamp").val(data.timestamp)
//                $(".wx_signature").val(data.signature)
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                // 所有要调用的 API 都要加到这个列表中
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone'
            ]
        });

        wx.ready(function () {
            //分享给朋友
            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: href,
                imgUrl: shareimgurl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                    //alert('已分享');
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                    alert('已取消');

                }
            });
            //分享到朋友圈
            wx.onMenuShareTimeline({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: href,
                imgUrl: shareimgurl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数

                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                    alert('已取消');

                }
            });

        });



    },
    error: function (msg) {

    }
});
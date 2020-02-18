//判断手机横竖屏状态：
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        alert('竖屏状态！');
        location.reload();
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        alert('横屏状态！');
        location.reload();
    }
}, false);
//移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。

let timeline = new TimelineMax({
  paused: true
});
let alloyTouch;
console.log(-app.stage.width + w);
// let minScroll = -app.stage.width + w;
let minScroll = -7353;
if (w<h) {
  minScroll = -17390;
}
function initTouch(vertical,val){
  console.log(-app.stage.width,w);
  alloyTouch = new AlloyTouch({
    touch:"body",//反馈触摸的dom
    vertical: vertical,//不必需，默认是true代表监听竖直方向touch
    min: -app.stage.width + 750, //不必需,运动属性的最小值
    maxSpeed: 1,
    max: 0, //不必需,滚动属性的最大值
    bindSelf: false,
    initialValue: 0,
    change:function(value){  // 13450
      let min = -app.stage.width + w + 1200;
      app.stage.position[val] = value;
      let progress = -value/app.stage.width;
      progress = progress < 0 ? 0 : progress;
      progress = progress > 1 ? 1 : progress;
      timeline.seek(progress);
      // console.log(value);
      // console.log(min);
      console.log(value,progress);
      if (progress>0.164) {
        tickerPhone.stop();
      } else if (progress<0.164) {
        tickerPhone.start();
      }
      if (progress>=0.9) {
        document.getElementById('form-panel').style.display='flex';
        document.getElementById('rule-link').style.display='flex';
      }else {
        document.getElementById('form-panel').style.display='none';
        document.getElementById('rule-link').style.display='none';
      }
    }
 })
}

function submitForm(){
  // console.log('submit');
  let name = $('#name').val();
  let phone = $('#phone').val();
  console.log(name,phone);
  if (localStorage[phone]) {
    // alert('你已提交过了');
    $('.btn').css('display','none');
    $('.success').css('display','block');
    $('.success').text('你已提交过了');
  }else {
    $.post('http://localhost:81/submit',{name:name,phone:phone},function(res){
      if (res.code===200) {
        // alert('提交成功');
        localStorage[phone] = true;
        $('.btn').css('display','none');
        $('.success').css('display','block');
      }else {
        alert('提交失败，请重新尝试');
      }
    })
  }
  return false;
}

//判断手机横竖屏状态：
let screenStatus = 0;
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        // alert('竖屏状态！');
        // screenStatus = 0;
        location.reload();
        // app.render()
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        // alert('横屏状态！');
        // screenStatus = 1;
        location.reload();
        // app.render()
        // app.stage.rotation = 0;
    }
}, false);
//移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。




let timeline = new TimelineMax({
  paused: true
});
let alloyTouch;
function initTouch(vertical,val){
  let scrollDis = app.stage.width-max-max;
  alloyTouch = new AlloyTouch({
    touch:"body",//反馈触摸的dom
    vertical: vertical,//不必需，默认是true代表监听竖直方向touch
    min:-app.stage.width+max+max,
    maxSpeed: 1,
    max: 0, //不必需,滚动属性的最大值
    bindSelf: false,
    initialValue: 0,
    change:function(value){
      app.stage.position[val] = value - max;
      let progress = -value/scrollDis;
      progress = progress < 0 ? 0 : progress;
      progress = progress > 1 ? 1 : progress;
      timeline.seek(progress);
      console.log(value,progress);
      // 抽奖规则显示
      if (progress>=0.99) {
        document.getElementById('form-panel').style.display='flex';
        document.getElementById('rule-link').style.display='flex';
      } else {
        document.getElementById('form-panel').style.display='none';
        document.getElementById('rule-link').style.display='none';
      }
      // 播放背景音乐
      playAudio(progress);
    }
 })
}

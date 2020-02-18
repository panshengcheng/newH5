function playAudio(progress){
  if (progress>=0.08 && progress<=0.081) {
    playBgmAfterLoading('wechat');
    setTimeout(function(){
      tickerPhone.stop();
      playBgmAfterLoading('talk_5','talk_6',2000);
    },2000)
  }
  if (progress>=0.227 && progress<=0.23) {
    playBgmAfterLoading('talk_7');
  }
  if (progress>=0.357&& progress<=0.36) {
    playBgmAfterLoading('talk_8','talk_9',3000);
  }
  if (progress>=0.444 && progress<=0.45) {
    playBgmAfterLoading('talk_10');
  }
  if (progress>=0.481&& progress<=0.49) {
    playBgmAfterLoading('talk_11');
  }
  if (progress>=0.533 && progress<=0.54) {
    playBgmAfterLoading('talk_12');
  }
  if (progress>=0.685 && progress<=0.69) {
    playBgmAfterLoading('talk_13');
  }
  if (progress>=0.804 && progress<=0.81) {
    playBgmAfterLoading('fireworks');
  }
  if (progress>=0.804 && progress<=0.81) {
    playBgmAfterLoading('talk_14','talk_15',6000);
  }
  if (progress>=0.433 && progress<=0.44) {
    actTrumpet.play();
    playBgmAfterLoading('train','train1',4000);
    // playBgmAfterLoading('train');
    setTimeout(function(){
      actTrumpet.pause();
    },8000)
  }
}
function playBgmAfterLoading(e,next,wait) {
    playBgm(e);
    if (next) {
      setTimeout(function(){
        playBgm(next);
      },wait);
    }
}
function playBgm(e){
  let audio = document.getElementById(e);
  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
      WeixinJSBridge.invoke('getNetworkType', {}, function (res) {
          // 在这里拿到 e.err_msg, 这里面就包含了所有的网络类型
          // alert(res.err_msg);
          audio.play();
      });
  } else {
    audio.play();
  }
}


https://cloud.tencent.com/edu/learning/course-1365-5174

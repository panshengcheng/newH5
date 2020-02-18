// 创建PIXI应用
const w = document.body.clientWidth,
      h = document.body.clientHeight;
let app = new PIXI.Application({
  width:w,
  height:h,
  backgroundColor:0xd7a664,
  forceCanvas:true
});
// PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
// PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.LINEAR;

// 获取屏幕宽高，判断横屏还是竖屏
const min = (w<h)?w:h;
const max = (w>h)?w:h;
let scale = min/750;  // 根据设计稿尺寸进行缩放比例调整
console.log(w,h,min,"放大系数：",scale);
if (w<h) {
  document.getElementById('form').className = "col rotate";
  document.getElementById('rule-link').className = "rotate";
}

// let scaleStr = "<meta name='viewport' content='width=device-width, initial-scale="+scale+", maximum-scale="+scale+", user-scalable=no' />"
// document.getElementsByTagName('head')[0].prepend(scaleStr)

// var oMeta = document.createElement('meta');
// oMeta.name = 'viewport';
// oMeta.content = 'width=device-width, initial-scale='+scale+', maximum-scale='+scale+', user-scalable=no';
// document.getElementsByTagName('head')[0].appendChild(oMeta);

// 创建资源加载器，进行资源预加载
const loader = new PIXI.loaders.Loader();
loader.add('title', 'public/imgs/title.png')
      .add('btn', 'public/imgs/btn.png')
      .add('bg1', 'public/imgs/bg1.jpg')
      .add('bg_desk', 'public/imgs/bg_desk.png')
      .add('bg_person','public/imgs/bg1_person.png')
      .add('windows', 'public/imgs/window.png')
      .add('son', 'public/imgs/son.png')
      .add('mother','public/imgs/mother.png')
      .add('talk_1', 'public/imgs/talk_1.png')
      .add('talk_2', 'public/imgs/talk_2.png')
      .add('talk_3', 'public/imgs/talk_3.png')
      .add('talk_4', 'public/imgs/talk_4.png')
      .add('talk_5','public/imgs/talk_5.png')
      .add('talk_6','public/imgs/talk_6.png')
      .add('phone','public/imgs/phone.png')
      .add('bg2','public/imgs/bg2.jpg')
      .add('bed','public/imgs/bed.png')
      .add('son_with_gift','public/imgs/son_with_gift.png')
      .add('wall','public/imgs/wall.png')
      .add('gifts','public/imgs/gifts.png')
      .add('talk_7','public/imgs/talk_7.png')
      .add('bg3','public/imgs/bg3.jpg')
      .add('couple','public/imgs/couple.png')
      .add('mother_with_bag','public/imgs/mother_with_bag.png')
      .add('talk_8','public/imgs/talk_8.png')
      .add('talk_9','public/imgs/talk_9.png')
      .add('bg5','public/imgs/bg5.jpg')
      .add('bg4','public/imgs/bg4.jpg')
      .add('trainman','public/imgs/trainman.png')
      .add('trumpet','public/imgs/trumpet.png')
      .add('car','public/imgs/car.png')
      .add('son_backhome','public/imgs/son_backhome.png')
      .add('talk_10','public/imgs/talk_10.png')
      .add('talk_11','public/imgs/talk_11.png')
      .add('lantern','public/imgs/lantern.png')
      .add('talk_12','public/imgs/talk_12.png')
      .add('talk_13','public/imgs/talk_13.png')
      .add('bg6','public/imgs/bg6.jpg')
      .add('fireworks_1','public/imgs/fireworks_1.png')
      .add('fireworks_2','public/imgs/fireworks_2.png')
      .add('talk_14','public/imgs/talk_14.png')
      .add('talk_15','public/imgs/talk_15.png')
      .add('family','public/imgs/family.png')
      .add('bg7','public/imgs/bg7.jpg')
      .add('logo','public/imgs/logo.png')
      .add('building','public/imgs/building.png')
      .add('circle','public/imgs/circle.png')
      .add('firework3','public/imgs/fireworks_3.png')
      .add('firework4','public/imgs/fireworks_4.png')
loader.on("progress", function(target, resource) {  //加载进度
  document.getElementById('percent').innerText = parseInt(target.progress)+"%";
});
loader.once('complete', function(target, resource) {  //加载完成
  playBgm('bg');
  if(isWeiXin()){
    // alert("是来自微信内置浏览器");
    document.addEventListener('WeixinJSBridgeReady', function() {
      document.getElementById("bg").volume = 0.2;
      // document.getElementById('bg').play();
      setTimeout(function(){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('canvas').appendChild(app.view);
      },1000);
    })
  }else {
    document.getElementById("bg").volume = 0.2;

    document.getElementById('loading').style.display = 'none';
    document.getElementById('canvas').appendChild(app.view);
  }
  initScenes(); // 初始化场景
  initSprites();  // 初始化精灵
  initAnimation(); // 初始化动画
  initScenesAnimation();
  // initBgm();
    // 根据屏幕实际宽高放大舞台
  app.stage.scale.set(scale,scale);
  if (w<h) {   // 根据横屏竖屏效果旋转舞台
    app.stage.rotation = 1.5708;
    app.stage.pivot.set(0.5);
    app.stage.x = w;
    // initTouch(true,'y');
  }else {
    // initTouch(false,'x');
  }
});
loader.load();  // 加载资源



//判断是否微信登陆
function isWeiXin() {
var ua = window.navigator.userAgent.toLowerCase();
console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
if (ua.match(/MicroMessenger/i) == 'micromessenger') {
return true;
} else {
return false;
}
}
// if(isWeiXin()){
//   alert(" 是来自微信内置浏览器")
// }else{
//   alert("不是来自微信内置浏览器")
// }

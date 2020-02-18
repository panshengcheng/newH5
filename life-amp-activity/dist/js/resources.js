// 创建PIXI应用
const w = document.body.clientWidth,
      h = document.body.clientHeight;
let app = new PIXI.Application({
  width:w,
  height:h,
  backgroundColor:0xd7a664
});


// 获取屏幕宽高，判断横屏还是竖屏
let min = (w<h)?w:h;
let scale = min/750;  // 根据设计稿尺寸进行缩放比例调整
console.log(w,h,min,"放大系数：",scale);
if (w<h) {
  document.getElementById('form').className = "col rotate";
  document.getElementById('rule-link').className = "rotate";
}

// 创建资源加载器，进行资源预加载
const loader = new PIXI.loaders.Loader();
loader.add('bg1', './imgs/bg1.jpg')
      .add('bg_desk', './imgs/bg_desk.png')
      .add('bg_person','./imgs/bg1_person.png')
      .add('windows', './imgs/window.png')
      .add('son', './imgs/son.png')
      .add('mother','./imgs/mother.png')
      .add('talk_1', './imgs/talk_1.png')
      .add('talk_2', './imgs/talk_2.png')
      .add('talk_3', './imgs/talk_3.png')
      .add('talk_4', './imgs/talk_4.png')
      .add('talk_5','./imgs/talk_5.png')
      .add('talk_6','./imgs/talk_6.png')
      .add('phone','./imgs/phone.png')
      .add('bg2','./imgs/bg2.jpg')
      .add('bed','./imgs/bed.png')
      .add('son_with_gift','./imgs/son_with_gift.png')
      .add('wall','./imgs/wall.png')
      .add('gifts','./imgs/gifts.png')
      .add('talk_7','./imgs/talk_7.png')
      .add('bg3','./imgs/bg3.jpg')
      .add('couple','./imgs/couple.png')
      .add('mother_with_bag','./imgs/mother_with_bag.png')
      .add('talk_8','./imgs/talk_8.png')
      .add('talk_9','./imgs/talk_9.png')
      .add('bg5','./imgs/bg5.jpg')
      .add('bg4','./imgs/bg4.jpg')
      .add('trainman','./imgs/trainman.png')
      .add('trumpet','./imgs/trumpet.png')
      .add('car','./imgs/car.png')
      .add('son_backhome','./imgs/son_backhome.png')
      .add('talk_10','./imgs/talk_10.png')
      .add('talk_11','./imgs/talk_11.png')
      .add('lantern','./imgs/lantern.png')
      .add('talk_12','./imgs/talk_12.png')
      .add('talk_13','./imgs/talk_13.png')
      .add('bg6','./imgs/bg6.jpg')
      .add('fireworks_1','./imgs/fireworks_1.png')
      .add('fireworks_2','./imgs/fireworks_2.png')
      .add('talk_14','./imgs/talk_14.png')
      .add('talk_15','./imgs/talk_15.png')
      .add('family','./imgs/family.png')
      .add('bg7','./imgs/bg7.jpg')
      .add('logo','./imgs/logo.png')
      .add('building','./imgs/building.png')
      .add('circle','./imgs/circle.png')
      .add('firework3','./imgs/fireworks_3.png')
      .add('firework4','./imgs/fireworks_4.png')
loader.on("progress", function(target, resource) {  //加载进度
  document.getElementById('percent').innerText = parseInt(target.progress)+"%";
});
loader.once('complete', function(target, resource) {  //加载完成
  document.getElementById('loading').style.display = 'none';
  document.getElementById('canvas').appendChild(app.view);
  initScenes(); // 初始化场景
  initSprites();  // 初始化精灵
  initAnimation(); // 初始化动画
  app.stage.scale.set(scale,scale);  // 根据屏幕实际宽高放大舞台
  if (w<h) {   // 根据横屏竖屏效果旋转舞台
    app.stage.rotation = 1.5708;
    app.stage.pivot.set(0.5);
    app.stage.x = w;
    initTouch(true,'y');
  }else {
    initTouch(false,'x');
  }
});
loader.load();  // 加载资源

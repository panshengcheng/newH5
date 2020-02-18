const spritesOptions = [ // 精灵数据：定义每个精灵的坐标
  { // 封面场景
    title:{
      position:{x:0,y:0}
    },
    btn:{
      position:{x:482,y:520}
    }
  },
  { // 第一个场景的精灵
    bg1:{
      position:{x:0,y:0}
    },
    bg_person:{
      position:{x:0,y:19}
    },
    bg_desk:{
      position:{x:2160,y:38}
    },
    mother:{
      position:{x:2200,y:210}
    },
    son:{
      position:{x:1400,y:71},
    },
    talk_1:{
      position:{x:214,y:110}
    },
    talk_2:{
      position:{x:508,y:135}
    },
    // talk_3:{
    //   position:{x:794,y:85}
    // },
    // talk_4:{
    //   position:{x:1062,y:221}
    // },
    talk_5:{
      position:{x:1600,y:320}
    },
    talk_6:{
      position:{x:2180,y:436}
    },
    phone:{
      position:{x:2024,y:414}
    },
    windows:{
      position:{x:1500/2,y:750/2},
      anchor:{x:0.5,y:0.5},
      width:1500,
      height:750
    }
  },
  { // 第二个场景的精灵
    bg2:{
      position:{x:0,y:0}
    },
    bed:{
      position:{x:178,y:200}
    },
    gifts:{
      position:{x:1107,y:21}
    },
    wall:{
      position:{x:1442,y:345}
    },
    son_with_gift:{
      position:{x:380,y:33}
    },
    talk_7:{
      position:{x:614,y:409}
    }
  },
  { // 第三个场景的精灵
    bg3:{
      position:{x:0,y:0}
    },
    mother_with_bag:{
      position:{x:775,y:222}
    },
    couple:{
      position:{x:245,y:189}
    },
    talk_8:{
      position:{x:875,y:411}
    },
    talk_9:{
      position:{x:400,y:403}
    },
  },
  { // 第四个场景的精灵
    bg4:{
      position:{x:0,y:0}
    },
    trainman:{
      position:{x:-120,y:107}
    },
    talk_10:{
      position:{x:380,y:361}
    },
    talk_11:{
      position:{x:760,y:478}
    },
    talk_12:{
      position:{x:1500,y:343}
    },
    trumpet:{
      position:{x:1780,y:0}
    }
  },
  { // 第五个场景的精灵
    bg5:{
      position:{x:0,y:0}
    },
    son_backhome:{
      position:{x:860,y:282}
    },
    car:{
      position:{x:143,y:536}
    },
    talk_13:{
      position:{x:1090,y:439}
    },
    lantern:{
      position:{x:1950,y:0}
    }
  },
  { // 第六个场景的精灵
    bg6:{
      position:{x:0,y:0}
    },
    fireworks_1:{
      position:{x:620,y:110}
    },
    fireworks_2:{
      position:{x:600,y:50}
    },
    family:{
      position:{x:300,y:136}
    },
    talk_14:{
      position:{x:700,y:153}
    },
    talk_15:{
      position:{x:162,y:413}
    },
  },
  { // 第七个场景的精灵
    building:{
      position:{x:0,y:0}
    },
    bg7:{
      position:{x:345,y:0}
    },
    firework4:{
      position:{x:620,y:12}
    },
    firework3:{
      position:{x:1280,y:30}
    },
    circle:{
      position:{x:1650,y:120}
    },
    logo:{
      position:{x:385,y:36}
    }
  }
];
const sprites = {}; // 精灵集合 - pixi对象

function initSprites(){  // new出所有精灵对象，并交给函数initSprite分别赋值
  for (let i = 0; i < spritesOptions.length; i++) {
    let obj = spritesOptions[i];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        sprites[key] = PIXI.Sprite.fromImage(key);
        initSprite(sprites[key],obj[key],i);
      }
    }
  }
  initSpecialProp();
}
function initSprite(sprite,prop,i){  // 初始化单个精灵的属性并加入对应的场景中
  for (let key in prop) {
    if (prop.hasOwnProperty(key)) {
      sprite[key] = prop[key];
    }
  }
  scenes['scene'+i].addChild(sprite);
}
function initSpecialProp(){  // 特殊属性
  // sprites.mother_left.pivot.set(0,51);
  // sprites.mother_right.pivot.set(95,50)
  sprites.phone.pivot.set(173,164);
  let style = new PIXI.TextStyle({
    fontFamily: 'SourceHanSansSC-Normal',
  	align:'center',
    fontSize: 30,
  	lineHeight:48,
    fill: ['#ffffff'], // gradient
    wordWrap: true,
    wordWrapWidth: 500
  });
  sprites.text = new PIXI.Text('风雨无阻的是归家之路\n陪伴相守才是最珍贵的礼物\n国寿安保基金愿与你一路同行\n用专业为爱投资\n用成就回报信任',style);
  sprites.text.x = 1040;
  sprites.text.y = 60;
  let style1 = new PIXI.TextStyle({
    fontFamily: 'SourceHanSansSC-Normal',
  	align:'center',
    fontSize: 43,
  	lineHeight:66,
    fill: ['#ffffff'], // gradient
    wordWrap: true,
    wordWrapWidth: 500
  });
  sprites.text1 = new PIXI.Text('动动手指参与活动，为家人赢取一份春节好礼吧',style1);
  sprites.text1.x = 800;
  sprites.text1.y = sprites.text.height+sprites.text.y;
  scenes.scene7.addChild(sprites.text,sprites.text1);

  sprites.btn.interactive = true;
  sprites.btn.buttonMode = true;
  sprites.btn.on('pointerdown', onClick);
}

function onClick () {
    if (w<h) {  // 竖屏
      let tm = new TweenMax.to(app.stage.position,1.5,{y:-scenes.scene0.width*scale});
      tm.play();
      initTouch(true,'y');
    }
    else { // 横屏
      let tm = new TweenMax.to(app.stage.position,1.5,{x:-scenes.scene0.width*scale});
      tm.play();
      initTouch(false,'x');
    }

    let tm1 = new TweenMax.to(sprites.windows.scale,3,{delay:1.5,x:2,y:2,ease:Power0.easeNone});
    let tm2 = new TweenMax.to(sprites.windows,3,{delay:2,alpha:0});
    tm1.play();
    tm2.play();

    let tm_talk_1 = new TweenMax.from(sprites.talk_1,1,{delay:2,width:0,height:0,ease:Power0.easeNone});
    let tm_talk_2 = new TweenMax.from(sprites.talk_2,1,{delay:4,width:0,height:0,ease:Power0.easeNone});
    tm_talk_1.play();
    tm_talk_2.play();
    setTimeout(function(){
      playBgmAfterLoading('talk_1','talk_2',1500);
    },2000);
}

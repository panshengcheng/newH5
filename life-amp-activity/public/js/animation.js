const animationsOptions = {  // 精灵动画集合
  // 场景一
  // windows:[{
  //   prop:'scale',
  //   delay:0,
  //   duration:0.1,
  //   to:{x:2,y:2,ease:Power0.easeNone}
  // },{
  //   delay:0.01,
  //   duration:0.02,
  //   to:{alpha:0}
  // }],
  // talk_1:[{
  //   delay:0.01,
  //   duration:0.02,
  //   from:{width:0,height:0,ease:Power0.easeNone}
  // }],
  // talk_2:[{
  //   delay:0.03,
  //   duration:0.02,
  //   from:{width:0,height:0,ease:Power0.easeNone}
  // }],
  // talk_3:[{
  //   delay:0.05,
  //   duration:0.02,
  //   from:{width:0,height:0,ease:Power0.easeNone}
  // }],
  // talk_4:[{
  //   delay:0.07,
  //   duration:0.02,
  //   from:{width:0,height:0,ease:Power0.easeNone}
  // }],
  son:[{
    delay:0.04,
    duration:0.03,
    from:{x:1200,ease:Power0.easeNone}
  }],
  talk_5:[{
    delay:0.08,duration:0.02,
    from:{width:0,height:0}
  }],
  talk_6:[{
    delay:0.11,duration:0.02,
    from:{width:0,height:0}
  }],
  mother:[{
    delay:0.08,duration:0.02,
    from:{x:2500,ease:Power0.easeNone}
  }],
  // 挑礼物
  talk_7:[{
    delay:0.227,duration:0.02,
    from:{width:0,height:0}
  }],
  gifts:[{
    delay:0.275,duration:0.1,
    from:{x:1400,y:-400,ease:Power0.easeNone}
  }],
  // 邻居场景
  couple:[{
    delay:0.306,duration:0.1,
    from:{x:20,ease:Power0.easeNone}
  },{
    delay:0.31,duration:0.02,
    from:{alpha:0}
  }],
  mother_with_bag:[{
    delay:0.32,duration:0.1,
    from:{x:900,ease:Power0.easeNone}
  }],
  talk_8:[{
    delay:0.357,duration:0.02,
    from:{width:0,height:0}
  }],
  talk_9:[{
    delay:0.38,duration:0.02,
    from:{width:0,height:0}
  }],
  // 车厢场景
  trainman:[{
    delay:0.45,duration:0.1,
    to:{x:1100,ease:Power0.easeNone}
  }],
  // trumpet:[{
  //   delay:0,
  //   duration:0.05,
  //   from:{width:210*0.8,height:179*0.8,repeat:-1,yoyo:true}
  // }],
  talk_10:[{
    delay:0.444,duration:0.02,
    from:{width:0,height:0}
  }],
  talk_11:[{
    delay:0.481,duration:0.02,
    from:{width:0,height:0}
  }],
  talk_12:[{
    delay:0.533,duration:0.02,
    from:{width:0,height:0}
  }],
  // 场景五
  car:[{
    delay:0.589,
    duration:0.05,
    from:{x:-800,ease:Power0.easeNone}
  }],
  son_backhome:[{
    delay:0.63,
    duration:0.1,
    from:{x:600,ease:Power0.easeNone}
  },{
    delay:0.63,
    duration:0.02,
    from:{alpha:0}
  }],
  talk_13:[{
    delay:0.685,
    duration:0.02,
    from:{width:0,height:0}
  }],
  // 场景六
  talk_14:[{
    delay:0.80,
    duration:0.02,
    from:{width:0,height:0}
  }],
  talk_15:[{
    delay:0.830,
    duration:0.02,
    from:{width:0,height:0}
  }],
  fireworks_1:[{
    delay:0.804,
    duration:0.05,
    from:{y:200,ease:Power0.easeNone}
  }],
  fireworks_2:[{
    delay:0.804,
    duration:0.05,
    from:{y:100,ease:Power0.easeNone}
  }],

  // 场景七
  logo:[{
    delay:0.94,
    duration:0.02,
    from:{alpha:0}
  }],
  // text:[{
  //   delay:0.98,
  //   duration:0.02,
  //   from:{alpha:0}
  // },{
  //   delay:0.98,
  //   duration:0.02,
  //   from:{y:-200}
  // }],
  // text1:[{
  //   delay:0.99,
  //   duration:0.01,
  //   from:{alpha:0}
  // }]
}
const tickerPhone = new PIXI.ticker.Ticker();
let actTrumpet;
function initAnimation(){
  // delay=0.1 表示滚动到10%开始播放动画
  // duration=0.1 表示运动时间占滚动的百分比
  for (let key in animationsOptions) {
    if (animationsOptions.hasOwnProperty(key)) {
      let obj = animationsOptions[key];
      for (let i = 0; i < obj.length; i++) {
        let act;
        let target;
        if (obj[i].prop) {
          target = sprites[key][obj[i].prop];
        } else {
          target = sprites[key];
        }
        if(obj[i].from & obj[i].to){
          act = TweenMax.fromTo(target,obj[i].duration,obj[i].from,obj[i].to);
        } else if (obj[i].from) {
          act = TweenMax.from(target,obj[i].duration,obj[i].from);
        }else if (obj[i].to) {
          act = TweenMax.to(target,obj[i].duration,obj[i].to);
        }
        let tm = new TimelineMax({delay:obj[i].delay});
        tm.add(act,0);
        tm.play();
        timeline.add(tm,0);
      }
    }
  }
  // 特殊动画特殊处理
  // let act = TweenMax.to(scenes.scene1,0.15,{x:1200,ease:Power0.easeNone});
  // let tm = new TimelineMax({delay:0});
  // tm.add(act,0);
  // timeline.add(tm,0);
  let count = 0;
  tickerPhone.stop();
  tickerPhone.add(function(delta) {
    count ++;
    if(count==11)count=0;
    if (sprites.phone.rotation>1 && count%10==0) {
      sprites.phone.rotation -= 0.1 * delta;
    }else if(sprites.phone.rotation<1 && count%10==0){
      sprites.phone.rotation += 0.1 * delta;
    }
  });
  tickerPhone.start();


  actTrumpet = new TweenMax(sprites.trumpet, 0.5, {
    width:210*0.85,
    height:179*0.85,
    repeat:-1,
    yoyo:true,
    ease:Power0.easeNone
  });
  // actTrumpet.play();
  // sprites.trumpet.scale.x = 1;
  // let c = 0;
  // app.ticker.add(function(delta){
  //   sprites.trumpet
  // })
  initScenesAnimation();
}
const scenesAnimateOptions = {
  // scene1:{
  //   delay:0.08,
  //   duration:0.09,
  //   to:{x:1334+1000,ease:Power0.easeNone}
  // }
};
function initScenesAnimation(){
  for (let key in scenesAnimateOptions) {
    if (scenesAnimateOptions.hasOwnProperty(key)) {
      let obj = scenesAnimateOptions[key];
      let target = scenes[key].position;
      if(obj.from & obj.to){
        act = TweenMax.fromTo(target,obj.duration,obj.from,obj.to);
      } else if (obj.from) {
        act = TweenMax.from(target,obj.duration,obj.from);
      }else if (obj.to) {
        act = TweenMax.to(target,obj.duration,obj.to);
      }
      let tm = new TimelineMax({delay:obj.delay});
      tm.add(act,0);
      tm.play();
      timeline.add(tm,0);
    }
  }
}

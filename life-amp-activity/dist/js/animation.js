const animationsOptions = {  // 精灵动画集合
  // 场景一
  windows:[{
    prop:'scale',
    delay:0,
    duration:0.1,
    to:{x:2,y:2,ease:Power0.easeNone}
  },{
    delay:0.01,
    duration:0.02,
    to:{alpha:0}
  }],
  talk_1:[{
    delay:0.01,
    duration:0.02,
    from:{width:0,height:0,ease:Power0.easeNone}
  }],
  talk_2:[{
    delay:0.03,
    duration:0.02,
    from:{width:0,height:0,ease:Power0.easeNone}
  }],
  talk_3:[{
    delay:0.05,
    duration:0.02,
    from:{width:0,height:0,ease:Power0.easeNone}
  }],
  talk_4:[{
    delay:0.07,
    duration:0.02,
    from:{width:0,height:0,ease:Power0.easeNone}
  }],
  son:[{
    delay:0.13,
    duration:0.03,
    from:{x:1200,ease:Power0.easeNone}
  }],
  talk_5:[{
    delay:0.16,duration:0.02,
    from:{width:0,height:0}
  }],
  talk_6:[{
    delay:0.18,duration:0.04,
    from:{width:0,height:0}
  }],
  mother:[{
    delay:0.16,duration:0.04,
    from:{x:2500,ease:Power0.easeNone}
  }],
  talk_7:[{
    delay:0.28,duration:0.02,
    from:{width:0,height:0}
  }],
  gifts:[{
    delay:0.29,duration:0.1,
    from:{x:1400,y:-400,ease:Power0.easeNone}
  }],
  couple:[{
    delay:0.35,duration:0.1,
    from:{x:20,ease:Power0.easeNone}
  },{
    delay:0.3,duration:0.02,
    from:{alpha:0}
  }],
  mother_with_bag:[{
    delay:0.36,duration:0.1,
    from:{x:900,ease:Power0.easeNone}
  }],
  talk_8:[{
    delay:0.38,duration:0.02,
    from:{width:0,height:0}
  }],
  talk_9:[{
    delay:0.4,duration:0.02,
    from:{width:0,height:0}
  }],
  trainman:[{
    delay:0.4,duration:0.3,
    to:{x:1300,ease:Power0.easeNone}
  }],
  talk_10:[{
    delay:0.46,duration:0.04,
    from:{width:0,height:0}
  }],
  talk_11:[{
    delay:0.5,duration:0.04,
    from:{width:0,height:0}
  }],
  talk_12:[{
    delay:0.54,duration:0.04,
    from:{width:0,height:0}
  }],
  car:[{
    delay:0.6,
    duration:0.05,
    from:{x:-800,ease:Power0.easeNone}
  }],
  son_backhome:[{
    delay:0.65,
    duration:0.1,
    from:{x:600,ease:Power0.easeNone}
  },{
    delay:0.65,
    duration:0.02,
    from:{alpha:0}
  }],
  talk_13:[{
    delay:0.68,
    duration:0.02,
    from:{width:0,height:0}
  }],
  talk_14:[{
    delay:0.76,
    duration:0.02,
    from:{width:0,height:0}
  }],
  talk_15:[{
    delay:0.78,
    duration:0.02,
    from:{width:0,height:0}
  }],
  fireworks_1:[{
    delay:0.76,
    duration:0.1,
    from:{y:200,ease:Power0.easeNone}
  }],
  fireworks_2:[{
    delay:0.77,
    duration:0.1,
    from:{y:100,ease:Power0.easeNone}
  }],
  logo:[{
    delay:0.8,
    duration:0.1,
    from:{alpha:0}
  }],
  text:[{
    delay:0.88,
    duration:0.07,
    from:{alpha:0}
  },{
    delay:0.88,
    duration:0.07,
    from:{y:-200}
  }],
  text1:[{
    delay:0.90,
    duration:0.036,
    from:{alpha:0}
  }]
}
const tickerPhone = new PIXI.ticker.Ticker();
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
  let act = TweenMax.to(scenes.scene1,0.15,{x:1200,ease:Power0.easeNone});
  let tm = new TimelineMax({delay:0});
  tm.add(act,0);
  timeline.add(tm,0);
  let count = 0;
  tickerPhone.stop();
  tickerPhone.add(function(delta) {
    // console.log(delta);
    count ++;
    if(count==11)count=0;
    if (sprites.phone.rotation>1 && count%10==0) {
      sprites.phone.rotation -= 0.1 * delta;
    }else if(sprites.phone.rotation<1 && count%10==0){
      sprites.phone.rotation += 0.1 * delta;
    }
  });
  tickerPhone.start();
  // app.ticker.add()
  sprites.trumpet.scale.x = 1;
  let c = 0;
  app.ticker.add(function(delta){
    // c++;
    // if(c==11)c=0;
    if (sprites.trumpet.scale.x>1.4) {
      sprites.trumpet.scale.x -= 0.01;
      sprites.trumpet.scale.y -= 0.01;
      console.log(">1.4");
    }else if (sprites.trumpet.scale.x<=1) {
      sprites.trumpet.scale.x += 0.01;
      sprites.trumpet.scale.y += 0.01;
      console.log("<=1",sprites.trumpet.scale.x);
    }
  })
}

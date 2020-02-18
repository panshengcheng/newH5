const scenesOptions = [ // 场景数据：定义每个场景的宽高,x/y距离
  {
    name:"scene0",
    x:0,y:0,
    width:1334,height:750
  },
  {
    name:"scene1",
    x:1334,y:0,
    width:2933,height:750
  },
  {
    name:"scene2",
    x:4267,y:0,
    width:1617,height:750
  },
  {
    name:"scene3",
    x:5884,y:0,
    width:1510,height:750
  },
  {
    name:"scene4",
    x:7394,y:0,
    width:1935,height:750
  },
  {
    name:"scene5",
    x:9329,y:0,
    width:2080,height:750
  },
  {
    name:"scene6",
    x:11409,y:0,
    width:1372,height:750
  },
  {
    name:"scene7",
    x:12781,y:0,
    width:1334+344,height:750
  }
];
const stageWidth = 14783;
const scenes = {};  // 场景集合 - pixi对象


function initScenes(){ // 初始化场景
  for (let i = scenesOptions.length-1; i >= 0 ; i--) {
    scenes[scenesOptions[i].name] = new PIXI.Container({
      width:scenesOptions[i].width,
      height:scenesOptions[i].height,
      backgroundColor:0xd7a664
    });
    scenes[scenesOptions[i].name].x = scenesOptions[i].x;
    app.stage.addChild(scenes[scenesOptions[i].name]);
  }
}

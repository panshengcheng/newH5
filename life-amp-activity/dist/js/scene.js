const scenesOptions = [ // 场景数据：定义每个场景的宽高,x/y距离
  {
    name:"scene1",
    x:0,y:0,
    width:2933,height:750
  },
  {
    name:"scene2",
    x:4133,y:0,
    width:1617,height:750
  },
  {
    name:"scene3",
    x:5750,y:0,
    width:1510,height:750
  },
  {
    name:"scene4",
    x:7260,y:0,
    width:1935,height:750
  },
  {
    name:"scene5",
    x:9195,y:0,
    width:2080,height:750
  },
  {
    name:"scene6",
    x:11275,y:0,
    width:1372,height:750
  },
  {
    name:"scene7",
    x:12647,y:0,
    width:1658+345,height:750
  }
];
const scenes = {};  // 场景集合 - pixi对象


function initScenes(){ // 初始化场景
  for (let i = scenesOptions.length-1; i >= 0 ; i--) {
    scenes[scenesOptions[i].name] = new PIXI.Container({
      width:scenesOptions[i].width,
      height:scenesOptions[i].height
    });
    scenes[scenesOptions[i].name].x = scenesOptions[i].x;
    app.stage.addChild(scenes[scenesOptions[i].name]);
  }
}

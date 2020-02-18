
window.onload = init();

function init(){
    //判断当前浏览器是否支持WEBGL不支持则使用canvas
    let type = "WebGL";
    if(!PIXI.utils.isWebGLSupported()){
        type="canvas";
    }
    PIXI.utils.sayHello(type);
    //获取浏览器的宽高
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    //创建pixi画布
    let app = new PIXI.Application({
        width:w,
        height:h,
        backgroundColor:0x1099bb,
        transparent:false, //透明的
        antialias:true,//抗锯齿
        resolution:1,//分辨率
    });
    //显示画布
    document.body.appendChild(app.view);
    //添加画布背景图片
    app.loader.add('bj','./img/bj.png');
    app.loader.load(setup);
    function setup(loader,resources){
        let backgroundImage = new PIXI.Sprite(resources.bj.texture);
        app.stage.addChild(backgroundImage);
        backgroundImage.width = app.screen.width;
        //画圆
        let circle = new PIXI.Graphics()
            .beginFill(0xFFFFF0)
            .drawCircle(30,app.screen.height-30,20)
            .endFill();
            app.stage.addChild(circle); 
            circle.interactive = true;
            circle.on('touchstart',pointerMove);
            let count=h;
            let stageHeight=backgroundImage.height;;
            let hei= 100;
        function pointerMove(){
            count +=hei;
            if(stageHeight >= count){
                backgroundImage.position.y -=hei;
            }
        }
    }
}
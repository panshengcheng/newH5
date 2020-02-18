//鼠标点击事件去除遮罩
window.onlocation = init();

function init(){
    //创建画布
    var app = new PIXI.Application({
        width:640,
        heigth: 1080,
        backgroundColor:0xffff
    })
    //铺满整个页面
    app.renderer.resize(window.innerWidth, window.innerHeight);
    document.body.appendChild(app.view);
    var stage = app.stage;
    //画一个圆
    var brush = new PIXI.Graphics();
    brush.beginFill(0xffffff);
    brush.drawCircle(0,0,50);
    brush.endFill();
    //添加图片
    PIXI.loader.add("t1","images/grimg.jpg");
    PIXI.loader.add("t2","images/biaoqing01.jpg");
    PIXI.loader.load(setUp);

    //加载完成执行函数
    function setUp(loader, resources){
        //添加背景图片
        var background = new PIXI.Sprite(resources["t1"].texture);
        background.x = app.
        //加载背景图片到舞台
        stage.addChild(background);
        //设置精灵的宽高
        background.width = app.screen.width;
        background.height = app.screen.height;
        //加载第二层图片
        var imageToReveal = new PIXI.Sprite(resources["t2"].texture)
        //把第二张图片加载到舞台中
        stage.addChild(imageToReveal);
        imageToReveal.width = app.screen.width;
        imageToReveal.height = app.screen.height;

        //使用RenderTexture纹理对象渲染：作用渲染任何显示对象（精灵）到纹理上（而不是应用场景），被渲染的对象必须要预加载进去
        var renderTextrue = PIXI.RenderTexture.create(app.screen.width, app.screen.height);
        //把渲染的纹理对象加载成精灵
        var renderTextrueSprite = new PIXI.Sprite(renderTextrue);
        app.stage.addChild(renderTextrueSprite);
        //添加遮罩
        imageToReveal.mask = renderTextrueSprite;
        //启动点击事件生效

        app.stage.interactive = true;
        app.stage.on("pointerdown",pointerDome);
        app.stage.on("pointerup", pointerUp);
        app.stage.on("pointermove",pointerMove);

        var dragging = false;
        function pointerMove(event){
            if(dragging){
                brush.position.copy(event.data.global);
                app.renderer.render(brush, renderTextrue, false, null, false);
            }
        }

        function pointerDome(event){
            dragging = true;
            pointerMove(event);
        }

        function pointerUp(event){
            dragging = false;
        }
        
    }
}


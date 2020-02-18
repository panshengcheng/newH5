//创建遮掩
var app = new PIXI.Application({width:640,height:1080,antialias: true });
document.body.appendChild(app.view);

//启动交互式
app.stage.interactive = true;

//创建精灵
var sprite1 = new PIXI.Sprite.fromImage("images/biaoqing01.jpg");

//设置精灵旋转中心点（默认为元素左上角）
sprite1.anchor.set(0.5);

//精灵缩放坐标
sprite1.x= app.renderer.width/2;
sprite1.y= app.renderer.height/2;

//放入舞台
app.stage.addChild(sprite1);

//创建容器
var container = new PIXI.Container();
//设置容器坐标
//container.anchor.set(0.5);
container.x = app.renderer.width / 2;
container.y = app.renderer.height / 2;

//添加多个精灵
var sprite2 = new PIXI.Sprite.fromImage("images/biaoqing02.jpg");
sprite2.anchor.set(0.5);

var sprite3 = new PIXI.Sprite.fromImage("images/biaoqing03.jpg");
sprite3.anchor.set(0.5);

var sprite4 = new PIXI.Sprite.fromImage("images/biaoqing04.jpg");
sprite4.anchor.set(0.5);

var sprite5 = new PIXI.Sprite.fromImage("images/biaoqing05.png");
sprite5.anchor.set(0.5);
//把精灵放入容器中
container.addChild(sprite2, sprite3, sprite4, sprite5);

app.stage.addChild(container);

//绘制一个图形
var grapise = new PIXI.Graphics();
app.stage.addChild(grapise);

grapise.x = app.renderer.width/2;
grapise.y = app.renderer.height/2;
grapise.lineStyle(0);

//添加遮罩
container.mask = grapise;
var count = 0;

app.stage.on('pointertap', function() {
    if (!container.mask) {
        container.mask = grapise;
    }
    else {
        container.mask = null;
    }
});

var help = new PIXI.Text('Click or tap to turn masking on / off.', { 
    fontFamily: 'Arial',
    fontSize: 12, 
    fontWeight:'bold', 
    fill: 'white'
});
help.y = app.renderer.height - 26;
help.x = 10;
app.stage.addChild(help);

app.ticker.add(function() {

    sprite1.rotation += 0.01;
    sprite2.rotation -= 0.01;

    sprite3.rotation += 0.02;
    sprite4.rotation += 0.01;

    sprite5.scale.x = 1 + Math.sin(count) * 0.04;
    //panda.scale.y = 1 + Math.cos(count) * 0.04;

    count += 0.1;

    grapise.clear();

    grapise.beginFill(0x8bc5ff, 0.4);
    grapise.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
    grapise.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count)* 20);
    grapise.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count)* 20);
    grapise.lineTo(-120 + Math.cos(count)* 20, 100 + Math.sin(count)* 20);
    grapise.rotation = count * 0.1;
});




//建立一个舞台，放入图片，以椭圆形的方式打开

var app = new PIXI.Application({
    width:640,
    height:1080
})
document.body.appendChild(app.view);

var sprite0 = new PIXI.Sprite.from("images/biaoqing05.png");
app.stage.addChild(sprite0);

//创建图片精灵
var sprite1 = new PIXI.Sprite.from("images/biaoqing01.jpg");

app.stage.addChild(sprite1);

//创建一个容器
var contion = new PIXI.Container();
//contion.anchor.set(0.5);

//话一个椭圆形面罩
var ellipse = new PIXI.Graphics();
ellipse.beginFill(0xFFFF00);
ellipse.drawRect(0, 0, app.renderer.view.width, app.renderer.view.height);
ellipse.endFill();

ellipse.pivot.x = app.renderer.width*0.5;
ellipse.pivot.y = app.renderer.height*0.5;

ellipse.position.x = app.renderer.width*0.5;
ellipse.position.y = app.renderer.height*0.5;

sprite1.mask = ellipse;
// app.stage.on("pointertap", function(){
//     if(!contion.mask){
//         contion.mask = ellipse;
//     }else{
//         contion.mask = ellipse;
//     }
// });

app.stage.addChild(contion);

//输入提示语
var hint = new PIXI.Text("点击页面，去除遮罩!", {
    //字体大小
    fontSize : 16,
    fontWeight:'bold',
    fill: 'red'
});

//设置提示区域
hint.y = app.renderer.height - 26;
hint.x = 10;
app.stage.addChild(hint);

contion.addChild(ellipse);
app.stage.addChild(contion);
PIXI.loader.add("ellipses","images/biaoqing03.jpg").load(getEllipse);
//加入动画tweenmax
var t = new TweenMax();
t.set(".box",{transformPerspective:300});
t.to(".box", 5, {rotationY:360, transformOrigin:"left top"});
function getEllipse(){
    TweenMax.set(ellipse.scale,{
        x:0,
        y:0
    })
    TweenMax.to(ellipse.scale, 5, {
        x:1,
        y:1,
        onComplete : function(){
            //添加遮罩
            contion.mask = ellipse;
        }
    });
}
 

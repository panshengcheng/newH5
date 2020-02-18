//创建漂浮精灵
window.onload=init;

function init(){
    var app = new PIXI.Application({
        width:640,
        height:1080,
        backgroundColor : 0x02343ff
    });
    document.body.appendChild(app.view);
    //创建一个数组，存放多个精灵
    var arraySprite =[];
    //循环创建精灵的个数
    for(var i=0; i<20; i++){
        //引入图片创建精灵
        var sprite1 = PIXI.Sprite.from("images/biaoqing01.jpg");
        //设置锚点，使纹理以精灵为中心
        sprite1.anchor.set(0.5);
        //设置每个精灵的缩放大小
        sprite1.scale.set(Math.random()*0.3);
        // 设置一个随机出现的精灵位置
        sprite1.x = Math.random()*app.renderer.width;
        sprite1.y = Math.random()*app.renderer.height;
        //随机设置精灵的颜色
        sprite1.tint = Math.random()* 0xfff067;
        //设置精灵的随机旋转方向
        sprite1.direction = Math.random()*Math.PI*2;
        //随着时间的推移，这个数字将被用来改变这个家伙的方向
        sprite1.turningSpeed = Math.random() - 0.8;

        sprite1.speed =2 + Math.random()*2;
        //存放精灵
        arraySprite.push(sprite1);
        app.stage.addChild(sprite1);  
    }      

    //创建一个精灵运动的边界
    var spritePadding = 100;
    var spriteMargin = new PIXI.Rectangle(-spritePadding, -spritePadding, app
        .renderer.width + spritePadding * 2,  app.renderer.height + spritePadding * 2);

    app.ticker.add(function(){
        //更新精灵的位置
        for(var j=0; j < arraySprite.length; j++){
            var dude = arraySprite[j];
            dude.direction += dude.turningSpeed * 0.01;
            dude.x += Math.sin(dude.direction) * dude.speed;
            dude.y += Math.cos(dude.direction) * dude.speed;
            dude.rotation = -dude.direction - Math.PI / 2;
    
            // wrap the dudes by testing their bounds...
            if (dude.x < spriteMargin.x) {
                dude.x += spriteMargin.width;
            }
            else if (dude.x > spriteMargin.x + spriteMargin.width) {
                dude.x -= spriteMargin.width;
            }
    
            if (dude.y < spriteMargin.y) {
                dude.y += spriteMargin.height;
            }
            else if (dude.y > spriteMargin.y + spriteMargin.height) {
                dude.y -= spriteMargin.height;
            }
        }

    });
}
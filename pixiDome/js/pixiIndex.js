function init(){
    console.log("init() 加载成功!");
    //创建一个舞台
    stage = new PIXI.Container();
    //渲染器将舞台实际绘制到画布上，通过渲染器的render()方法传递到舞台来完成
    renderer = PIXI.autoDetectRenderer(
        640,
        1080,
        {
            view:document.getElementById("game-canvas")
        }
    )
    var farTextrue = PIXI.Texture.fromImage("images/grimg.jpg");
    //far = new PIXI.Sprite(farTextrue);
    far = new PIXI.extras.TilingSprite(farTextrue, 512, 256);
    far.position.x = 0;
    far.position.y = 0;
    far.tilePosition.x = 0;
    far.tilePosition.y = 0;
    stage.addChild(far);
    var midTexture  = PIXI.Texture.fromImage("images/biaoqing01.jpg");
    //mid = new PIXI.Sprite(midTexture );
    mid = new PIXI.extras.TilingSprite(midTexture, 512, 256);
    mid.position.x = 0;
    mid.position.y = 128;
    mid.tilePosition.x = 0;
    mid.tilePosition.y = 0;
    stage.addChild(mid);
    //renderer.render(stage);
    requestAnimationFrame(update());
    
}

function update() {
    //far.position.x -= 0.128;
    far.tilePosition.x -= 0.128;
    //mid.position.x -= 0.64;
    mid.tilePosition.x -= 0.64;
  
    renderer.render(stage);
  
    requestAnimationFrame(update);
  }
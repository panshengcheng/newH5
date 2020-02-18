window.onload = init();

function init(){
    var app = new PIXI.Application({
        width:640, 
        height:1080,
        antialias :true,
        resolution:1
    });
    app.renderer.resize(window.innerWidth, window.innerHeight);
    document.body.appendChild(app.view);

    var sprite1 = new PIXI.Sprite.from("img/success.jpg");
    sprite1.width = app.screen.width;
    sprite1.height = app.screen.height;
    app.stage.addChild(sprite1);
}
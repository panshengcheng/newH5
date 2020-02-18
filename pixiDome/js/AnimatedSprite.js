window.onload = init;
function init(){
    //创建pixi舞台
    let option ={
        width:window.innerWidth,
        height:window.innerHeight,
        backgroundColor:0x000000,
        transparent:true
    }
    let app = new PIXI.Application(option);
    let stage = app.stage;
    let renderer = app.renderer;
    document.body.appendChild(renderer.view);
    let loader = new PIXI.Loader();
    let ImgUrl = "./manifest.json";
    loader.add(ImgUrl);
    loader.on("progress", function(e){
        console.log("已加载："+e.progress);
    });
    loader.load(setUp);
    function setUp(){
        let imgArr =[];
        for(let i=0; i<=350; i++){
            i = (i < 10) ? '00' + i : i;
            i = (i >= 10 && i < 100) ? '0' + i : i;
            imgArr.push(PIXI.Texture.from("movie/train" + i + ".jpg"));
        }
        let animatedSprite = new PIXI.AnimatedSprite(imgArr);
        animatedSprite.animationSpeed=20/60;
        animatedSprite.width = window.innerWidth;
        animatedSprite.height = window.innerHeight;
        animatedSprite.loop = true;
        animatedSprite.play();
        stage.addChild(animatedSprite);

    }
}
(function(){
    //获取传入的值
    let name ="";
    let age = "";
    let gender = "";
    let sin = "";
    let url = window.location.search;
    var theRequest = new Object();  
    if ( url.indexOf( "?" ) != -1 ) {  
        var str = url.substr( 1 ); //substr()方法返回从参数值开始到结束的字符串；  
        var strs = str.split( "&" );  
        for ( var i = 0; i < strs.length; i++ ) {  
            theRequest[ strs[ i ].split( "=" )[ 0 ] ] = ( strs[ i ].split( "=" )[ 1 ] );  
        }  
       name = decodeURI(theRequest.name)
       age = theRequest.age;
       gender = theRequest.gender;
       sin = theRequest.isSin;
       console.log("您的名字："+name+"，性别："+gender+"，年龄："+age+",是否单身："+sin);
       $("#content").show();
       
    }
})()
    var canvas = document.getElementById("canvas");
    var app = new PIXI.Application({
        width: 640,
        height: 1080,
        view: canvas,
        forceCanvas: false,
        preserveDrawingBuffer: true
    });
    console.log(app);
        app.ticker.stop();
        var game = {
            init: function () {
                var yearIndex = gameData.t1;
                var workIndex = gameData.t2;
                var year = gameData.year[yearIndex]["text"];
                var work = gameData.work[workIndex];
            // stitle = gameData.name + "\u539F\u6765\u662F" + year + "\u7684\u4E00\u540D" + work;
            // $("title").text(stitle);
                //weChat();
                game.dwCanvas();
            },
            dwCanvas: function () {
                var loader = new PIXI.loaders.Loader();
                loader.add("bg", "images/bg.png?t=1");
                loader.add("year", gameData.t1Img);
                loader.add("work", gameData.t2Img);
                loader.load(function () {
                    
                    start();
                });
                function start() {
                    var bg = PIXI.Sprite.fromImage("bg");
                    var year = PIXI.Sprite.fromImage("year");
                    var work = PIXI.Sprite.fromImage("work");
                    var name = new PIXI.Text(name, {
                        align: "right",
                        fill: 0x000000,
                        fontSize: "26px"
                    });
                    name.anchor.set(1);
                    name.position.set(557, 754);
                    app.stage.addChild(bg, work, year, name);
                    app.renderer.render(app.stage);
                    dwFilter();
                    //setFilp();
                    dwImg();
                    function dwImg() {
                        var img = app.renderer.plugins.extract.image(app.stage);
                        $(img).attr({
                            "class": "box obj-cover"
                        });
                        $("#saveTips").before($(img));
                        $("#saveTips").on("touchstart", function (e) {
                            $(e.target).hide();
                        });
                    }
                    function setFilp() {
                        app.stage.pivot.set(640 * 0.5, 1080 * 0.5);
                        app.stage.scale.y = -1;
                        app.stage.position.set(640 * 0.5, 1080 * 0.5);
                        app.renderer.render(app.stage);
                    }
                    function dwFilter() {
                        var filter = new PIXI.filters.ColorMatrixFilter();
                        work.filters = [filter];
                        gameData.year[gameData.t1].filter(filter);
                        app.renderer.render(app.stage);
                    }
                   
                }
            }
        };
        game.init();


    
function mathNumber(){
    let sum = Math.floor(Math.random()*1+1);
    if(sum ==0){
        sum = 1;
    }
    return sum;
}

// if(gender == 'male'){
//     //男 单身
//     if(sin == 'isOne'){
//         switch (age) {
//             case '80m':
//                 let sum = mathNumber();
//                 url ='';
//                 break;
//             case '90m':
//                 url ='';
//                 break;
//             case '00m':
//                 url ='';
//                 break;
//         }
//     }else{
//         //noSing
//         switch (age) {
//             case '80m':
//                 url ='';
//                 break;
//             case '90m':
//                 url ='';
//                 break;
//             case '00m':
//                 url ='';
//                 break;
//         }
//     }
// }else{
//     //女 单身
//     if(sin == 'isOne'){
//         switch (age) {
//             case '80w':
//                 url ='';
//                 break;
//             case '90w':
//                 url ='';
//                 break;
//             case '00w':
//                 url ='';
//                 break;
//         }
//     }else{
//         //noSing
//         switch (age) {
//             case '80w':
//                 url ='';
//                 break;
//             case '90w':
//                 url ='';
//                 break;
//             case '00w':
//                 url ='';
//                 break;
//         }
//     }
// }
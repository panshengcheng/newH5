"use strict";

window.onload= getImgInfo;

function getImgInfo(){
    var imgId = document.getElementById("imgId");
    var num = document.getElementById("num");
    //定义别名
    var Application = PIXI.Application;
    var loader = new PIXI.loaders.Loader();
    var getInfo = {
            init : function () {
                var app = new Application(innerWidth, innerHeight);
                app.renderer.backgroundColor = 0xFFFFFF;
                document.body.appendChild(app.view);
                console.log(124345);
                $.ajax({
                    url:"images.json",
                    type: "get",
                    //dataType: "JSONP",
                    success : function(data) {
                        console.log(data);
                        if(data){
                            loader.add(data.result);
                            loader.on("progress", function(e){
                                //num.innerHTML=Math.floor(e.progress)+"%";
                                $("#num").html(Math.floor(e.progress)+"%");
                            })
                            loader.load(
                                getTweenMax(),
                                startFun(),    
                            );
                        }
                    },
                    error : function(){
                            console.log("请求失败！");
                    }
                    
                });
        
            function startFun(){
                //绘制圆形
                var circle = new PIXI.Graphics();
                circle.beginFill(0x9966FF);
                circle.drawCircle(0, 0, 32);
                circle.endFill();
                circle.x = 150;
                circle.y = 260;
                app.stage.addChild(circle);
            }

            function getTweenMax(){
                console.log("执行完毕!");
                var move = new TweenMax();
                move.to(imgId, 5, {x:200});
                
            }
        }
    
    }
    getInfo.init();
    
}


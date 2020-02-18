window.onload = init;

function init() {
    var path = document.getElementById("path").value;

    /*获取状态 */
    var wechatUserinfo = {
        openid: $("#openid").val(),
        headimgurl: $("#headimgurl").val(),
        nickname: $("#nickname").val()
    }

    var userinfo = {
        openid: wechatUserinfo.openid,
        headimgurl: wechatUserinfo.headimgurl,
        nickname: wechatUserinfo.nickname,
        name: "",
        headimg: "",
        phone: "",
        message: "",
        fans_id: "",
        player_id: "",
        time: "",
        age: 0,
        activity : "",
        players: []
    };

    function resetWechat(_stitle,_link,_sdesc){
        stitle = _stitle;
        link = _link;
        sdesc = _sdesc;
        wechat();
    }

    var game = {
        tabbar: function () {
            /* 按钮路由 */
            if (userinfo.player_id !== "") {
                $("#my_infoBtn").attr("data-target", "my_info.php?id=" + userinfo.player_id);
            }
            $(".tabbar-btn").on("click", function () {
                var url = $(this).attr("data-target");
                location.href = url;
            });
            switch (path) {
                case "/html5/sunac/vote/readme.php":
                    $("#readmeBtn").addClass("tabbar-btn-active");
                    game.readme();
                    break;
                case "/html5/sunac/vote/ranking.php":
                    $("#rankingBtn").addClass("tabbar-btn-active");
                    game.ranking();
                    break;
                case "/html5/sunac/vote/join.php":
                    $("#joinBtn").addClass("tabbar-btn-active");
                    game.join();
                    break;
                case "/html5/sunac/vote/my_info.php":
                    $("#my_infoBtn").addClass("tabbar-btn-active");
                    game.my_info();
                    break;
            }
        },
        readme: function () {

            // var app = new PIXI.Application(window.innerWidth, window.innerHeight);
            // document.body.appendChild(app.view);
            // var spriteImg = new PIXI.Sprite.fromImage("http://wx.uvcsi.com/html5/sunac/vote/lib/imgs/souye.jpg");
            // spriteImg.width = app.screen.width;
            // spriteImg.height = app.screen.height;

            // app.stage.addChild(spriteImg);
        },
        ranking: function () {
            var isBottom = false;
            var searchClose = true;
            var playerCount;
            var offset = 0;  //数据库偏移量
            var tempPlayers = [];

            gotoServer();

            function onResetPlayers() {
                offset = 0;
                searchClose = false;
                $("#search").hide();
                $("#close").show();
                $("#rankingContent").html("");
            }

            $("#close").on("click", function () {
                $("#search").show();
                $("#close").hide();
                $("#name").val("");
                $("#rankingContent").html("");
                searchClose = true;
                gotoServer();
            });

            function gotoServer() {
                $.ajax({
                    url: "http://www.ulifecity.com:4003/getplayer",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ offset: offset }),
                    success: function (data) {
                        playerCount = data.result.playerCount;
                        tempPlayers = data.result.players;
                        userinfo.players.push(data.result.players);
                        makeElement();
                    },
                    error: function (err) {
                        console.log(err);
                    }
                })
            }

            function makeElement() {
                console.log(tempPlayers);
                for (var i = 0; i < tempPlayers.length; i++) {
                    var col6 = document.createElement("div");
                    col6.className = "col-6 margin-tb-15";
                    var a = document.createElement("a");
                    a.href = "my_info.php?id=" + tempPlayers[i].player_id;
                    a.id = tempPlayers[i].player_id;
                    var card = document.createElement("div");
                    card.className = "card";
                    var img = document.createElement("img");
                    img.src = tempPlayers[i].headimg;
                    img.className = "card-img-top";
                    card.appendChild(img);
                    var cardBody = document.createElement("div");
                    var cardTitle = document.createElement("div");
                    cardTitle.className = "card-title";
                    cardTitle.innerText = tempPlayers[i].name;
                    var cardText = document.createElement("p");
                    cardText.innerText = tempPlayers[i].star + "票";
                    card.appendChild(cardBody);
                    cardBody.appendChild(cardTitle);
                    cardBody.appendChild(cardText);
                    a.appendChild(card);
                    col6.appendChild(a);
                    $("#rankingContent").append($(col6));
                }
            }

            $(".box").on("scroll", onScroll);

            function onScroll(event) {
                let clientHeight = event.target.clientHeight;
                let scrollHeight = event.target.scrollHeight;
                let offseetHeight = scrollHeight - clientHeight;
                let scrollTop = event.target.scrollTop;

                if (scrollTop <= offseetHeight - 70) {
                    //console.log("已经远离底部");
                    isBottom = false;
                }

                if (scrollTop > offseetHeight - 70) {
                    if (!isBottom && searchClose && offset < playerCount) {
                        isBottom = true;
                        console.log(isBottom, "到达底部");
                        offset += 10;
                        gotoServer();
                    }
                }
            }

            $("#search").on("click", onSearch);

            function onSearch() {
                var nameValue = $("#name").val();
                if (nameValue === "") {
                    alert("您没有输入任何内容");
                } else {
                    $.ajax({
                        url: "http://www.ulifecity.com:4003/name",
                        type: "post",
                        contentType: "application/json",
                        data: JSON.stringify({ name: nameValue }),
                        success: function (data) {
                            if (data.code === 0) {
                                alert("没有找到任何用户");
                            } else if (data.code === 1) {
                                //players = data.result;
                                tempPlayers = data.result;
                                onResetPlayers();
                                makeElement();
                            }
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    })
                }
            }
        },
        join: function () {
            console.log(userinfo.player_id);
            if (userinfo.player_id != "" || userinfo.player_id !=0) {
                alert("您已经是选手了");
                location.href = "my_info.php?id=" + userinfo.player_id;
            }

            _init();

            function _init() {
                let select = document.getElementById("select");
                let btnCotrol = document.getElementById("btn-control");
                let inputfile = document.getElementById("inputfile");
                let userMessage = document.getElementById("userMessage");
                let btnEnd = document.getElementById("btn-end");
                let canvas = document.getElementById("canvas");

                inputfile.addEventListener("change", onSelect);

                var tempImg = new Image();

                function onSelect(e) {
                    let file = e.target.files[0];
                    let isImg = /image/.test(file.type);
                    if (isImg) {
                        fileRender(file);
                    } else {
                        throw "这不是图片";
                    }

                    function fileRender(f) {
                        let reader = new FileReader();
                        reader.readAsDataURL(f);
                        reader.addEventListener("load", function (e) {
                            tempImg.src = reader.result;
                            tempImg.addEventListener("load", function () {
                                canvasRender(canvas, tempImg);
                                hideSelect();
                            });
                        })
                    }

                    function hideSelect() {
                        select.style.display = "none";
                        btnCotrol.style.display = "flex";
                        userMessage.style.display = "block";
                        btnEnd.style.display = "flex";
                    }
                }
            }

            function canvasRender(canvas, tempImg) {
                let that = this;
                let config = {
                    width: 640,
                    height: 640,
                    view: canvas,
                    forceCanvas: true
                }
                let app = new PIXI.Application(config);

                let scale = 640 / tempImg.naturalWidth;
                scale = scale > 1 ? 1 : scale;
                console.log(scale);

                class Control {
                    constructor() {
                        this.img = PIXI.Sprite.from(tempImg);
                        this.img.anchor.x = 0.5;
                        this.img.anchor.y = 0.5;
                        this.img.scale.x = scale;
                        this.img.scale.y = scale;
                        this.img.position.set(320, 320);
                    }

                    init() {
                        app.stage.addChild(this.img);
                        this.exif();
                        this.imgOnDrop();
                        this.btnOnEvent();
                        this.preview();
                        this.commit();
                    }

                    exif() {
                        let _this = this;
                        let orientation;
                        EXIF.getData(tempImg, function () {
                            orientation = EXIF.getTag(this, "Orientation");
                            next();
                        })

                        function next() {
                            if (orientation == 1 || orientation == undefined) {
                                return true;
                            } else if (orientation == 6) {
                                _this.img.rotation = (Math.PI / 180) * 90;
                            } else if (orientation == 8) {
                                _this.img.rotation = (Math.PI / 180) * 90 * -1;
                            } else if (orientation == 3) {
                                _this.img.rotation = (Math.PI / 180) * 180;
                            }
                        }
                    }

                    imgOnDrop() {
                        let that = this;

                        that.img.interactive = true;
                        that.img.on("pointerdown", dropStart);
                        that.img.on("pointermove", dropMove);
                        that.img.on("pointerup", dropUp);

                        function dropStart(event) {
                            that.imgDrop = true;
                        }

                        function dropMove(event) {
                            if (that.imgDrop === true) {
                                that.img.position = event.data.global;
                            }
                        }

                        function dropUp() {
                            that.imgDrop = false;
                        }
                    }

                    btnOnEvent() {
                        let that = this;

                        let sPlus = document.getElementById("sPlus");
                        let sMinus = document.getElementById("sMinus");
                        let rLeft = document.getElementById("rLeft");
                        let rRight = document.getElementById("rRight");
                        let reset = document.getElementById("reset");

                        sPlus.addEventListener("click", function () {
                            that.img.scale.x += 0.1;
                            that.img.scale.y += 0.1;
                        });

                        sMinus.addEventListener("click", function () {
                            that.img.scale.x -= 0.1;
                            that.img.scale.y -= 0.1;
                        });

                        rLeft.addEventListener("click", function () {
                            that.img.rotation -= (Math.PI / 180) * 4;
                        });

                        rRight.addEventListener("click", function () {
                            that.img.rotation += (Math.PI / 180) * 4;
                        });

                        reset.addEventListener("click", function () {
                            app.ticker.stop();
                            location.href = "";
                        });
                    }

                    preview() {
                        let _this = this;

                        let previewBtn = document.getElementById("previewBtn");
                        let commitBtn = document.getElementById("commitBtn");
                        let name = document.getElementById("name");
                        let message = document.getElementById("message");
                        let phone = document.getElementById("phone");
                        let userMessage = document.getElementById("userMessage");
                        let btnCotrol = document.getElementById("btn-control");
                        let age = document.getElementById("age");
                        let activitys = document.getElementsByName("activity");
                        let activity = "";
                        for(let i=0; i<activitys.length; i++){
                            if(activitys[i].checked){
                                activity =activitys[i].value;
                            }
                        }
                        previewBtn.addEventListener("click", checkout);

                        function checkout() {
                            let mobile = /^1[\d]{10}$/;
                            let str = /^[\u4e00-\u9fa5]{2,4}$/;
                            if (name.value.length === 0 || message.value.length === 0 || phone.value.length === 0 ) {
                                that.alertInfo = {
                                    class: "alert alert-danger",
                                    display: true,
                                    text: "你尚有未填写的信息"
                                }
                                alert("请您填写相关信息！");
                            } else if (!str.test(name.value)) {
                                that.alertInfo = {
                                    class: "alert alert-danger",
                                    display: true,
                                    text: "您填写的名称不匹配"
                                }
                                alert("您填写的名字有误！");
                            }  else if (!mobile.test(phone.value)) {
                                that.alertInfo = {
                                    class: "alert alert-danger",
                                    display: true,
                                    text: "你填写的手机号码有误"
                                }
                                alert("请正确的填写您的手机号码！");
                            } else if(age.value.length <=0 || age.value.length >=3){
                                that.alertInfo = {
                                    class: "alert alert-danger",
                                    display: true,
                                    text: "请输入您的年龄！"
                                }
                                alert("请正确输入您的年龄！");
                            }  else {
                                previewBtn.setAttribute("class", "btn btn-dark");
                                commitBtn.setAttribute("class", "btn btn-info");
                                previewBtn.removeEventListener("click", checkout);
                                btnCotrol.style.display = "none";
                                userMessage.style.display = "none";
                                render();
                            }
                        }

                        function render() {
                            cacheService();
                        }

                        function cacheService() {
                            app.ticker.stop();
                            app.renderer.render(app.stage);
                            // let value = {
                            //     headimg: canvas.toDataURL("image/jpeg", "0.5"),
                            //     name: name.value,
                            //     phone: phone.value.toString(),
                            //     message: message.value
                            // }
                            userinfo.headimg = canvas.toDataURL("image/jpeg", "0.5");
                            userinfo.name = name.value;
                            userinfo.phone = phone.value.toString();
                            userinfo.message = message.value;
                            userinfo.age = age.value;
                            userinfo.activity = activity;
                            _this.isAbleCommit = true;
                        }

                    }

                    commit() {
                        let _this = this;
                        let previewBtn = document.getElementById("previewBtn");
                        let commitBtn = document.getElementById("commitBtn");
                        console.log(userinfo);
                        commitBtn.addEventListener("click", function () {
                            if (_this.isAbleCommit) {
                                $.ajax({
                                    //url: "http://www.ulifecity.com:4003/join",
                                  url:"http://127.0.0.1:4003/join",
                                    type: "post",
                                    contentType: "application/json",
                                    data: JSON.stringify({
                                        openid: userinfo.openid,
                                        name: userinfo.name,
                                        phone: userinfo.phone,
                                        headimg: userinfo.headimg,
                                        message: userinfo.message,
                                        age: userinfo.age,
                                        activity: userinfo.activity
                                    }),
                                    success: function (data) {
                                        previewBtn.style.display = "none";
                                        commitBtn.style.display = "none";
                                        console.log(data.result.insertId);
                                        window.location.href = "my_info.php?id=" + data.result.insertId;
                                    },
                                    error: function (err) {
                                        console.log(err);
                                    }
                                })
                            } else {
                                alert("请先生成图片");
                            }
                        });
                    }
                }

                let control = new Control().init();
            }

        },
        my_info: function () {
            var time;
            var player_id = $("#player_id").val();
            var player = {
                headimg: "",
                name: "",
                message: "",
                player_id: "",
                star: 0
            };

            _init();
            function _init() {
                getTime();
                gotoServer();
            }

            function getTime() {
                let now = new Date();
                let year = now.getFullYear();
                let month = now.getMonth() + 1;
                month = month < 10 ? `0${month}` : `${month}`;
                let date = now.getDate();
                date = date < 10 ? `0${date}` : `${date}`;
                time = `${year}-${month}-${date}`;
                console.log("今天的日期是" + this.time);
            }

            function gotoServer() {
                $.ajax({
                    "url": "http://www.ulifecity.com:4003/get_single_personal",
                    "type": "POST",
                    "contentType": "application/json",
                    "data": JSON.stringify({ player_id: player_id }),
                    "success": function (data) {
                        if (data.code === 1) {
                            player = data.result[0];
                            render();
                            resetWechat(
                                "我是" + player.name + "快来投我一票吧",
                                "http://wx.uvcsi.com/html5/sunac/vote/my_info.php?id=" + player.player_id,
                                "一起来参加吧"
                            );
                        }
                    },
                    "error": function (err) {
                        console.log(err);
                    }
                })
            }

            function render() {

                if(player){
                    $("#name").text(player.name);
                    $("#message").text(player.message);
                    $("#headimg").attr("src", player.headimg);
                    $("#star").text("投票,目前票数为" + player.star + "票");

                    gotoVote();
                 }else{//没有注册
                     alert("抱歉，您还没有报名!");
                     window.location.href = "join.php";
                 }
            }

            function gotoVote() {
                $("#star").on("click", onVote);
                function onVote() {
                    let _time = userinfo.time;  //数据记录的事件
                    if (time !== _time) {
                        _gotoServer();   //最终
                    } else {
                        alert("你已经投过票了");
                    }
                    function _gotoServer() {
                        $.ajax({
                            "url": "http://www.ulifecity.com:4003/vote",
                            "type": "POST",
                            "contentType": "application/json",
                            "data": JSON.stringify({ player_id: player_id, fans_id: userinfo.fans_id, time: time }),
                            "beforeSend" : function(){
                                $("#star").attr({disabled : "disabled"});//防止重复点击
                            },
                            "success": function (data) {
                                alert("投票成功");
                                userinfo.time = time;
                                location.reload(true);
                            },
                            "error": function (err) {
                                console.log(err);
                            }
                        })
                    }
                }
            }

        }
    }

    /* 用户状态赋值 */
    $.ajax({
        url: "http://www.ulifecity.com:4003/login",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(wechatUserinfo),
        success: function (data) {
            if (data.code === 1) {
                userinfo.fans_id = data.result.insertId;
            } else if (data.code === 2) {
                userinfo.fans_id = data.result[0].fans_id;
                userinfo.player_id = data.result[0].player_id;
                userinfo.time = data.result[0].time;
            }
            game.tabbar(); //底部按钮与路由匹配
        },
        error: function (err) {
            console.log(err);
        }
    });
        //监听键盘点击事件
        const inputItems = document.querySelectorAll("input");
            inputItems.forEach(function(ele){
            ele.addEventListener("blur",function(){
                window.scrollTo(0,0)
            })
        })
}

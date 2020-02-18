window.onload=init();

function init(){
    let page = document.getElementById("nextPage");
    page.addEventListener("touchend",function(){
        $("#icons").css("display","none");
        $(".radio").css("display","block");
    },false)

    let btn = document.getElementById("btn");
    btn.addEventListener("touchend", function(){
        let gender = $("input[name='gender']:checked").val();
        let grade = $("input[name='grade']:checked").val();
        let school = $("input[name='school']:checked").val();
        let alimony = $("input[name='alimony']:checked").val();
        let cost = $("input[name='cost']:checked").val();
        let internet = $("input[name='internet']:checked").val();
        let after = $("input[name='after']:checked").val();

        let relaxa = [];
        $("input[name='relaxation']:checked").each(function(){
            relaxa.push($(this).val());
        })
        let relaxation = relaxa.join(',');

        let act = [];
        $("input[name='activity']:checked").each(function(){
            act.push($(this).val());
        })
        let activity = act.join(',');
        let isActivity = $("input[name='isActivity']:checked").val();

        let b =[];
        $("input[name='bourn']:checked").each(function(){
            b.push($(this).val());
        })
        let bourn = b.join(',');

        let f =[];
        $("input[name='factor']:checked").each(function(){
            f.push($(this).val());
        })
        let factor = f.join(',');

        let frequency = $("input[name='frequency']:checked").val();
        let brand = $("input[name='isBrand']:checked").val();
        let goOut = $("input[name='goOut']:checked").val();
        let way = $("input[name='way']:checked").val();
        let bar = $("input[name='bar']:checked").val();
        
        let ctfs = [];
        $("input[name='ctf']:checked").each(function(){
            ctfs.push($(this).val());
        })
        let ctf = ctfs.join(',');

        let film = $("input[name='film']:checked").val();
        let movie = $("input[name='movie']:checked").val();
        
        let hps = [];
        $("input[name='hp']:checked").each(function(){
            hps.push($(this).val());
        })
        let hp = hps.join(',');

        let space = $("input[name='space']:checked").val();
        
        let fortifyArr = [];
        $("input[name='fortify']:checked").each(function(){
            fortifyArr.push($(this).val());
        })
        let fortify = fortifyArr.join(',');

        let attArr = [];
        $("input[name='attraction']:checked").each(function(){
            attArr.push($(this).val());
        })
        let attraction = attArr.join(',');

        let trench = $("input[name='trench']:checked").val();
        let stockpile = $("input[name='stockpile']:checked").val();
        let bookshop = $("input[name='bookshop']:checked").val();
        let xyl = $("input[name='xyl']:checked").val();
        
        let conArr = [];
        $("input[name='condition']:checked").each(function(){
            conArr.push($(this).val());
        })
        let condition = conArr.join(',');

        let clockIn = $("input[name='clockIn']:checked").val();
        let hobby = $("input[name='hobby']:checked").val();
        let terrace = $("input[name='terrace']:checked").val();
        if(!gender){
            alert("请选择您的性别");
            return;
        }
        if(!grade){
            alert("请选择您的年级");
            return;
        }
        if(!school){
            alert("请选择您的学校");
            return;
        }
        if(!alimony){
            alert("请选择您每月生活费区间");
            return;
        }
        if(!cost){
            alert("请选择您每月生活费在网上的花销比例");
            return;
        }
        if(!internet){
            alert("请选择您每月生活费在网上的花销比例");
            return;
        }
        if(!after){
            alert("请选择您每月课余时间主要的消费场所");
            return;
        }
        if(!relaxation){
            alert("请选择您休闲娱乐时会考虑的因素");
            return;
        }
        if(!activity){
            alert("请选择您课余时间经常参加的休闲娱乐活动");
            return;
        }
        if(!isActivity){
            alert("请选择您学校周边休闲娱乐消费场所是否充足");
            return;
        }
        if(!bourn){
            alert("请选择你和你的同学/朋友经常去消费的是");
            return;
        }
        if(!factor){
            alert("请选择购物中心/商业街区最重要的因素");
            return;
        }
        if(!frequency){
            alert("请选择逛购物中心/商业街区的频率");
            return;
        }
        if(!brand){
            alert("请选择花溪区域内是否有你特别喜欢的餐饮品牌");
            return;
        }
        if(!goOut){
            alert("请选择您外出就餐频率");
            return;
        }
        if(!way){
            alert("请选择您从哪些途径了解到知名度较高的餐饮品牌");
            return;
        }
        if(!bar){
            alert("请选择酒吧、清吧等休闲娱乐场所消费频率");
            return;
        }
        if(!ctf){
            alert("请选择酒吧、清吧等注重的因素");
            return;
        }
        if(!film){
            alert("请选择您周边最爱去的电影院");
            return;
        }
        if(!movie){
            alert("请选择您看电影的频率");
            return;
        }
        if(!hp){
            alert("请选择您对于轰趴馆更倾向的功能");
            return;
        }
        if(!space){
            alert("请选择您学校及学校周边是否有完全满足个人需求的运动空间");
            return;
        }
        if(!fortify){
            alert("请选择您想要增加的运动项目");
            return;
        }
        if(!trench){
            alert("请选择您日常零售商品的购买渠道");
            return;
        }
        if(!attraction){
            alert("请选择哪个零售品牌更对您更具消费吸引力");
            return;
        }
        if(!stockpile){
            alert("请选择您每周是否会逛一次超市囤一次货");
            return;
        }
        if(!bookshop){
            alert("请选择您是否经常逛书店或者图书馆");
            return;
        }
        if(!xyl){
            alert("请选择您认为哪个书店品牌更具吸引力");
            return;
        }
        if(!condition){
            alert("请选择您认为一个吸引你的书店具备的条件");
            return;
        }
        if(!clockIn){
            alert("请选择文创手作或大学生文创商品店铺能否吸引你前往打卡");
            return;
        }
        if(!hobby){
            alert("请选择您对喜欢的商业消费场所的偏好");
            return;
        }
        if(!terrace){
            alert("请选择您是否倾向于有一个聚焦大学生才艺的展示平台");
            return;
        }
        let forData = new FormData();
        //let forData = new FormData();
        forData.append("gender",gender);
        forData.append("grade",grade);
        forData.append("school",school)
        forData.append("alimony",alimony)
        forData.append("cost",cost)
        forData.append("internet",internet)
        forData.append("after",after)
        forData.append("relaxation",relaxation)
        forData.append("activity",activity)
        forData.append("isActivity",isActivity)
        forData.append("bourn",bourn)
        forData.append("factor",factor)
        forData.append("frequency",frequency)
        forData.append("brand",brand)
        forData.append("goOut",goOut)
        forData.append("way",way)
        forData.append("bar",bar)
        forData.append("ctf",ctf)
        forData.append("film",film)
        forData.append("movie",movie)
        forData.append("hp",hp)
        forData.append("space",space)
        forData.append("fortify",fortify)
        forData.append("trench",trench)
        forData.append("attraction",attraction)
        forData.append("stockpile",stockpile)
        forData.append("bookshop",bookshop)
        forData.append("xyl",xyl)
        forData.append("condition",condition)
        forData.append("clockIn",clockIn)
        forData.append("hobby",hobby)
        forData.append("terrace",terrace)
        var jsonData = {};
        forData.forEach((value, key) => jsonData[key] = value);
        let flag = true;
        if(flag){
            flag = false;
            $.ajax({
                url:"http://www.ulifecity.com:4088/addSurvey",
                type:"post",
                data:JSON.stringify(jsonData),
                contentType: "application/json",
                success:function(res){
                    flag = true;
                    $(".radio").css("display","none");
                    $("#sucess").css("display","block");
                },
                error:function(e){
                    flag = true;
                    console.log(e);
                }
            })
        }else{
            alert("请等待提交结果");
        }
    },false)

}
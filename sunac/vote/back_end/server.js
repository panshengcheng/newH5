const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
var Ddos = require('ddos');

const PORT = 4003;

let pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "createUlifecity20181212",
    database: "uvcsi"
});

const T1 = "vote_fans";
const T2 = "vote_player";

const sql = {
    queryFans:`select * from ${T1} where openid=?`,
    addFans:`insert into ${T1} (openid,nickname,headimgurl) values (?,?,?)`,
    addPlayer:`insert into ${T2} (openid,headimg,name,phone,message,age,activity) values (?,?,?,?,?,?,?)`,
    remarkFans:`update ${T1} set player_id=? where openid=?`,
    iVoteU:`update ${T2} set star=star+1 where player_id=?`,
    remarkFansTime:`update ${T1} set time=? where fans_id=?`,
    getRanking100:`select player_id,name,headimg,message,star from vote_player order by star desc,player_id limit ?,10`,
    getPlayersOfName:`select player_id,name,headimg,message,star from vote_player where name like ?`,
    getPlayerCount:`select count(*) from vote_player`,
    getSinglePersonal:`select player_id,headimg,name,message,star from vote_player where player_id=?`,
    deleteFromPlayer:`delete from vote_player where openid=?`,
    deleteFromFans:`delete from vote_fans where openid=?`
    //remarkFans:`select * from ${T1} as a left join ${T2} as b a.player_id=b.player_id where a.openid=?`
}

let app = express();
let ddos = new Ddos({burst:10, limit:15})

app.use(ddos.express);
app.use("/upload",express.static(path.join(__dirname,"upload")));
app.use(bodyParser.json({
    "limit":"2mb"
}));
app.use("*",function (req,res,next){
    res.header("Access-Control-Allow-Origin", "http://wx.uvcsi.com");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'Jonny');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});  //跨域

app.get("/one",function (req,res){
    res.status(200).send("this is one");
});


app.post("/snsapi",function (req,res){
    let url = req.body.url;
    let str = function (len){
        return Math.random().toString(26).substr(2,len)
    }
    let userInfo = {   
        "openid":str(15),        //给予一个新的粉丝
        //"openid":"jfeiokbogeo",  // 一个单纯的粉丝
        //"openid":"l087jg1i8kb7",  // 既是粉丝，又是选手 
        "nickname":"jonny",
        "headimgurl":"http://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46"
    }

    if(req.body.url.length !== 0 && req.body.scope.length !== 0){
        res.json({
            code:1,
            msg:"获取微信用户信息成功",
            result:userInfo
        });
    }else{
        res.json({
            code:0,
            msg:"error"
        })
    }
})

/*@param {
    openid:string;
    nickname:string;
    headimgurl:string;
}*/
app.post("/login",function (req,res){
    let openid = req.body.openid;
    pool.getConnection(function (error,connection){
        if(error) throw error;
        connection.query(sql.queryFans,[openid],function (err,v){
            if(err) throw err;
            if(v.length!==0){
                isplayer = v[0].isplayer;
                res.json({code:2,msg:"有这个人,将他的信息传送给你",result:v})
                connection.release();
            }else{
                next(connection);
            }
        })
    })

    function next(connection){
            connection.query(sql.addFans,[req.body.openid,req.body.nickname,req.body.headimgurl],function (err,v){
                if(err) throw err;
                res.json({code:1,msg:"没有这个人，且将他加进去",result:v});
                connection.release();
            });
    }
});


app.post("/name",function (req,res){
    let name = req.body.name;
    name = "%" + name + "%";
    pool.getConnection(function (error,connection){
        if(error) throw error;
        connection.query(sql.getPlayersOfName,[name],function (err,value){
            if(err) throw err;
            if(value.length===0){
                res.json({
                    code:0,
                    msg:"未找到任何用户",
                })
            }else{
                res.json({
                    code:1,
                    msg:"ok",
                    result:value
                }) 
            }
            
            connection.release();
        });
    });
})

/*@param{
    player_id:number;
}*/
app.post("/get_single_personal",function (req,res){
    let player_id = req.body.player_id;
    pool.getConnection(function (error,connection){
        connection.query(sql.getSinglePersonal,[player_id],function (err,v){
            if(err) throw err;
            res.json({code:1,msg:"ok",result:v});
            connection.release();
        });
    });
})


/*@param{
    offset:number;
}*/
app.post("/getplayer",function (req,res){
    let offset = req.body.offset;
    let playerCount;
    pool.getConnection(function (error,connection){
        if(error) throw error;
        connection.query(sql.getPlayerCount,function (err,v){
            if(error) throw error; 
            playerCount = v[0]["count(*)"];
            next(connection);
        });
    });

    function next(connection){
        connection.query(sql.getRanking100,[offset],function (err,v){
            if(err) throw err;
            connection.release();
            res.json({
                code:1,
                msg:"获取选手列表10哥用户",
                result:{
                    playerCount:playerCount,
                    players:v
                }
            })
        })
    }
});

let headImgSave = function (req){//生成照片地址，即存储方法
    let base64Data = req.body.headimg.replace(/^data:image\/jpeg;base64,/,"");
    //let binaryData = new Buffer(base64Data,"base64").toString("binary");
    //let binaryData = Buffer.alloc(1000*1000*2,base64Data,"base64");
    let binaryData = Buffer.from(base64Data,"base64").toString("binary");
    let openid = req.body.openid;
    let imgPath = path.join(__dirname, `../front_end/upload/${openid}`);
    let headImg = `${imgPath}/headimg.jpg`;
    let isDir = fs.existsSync(imgPath);
    if (!isDir) {
        fs.mkdir(imgPath, function (err) {
            if (err) throw err;
            next();
        })
    }else{
        next();
    }

    function next(){
        fs.writeFile(headImg,binaryData,'binary',function (err){
            if(err) throw err;
        })
    }
}

/*@param {
    openid:string;
    headimg:base64;
    name:string;
    phone:string;
    message:string;
}*/
app.post("/join", function (req, res) {
    let player_id = 0;
    let openid = req.body.openid;

    headImgSave(req);
    //let host = "http://vote.jonnypeng.com/upload"
    let host = "http://cn.ulifecity.com/vote/upload";
    let headImg = `${host}/${openid}/headimg.jpg`;
    let values = [ 
        req.body.openid,
        headImg,
        req.body.name,
        req.body.phone,
        req.body.message,
        req.body.age,
        req.body.activity
    ];
     pool.getConnection(function (error,connection){
         if(error) throw error;
         connection.query(sql.addPlayer,values,function(err,v){
           if(err) throw err;
           player_id = v.insertId;
           next(connection);
         })
     })

     function next(connection){
              connection.query(sql.remarkFans,[player_id,openid],function (err,v){
                if(err) throw err;
                connection.release();
                res.json({
                    code:1,
                    msg:"增加了这个选手，并且标注这个粉丝同时为选手",
                    result:{insertId:player_id}
                })
              })
     }
});

/*@param {
    fans_id:number;
    player_id:number;   
    time:string;
} */
app.post("/vote",function (req,res){
    let fansId = req.body.fans_id;
    let playerId = req.body.player_id;   
    let time = req.body.time;   //6个字符的字符串
    console.log(playerId,fansId,time);
    
    pool.getConnection(function (error,connection){
        if(error) throw error;
        connection.query(sql.iVoteU,[playerId],function (err,v){
            if(err) throw err;
            next(connection);
        })
    })

    function next(connection){
        connection.query(sql.remarkFansTime,[time,fansId],function (error,v){
            if(error) throw error;
            connection.release();
            res.json({
                code:1,
                msg:"更新成功",
                result:v
            })
        })
    }

});

app.post("/delete-me",function (req,res){
    let openid = req.body.openid;
    pool.getConnection(function (error,connection){
        if(error) throw error;
        connection.query(sql.deleteFromFans,[openid],function (err,value){
            if(error) throw error;
            let msg = value;
            next(connection,msg)
        })
    })

    function next(connection,msg1){
        connection.query(sql.deleteFromPlayer,[openid],function (err,value){
            if(err) throw err;
            res.json({
                code:1,
                msg:"ok",
                result:[msg1,value]
            })
            connection.release();
        })
    }
})

// app.use(function (req,res){
//     res.status(404).send("Don't found your page");
// });


app.listen(PORT, function () {
    console.log(`your port is ${PORT}`);
});
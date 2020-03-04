const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const Ddos = require('ddos');
const nodemailer = require('nodemailer');//邮件发送
const smtpTransport = require('nodemailer-smtp-transport');//邮件
const schedule = require('node-schedule');//定时
 //邮件配置
const smtpTransports = nodemailer.createTransport(smtpTransport({
    service: 'QQ',
    auth: {
        user: '253237030@qq.com',
        pass: 'fujxflgsukcycbae'
    }
}));
const PORT = 4088;

let pool = mysql.createPool({
    connectionLimit : 500,
    host: "localhost",
    user: "root",
    password: "createUlifecity20181212",
    database: "uvcsi"
});


const sql = {
    //保存访问的用户
    addAccess:"update access_userInfo set number=number+1",
    queryFans:`select * from user_vote where openid=?`,
    addUser : "INSERT INTO `user_vote`(`user_name`, `phone`, `soleId`, `openid`, `dataTime`) VALUES (?,?,?,?,?)",
    querylogVote:"SELECT * FROM `log_vote` WHERE 1 AND openid=?",
    updateCityVote:"UPDATE city_vote SET poll=poll+1 WHERE 1=1 AND orderId=?",
    addVoteLog : "INSERT INTO log_vote(`user_name`, `soleId`, `data_time`,`openid`,`city_id`) VALUES (?,?,?,?,?)",
    queryCity : "SELECT * FROM city_vote",
    queryWin:"SELECT * FROM win_vote",


    queryOrder: `SELECT * FROM make_appointment WHERE 1=1 and phone =?`,
    increaseOrder: `INSERT INTO make_appointment(user_name, phone, order_time,company) VALUES (?,?,?,?)`,
    increaseLoveInfo:`INSERT INTO love_info(name, phone, createTime,identity,applyName, applyNumber) VALUES (?,?,?,?,?,?)`,
    queryLoveInfo:'SELECT * FROM `love_info` WHERE 1=1 AND phone = ? and identity=? ',

    queryVoteUserInfo:'SELECT * FROM user_vote WHERE 1=1 and (soleId =? or phone=?)',
    addUserInfo : 'INSERT INTO user_vote(`user_name`, `phone`, `soleId`) VALUES (?,?,?)',

    
    

    getVoteLog : "SELECT * FROM log_vote WHERE 1=1 AND soleId=?",
    

    getCateInfo : "select * from invite where 1=1 and phone=?" ,
    addCateUser : "insert into invite(`user_name`,`phone`,`invite_time`) values(?,?,?)",

    getUserInfoSG : "select * from sougang_repechage where 1=1 and phone=?",
    addUserInfoSG : "INSERT INTO `sougang_repechage`(`name`, `phone`, `times`,`playerNum`) VALUES (?,?,?,?);",

    //查询报名人数
    getUserInfo:`SELECT * FROM userInfo WHERE 1=1 AND phone=?`,
    //查询总票数
    getTicket:`SELECT * FROM ticket WHERE 1=1`,
    //修改总票数
    updataTicket:`UPDATE ticket SET number=number-1 WHERE id=1`,
    //新增报名人信息
    addUserInfo:`INSERT INTO userInfo( user_name, phone, createTime, expirationTime, unnId) VALUES (?,?,?,?,?)`,
    //问卷调查
    addSurvey:"INSERT INTO survey(`gender`, `grade`, `school`, `alimony`,`cost`, `internet`, `after`, `relaxation`, `activity`, `isActivity`, `bourn`, "+
        "`factor`, `frequency`, `brand`, `goOut`, `way`, `bar`, `ctf`, `film`, `movie`, `hp`,`space`, `fortify`, `trench`, `attraction`, `stockpile`, `bookshop`, "+
        "`xyl`, `condition`, `clockIn`, `hobby`, `terrace`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    getSurvey:"SELECT count(1) as count FROM survey WHERE 1",
    getSurveyInfo:"SELECT `gender`, `grade`, `school`, `alimony`, `cost`, `internet`, `after`, `relaxation`, `activity`, `isActivity`, `bourn`, `factor`, `frequency`, `brand`, `goOut`, `way`, `bar`, `ctf`, `film`, `movie`, `hp`, `space`, `fortify`, `trench`, `attraction`, `stockpile`, `bookshop`, `xyl`, `condition`, `clockIn`, `hobby`, `terrace` FROM `survey` WHERE 1",
    //getSurveyInfo : "select gender from survey where 1",

    getUserInfoXPH:"SELECT user_name FROM `user_info` WHERE 1=1 and phone=?",
    addUserInfoXPH:"INSERT INTO `user_info`(`user_name`, `phone`, `data_time`) VALUES (?,?,?)",

    //碧桂园城市投票
    getBGYissue:"select * from BGY_questionnaire where 1=1",
    addBGYissue:"INSERT INTO `BGY_questionnaire`(issue_one`, `issue_two`, `issue_three`, `issue_four`, `issue_five`) VALUES (?,?,?,?,?)",

    //花溪26度
    getMsgUserAll:"SELECT * FROM `msgUser` WHERE 1=1 ",
    getMsgUser:"SELECT * FROM `msgUser` WHERE 1=1 AND openid=?",
    addMsgUser:"INSERT INTO `msgUser`(`name`, `phone`, `openid`, `message`, `msgTime`) VALUES (?,?,?,?,?)",
    updataMsgUser:"UPDATE `msgUser` SET `likes`=likes+1 WHERE 1=1 AND openid=?",
    getHXLike:"SELECT * FROM `likes` WHERE 1=1 AND bOpenid=?",
    updataHXLike:"UPDATE `likes` SET `likeTime`=? WHERE 1=1 and openid=?",
    addHXLike:"INSERT INTO `likes`(`bOpenid`, `openid`, `likeTime`) VALUES (?,?,?)",

    getBGYUserInfo:"select name from BGY_boshile_info where phone=?",
    addBGYUserInfo:"INSERT INTO BGY_boshile_info(`name`,`phone`,`times`) VALUES (?,?,?)",

    //首钢抽奖活动---查询用户数据表
    getAward:"select * from awardUserInfo where openId = ?",

    //首钢抽奖活动--增加用户数据信息
    addAward:"insert into awardUserInfo (`userImg`,`openId`,`timeData`) values (?,?,?)",

    //修改中奖用户信息
    updataIsAward:"update awardUserInfo set awardNum = awardNum+1, isAward= isAward+? where openId=?",
    
    //未中奖用户
    updataAward:"update awardUserInfo set awardNum = awardNum+1 where openId=?",

    //修改分享信息
    updataAwardStatus:"update awardUserInfo set awardStatus=awardStatus+1 where openId= ?",

    //查询奖品表
    getPrizeInfo:"select * from prizeInfo where 1=1 ",
    //修改奖品表对应数据
    updataPrize:"update prizeInfo set prizeNum = prizeNum-1 where id=?",
    //增加中奖记录
    insetToAward:"INSERT INTO `awards`(`openId`, `prizeNum`, `dateTime`,`prizeName`,`prizeInfo`) VALUES (?,?,?,?,?)",
    //增加中奖记录
    getMyAward:"select prizeNum, dateTime, prizeName, prizeInfo from awards where openId=?"

}

let app = express();
let ddos = new Ddos({burst:10, limit:25})

app.use(ddos.express);
app.use("/upload",express.static(path.join(__dirname,"upload")));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use("*",function (req,res,next){
    res.header("Access-Control-Allow-Origin", "http://wx.uvcsi.com");
    //res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'Jonny');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); 
    
});  //跨域

/**26度投票 */
app.post("/login",function (req,res){
    try{
        let openid = req.body.openid;
        pool.getConnection(function (error,connection){
            if(error){
                throw error;
            } else{
                connection.query(sql.addAccess, [], function(e, r){
                    if(e){
                        console.log(e);
                        throw e;
                    }else{
                        connection.query(sql.queryFans,[openid],function (err,v){
                            if(err){
                                console.log(err);
                                throw err;
                            } 
                            res.json({code:1,msg:"查询该用户信息成功",result:v})
                            connection.release();
                        })
                    }
                })
            }
    
        })
    }catch(e1){
        console.log(e1);
        throw e1;
    }
    
});

/**
 * 增加用户信息
 */
app.post("/addUser", function(req, res){
    try{
        let openid = req.body.openid;
        let value = [
            req.body.user_name,
            req.body.phone,
            req.body.soleId,
            req.body.openid,
            req.body.dataTime
        ]
        pool.getConnection(function(err,connection){
            if(err){
                console.log(err);
                throw err;
            }else{
                connection.query(sql.queryFans, openid, function(err2, data2){
                    if(err2){
                        console.log(err2);
                        throw err2;
                    }else{
                        if(data2.length > 0){
                            res.json({
                                code:1,
                                msg:"该用户已经报名",
                                result:data2
                            });
                            connection.release();
                        }else{
                            connection.query(sql.addUser, value, function(err1,data1){
                                if(err1){
                                    console.log(err1);
                                    throw err1;
                                }else{
                                    res.json({
                                        code:2,
                                        msg:"增加新用户成功!",
                                        result:data1
                                    });
                                    connection.release();
                                }
                            })
                        }
                    }
                })
                
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
});

/**
 * 增加投票数据=查询是否未已报名用户 && 是否已经点过赞
 */
app.post("/addVote", function(req, res){
    try{
        let openid = req.body.openid;
        let id = req.body.id;
        let city_id = req.body.id;
        let value = [
            req.body.user_name,
            req.body.soleId,
            req.body.data_time,
            req.body.openid,
            city_id,
        ]
        pool.getConnection(function(err, connection){
            if(err){
                console.log(err);
                throw err;
            }else{
                connection.query(sql.queryFans, openid, function(err1, data1){
                    if(err1){
                        console.log(err1);
                        throw err1;
                    }else{
                        if(data1.length > 0){
                            connection.query(sql.querylogVote, openid, function(err2, data2){
                                if(err2){
                                    console.log(err2);
                                    throw err2;
                                }else{
                                    if(data2.length <=0){
                                        connection.query(sql.updateCityVote, id, function(err3,data3){
                                            if(err3){
                                                console.log(err3);
                                                throw err3;
                                            }else{
                                                connection.query(sql.addVoteLog, value, function(err4, data4){
                                                    if(err4){
                                                        console.log(err4);
                                                        throw err4;
                                                    }else{
                                                        res.json({
                                                            code:3,
                                                            msg:"投票成功!",
                                                            result:data4,
                                                        });
                                                        connection.release();
                                                    }
                                                })
                                            }
                                        })
                                    }else{
                                        res.json({
                                            code:2,
                                            msg:"您已经投过票了",
                                            result:data2,
                                        });
                                        connection.release();
                                    }
                                }
                            })
                        }else{
                            res.json({
                                code:1,
                                msg:"您还未报名",
                                result:data1
                            });
                            connection.release();
                        }
                    }
                })
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
});

app.get("/getCity",function(req,res){
    console.log("进来咯");
    try{
        pool.getConnection(function(err, connection){
            if(err){
                console.log(err);
                throw e;
            }else{
                connection.query(sql.queryCity, [], function(error, data){
                    if(error){
                        console.log(error);
                        throw error;
                    }else{
                        res.json({
                            code:1,
                            msg:"查询城市票数成功",
                            result:data,
                        });
                        connection.release();
                    }
                })
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
});
/**
 * 查询中奖者名单
 */
app.get("/getVoteList", function(req, res){
    try{
        pool.getConnection(function(err, connection){
            if(err){
                console,log(err);
                throw err;
            }else{
                connection.query(sql.queryWin, [], function(err, data){
                    if(err){
                        console.log(err);
                        throw err;
                    }else{
                        res.json({
                            code:1,
                            msg:"查询中奖名单成功",
                            result:data
                        });
                        connection.release();
                    }
                })
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
})

/**
 * 增加预约人信息
 */
app.post("/insertUserInfo", function(req,res){
    
    try{
        let phones = req.body.phone;
        //获取前台传入数据
        let userValue = [
            req.body.user_name,
            req.body.phone,
            req.body.order_time,
            req.body.company
        ];
        pool.getConnection(function(err,connection){
            if(err){
                throw err;
            }else{
                connection.query(sql.queryOrder, phones, function(err2, data1){
                    if(err2){
                        throw err2;
                    }else{
                        if(data1.length >0){
                            res.json({
                                code:2,
                                msg:"您已经预约成功过了！",
                                result:{data1}
                            });
                            connection.release();
                        }else{
                            connection.query(sql.increaseOrder, userValue, function(error, value){
                                if(error){
                                    throw error;
                                }else{
                                    connection.query(sql.queryOrder, phones, function(err1, data){
                                        if(err1){
                                            throw err1;
                                        }else{
                                            res.json({
                                                code:1,
                                                msg:"增加预约数据成功！",
                                                result:{data}
                                            });
                                            connection.release();
                                        }
                                    })
                                }
                            });
                        }
                    }
                })  
            }
        })
    }catch(e){
        throw e;
    }
    
})
//融创七夕活动
//保存照片的路径

let imgInfo = function(req){
    try{
        
        let base64Data = req.body.headimg.replace(/^data:image\/jpeg;base64,/,"");
        let binaryData = Buffer.from(base64Data,"base64").toString("binary");
        let img = req.body.createTime;
        let imgPath = path.join(__dirname, `../front_end/upload/${img}`);
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
    }catch(e){
        console.log(e);
        throw e;
    }
}


//保存报名信息
app.post("/addUserInfo", function(req, res){
    try{
        let val = [
            req.body.phone,
            req.body.identity
        ]

        let value=[
           req.body.name,
           req.body.phone,
           req.body.createTime,
           req.body.identity,
           req.body.applyName,
           req.body.applyNumber,
        ]
        pool.getConnection(function(err, connection){
            if(err){
                console.log(err);
                throw err;
            }else{
                
                connection.query(sql.queryLoveInfo, val, function(error, data){
                    if(error){
                        console.log(error);
                        throw error;
                    }else{
                        if(data.length >0){
                            res.json({
                                code:0,
                                msg:"您已经报过名了",
                                result:data
                            })
                            connection.release();
                        }else{
                            
                            connection.query(sql.increaseLoveInfo, value, function(error1, data1){
                                if(error1){
                                    console.log(error1);
                                    throw error1;
                                }else{
                                    
                                    connection.query(sql.queryLoveInfo, val, function(er, data4){
                                        if(er){
                                            console.log(er);
                                            throw er;
                                        }else{
                                            res.json({
                                                code:1,
                                                msg:"增加新用户成功",
                                                result: data4
                                            });
                                            connection.release();
                                        }
                                    })
                                    
                                }
                            })
                        }
                    }
                })

            }
        })

    }catch(e){
        throw e;
    }
});


//26度
//查询根据用户唯一编号查询用户是否已经注册了
app.get("/getUserInfo", function(req, res){
    try{
        let soleId = req.query.sole;
        let phone = req.query.phone;
        let val = [
            soleId,
            phone
        ]
        
        pool.getConnection(function(err, connection){
            if(err){
                console.log(err);
                throw err;
            }else{
                connection.query(sql.queryVoteUserInfo, val, function(error, data){
                    if(error){
                        console.log(error);
                        throw error;
                    }else{
                        
                        res.json({
                            code:0,
                            msg:"查询用户信息成功!",
                            result : data
                        });
                        connection.release();
                    }
                })
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
    
})
//增加投票用户
app.post("/addVoteUserInfo", function(req, res){
    try{
        let val=[
            req.body.soleId,
            req.body.phone  
        ]
        let values =[
            req.body.user_name,
            req.body.phone,
            req.body.soleId
        ]
        pool.getConnection(function(err, connection){
            if(err){
                console.log(err);
                throw err;
            }else{
                
                connection.query(sql.queryVoteUserInfo, val, function(err3, data3){
                    if(err3){
                        console.log(err3);
                        throw err3;
                    }else{
                        if(data3.length > 0){
                            
                            res.json({
                                code:0,
                                msg:"用户已经报过名了",
                                result:data3
                            });
                            connection.release();
                        }else{
                            connection.query(sql.addUserInfo, values, function(error, data){
                                if(error){
                                    console.log(error);
                                    throw error;
                                }else{
                                    
                                    res.json({
                                        code:1,
                                        msg:"增加数据成功!",
                                        result:data
                                    });
                                    connection.release();
                                }
                            })
                        }
                    }
                });
                
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
});
//查询城市信息
app.get("/getCity",function(req, res){
    
    pool.getConnection(function(err, connection){
        if(err){
            console.log(err);
            throw err;
        }else{
            
            connection.query(sql.queryCity, function(error, data){
                if(error){
                    console.log(error);
                    throw error;
                }else{
                   
                    res.json({
                        code:1,
                        msg:"查询城市信息成功",
                        result : data
                    });
                    connection.release();
                }
            })
        }
    })
});

//增加城市投票事件
app.post("/addVote", function(req, res){
    try{
        let soleId = req.body.soleId;
        let phone = req.body.phone;
        let val=[
            soleId,
            phone
        ]
       
        let orderId = req.body.orderId;
        let value=[
            req.body.user_name,
            soleId,
            req.body.data_time
        ];
        pool.getConnection(function(err,connection){
            if(err){
                console.log(err);
                throw err;
            }else{
                connection.query(sql.queryVoteUserInfo, val, function(error, data){
                    if(error){
                        console.log(error);
                        throw error;
                    }else{
                        
                        if(data.length>0){
                            connection.query(sql.getVoteLog, soleId, function(err2, result1){
                                if(err2){
                                    console.log(err2);
                                    throw err2;
                                }else{
                                    if(result1.length<=0){
                                       
                                        connection.query(sql.updateCityVote, orderId, function(error1, data1){
                                            if(error1){
                                                console.log(error1);
                                                throw error1;
                                            }else{
                                               
                                                connection.query(sql.addVoteLog, value, function(error2, data2){
                                                    if(error2){
                                                        console.log(error2);
                                                        throw error2;
                                                    }else{
                                                       
                                                        res.json({
                                                            code:2,
                                                            msg:"投票成功",
                                                            result:data2
                                                        })
                                                        connection.release();
                                                    }
                                                })
                                            }
                                        })
                                    }else{
                                        res.json({
                                            code:1,
                                            msg:"您已经都票了",
                                            result:result1
                                        })
                                        connection.release();
                                    }
                                    
                                }
                            })
                            
                        }else{
                            res.json({
                                code:0,
                                msg:"您还没有注册",
                                result:data
                            });
                            connection.release();
                        }
                    }
                })
            }
        })
        }catch(e){
            console.log(e);
            throw e;
    }
    
})

//融创美食预约
app.post("/addCateInfo", function(req, res){
    try{
        let phone = req.body.phone;
        let values = [
            req.body.user_name,
            req.body.phone,
            req.body.invite_time
        ];
        pool.getConnection(function(err, connection){
            let phone = req.body.phone;
            if(err){
                console.log(err);
                throw err;
            }else{
                //查询是否已经报名了
                connection.query(sql.getCateInfo, phone, function(error, data){
                    if(error){
                        console.log(error);
                        throw error;
                    }else{
                        if(data.length >0){
                            res.json({
                                code:1,
                                msg: "您已经预约成功过了",
                                result:data,
                            })
                            connection.release();
                        }else{
                            connection.query(sql.addCateUser, values, function(error1, data1){
                                if(error1){
                                    console.log(error1);
                                    throw error1;
                                }else{
                                    connection.query(sql.getCateInfo, phone, function(err2,data2){
                                        if(err2){
                                            console.log(err2);
                                            throw err2;
                                        }else{
                                            res.json({
                                                code:2,
                                                msg:"增加用户成功",
                                                result:data2,
                                            })
                                            connection.release();
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
    
})

//首钢复活赛报名
app.post('/addUserInfoSG', function(req, res){
    try{
        let phone = req.body.phone;
        let val =[
            req.body.name,
            req.body.phone,
            req.body.times,
            req.body.playerNum
        ];
        pool.getConnection(function(err, connection){
            if(err){
                console.log(err);
            }else{
                connection.query(sql.getUserInfoSG, phone, function(err1, data1){
                    if(err1){
                        console.log(err1);
                        throw err1;
                    }else{
                        if(data1.length >0){
                            res.json({
                                code:2,
                                msg:"您已经报名",
                                result:data1
                            });
                            connection.release();
                        }else{
                            connection.query(sql.addUserInfoSG, val, function(err2, data2){
                                if(err2){
                                    console.log(err2);
                                    throw err2;
                                }else{
                                    res.json({
                                        code:1,
                                        msg:"增加报名人数成功",
                                        result:data2
                                    });
                                    connection.release();
                                }
                            })
                        }
                    }
                })
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
});


/**
 * 26度电影票
 */
app.post("/userInfo", function(req, res){
    try{
       
        let ticket =1;
        let value = [
            req.body.user_name,
            req.body.phone,
            req.body.createTime,
            req.body.expirationTime,
            req.body.unnId,
        ];
        pool.getConnection(function(err,connection){
            if(err){
                console.log(err);
                throw err;
            }else{
                //1.查询当前用户是否已经报过名
                connection.query(sql.getUserInfo,req.body.phone, function(error, data){
                    if(error){
                        console.log(error);
                        throw error;
                    }else{
                        if(data.length >0){
                            res.json({
                                code:1,
                                msg:"您已经报过名",
                                result:data,
                            });
                            connection.release();
                        }else{
                            //2.查询当前剩余票数
                            connection.query(sql.getTicket, [], function(error1,data1){
                                if(error1){
                                    console.log(error1);
                                    throw error1;
                                }else{
                                    if(data1[0].number<=0){
                                        res.json({
                                            code:2,
                                            msg:"当前票数已经抢完",
                                            result:data1
                                        });
                                        connection.release();
                                    }else{
                                        //总票数减一
                                        connection.query(sql.updataTicket,[],function(error2,data2){
                                            if(error2){
                                                console.log(error2);
                                                throw error2;
                                            }else{
                                                //增加报名领票人数
                                                value.push(ticket);
                                                connection.query(sql.addUserInfo, value, function(error3,data3){
                                                    if(error3){
                                                        console.log(error3);
                                                        throw error3;
                                                    }else{
                                                        res.json({
                                                            code:3,
                                                            msg:"新增领票人数成功",
                                                            result:data3
                                                        });
                                                        connection.release();
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    }
                })
            }
        })
        }catch(e){
        console.log(e);
        throw e;
        }

    //3.增加用户信息

});

/**
 * 增加问卷调查数据
 */
app.post("/addSurvey", function(req, res){
    try{
        let value = req.body;
        let arr =[
            gender=value.gender,
            grade =value.grade,
            school = value.school,
            alimony = value.alimony,
            cost = value.cost,
            internet = value.internet,
            after = value.after,
            relaxation = value.relaxation,
            activity = value.activity,
            isActivity = value.isActivity,
            bourn=value.bourn,
            factor =value.factor,
            frequency = value.frequency,
            brand = value.brand,
            goOut = value.goOut,
            way = value.way,
            bar = value.bar,
            ctf = value.ctf,
            film = value.film,
            movie = value.movie,
            hp=value.hp,
            space =value.space,
            fortify = value.fortify,
            trench = value.trench,
            attraction = value.attraction,
            stockpile = value.stockpile,
            bookshop = value.bookshop,
            xyl = value.xyl,
            condition = value.condition,
            clockIn = value.clockIn,
            hobby = value.hobby,
            terrace = value.terrace,
        ];
       
        pool.getConnection(function(err, connection){
            if(err){
                console.log(err);
                throw err;
            }else{
                connection.query(sql.addSurvey, arr, function(error, data){
                    if(error){
                        console.log(error);
                        throw error;
                    }else{
                        res.json({
                            code:1,
                            msg:"增加数据成功",
                            result:data
                        });
                        connection.release();
                    }
                })
            }
        })
    }catch(e){
        console.log(e);
        throw e;   
    }
});
/**
 * 查询问卷调查的百分比
 */
app.get("/getSurvey", function(req,res){
    
    pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            throw err;
        }else{
            connection.query(sql.getSurvey, [], function(err1,data1){
                if(err1){
                    console.log(err1);
                    throw err1;
                }else{
                   let sum = data1[0].count;
                   if(sum>0){
                    connection.query(sql.getSurveyInfo,[],function(err2, data2){
                        if(err2){
                            throw err2;
                        }else{
                            let gender = [];
                            let grade =[]
                            let school = [];
                             let alimony = [];
                             let cost = [];
                             let internet = [];
                             let after = [];
                             let relaxation = [];
                             let activity = [];
                             let isActivity = [];
                             let bourn = [];
                             let factor = [];
                             let frequency = [];
                             let brand = [];
                             let goOut = [];
                             let way = [];
                             let bar = [];
                             let ctf = [];
                             let film = [];
                             let movie = [];
                             let hp = [];
                             let space = [];
                             let fortify = [];
                             let attraction = [];
                             let trench = [];
                             let stockpile = [];
                             let bookshop = [];
                             let xyl = [];
                             let condition = [];
                             let clockIn = [];
                             let hobby = [];
                             let terrace = [];
                             
                            for(let i=0; i<data2.length; i++){
                                 gender.push(data2[i].gender);
                                 grade.push(data2[i].grade);
                                 school.push(data2[i].school);
                                 alimony.push(data2[i].alimony);
                                 cost.push(data2[i].cost);
                                 internet.push(data2[i].internet);
                                 after.push(data2[i].after);
                                 relaxation.push(data2[i].relaxation);
                                 activity.push(data2[i].activity);
                                 isActivity.push(data2[i].isActivity);
                                 bourn.push(data2[i].bourn);
                                 factor.push(data2[i].factor);
                                 frequency.push(data2[i].frequency);
                                 brand.push(data2[i].brand);
                                 goOut.push(data2[i].goOut);
                                 way.push(data2[i].way);
                                 bar.push(data2[i].bar);
                                 ctf.push(data2[i].ctf);
                                 film.push(data2[i].film);
                                 movie.push(data2[i].movie);
                                 hp.push(data2[i].hp);
                                 space.push(data2[i].space);
                                 fortify.push(data2[i].fortify);
                                 attraction.push(data2[i].attraction);
                                 trench.push(data2[i].trench);
                                 stockpile.push(data2[i].stockpile);
                                 bookshop.push(data2[i].bookshop);
                                 xyl.push(data2[i].xyl);
                                 condition.push(data2[i].condition);
                                 clockIn.push(data2[i].clockIn);
                                 hobby.push(data2[i].hobby);
                                 terrace.push(data2[i].terrace);
                            }
                            //计算性别的比率
                            let gender0 =0;
                            let gender1 =0;
                            for(let j=0; j<gender.length; j++){
                                if("0" == gender[j]){
                                   gender0++;
                                }
                                if("1" == gender[j]){
                                     gender1++;
                                 }
                            }
                            let g0 = ((gender0/sum)*100).toFixed(2);
                            let g1 = ((gender1/sum)*100).toFixed(2);
                            //年级
                            let grade0 =0;
                            let grade1 =0;
                            let grade2 =0;
                            for(let j=0; j<grade.length; j++){
                                if("0" == grade[j]){
                                    grade0++;
                                }
                                if("1" == grade[j]){
                                    grade1++;
                                }
                                if("2" == grade[j]){
                                    grade2++;
                                }
                            }
                            let gd0 = ((grade0/sum)*100).toFixed(2);
                            let gd1 = ((grade1/sum)*100).toFixed(2);
                            let gd2 = ((grade2/sum)*100).toFixed(2);
                            //学校
                            let school0 =0;
                            let school1 =0;
                            let school2 =0;
                            let school3 =0;
                            let school4 =0;
                            let school5 =0;
                            let school6 =0;
                            let school7 =0;
                            let school8 =0;
                            let school9 =0;
                            for(let j=0; j<school.length; j++){
                                if("0" == school[j]){
                                     school0++;
                                }
                                if("1" == school[j]){
                                     school1++;
                                }
                                if("2" == school[j]){
                                     school2++;
                                }
                                if("3" == school[j]){
                                     school3++;
                                }
                                if("4" == school[j]){
                                     school4++;
                                }
                                if("5" == school[j]){
                                     school5++;
                                }
                                if("6" == school[j]){
                                     school6++;
                                }
                                if("7" == school[j]){
                                     school7++;
                                }
                                if("8" == school[j]){
                                     school8++;
                                }
                                if("9" == school[j]){
                                     school9++;
                                 }
                            }
                            let sh0 = ((school0/sum)*100).toFixed(2);
                            let sh1 = ((school1/sum)*100).toFixed(2);
                            let sh2 = ((school2/sum)*100).toFixed(2);
                            let sh3 = ((school3/sum)*100).toFixed(2);
                            let sh4 = ((school4/sum)*100).toFixed(2);
                            let sh5 = ((school5/sum)*100).toFixed(2);
                            let sh6 = ((school6/sum)*100).toFixed(2);
                            let sh7 = ((school7/sum)*100).toFixed(2);
                            let sh8 = ((school8/sum)*100).toFixed(2);
                            let sh9 = ((school9/sum)*100).toFixed(2);
                            //4生活费
                            let alimony0 =0;
                            let alimony1 =0;
                            let alimony2 =0;
                            for(let j=0; j<alimony.length; j++){
                                 if("0" == alimony[j]){
                                     alimony0++;
                                 }
                                 if("1" == alimony[j]){
                                     alimony1++;
                                 }
                                 if("2" == alimony[j]){
                                     alimony2++;
                                 }
                             }
                            let am0 = ((alimony0/sum)*100).toFixed(2);
                            let am1 = ((alimony1/sum)*100).toFixed(2);
                            let am2 = ((alimony2/sum)*100).toFixed(2);
                             //5.每月校外花销比例
                            let cost0 =0;
                            let cost1 =0;
                            let cost2 =0;
                            let cost3 =0;
                            for(let j=0; j<cost.length; j++){
                                 if("0" == cost[j]){
                                     cost0++;
                                 }
                                 if("1" == cost[j]){
                                     cost1++;
                                 }
                                 if("2" == cost[j]){
                                     cost2++;
                                 }
                                 if("3" == cost[j]){
                                     cost3++;
                                 }
                             }
                            let ct0 = ((cost0/sum)*100).toFixed(2);
                            let ct1 = ((cost1/sum)*100).toFixed(2);
                            let ct2 = ((cost2/sum)*100).toFixed(2);
                            let ct3 = ((cost3/sum)*100).toFixed(2);
                             //6.在网上的花销比例
                            let internet0 =0;
                            let internet1 =0;
                            let internet2 =0;
                            let internet3 =0;
                            for(let j=0; j<internet.length; j++){
                                 if("0" == internet[j]){
                                     internet0++;
                                 }
                                 if("1" == internet[j]){
                                     internet1++;
                                 }
                                 if("2" == internet[j]){
                                     internet2++;
                                 }
                                 if("3" == internet[j]){
                                     internet3++;
                                 }
                             }
                            let it0 = ((internet0/sum)*100).toFixed(2);
                            let it1 = ((internet1/sum)*100).toFixed(2);
                            let it2 = ((internet2/sum)*100).toFixed(2);
                            let it3 = ((internet3/sum)*100).toFixed(2);
                            //7课余时间主要消费场所
                            let after0 =0;
                            let after1 =0;
                            let after2 =0;
                            let after3 =0;
                            for(let j=0; j<after.length; j++){
                                 if("0" == after[j]){
                                     after0++;
                                 }
                                 if("1" == after[j]){
                                     after1++;
                                 }
                                 if("2" == after[j]){
                                     after2++;
                                 }
                                 if("3" == after[j]){
                                     after3++;
                                 }
                             }
                            let af0 = ((after0/sum)*100).toFixed(2);
                            let af1 = ((after1/sum)*100).toFixed(2);
                            let af2 = ((after2/sum)*100).toFixed(2);
                            let af3 = ((after3/sum)*100).toFixed(2);
                            //8.休闲娱乐时会考虑的因素
                            let relaxation0 =0;
                            let relaxation1 =0;
                            let relaxation2 =0;
                            let relaxation3 =0;
                            let relaxation4 =0;
                            let r = arrSplit(relaxation);
                            for(let j=0; j<r.length; j++){
                                 if("0" == r[j]){
                                     relaxation0++;
                                 }
                                 if("1" == r[j]){
                                     relaxation1++;
                                 }
                                 if("2" == r[j]){
                                     relaxation2++;
                                 }
                                 if("3" == r[j]){
                                     relaxation3++;
                                 }
                                 if("4" == r[j]){
                                     relaxation4++;
                                 }
                             }
                            let rt0 = ((relaxation0/r.length)*100).toFixed(2);
                            let rt1 = ((relaxation1/r.length)*100).toFixed(2);
                            let rt2 = ((relaxation2/r.length)*100).toFixed(2);
                            let rt3 = ((relaxation3/r.length)*100).toFixed(2);
                            let rt4 = ((relaxation4/r.length)*100).toFixed(2);
                            //9.课余时间经常参加的休闲活动
                            let activity0 =0;
                            let activity1 =0;
                            let activity2 =0;
                            let activity3 =0;
                            let activity4 =0;
                            let activity5 =0;
                            let activity6 =0;
                            let activity7 =0;
                            let activity8 =0;
                            let activity9 =0;
                            let actyArr = arrSplit(activity);
                            for(let j=0; j<actyArr.length; j++){
                                 if("0" == actyArr[j]){
                                     activity0++;
                                 }
                                 if("1" == actyArr[j]){
                                     activity1++;
                                 }
                                 if("2" == actyArr[j]){
                                     activity2++;
                                 }
                                 if("3" == actyArr[j]){
                                     activity3++;
                                 }
                                 if("4" == actyArr[j]){
                                     activity4++;
                                 }
                                 if("5" == actyArr[j]){
                                     activity5++;
                                 }
                                 if("6" == actyArr[j]){
                                     activity6++;
                                 }
                                 if("7" == actyArr[j]){
                                     activity7++;
                                 }
                                 if("8" == actyArr[j]){
                                     activity8++;
                                 }
                                 if("9" == actyArr[j]){
                                     activity9++;
                                 }
                             }
                            let avt0 = ((activity0/actyArr.length)*100).toFixed(2);
                            let avt1 = ((activity1/actyArr.length)*100).toFixed(2);
                            let avt2 = ((activity2/actyArr.length)*100).toFixed(2);
                            let avt3 = ((activity3/actyArr.length)*100).toFixed(2);
                            let avt4 = ((activity4/actyArr.length)*100).toFixed(2);
                            let avt5 = ((activity5/actyArr.length)*100).toFixed(2);
                            let avt6 = ((activity6/actyArr.length)*100).toFixed(2);
                            let avt7 = ((activity7/actyArr.length)*100).toFixed(2);
                            let avt8 = ((activity8/actyArr.length)*100).toFixed(2);
                            let avt9 = ((activity9/actyArr.length)*100).toFixed(2);
                            //10
                            let isActivity0 =0;
                            let isActivity1 =0;
                            let isActivity2 =0;
                            for(let j=0; j<isActivity.length; j++){
                                 if("0" == isActivity[j]){
                                     isActivity0++;
                                 }
                                 if("1" == isActivity[j]){
                                     isActivity1++;
                                 }
                                 if("2" == isActivity[j]){
                                     isActivity2++;
                                 }
                                
                             }
                            let iavt0 = ((isActivity0/sum)*100).toFixed(2);
                            let iavt1 = ((isActivity1/sum)*100).toFixed(2);
                            let iavt2 = ((isActivity2/sum)*100).toFixed(2);
                            //11
                            let bourn0 =0;
                            let bourn1 =0;
                            let bourn2 =0;
                            let bourn3 =0;
                            let bourn4 =0;
                            let bourn5 =0;
                            let bourn6 =0;
                            let bourn7 =0;
                            let bournArr = arrSplit(bourn);
                            for(let j=0; j<bournArr.length; j++){
                                 if("0" == bournArr[j]){
                                     bourn0++;
                                 }
                                 if("1" == bournArr[j]){
                                     bourn1++;
                                 }
                                 if("2" == bournArr[j]){
                                     bourn2++;
                                 }
                                 if("3" == bournArr[j]){
                                     bourn3++;
                                 }
                                 if("4" == bournArr[j]){
                                     bourn4++;
                                 }
                                 if("5" == bournArr[j]){
                                     bourn5++;
                                 }
                                 if("6" == bournArr[j]){
                                     bourn6++;
                                 }
                                 if("7" == bournArr[j]){
                                     bourn7++;
                                 }
                                 
                             }
                            let bn0 = ((bourn0/bournArr.length)*100).toFixed(2);
                            let bn1 = ((bourn1/bournArr.length)*100).toFixed(2);
                            let bn2 = ((bourn2/bournArr.length)*100).toFixed(2);
                            let bn3 = ((bourn3/bournArr.length)*100).toFixed(2);
                            let bn4 = ((bourn4/bournArr.length)*100).toFixed(2);
                            let bn5 = ((bourn5/bournArr.length)*100).toFixed(2);
                            let bn6 = ((bourn6/bournArr.length)*100).toFixed(2);
                            let bn7 = ((bourn7/bournArr.length)*100).toFixed(2);
                             //12.
                             let factor0 =0;
                             let factor1 =0;
                             let factor2 =0;
                             let factor3 =0;
                             let factor4 =0;
                             let factor5 =0;
                             let factor6 =0;
                             let factor7 =0;
                             let factorArr = arrSplit(factor);
                             for(let j=0; j<factorArr.length; j++){
                                  if("0" == factorArr[j]){
                                     factor0++;
                                  }
                                  if("1" == factorArr[j]){
                                     factor1++;
                                  }
                                  if("2" == factorArr[j]){
                                     factor2++;
                                  }
                                  if("3" == factorArr[j]){
                                     factor3++;
                                  }
                                  if("4" == factorArr[j]){
                                     factor4++;
                                  }
                                  if("5" == factorArr[j]){
                                     factor5++;
                                  }
                                  if("6" == factorArr[j]){
                                     factor6++;
                                  }
                                  if("7" == factorArr[j]){
                                     factor7++;
                                  }
                                  
                              }
                             let ft0 = ((factor0/factorArr.length)*100).toFixed(2);
                             let ft1 = ((factor1/factorArr.length)*100).toFixed(2);
                             let ft2 = ((factor2/factorArr.length)*100).toFixed(2);
                             let ft3 = ((factor3/factorArr.length)*100).toFixed(2);
                             let ft4 = ((factor4/factorArr.length)*100).toFixed(2);
                             let ft5 = ((factor5/factorArr.length)*100).toFixed(2);
                             let ft6 = ((factor6/factorArr.length)*100).toFixed(2);
                             let ft7 = ((factor7/factorArr.length)*100).toFixed(2);
                             //13
                            let frequency0 =0;
                            let frequency1 =0;
                            let frequency2 =0;
                            let frequency3 =0;
                            for(let j=0; j<frequency.length; j++){
                                 if("0" == frequency[j]){
                                     frequency0++;
                                 }
                                 if("1" == frequency[j]){
                                     frequency1++;
                                 }
                                 if("2" == frequency[j]){
                                     frequency2++;
                                 }
                                 if("3" == frequency[j]){
                                     frequency3++;
                                 }
                                 
                             }
                            let fq0 = ((frequency0/sum)*100).toFixed(2);
                            let fq1 = ((frequency1/sum)*100).toFixed(2);
                            let fq2 = ((frequency2/sum)*100).toFixed(2);
                            let fq3 = ((frequency3/sum)*100).toFixed(2);
                             //14
                            let brand0 =0;
                            let brand1 =0;
                            let brand2 =0;
                            for(let j=0; j<brand.length; j++){
                                 if("0" == brand[j]){
                                     brand0++;
                                 }
                                 if("1" == brand[j]){
                                     brand1++;
                                 }
                                 if("2" == brand[j]){
                                     brand2++;
                                 }
                                 
                             }
                            let br0 = ((brand0/sum)*100).toFixed(2);
                            let br1 = ((brand1/sum)*100).toFixed(2);
                            let br2 = ((brand2/sum)*100).toFixed(2);
                            //15
                            let goOut0 =0;
                            let goOut1 =0;
                            let goOut2 =0;
                            for(let j=0; j<goOut.length; j++){
                                 if("0" == goOut[j]){
                                     goOut0++;
                                 }
                                 if("1" == goOut[j]){
                                     goOut1++;
                                 }
                                 if("2" == goOut[j]){
                                     goOut2++;
                                 }
                             }
                            let got0 = ((goOut0/sum)*100).toFixed(2);
                            let got1 = ((goOut1/sum)*100).toFixed(2);
                            let got2 = ((goOut2/sum)*100).toFixed(2);
                            //16
                            let way0 =0;
                            let way1 =0;
                            let way2 =0;
                            let way3 =0;
                            for(let j=0; j<way.length; j++){
                                 if("0" == way[j]){
                                     way0++;
                                 }
                                 if("1" == way[j]){
                                     way1++;
                                 }
                                 if("2" == way[j]){
                                     way2++;
                                 }
                                 if("3" == way[j]){
                                     way3++;
                                 }
                                 
                             }
                            let wy0 = ((way0/sum)*100).toFixed(2);
                            let wy1 = ((way1/sum)*100).toFixed(2);
                            let wy2 = ((way2/sum)*100).toFixed(2);
                            let wy3 = ((way3/sum)*100).toFixed(2);
                            //17
                            let bar0 =0;
                            let bar1 =0;
                            let bar2 =0;
                            let bar3 =0;
                            for(let j=0; j<bar.length; j++){
                                 if("0" == bar[j]){
                                     bar0++;
                                 }
                                 if("1" == bar[j]){
                                     bar1++;
                                 }
                                 if("2" == bar[j]){
                                     bar2++;
                                 }
                                 if("3" == bar[j]){
                                     bar3++;
                                 }
                                 
                             }
                            let bars0 = ((bar0/sum)*100).toFixed(2);
                            let bars1 = ((bar1/sum)*100).toFixed(2);
                            let bars2 = ((bar2/sum)*100).toFixed(2);
                            let bars3 = ((bar3/sum)*100).toFixed(2);
                            //18
                            let ctf0 =0;
                            let ctf1 =0;
                            let ctf2 =0;
                            let ctf3 =0;
                            let ctf4 =0;
                            let ctf5 =0;
                            let ctfArr = arrSplit(ctf);
                            for(let j=0; j<ctfArr.length; j++){
                                 if("0" == ctfArr[j]){
                                     ctf0++;
                                 }
                                 if("1" == ctfArr[j]){
                                     ctf1++;
                                 }
                                 if("2" == ctfArr[j]){
                                     ctf2++;
                                 }
                                 if("3" == ctfArr[j]){
                                     ctf3++;
                                 }
                                 if("4" == ctfArr[j]){
                                     ctf4++;
                                 }
                                 if("5" == ctfArr[j]){
                                     ctf5++;
                                 }
                                 
                             }
                            let ctfs0 = ((ctf0/ctfArr.length)*100).toFixed(2);
                            let ctfs1 = ((ctf1/ctfArr.length)*100).toFixed(2);
                            let ctfs2 = ((ctf2/ctfArr.length)*100).toFixed(2);
                            let ctfs3 = ((ctf3/ctfArr.length)*100).toFixed(2);
                            let ctfs4 = ((ctf4/ctfArr.length)*100).toFixed(2);
                            let ctfs5 = ((ctf5/ctfArr.length)*100).toFixed(2);
                            //19
                            let film0 =0;
                            let film1 =0;
                            let film2 =0;
                            let film3 =0;
                            let film4 =0;
                            let film5 =0;
                            let film6 =0;
                            for(let j=0; j<film.length; j++){
                                 if("0" == film[j]){
                                     film0++;
                                 }
                                 if("1" == film[j]){
                                     film1++;
                                 }
                                 if("2" == film[j]){
                                     film2++;
                                 }
                                 if("3" == film[j]){
                                     film3++;
                                 }
                                 if("4" == film[j]){
                                     film4++;
                                 }
                                 if("5" == film[j]){
                                     film5++;
                                 }
                                 if("6" == film[j]){
                                     film6++;
                                 }
                             }
                            let films0 = ((film0/sum)*100).toFixed(2);
                            let films1 = ((film1/sum)*100).toFixed(2);
                            let films2 = ((film2/sum)*100).toFixed(2);
                            let films3 = ((film3/sum)*100).toFixed(2);
                            let films4 = ((film4/sum)*100).toFixed(2);
                            let films5 = ((film5/sum)*100).toFixed(2);
                            let films6 = ((film6/sum)*100).toFixed(2);
                             //20
                            let movie0 =0;
                            let movie1 =0;
                            let movie2 =0;
                            let movie3 =0;
                            for(let j=0; j<movie.length; j++){
                                 if("0" == movie[j]){
                                     movie0++;
                                 }
                                 if("1" == movie[j]){
                                     movie1++;
                                 }
                                 if("2" == movie[j]){
                                     movie2++;
                                 }
                                 if("3" == movie[j]){
                                     movie3++;
                                 }
                                 
                             }
                            let mv0 = ((movie0/sum)*100).toFixed(2);
                            let mv1 = ((movie1/sum)*100).toFixed(2);
                            let mv2 = ((movie2/sum)*100).toFixed(2);
                            let mv3 = ((movie3/sum)*100).toFixed(2);
                            //21
                            let hp0 =0;
                            let hp1 =0;
                            let hp2 =0;
                            let hp3 =0;
                            let hp4 =0;
                            let hp5 =0;
                            let hp6 =0;
                            let hp7 =0;
                            let hpArr = arrSplit(hp);
                            for(let j=0; j<hpArr.length; j++){
                                 if("0" == hpArr[j]){
                                     hp0++;
                                 }
                                 if("1" == hpArr[j]){
                                     hp1++;
                                 }
                                 if("2" == hpArr[j]){
                                     film2++;
                                 }
                                 if("3" == hpArr[j]){
                                     hp3++;
                                 }
                                 if("4" == hpArr[j]){
                                     hp4++;
                                 }
                                 if("5" == hpArr[j]){
                                     hp5++;
                                 }
                                 if("6" == hpArr[j]){
                                     hp6++;
                                 }
                                 if("7" == hpArr[j]){
                                     hp7++;
                                 }
                             }
                            let hps0 = ((hp0/hpArr.length)*100).toFixed(2);
                            let hps1 = ((hp1/hpArr.length)*100).toFixed(2);
                            let hps2 = ((hp2/hpArr.length)*100).toFixed(2);
                            let hps3 = ((hp3/hpArr.length)*100).toFixed(2);
                            let hps4 = ((hp4/hpArr.length)*100).toFixed(2);
                            let hps5 = ((hp5/hpArr.length)*100).toFixed(2);
                            let hps6 = ((hp6/hpArr.length)*100).toFixed(2);
                            let hps7 = ((hp7/hpArr.length)*100).toFixed(2);
                            //22
                            let space0 =0;
                            let space1 =0;
                            for(let j=0; j<space.length; j++){
                                if("0" == space[j]){
                                     space0++;
                                }
                                if("1" == space[j]){
                                     space1++;
                                }
                            }
                            let sp0 = ((space0/sum)*100).toFixed(2);
                            let sp1 = ((space1/sum)*100).toFixed(2);
                            //21
                            let fortify0 =0;
                            let fortify1 =0;
                            let fortify2 =0;
                            let fortify3 =0;
                            let fortify4 =0;
                            let fortify5 =0;
                            let fortify6 =0;
                            let fortify7 =0;
                            let forArr = arrSplit(fortify);
                            for(let j=0; j<forArr.length; j++){
                                 if("0" == forArr[j]){
                                     fortify0++;
                                 }
                                 if("1" == forArr[j]){
                                     fortify1++;
                                 }
                                 if("2" == forArr[j]){
                                     fortify2++;
                                 }
                                 if("3" == forArr[j]){
                                     fortify3++;
                                 }
                                 if("4" == forArr[j]){
                                     fortify4++;
                                 }
                                 if("5" == forArr[j]){
                                     fortify5++;
                                 }
                                 if("6" == forArr[j]){
                                     fortify6++;
                                 }
                                 if("7" == forArr[j]){
                                     fortify7++;
                                 }
                             }
                            let fof0 = ((fortify0/forArr.length)*100).toFixed(2);
                            let fof1 = ((fortify1/forArr.length)*100).toFixed(2);
                            let fof2 = ((fortify2/forArr.length)*100).toFixed(2);
                            let fof3 = ((fortify3/forArr.length)*100).toFixed(2);
                            let fof4 = ((fortify4/forArr.length)*100).toFixed(2);
                            let fof5 = ((fortify5/forArr.length)*100).toFixed(2);
                            let fof6 = ((fortify6/forArr.length)*100).toFixed(2);
                            let fof7 = ((fortify7/forArr.length)*100).toFixed(2);
                             //24
                            let attraction0 =0;
                            let attraction1 =0;
                            let attraction2 =0;
                            let attraction3 =0;
                            let attraction4 =0;
                            let attraction5 =0;
                            let attArr = arrSplit(attraction);
                            for(let j=0; j<attArr.length; j++){
                                 if("0" == attArr[j]){
                                     attraction0++;
                                 }
                                 if("1" == attArr[j]){
                                     attraction1++;
                                 }
                                 if("2" == attArr[j]){
                                     attraction2++;
                                 }
                                 if("3" == attArr[j]){
                                     attraction3++;
                                 }
                                 if("4" == attArr[j]){
                                     attraction4++;
                                 }
                                 if("5" == attArr[j]){
                                     attraction5++;
                                 }
                             }
                            let aat0 = ((attraction0/attArr.length)*100).toFixed(2);
                            let aat1 = ((attraction1/attArr.length)*100).toFixed(2);
                            let aat2 = ((attraction2/attArr.length)*100).toFixed(2);
                            let aat3 = ((attraction3/attArr.length)*100).toFixed(2);
                            let aat4 = ((attraction4/attArr.length)*100).toFixed(2);
                            let aat5 = ((attraction5/attArr.length)*100).toFixed(2);
                            //25
                            let trench0 =0;
                            let trench1 =0;
                            for(let j=0; j<trench.length; j++){
                                if("0" == trench[j]){
                                     trench0++;
                                }
                                if("1" == trench[j]){
                                     trench1++;
                                }
                            }
                            let tch0 = ((trench0/sum)*100).toFixed(2);
                            let tch1 = ((trench1/sum)*100).toFixed(2);
                            //26
                            let stockpile0 =0;
                            let stockpile1 =0;
                            for(let j=0; j<stockpile.length; j++){
                                if("0" == stockpile[j]){
                                     stockpile0++;
                                }
                                if("1" == stockpile[j]){
                                     stockpile1++;
                                }
                            }
                            let stk0 = ((stockpile0/sum)*100).toFixed(2);
                            let stk1 = ((stockpile1/sum)*100).toFixed(2);
                            //27
                            let bookshop0 =0;
                            let bookshop1 =0;
                            for(let j=0; j<bookshop.length; j++){
                                if("0" == bookshop[j]){
                                     bookshop0++;
                                }
                                if("1" == bookshop[j]){
                                     bookshop1++;
                                }
                            }
                            let bkp0 = ((bookshop0/sum)*100).toFixed(2);
                            let bkp1 = ((bookshop1/sum)*100).toFixed(2);
                             //28
                             let xyl0 =0;
                             let xyl1 =0;
                             let xyl2 =0;
                             let xyl3 =0;
                             let xyl4 =0;
                             let xyl5 =0;
                             let xyl6 =0;
                             let xyl7 =0;
                             let xyl8 =0;
                             let xyl9 =0;
                             let xyl10 =0;
                             let xyl11=0;
                             for(let j=0; j<xyl.length; j++){
                                  if("0" == xyl[j]){
                                     xyl0++;
                                  }
                                  if("1" == xyl[j]){
                                     xyl1++;
                                  }
                                  if("2" == xyl[j]){
                                     xyl2++;
                                  }
                                  if("3" == xyl[j]){
                                     xyl3++;
                                  }
                                  if("4" == xyl[j]){
                                     xyl4++;
                                  }
                                  if("5" == xyl[j]){
                                     xyl5++;
                                  }
                                  if("6" == xyl[j]){
                                     xyl6++;
                                  }
                                  if("7" == xyl[j]){
                                     xyl7++;
                                  }
                                  if("8" == xyl[j]){
                                     xyl8++;
                                  }
                                  if("9" == xyl[j]){
                                     xyl9++;
                                  }
                                  if("10" == xyl[j]){
                                     xyl10++;
                                  }
                                  if("11" == xyl[j]){
                                     xyl11++;
                                  }
                                  
                              }
                             let xyls0 = ((xyl0/sum)*100).toFixed(2);
                             let xyls1 = ((xyl1/sum)*100).toFixed(2);
                             let xyls2 = ((xyl2/sum)*100).toFixed(2);
                             let xyls3 = ((xyl3/sum)*100).toFixed(2);
                             let xyls4 = ((xyl4/sum)*100).toFixed(2);
                             let xyls5 = ((xyl5/sum)*100).toFixed(2);
                             let xyls6 = ((xyl6/sum)*100).toFixed(2);
                             let xyls7 = ((xyl7/sum)*100).toFixed(2);
                             let xyls8 = ((xyl8/sum)*100).toFixed(2);
                             let xyls9 = ((xyl9/sum)*100).toFixed(2);
                             let xyls10 = ((xyl10/sum)*100).toFixed(2);
                             let xyls11= ((xyl11/sum)*100).toFixed(2);
                             
                             //29
                            let condition0 =0;
                            let condition1 =0;
                            let condition2 =0;
                            let condition3 =0;
                            let condition4 =0;
                            let condition5 =0;
                            let conArr = arrSplit(condition);
                           
                            for(let j=0; j<conArr.length; j++){
                                 if("0" == conArr[j]){
                                     condition0++;
                                 }
                                 if("1" == conArr[j]){
                                    condition1++;
                                 }
                                 if("2" == conArr[j]){
                                     condition2++;
                                 }
                                 if("3" == conArr[j]){
                                     condition3++;
                                 }
                                 if("4" == conArr[j]){
                                     condition4++;
                                 }
                                 if("5" == conArr[j]){
                                     condition5++;
                                 }
                             }
                            let cd0 = ((condition0/conArr.length)*100).toFixed(2);
                            let cd1 = ((condition1/conArr.length)*100).toFixed(2);
                            let cd2 = ((condition2/conArr.length)*100).toFixed(2);
                            let cd3 = ((condition3/conArr.length)*100).toFixed(2);
                            let cd4 = ((condition4/conArr.length)*100).toFixed(2);
                            let cd5 = ((condition5/conArr.length)*100).toFixed(2);
                             //30
                            let clockIn0 =0;
                            let clockIn1 =0;
                            for(let j=0; j<clockIn.length; j++){
                                if("0" == clockIn[j]){
                                     clockIn0++;
                                }
                                if("1" == clockIn[j]){
                                     clockIn1++;
                                }
                            }
                            let clk0 = ((clockIn0/sum)*100).toFixed(2);
                            let clk1 = ((clockIn1/sum)*100).toFixed(2);
                            //31
                            let hobby0 =0;
                            let hobby1 =0;
                            let hobby2 =0;
                            for(let j=0; j<hobby.length; j++){
                                if("0" == hobby[j]){
                                     hobby0++;
                                }
                                if("1" == hobby[j]){
                                     hobby1++;
                                }
                                if("2" == hobby[j]){
                                     hobby2++;
                             }
                            }
                            let hb0 = ((hobby0/sum)*100).toFixed(2);
                            let hb1 = ((hobby1/sum)*100).toFixed(2);
                            let hb2 = ((hobby2/sum)*100).toFixed(2);
                            //32
                            let terrace0 =0;
                            let terrace1 =0;
                            for(let j=0; j<terrace.length; j++){
                                if("0" == terrace[j]){
                                     terrace0++;
                                }
                                if("1" == terrace[j]){
                                     terrace1++;
                                }
                            }
                            let trc0 = ((terrace0/sum)*100).toFixed(2);
                            let trc1 = ((terrace1/sum)*100).toFixed(2);
                         
                            let jsong ={
                                 sum:sum,
                                 g0:g0,
                                 g1:g1,
                                 gd0:gd0,
                                 gd1:gd1,
                                 gd2:gd2,
                                 sh0:sh0,
                                 sh1:sh1,
                                 sh2:sh2,
                                 sh3:sh3,
                                 sh4:sh4,
                                 sh5:sh5,
                                 sh6:sh6,
                                 sh7:sh7,
                                 sh8:sh8,
                                 sh9:sh9,
                                 am0:am0,
                                 am1:am1,
                                 am2:am2,
                                 ct0:ct0,
                                 ct1:ct1,
                                 ct2:ct2,
                                 ct3:ct3,
                                 it0:it0,
                                 it1:it1,
                                 it2:it2,
                                 it3:it3,
                                 af0:af0,
                                 af1:af1,
                                 af2:af2,
                                 af3:af3,
                                 rt0:rt0,
                                 rt1:rt1,
                                 rt2:rt2,
                                 rt3:rt3,
                                 rt4:rt4,
                                 avt0:avt0,
                                 avt1:avt1,
                                 avt2:avt2,
                                 avt3:avt3,
                                 avt4:avt4,
                                 avt5:avt5,
                                 avt6:avt6,
                                 avt7:avt7,
                                 avt8:avt8,
                                 avt9:avt9,
                                 iavt0:iavt0,
                                 iavt1:iavt1,
                                 iavt2:iavt2,
                                 bn0:bn0,
                                 bn1:bn1,
                                 bn2:bn2,
                                 bn3:bn3,
                                 bn4:bn4,
                                 bn5:bn5,
                                 bn6:bn6,
                                 bn7:bn7,
                                 ft0:ft0,
                                 ft1:ft1,
                                 ft2:ft2,
                                 ft3:ft3,
                                 ft4:ft4,
                                 ft5:ft5,
                                 ft6:ft6,
                                 ft7:ft7,
                                 fq0:fq0,
                                 fq1:fq1,
                                 fq2:fq2,
                                 fq3:fq3,
                                 br0:br0,
                                 br1:br1,
                                 got0:got0,
                                 got1:got1,
                                 got2:got2,
                                 wy0:wy0,
                                 wy1:wy1,
                                 wy2:wy2,
                                 wy3:wy3,
                                 bars0:bars0,
                                 bars1:bars1,
                                 bars2:bars2,
                                 bars3:bars3,
                                 ctfs0:ctfs0,
                                 ctfs1:ctfs1,
                                 ctfs2:ctfs2,
                                 ctfs3:ctfs3,
                                 ctfs4:ctfs4,
                                 ctfs5:ctfs5,
                                 films0:films0,
                                 films1:films1,
                                 films2:films2,
                                 films3:films3,
                                 films4:films4,
                                 films5:films5,
                                 films6:films6,
                                 mv0:mv0,
                                 mv1:mv1,
                                 mv2:mv2,
                                 mv3:mv3,
                                 hps0:hps0,
                                 hps1:hps1,
                                 hps2:hps2,
                                 hps3:hps3,
                                 hps4:hps4,
                                 hps5:hps5,
                                 hps6:hps6,
                                 hps7:hps7,
                                 sp0:sp0,
                                 sp1:sp1,
                                 fof0:fof0,
                                 fof1:fof1,
                                 fof2:fof2,
                                 fof3:fof3,
                                 fof4:fof4,
                                 fof5:fof5,
                                 fof6:fof6,
                                 fof7:fof7,
                                 aat0:aat0,
                                 aat1:aat1,
                                 aat2:aat2,
                                 aat3:aat3,
                                 aat4:aat4,
                                 aat5:aat5,
                                 tch0:tch0,
                                 tch1:tch1,
                                 stk0:stk0,
                                 stk1:stk1,
                                 bkp0:bkp0,
                                 bkp1:bkp1,
                                 xyls0 :xyls0,
                                 xyls1 :xyls1,
                                 xyls2 :xyls2,
                                 xyls3 :xyls3,
                                 xyls4 :xyls4,
                                 xyls5 :xyls5,
                                 xyls6 :xyls6,
                                 xyls7 :xyls7,
                                 xyls8 :xyls8,
                                 xyls9 :xyls9,
                                 xyls10:xyls10,
                                 xyls11:xyls11,
                                 cd0:cd0,
                                 cd1:cd1,
                                 cd2:cd2,
                                 cd3:cd3,
                                 cd4:cd4,
                                 cd5:cd5,
                                 clk0:clk0,
                                 clk1:clk1,
                                 hb0:hb0,
                                 hb1:hb1,
                                 hb2:hb2,
                                 trc0:trc0,
                                 trc1:trc1
                            }
                            let gSum = [];
                            
                            gSum.push(jsong);
                            res.json({
                                 code:1,
                                 msg:"等待",
                                 result:gSum,
                             })
                         connection.release();
                        }
                    })
                   }else{
                     res.json({
                         code:2,
                         msg:"还没有数据",
                         result:data1
                     })
                     connection.release();
                   } 
                }
            })
        }
    }) 
})
/**
 * 
 * @param {数组转化} arr 
 */
function arrSplit(arr){
    let str = arr.join(',');
    let arrays = str.split(',');
    return arrays;
}

app.post("/addXPHUserInfo", function(req, res){
    
    try{
        let val = [
            req.body.user_name,
            req.body.phone,
            req.body.data_time,
        ]
        pool.getConnection(function(err, con){
            if(err){
                console.log(err);
                throw err;
            }else{
                con.query(sql.getUserInfoXPH, req.body.phone, function(err1, data){
                    if(err1){
                        console.log(err1);
                        throw err1;
                    }else{
                        if(data.length>0){
                            res.json({
                                code:1,
                                msg:"已经报过名了",
                                result:data
                            });
                            con.release();
                        }else{
                            con.query(sql.addUserInfoXPH, val, function(err2,data1){
                                if(err2){
                                    console.log(err2);
                                    throw err2;
                                }else{
                                    res.json({
                                        code:2,
                                        msg:"增加成功",
                                        result:data1
                                    })
                                    con.release();
                                }
                            })
                        }
                    }
                })
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
});

/**
 * 增加碧桂园城市投票数据
 */
app.post("/addCityBGY", function(req, res){
    console.log("进来了:"+req.body);
    try{
        let values =[
            req.body.issue_one,
            req.body.issue_two,
            req.body.issue_three,
            req.body.issue_four,
            req.body.issue_five
        ]
        pool.getConnection(function(err,con){
            if(err){
                console.log(err);
                throw err;
            }else{
                con.query(sql.addBGYissue, values, function(err1,data){
                    if(err1){
                        console.log(err1);
                        throw err1;
                    }else{
                        res.json({
                            code:1,
                            msg:"增加数据成功",
                            result:data
                        });
                        con.release();
                    }
                })
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
    
    
});
/**
 * 查询碧桂园城市投票信息
 */
app.get("/getCityBGY", function(req, res){
    console.log("进来了");
    pool.getConnection(function(err, connection){
        if(err){
            console.log(err);
            throw err;
        }else{
            connection.query(sql.getBGYissue, [], function(err1, data){
                if(err1){
                    console.log(err1);
                    throw err1;
                }else{
                    console.log(data);
                    if(data.length>0){
                        let issue_one =[];
                        let issue_two =[];
                        let issue_three = [];
                        let issue_four = [];
                        let issue_five = [];
                        for(let i=0; i<data.length; i++){
                            issue_one.push(data[i].issue_one);
                            issue_two.push(data[i].issue_two);
                            issue_three.push(data[i].issue_three);
                            issue_four.push(data[i].issue_four);
                            issue_five.push(data[i].issue_five);
                        }
                        let one0 = 0;
                        let one1 = 0;
                        let one2 = 0;
                        for(let i=0; i<issue_one.length; i++){
                            if(0 == issue_one[i]){
                                one0 +=1
                            }else if(1 == issue_one[i]){
                                one1 +=1
                            }else{
                                one2 +=1
                            }
                        }
                        let issue_one0 = ((one0/data.length)*100).toFixed(2);
                        let issue_one1 = ((one1/data.length)*100).toFixed(2);
                        let issue_one2 = ((one2/data.length)*100).toFixed(2);
                        //2
                        let two0 = 0;
                        let two1 = 0;
                        let two2 = 0;
                        for(let i=0; i<issue_two.length; i++){
                            if(0 == issue_two[i]){
                                two0 +=1
                            }else if(1 == issue_two[i]){
                                two1 +=1
                            }else{
                                two2 +=1
                            }
                        }
                        let issue_two0 = ((two0/data.length)*100).toFixed(2);
                        let issue_two1 = ((two1/data.length)*100).toFixed(2);
                        let issue_two2 = ((two2/data.length)*100).toFixed(2);

                        //3
                        let three0 = 0;
                        let three1 = 0;
                        let three2 = 0;
                        for(let i=0; i<issue_three.length; i++){
                            if(0 == issue_three[i]){
                                three0 +=1
                            }else if(1 == issue_three[i]){
                                three1 +=1
                            }else{
                                three2 +=1
                            }
                        }
                        let issue_three0 = ((three0/data.length)*100).toFixed(2);
                        let issue_three1 = ((three1/data.length)*100).toFixed(2);
                        let issue_three2 = ((three2/data.length)*100).toFixed(2);
                        //4
                        let four0 = 0;
                        let four1 = 0;
                        let four2 = 0;
                        for(let i=0; i<issue_four.length; i++){
                            if(0 == issue_four[i]){
                                four0 +=1
                            }else if(1 == issue_four[i]){
                                four1 +=1
                            }else{
                                four2 +=1
                            }
                        }
                        let issue_four0 = ((four0/data.length)*100).toFixed(2);
                        let issue_four1 = ((four1/data.length)*100).toFixed(2);
                        let issue_four2 = ((four2/data.length)*100).toFixed(2);
                        //5
                        let five0 = 0;
                        let five1 = 0;
                        let five2 = 0;
                        for(let i=0; i<issue_five.length; i++){
                            if(0 == issue_five[i]){
                                five0 +=1
                            }else if(1 == issue_five[i]){
                                five1 +=1
                            }else{
                                five2 +=1
                            }
                        }
                        let issue_five0 = ((five0/data.length)*100).toFixed(2);
                        let issue_five1 = ((five1/data.length)*100).toFixed(2);
                        let issue_five2 = ((five2/data.length)*100).toFixed(2);
                        let allData ={
                            issue_one0:issue_one0,
                            issue_one1:issue_one1,
                            issue_one2:issue_one2,
                            issue_two0:issue_two0,
                            issue_two1:issue_two1,
                            issue_two2:issue_two2,
                            issue_three0:issue_three0,
                            issue_three1:issue_three1,
                            issue_three2:issue_three2,
                            issue_four0:issue_four0,
                            issue_four1:issue_four1,
                            issue_four2:issue_four2,
                            issue_five0:issue_five0,
                            issue_five1:issue_five1,
                            issue_five2:issue_five2,
                        }
                        res.json({
                            code:2,
                            msg:"查询调查数据成功!",
                            result:allData,
                        })
                    }else{
                        res.json({
                            code:1,
                            msg:"查询成功，没有数据！",
                            result:data,
                        });
                    }
                    connection.release();
                }
            })
        }
    })
    //查询每道题选择的人数/总人数
})
//花溪26度留言点赞：添加点赞信息
app.post('/addLike',function(req, res){
    try{
        let bOpenid = req.body.bOpenid;//被点赞
        let val = [
            req.body.openid,//点赞人
            req.body.bOpenid,
            req.body.likeTime
        ];
        pool.getConnection(function(err,con){
            if(err){
                console.log(err);
                throw err;
            }else{
                console.log(req.body.openid)
                con.query(sql.getHXLike,req.body.openid, function(err1,data){
                    if(err1){
                        console.log(err1);
                        throw err1;
                    }else{
                        console.log(data.length)
                        if(data.length > 0){
                            if(data[0].likeTime == req.body.likeTime){
                                //同一天
                                res.json({
                                    code:1,
                                    msg:"你已经点过赞了",
                                    result:data
                                })
                                con.release();
                            }else{
                                //修改点赞时间+同时修改点赞票数
                                con.query(sql.updataMsgUser,bOpenid,function(err1,data1){
                                    if(err1){
                                        console.log(err1);
                                        throw err1;
                                    }else{
                                        con.query(sql.updataHXLike,[req.body.likeTime,req.body.openid], function(err3,data2){
                                            if(err3){
                                                console.log(err3);
                                                throw err3;
                                            }else{
                                                res.json({
                                                    code:2,
                                                    msg:"点赞成功",
                                                    result:data2
                                                })
                                                con.release();
                                            }
                                        })
                                    }
                                })
                            }
                        }else{
                            //直接添加点赞+同时修改点赞票数
                            con.query(sql.updataMsgUser,bOpenid,function(err1,data){
                                if(err1){
                                    console.log(err1);
                                    throw err1;
                                }else{
                                    con.query(sql.addHXLike,val,function(err2,data1){
                                        if(err2){
                                            console.log(err2);
                                            throw err2;
                                        }else{
                                            res.json({
                                                code:2,
                                                msg:"点赞成功",
                                                result:data1
                                            });
                                            con.release();
                                        }
                                    })
                                }
                            });
                            
                        }
                    }
                })
            }
        })
    }catch(e){
        console.log(e)
        res.json({
            code:3,
            msg:"访问出错",
            result:e
        })
    }
})

/**
 * 添加留言人信息
 */
app.post('/addMsgUser', function(req, res){
    try{
        let value = [
            req.body.name,
            req.body.phone,
            req.body.openid,
            req.body.message,
            req.body.msgTime
        ];
        pool.getConnection(function(err,connection){
            if(err){
                console.log(err);
                throw err;
            }else{
                connection.query(sql.getMsgUser, req.body.openid, function(err1,data1){
                    if(err1){
                        console.log(err1);
                        throw err1;
                    }else{
                        if(data1.length>0){
                            res.json({
                                code:1,
                                msg:"已经提交过留言",
                                result:data1
                            });
                            connection.release();
                        }else{
                            //添加留言信息
                            connection.query(sql.addMsgUser, value, function(err2, data2){
                                if(err2){
                                    console.log(err2);
                                    throw err2;
                                }else{
                                    res.json({
                                        code:2,
                                        msg:"增加新用户成功",
                                        result:data2
                                    });
                                    
                                    connection.release();
                                }
                            })
                        }
                    }
                })
            }
        })
    }catch(e){
        console.log(e);
        throw e;
    }
})

app.post('/getMsgUserAll', function(req, res){
    let name = req.body.name;
    pool.getConnection(function(e, c){
        if(e){
            console.log(e);
            throw e;
        }else{
            let getSQL = sql.getMsgUserAll;
            if(name){
                getSQL +="and name like '%"+name+"%'";
            }
            getSQL +=" ORDER BY likes DESC ";
            c.query(getSQL, function(err, data){
                if(err){
                    console.log(err);
                    throw err;
                }else{
                    res.json({
                        code:1,
                        msg:"查询成功",
                        result:data
                    });
                    c.release();
                }
            })
        }
    })
})
/**
 * 碧桂园--博实乐园报名
 */
app.post('/addBGYUserInfo',function(req,res){
    console.log(req.body);
    try{
        let addInfo =[
            req.body.name,
            req.body.phone,
            req.body.times
        ]
        pool.getConnection(function(err,con){
            if(err){
                console.log(err);
                throw err;
            }else{
                con.query(sql.getBGYUserInfo,req.body.phone,function(err1,data1){
                    if(err1){
                        console.log(err1);
                        throw err1;
                    }else{
                        if(data1.length > 0){
                            res.json({
                                code:1,
                                msg:"已经报过名",
                                result:data1
                            })
                            con.release();
                        }else{
                            con.query(sql.addBGYUserInfo,addInfo, function(err2, data2){
                                if(err2){
                                    console.log(err2)
                                    throw err2;
                                }else{
                                    res.json({
                                        code:2,
                                        msg:"增加成功",
                                        result:data2
                                    })
                                    
                                    con.release();
                                }
                            })
                        }
                    }
                })
            }
        })
    }catch(e){
        console.log(e)
        throw e;
    }
})

/**
 * 保存用户信息
 */
app.post('/addAwardUserInfo', function(req, res){
    let vInfo =[
        req.body.userImgs,
        req.body.openId,
        req.body.timeData
    ]
    pool.getConnection((err,db)=>{
        if(err){
            res.json({
                code:0,
                msg:"连接数据库发生错误",
                data:[]
            });
        }else{
            db.query(sql.getAward,req.body.openId, (err1, data1)=>{
                if(err1){
                    res.json({
                        code:1,
                        msg:"查询用户信息发生错误",
                        data:[]
                    });
                    db.release();
                }else{
                    
                    if(data1.length > 0){
                        res.json({
                            code:2,
                            msg:"该用户已经存在",
                            data:[]
                        });
                        db.release();
                    }else{
                        //增加新用户
                        db.query(sql.addAward, vInfo, (err2, data2) =>{
                            if(err2){
                                console.log(err2)
                                res.json({
                                    code:3,
                                    msg:"增加用户信息时发生错误",
                                    data:[]
                                });
                                db.release();
                            }else{
                                console.log("增加用户信息成功")
                                res.json({
                                    code:1,
                                    msg:"增加新用户信息成功",
                                    data:data2
                                });
                                db.release();
                            }
                        })
                    }
                }
            })
        }
    })
})
/**
 * 抽奖
 */
app.get('/awardInfo', (req, res)=>{
    let openId = req.query.openid;
    pool.getConnection((err,db)=>{
        if(err){
            res.json({
                code:0,
                msg:"连接数据时发生错误",
                data:[]
            });
        }else{
            db.query(sql.getAward, openId, (err1, data)=>{
                if(err1){
                    console.log(err1);
                    res.json({
                        code:1,
                        msg:"查询用户信息发生错误",
                        data:[]
                    });
                    db.release();
                }else{
                    if(data.length === 0){
                        res.json({
                            code:2,
                            msg:"没有查询到该用户",
                            data:[]
                        });
                        db.release();
                    }else{
                        //当天抽奖次数大于4次 或者 已经分享过 或者 已经中奖的
                        if(data[0].awardNum > 2 || data[0].isAward >0){
                            res.json({
                                code:4,
                                msg:"您已经没有抽奖次数了或您已经中过奖了",
                                data:data
                            });
                            db.release();
                        }else if(data[0].awardNum <=2 && data[0].isAward ===0){//可以进行抽奖
                            //查询奖品信息
                            db.query(sql.getPrizeInfo, [], (err2, data2) =>{
                                if(err2){
                                    res.json({
                                        code:6,
                                        msg:"查询奖池信息发生错误",
                                        data:[]
                                    });
                                    db.release();
                                }else{
                                    
                                    let awardPool =[];//奖项以下标的形式确定,值为奖品剩余数量
                                    for(let i=0; i<data2.length; i++){
                                        awardPool.push(data2[i].prizeNum);
                                    }
                                    getAward();
                                    function getAward(){//递归，已经抽完的奖品再进行抽奖
                                        let num =award2();//抽奖
                                        console.log("当前抽奖记录"+num);
                                        if(num <1){
                                            //未中奖
                                            db.query(sql.updataAward,openId,(err3, data3)=>{
                                                if(err3){
                                                    console.log(err3);
                                                    res.json({
                                                        code:7,
                                                        msg:"修改抽奖次数时发生错误",
                                                        data:[]
                                                    });
                                                    db.release();
                                                }else{
                                                    res.json({
                                                        code:8,
                                                        msg:"未中奖，修改本次抽奖次数成功",
                                                        data:[]
                                                    });
                                                    db.release();
                                                }
                                            })
                                        }else{
                                            if(awardPool[num-1] === 0){//抽中，但奖品没有了，再继续抽
                                                console.log("抽中，但奖品没有了，再继续抽");
                                                getAward();
                                                return;
                                            }else{//抽中，还有奖品
                                                res.json({
                                                    code:12,
                                                    msg:"感谢您抽中了",
                                                    data:num
                                                });
                                                db.release();
                                                // db.query(sql.updataIsAward,[num,openId], (err4, data4)=>{
                                                //     if(err4){
                                                //         console.log(err4);
                                                //         res.json({
                                                //             code:9,
                                                //             msg:"修改中奖记录失败",
                                                //             data:err4
                                                //         })
                                                //         db.release();
                                                //     }else{
                                                //         //增加中奖记录
                                                //         let dateTime = new Date();
                                                //         db.query(sql.insetToAward,[openId,num,dateTime,data2[num-1].prizeName,data2[num-1].prizeInfo], (err5, data5)=>{
                                                //             if(err5){
                                                //                 console.log(err5);
                                                //                 res.json({
                                                //                     code:10,
                                                //                     msg:"增加中奖数据失败",
                                                //                     data:err5
                                                //                 });
                                                //                 db.release();
                                                //             }else{
                                                //                 //修改中奖数量
                                                //                 db.query(sql.updataPrize,num,(err6,data6)=>{
                                                //                     if(err6){
                                                //                         console.log(err6);
                                                //                         res.json({
                                                //                             code:11,
                                                //                             msg:"修改奖品数量失败",
                                                //                             data:err6
                                                //                         })
                                                //                         db.release();
                                                //                     }else{
                                                //                         res.json({
                                                //                             code:12,
                                                //                             msg:"修改奖池数据成功",
                                                //                             data:num
                                                //                         })
                                                //                         db.release();
                                                //                     }
                                                //                 })
                                                //             }
                                                //         })
                                                //     }
                                                // })
                                            }
                                            
                                        }
                                    }
                                }
                            });
                        }
                    }
                }
            })
        }
    })
})
/**
 * 确认用户刮奖过后修改数据库值
 */
app.post("/updaAward", function(req, res){
    console.log(req.body);
    let openId = req.body.openId;
    let num = req.body.num;
    pool.getConnection((err,db)=>{
        if(err){
            console.log(err);
            throw err;
        }else{
            //根据奖项查询奖品信息
            db.query(sql.getPrizeInfo+"and id=?;", num, (err4, data4)=>{
                if(err4){
                    console.log(err4);
                    res.json({
                        code:0,
                        msg:"查询奖品信息失败",
                        data:[]
                    })
                    db.release();
                }else{
                    console.log(data4[0]);
                    if(data4[0].prizeNum <=0){
                        res.json({
                            code:2,
                            msg:"你来晚了一步，奖品已经被比你更快的人领走了",
                            data:[]
                        })
                        db.release();
                    }else{
                         //根据用户openId修改用户的中奖次数和中奖的类别
                        db.query(sql.updataIsAward,[num,openId],(err1,data1)=>{
                            if(err1){
                                console.log(err1);
                                res.json({
                                    code:0,
                                    msg:"修改用户抽奖信息失败",
                                    data:[]
                                })
                                db.release();
                            }else{
                                //增加中奖记录
                                let dateTime = new Date();
                                db.query(sql.insetToAward, [openId,num,dateTime,data4[0].prizeName,data4[0].prizeInfo],(err2,data2)=>{
                                    if(err2){
                                        console.log(err2);
                                        res.json({
                                            code:0,
                                            msg:"增加数据中奖数据表信息失败",
                                            data:[]
                                        })
                                        db.release()
                                    }else{
                                        //修改奖品数量
                                        db.query(sql.updataPrize,num,(err3,data3)=>{
                                            if(err3){
                                                console.log(err3);
                                                res.json({
                                                    code:0,
                                                    msg:"修改奖品数据信息失败",
                                                    data:[]
                                                })
                                                db.release()
                                            }else{
                                                res.json({
                                                    code:1,
                                                    msg:"抽奖成功",
                                                    data:data3
                                                });
                                                db.release();
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                }
            })
        }
    })
})
/**
 * 
 * @param {微信分享成功后调用接口} data 
 */
app.get('/weachUpdateAward', function(req,res){
    console.log(req.query);
    pool.getConnection((err, db)=>{
        if(err){
            console.log(err);
            throw err;
        }else{
            db.query(sql.updataAwardStatus,openId,(err1, data1)=>{
                if(err1){
                    console.log(err1);
                    res.json({
                        code:1,
                        msg:"修改失败",
                        data:[]
                    });
                    res.replace();
                }else{
                    res.json({
                        code:1,
                        msg:"修改成功",
                        data:data1
                    });
                    res.replace();
                }
            })
        }
    })
})
//抽奖算法一
function award1(data){
    
        //设置奖项名称、权重、中奖次数等数组
        console.log("奖项名称数组:"+data[0]);
        var prizes = [1, 2, 3, 4, 5, 6];    //奖项名称数组
        var prizeWeight = [1, 5, 10, 14, 30, 40];    //奖项权重数组，表征各奖项的中奖机会占总数的百分比。比如一等奖的中奖率是1%，二等奖的中奖率是5%
        //数组累加求和函数：Array.reduce(function(prev ,cuurentValue), initialValue)
        var weightSum = prizeWeight.reduce(function(prev, currVal){    //计算权重之和：1+5+20+74=100
            return prev + currVal;    //prev 是前一次累加后的数值，currVal 是本次待加的数值
        }, 0);
        var res ="未中奖";
        console.log("本程序的的中奖权重和值为："+weightSum);
        //生成一个权重随机数，介于0-weightSum
        var random = Math.random()*weightSum;
        console.log("本次抽奖的权重随机数："+random);
        //权重数组重组并排序
        var concatWeightArr = prizeWeight.concat(random);//将随机数加入权重数组中的位置
        var sortedWeightArr = concatWeightArr.sort(function(a,b){return a-b});//将重组后的新权重数组按从小到大排序
        console.log("重新排序后的权重数组："+sortedWeightArr);
        //索引权重随机数的数组下标
        var randomIndex = sortedWeightArr.indexOf(random);
        randomIndex = Math.min(randomIndex, prizes.length - 1);//权重数的下标不得超过奖项数组的长度-1，重新计算随机数在奖项数组中的索引位置
        console.log("本次权重数对应的数组下标:"+randomIndex);
        //取出对应的奖项
        res = prizes[randomIndex];
        console.log("本次中奖结果："+res);
        return res;
}
/**
 * 查询中奖记录
 */
app.get("/getMyAward",(req,res)=>{
    console.log("进来了："+req.query.openId);
    pool.getConnection((err,db)=>{
        if(err){
            console.log(err);
            throw err;
        }else{
            db.query(sql.getMyAward,[req.query.openId],(err1,data1)=>{
                if(err1){
                    console.log(err1);
                    res.json({
                        code:1,
                        msg:"查询中奖记录失败",
                        data:[]
                    })
                    db.replace();
                }else{
                    res.json({
                        code:2,
                        msg:"查询中奖记录成功",
                        data:data1
                    })
                    db.release();
                }
            })
        }
    })
})
/**
 * 抽奖算法二
 */
const award2 = ()=>{
    let num1 = parseInt(Math.random() * 100);
    let whoyAward =0;
    if(num1 <= 70){//中奖率为30%
        let num2 = parseInt(Math.random() * 100);
        if(num2 <=0.036){
            whoyAward = 1;
        }else if(num2 <=0.36 && num2 >0.036){
            whoyAward = 2;
        }else if(num2 <=1.8 && num2 >0.36){
            whoyAward = 3;
        }else if(num2 <=2.1 && num2 >1.8){
            whoyAward = 4;
        }else if(num2 <=7.1 && num2 >2.1){
            whoyAward = 5;
        }else if(num2 <=17.8 && num2 >7.1){
            whoyAward = 6;
        }else if(num2 <=35.7 && num2 >17.8){
            whoyAward = 7;
        }else{
            whoyAward = 0;
        }
    }else{
        whoyAward =0;
    }
    return whoyAward;
    
}
/**
 * 定时清除抽奖数据
 * 首钢刮刮乐
 */
const scheduleSGGGL = ()=>{
    //每天十二点清除数据库信息
    schedule.scheduleJob('0 0 0 * * *', ()=>{
        //清除中奖记录，分享状态，抽奖次数都为0
        let sqlUpdataUserStatus = "update awardUserInfo set awardNum = 0, awardStatus = 0, isAward =0 where 1=1";
        pool.getConnection((err,db)=>{
            if(err){
                console.log(err);
                throw err;
            }else{
                db.query(sqlUpdataUserStatus, [], (err1, data)=>{
                    if(err1){
                        console.log(err1);
                        throw err1;
                    }else{
                        console.log("修改数据库信息成功");
                        sendMail("253237030@qq.com","修改首钢数据库信息","修改首钢数据库信息成功");
                        db.release();
                    }
                })
            }
        })
    })
}
/**
 * 测试邮件发送
 */
function sendMail(recipient, subject, html) {
 
    smtpTransports.sendMail({
        from: "253237030@qq.com",
        to: recipient,
        subject: subject,
        html: html
 
    }, function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log('发送成功')
    });
}
scheduleSGGGL();
app.listen(PORT, function () {
    console.log(`your port is ${PORT}`);
});
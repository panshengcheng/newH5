const express = require('express');//引入框架
const bodyParser = require('body-parser');//接收前端传入的数据
const request = require('request');//用于node后端请求接口
const querystring = require('querystring');//

//实例化
const app = express();
//使用中间键
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('hello world');
});

app.post("/sms_send", (req, res)=>{
    //console.log(req.body.phone);
    //产生随机数code
    //let code =('000000'+Math.floor(Math.random()*999999)).slice(-6);
    var queryData = querystring.stringify({
        "mobile": req.body.phone,  // 接受短信的用户手机号码
        "tpl_id": "186666",  // 您申请的短信模板ID，根据实际情况修改
        "tpl_value": req.body.code,  // 您设置的模板变量，根据实际情况修改
        "key": "e46a8f8a1590bfcd8c1982cd7697ed23",  // 应用APPKEY(应用详细页查询)
    });
    
    var queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;
    
    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 打印接口返回内容
            
            var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
            res.json(jsonObj);
        } else {
            console.log('请求异常');
        }
    }) 
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
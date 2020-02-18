const path = require('path')
const express = require('express')
const fs = require("fs")
const bodyParser = require('body-parser');//用于req.body获取值的
// 创建 application/x-www-form-urlencoded 编码解析
const app = new express();
const port = process.env.PORT || 81;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.post('/submit',(req,res)=>{
  console.log(req.body);
  // res.json(req.body);
  // res.json({code:200})
  let data = '姓名：'+req.body.name+',手机号：'+req.body.phone+'\n';
  fs.appendFile('data.txt',data,  function(err) {
     if (err) {
        res.json({code:500})
        return console.error(err);
     }else {
       res.json({code:200})
     }
  });
})


app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});

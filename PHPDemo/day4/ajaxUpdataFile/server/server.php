<?php
/**
 * 1.连接数据库
 * 2.获取前端提交数据
 */
$name =$_POST['name'];
$phone =$_POST['phone'];
$password =$_POST['password'];
$imgurl =$_POST['imgurl'];
$playTime =$_POST['playTime'];
//连接数据库条件
$host ="mysql:host=127.0.0.1:3307;dbname=test";
$username ="root";
$pasd ="123456";
if(empty($name) && empty($phone) && empty($password) && empty($imgurl) && empty($playTime)){
    echo "用户提交信息有误";
}else{
    try{
        $con =new PDO($host,$username,$pasd);
    }catch(PDOException $e){
        echo $e->getMessage();
    }
    //使用:user_name来命名sql数据
    $selectSql = "select * from user_info where user_name= :user_name;";
    //进行数据库查询
    $table =$con->prepare($selectSql);
    //通过数组值向预处理语句传递真实的参数
    $table->execute(array(':user_name'=>$name));
    //获取得到的数据
    $count = $table->fetchAll();
    //判断数据是否存在
    if(count($count) > 0){
        $data = array(
            'code'=>0,
            'msg'=>"该用户已经注册过了",
            'result'=>array()
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
        //echo "该用户已经存在";
    }else{
        //实现用户保存
        $insertSql = "insert into user_info (user_name,user_password,user_phone,imgurl,playTime)values(:user_name, :user_password, :user_phone, :imgurl, :playTime)";
        $instrtTable =$con->prepare($insertSql);
        $result =$instrtTable->execute(array(':user_name'=>$name,':user_password'=>$password,':user_phone'=>$phone,':imgurl'=>$imgurl,':playTime'=>$playTime));
        if($result){
            $data = array(
                'code'=>1,
                'msg'=>"增加新用户成功",
                'result'=>$result,
            );
            echo json_encode($data,JSON_UNESCAPED_UNICODE);
        }else{
            $data = array(
                'code'=>0,
                'msg'=>"增加新用户失败",
                'result'=>$result,
            );
            echo json_encode($data,JSON_UNESCAPED_UNICODE);
        }
        
    }
    $con = null;
}
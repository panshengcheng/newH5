<?php
$name= $_POST['name'];
$phone = $_POST['phone'];
$applyTime =$_POST['applyTime'];

if(empty($name) || empty($phone) || empty($applyTime)){
    echo json_decode(array(
        'code'=>0,
        'msg'=>"提交的数据不能为空",
        'result'=>array(),
    ));
}else{
    //连接数据库
    $host ="mysql:host=127.0.0.1:3307;dbname=test";
    $username ="root";
    $pasd ="123456";
    try{
        $con = new PDO($host,$username,$pasd);

    }catch(PDOException $e){
        echo $e->getMessage();
    }
    $selectSql = "select * from yunzhu_user_info where user_phone= :user_phone;";
    $table = $con->prepare($selectSql);
    $table->execute(array(':user_phone'=>$phone));
    $count = $table->fetchAll();
    if(count($count) > 0){
        $data = array(
            'code'=>0,
            'msg'=>"该用户已经注册过",
            'result'=>$count,
        );
        echo json_encode($data, true);
    }else{
        $insertSql = "insert into yunzhu_user_info (user_name,user_phone,applyTime)values(:user_name, :user_phone, :applyTime)";
        $instrtTable =$con->prepare($insertSql);
        $result =$instrtTable->execute(array(':user_name'=>$name,':user_phone'=>$phone,':applyTime'=>$applyTime));
        if($result){
            $data = array(
                'code'=>1,
                'msg'=>"增加新用户成功",
                'result'=>$result,
            );
            echo json_encode($data,true);
        }else{
            $data = array(
                'code'=>0,
                'msg'=>"增加新用户失败",
                'result'=>$result,
            );
            echo json_encode($data,true);
        }
    }
    $con = null;
}
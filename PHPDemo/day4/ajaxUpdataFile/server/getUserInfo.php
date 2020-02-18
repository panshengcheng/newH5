<?php
/**
 * 连接数据库，查询数据
 */
include_once('config.php');
try{
    $con =new PDO($config['host'],$config['username'],$config['pasd']);
}catch(PDOException $e){
    echo $e->getMessage();
}
//SQL语句
$selectUserSQL ="select * from user_info where 1=1";
//执行SQL语句
$selectUser = $con->prepare($selectUserSQL);
$selectUser->execute();
//得到数据库结果
$result = $selectUser->fetchAll();
if($result){
    $data =array(
        'code'=>1,
        'msg'=>"查询成功",
        'result'=>$result
    );
    echo json_encode($result,true);
}else{
    $data =array(
        'code'=>0,
        'msg'=>"查询失败",
        'result'=>array()
    );
    echo json_encode($result,true);
}
$con = null;
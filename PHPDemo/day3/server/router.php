<?php
/**
 * 后端接收报名数据
 */
$name = $_POST['name'];
$password = $_POST['password'];
$phone =$_POST['phone'];
//获取本地数据库，连接MySQL:注MySQLi只适合连接mysql数据库，而其他数据库建议使用PDO的连接方式
// $db =mysqli_connect('localhost',"root","123456");
// $db=new \mysqli('localhost','root','123456','policysupport');
// if ($db->connect_error) {
//     die('Connect Error (' . $db->connect_errno . ') ' die如果连接错误，则执行该函数，该函数有一个强行退出机制exit
//             . $db->connect_error);
// }
// $db->query('set names utf8');

// }else{
// if($name == '' || $password == ''){
//     echo json_encode(array('code'=>0,'msg'=>'注册用户名或者密码不能为空'));
// }else{

// }
try {
    $con = new PDO('mysql:host=127.0.0.1:3307;dbname=test',"root","123456");
     echo "连接成功"; 
 }
 catch(PDOException $e)
 {
     echo $e->getMessage();
 }

// echo '======分割线，查询用户数据=======</br></br>';
// $sql ="select * from user_info";
// // PDO:prepare 准备要执行的sql语句，并返回一个PDOStatement对象
// $command = $con->prepare($sql);
// //PDOStatement::execute - 执行一条预处理语句
// $command->execute();

// //PDOStatement::fetchAll - 返回一个包含结果集中所有行的数组
// $userArr = $command->fetchAll();
// if(count($userArr)>0){
//     foreach($userArr as $user){
//         print_r($user);
//         echo "<br/>";
//     }
// }else{
//     echo "没有数据";
// }
// echo '======分割线，查询用户数据=======</br></br>';

//使用命名(:name)参数来准备sql语句
$selectUsernameSql = "select * from user_info where user_name= :user_name";
$command = $con->prepare($selectUsernameSql);
// $name = '张三';
// $password = 'cheng123456';
// $phone =18285524492;
//通过数组值向预处理语句传递真实的参数
$command->execute(array(':user_name'=>$name));

$userArr = $command->fetchAll();
if(count($userArr)>0){
    $data = array(
        'code'=>'0',
        'msg'=>'该用户已经存在',
        'data'=>array(),
    );
    echo json_encode($data);
}else{
    $insertSql = "insert into user_info (user_name,user_password,user_phone)values(:user_name, :user_password, :user_phone)";
    $command = $con->prepare($insertSql);
    $result = $command->execute(array(':user_name'=>$name,':user_password'=>$password,':user_phone'=>$phone));
    $data = array(
        'code'=>'0',
        'msg'=>'增加新用户成功',
        'data'=>$result,
    );
    echo json_encode($data);
}
//关闭数据库
$con = null;
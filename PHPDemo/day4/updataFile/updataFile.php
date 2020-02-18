<?php
$fileName = $_FILES["file"]["name"];
$tmp = $_FILES['file']['tmp_name'];
$type = $_FILES["file"]["type"];
if ((($type == "image/gif") || ($type == "image/jpeg") || ($type == "image/jpg") || ($type == "image/pjpeg") || ($type == "image/x-png") || ($type == "image/png"))
&& ($_FILES["file"]["size"] < 1004800) )// 小于 1000 kb 
{
    if($_FILES["file"]["error"]>0){
        echo "错误:".$_FILES["file"]["error"]."<br>";
    }else{
        //判断当前目录下的upload目录是否存在该文件。如果没有upload目录，需要创建它，upload目录权限未777
        if(file_exists("upload/".$fileName)){
            echo $_FILES["file"]["name"]."文件已经存在";
        }else{
            //move_uploaded_file(file,newloc)//file:规定要移动的文件。newloc:规定文件的新位置。
            $isFile =move_uploaded_file($tmp,"upload/".$fileName);
            if($isFile){
                echo "文件存储在："."http://192.168.137.1:81/PHPDemo/day4/updataFile/upload/".$_FILES["file"]["name"];
            }else{
                echo "存储失败";
            }
            
        }
    }
}else{
    echo "非法的文件格式";
}
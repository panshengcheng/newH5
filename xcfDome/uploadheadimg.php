<?php
    $imgname = $_FILES['myfile']['name'];
    $tmp = $_FILES['myfile']['tmp_name'];
    echo $imgname;
    echo $tmp;
    $filepath = 'photo/';
    if(empty($imgname)){
        $url = "http://wx.uvcsi.com/html5/xcfDome/index.php"; 
        echo "<script language='javascript' type='text/javascript'>"; 
        echo "alert('请先选择需要更换的图片');";
        echo "window.location.href='$url'"; 
        echo "</script>";
    }else{
        if(move_uploaded_file($tmp,$filepath.$imgname)){
            echo "上传成功";
            $url = "http://wx.uvcsi.com/html5/xcfDome/index.php"; 
            echo "<script language='javascript' type='text/javascript'>"; 
            echo "window.location.href='$url'"; 
            echo "</script>";
        }else{
            echo "上传失败";
            $url = "http://wx.uvcsi.com/html5/xcfDome/index.php"; 
            echo "<script language='javascript' type='text/javascript'>"; 
            echo "window.location.href='$url'"; 
            echo "</script>";
        }
    }
    
?>
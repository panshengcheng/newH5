<?php
    $title = $_POST['title'];
    $content = $_POST['content'];
    if($title =='' || $content ==''){
        // echo '标题或评论内容不能为空,<a href="index.php">返回评论区</a>';
        echo json_encode(array('code'=>1,'msg'=>'标题或评论内容不能为空'));
    }else{
        $comment = array('title'=>$title,'content'=>$content);
        $filePath = 'commentBook.text';
        $commentList = unserialize(file_get_contents($filePath));
        if(is_array($commentList)){
            array_unshift($commentList,$comment);
        }else{
            $commentList=[$comment];
        }
        $commentFile = fopen($filePath,'w');
        fwrite($commentFile,serialize($commentList));
        fclose($commentFile);

        // echo '评论内容成功,<a href="index.php">返回评论区</a>';
        //$ajax请求返回例子
        echo json_encode(array('code'=>0,'msg'=>'评论成功'));
    }
?>
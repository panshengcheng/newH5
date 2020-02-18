<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP基础练习</title>
</head>
<body>
    <div>
        <label>标题：</label><input type="text" name="title" id="title" size="20"/><br><br>
        <label>评论内容：</label><textarea rows="10" cols="30" name="content" id="content"></textarea><br><br>
        <input type="submit" value="提交" id="submit"/><br><br>
    </div>
    <!-- 评论区列表 -->
    <?php
        $commentList = unserialize(file_get_contents('commentBook.text'));
        if($commentList ==''){
            echo "当前还没评论";
        }else{
            $totalCount = count($commentList);
            $page = isset($_GET['page'])?intval($_GET['page']):1;
            $limit = isset($_GET['limit'])?intval($_GET['limit']):3;

            $totalPage = ceil($totalCount/$limit);
            if($page<1){
                $page = 1;
            }
            if($page>$totalPage){
                $page = $totalPage;
            }
            $form = ($page-1)*$limit;
            for($i=$form; $i<$form+$limit; $i++){
                if(isset($commentList[$i])){
                    echo "标题：".$commentList[$i]['title'].'<br>评论内容：'.$commentList[$i]['content'].'<hr>';
                }else{
                    break;
                }
            }
            //页码
            for($i=1; $i<=$totalPage; $i++){
                echo "<a href='index.php?page=$i&limit=$limit'>$i</a> ";
            }
        }
    ?>
    <script src="../../shougang/invitation02/js/jquery.min.js"></script>
    <script>
        $("#submit").on('click',function(){
            $.ajax({
                type:'POST',
                url:'addComment.php',
                dataType:'json',
                data:{'title':$('#title').val(),'content':$('#content').val()},
                success:function(data){
                    alert(data.msg);
                    if(!data.code){
                        window.location.reload();
                    }
                }
            })
        })
    </script>
</body>
</html>
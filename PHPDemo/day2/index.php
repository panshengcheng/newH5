<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP类</title>
</head>
<body>
    <?php
    //定义类
        class Comment{
            /**
             * 定义变量必须是public,protected和 private开头
             * 例:public $变量名称;
             * 常量：const开头
             * 例：const FilePath ="commentBook.text"
             * 
             * 定义类方法（类的函数）非静态的
             * 1.由关键字public\protected\private开头
             * 2.如果没有以上关键字，默认就是public
             * 3.后跟函数定义
             * 
             * 类内调用类方法（非静态）
             *      $this->函数名(......)
             */
            private $title;
            private $content;
            public function setTitle($titlename){//设置变量的类方法
                $this->title=$titlename;
            }
            public function getTitle(){//获取类变量的类方法
                return $this->title;
            }

            //多参数的赋值$name设置的类变量名，$value设置的类变量值
            public function set($name, $value){
                $this->$name = $value;
            }
            //获取方法：$name类变量名
            public function get($name){
                return $this->$name;
            }

            //魔术方法,在类方法前面加“__”：好处，外部调用时，可以直接使用类成员变量
            public function __set($name, $value){
                $this->$name = $value;
            }
            
            public function __get($name){
                return $this->$name;
            }
        }

        class CommentBook{
            const FilePath = 'commentBook.text';
            public function getCommentList(){
                return unserialize(file_get_contents(self::FilePath));
            }
            public function write($commentData){
                $commentList = $this->getCommentList();
            }
        }

        
        
        //调用类
        $comment = new Comment();
        $comment->title = '赋值';
        echo $comment->title;
        //访问类常量 ::
        $com = new CommentBook();
        echo $com::FilePath;
    ?>
</body>
</html>
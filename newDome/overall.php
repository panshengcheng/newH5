<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>超级全局变量</title>
</head>
<body>
    <!--
        1. PHP全局变量：$GLOBALS  $_SERVER  $_REQUEST  $_POST  $_GET  $_FILES  $_ENV  $_COOKIE  $_SESSION
        2. PHP循环: while  do...while  for  foreach 
        3. PHP函数：（1）函数的准则： 函数的名称应该提示出它的功能； 函数名称以字母或_下划线开头(不能以数字进行开头);
                                    函数的返回值：return3
        4. PHP魔术常量: __LINE__ 显示所在行数
                       __FILE__ 显示当前文件所在路径，包括路径和文件名
                       __DIR__  显示当前文件的目录
                       __FUNCTION__ 显示当前函数名称
                       __CLASS__  显示当前类名
                       __NAMESPACE__ 当前命名空间
        5. PHP命名空间： namespace 作用：解决PHP内部类/函数/常量 与第三方 类/函数/常量 产生冲突
                                        可以用来创建别名，提高代码的可读性
                        建议命名空间使用大括号阔起来：例如下面代码
                        子命名空间：与目录和文件的关系很像，也就是分成定义，例如：namespace MyProject\Sub\Level; 
                        namespace 和 __NAMESPACE__常量的区别：__NAMESPACE__包含前命名空间的字符串，在全局，不包含任何命名空间中的代码； 常量 __NAMESPACE__ 在动态创建名称时很有用
                                                            namespace 包含代码：所有namespace可以访问当前命名空间或子命名空间的元素，等价于类中的self操作
                        全局命名空间：在没有定义任何命名空间的情况下，所有的函数与类都是定义在全局命名空间中的
                        命名空间的顺序：待看
        6. PHP面向对象：


        -->
    <?php
        $number = 10;

        function text(){
            $GLOBALS['number1']=$GLOBALS['number']+6;
        }

        text();
        echo $number1;
        echo "<br>"."<br>";
        function writeName($fname,$punctuation)
            {
                echo $fname . " Refsnes" . $punctuation . "<br>";
            }
            
            echo "My name is ";
            writeName("张三",".");
            echo "My sister's name is ";
            writeName("李四","!");
            echo "My brother's name is ";
            writeName("王五","?");

        echo "<br>"."<br>";
        echo '这是第"'. __LINE__.'"行';
        echo "<br>"."<br>";
        echo '当前文件的路径是："'. __FILE__ .'"里';
        echo "<br>"."<br>";
        namespace myproject{
            count COUNTECTION_OK =1;
            class Counnection{};
        }

        ?>
</body>
</html>
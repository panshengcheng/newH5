<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP学习</title>
</head>
<body>
    <div>
            <!-- //1 声明PHP变量 以$开头  PHP是一门弱类型语言 会根据变量的数据类型自动转换类型， 使用前，我们先声明变量名
            // $x = 5; 
            // $y = 10;
            // $z = $x + $y;
            // echo $z;
            // 2 PHP变量作用域类型 local  global static  parameter  注：要在一个函数中使用全局作用域，需要使用关键字 global(只能在没有赋值的情况下可以使用)
            //也可以使用$globals[]数组变为全局变量
            // 3 echo 和 print 的区别:echo可以输出多个字符串，print只能输出一个字符串
            //4 EOF 字符串原样输出，开始必须顶行写，结束必须独占一行，不能有缩进和空格
            // 5 数据类型：String(字符串) intager(整型) float(浮点型) Boolean(布尔型) Array(数组) Object(对象) NULL(空值)
            // 6 比较类型： ==  松散比较： 只比较值，不比较类型
                           === 严格类型： 既比较值，又比较类型
            // 7 常量类型： 常量在定义的时候就已经确定了值，不能再进行改变，常量不能加$, 使用define()定义
                            define("常量名"，"常量值","常量值是否区分大小写:true不区分大小写,可选"); 
                            常量在定义的时候默认是全局变量
            // 8 字符串：  strlen()查询一个字符串的长度
                           stropos()查寻一个字符串内的指定文本或字段
               9 运算符
                    算术运算符：+(加) -(减) *(乘) /(除) %(模) -X(取反) b.a(并置)
                    数组运算符：x + y 集合  x == y 相等  x === y 恒等：具有相同的键/值对，且顺序相同类型相同  x != y 不相等  x <> y 不相等 x !== y 不恒等
                    三元运算符：($c) = ($a) : ($y) 
                    组合比较符： $c = $a <=> $y 如果$a>$y 结果$c 的值为 1  如果$a=$y 结果$c 的值为 0  如果$a<$y 结果$c 的值为 -1
            // 10 if 判断: 同其他语言一样
            // 11 switch 同其他语言一样
            // 12 数组
                    count()获取数组的长度
                    关联数组：（键=>值）
                        创建键值对的两种方式：$arrayName = array("name1"=>"张三","name2"=>"李四","name3"=>"王五");
                                       或者：$arrayName1["name1"]="张三";  $arrayName1["name2"]="李四"
                                       遍历关联数组：可以使用foreach循环
                    数组排序：
                        sort()   -对数组进行升序排序
                        rsort()  -对数组进行降序排序
                        asort()  -根据关联数组的值，对数组进行升序排序
                        ksort()  -根据关联数组的键，对数组进行升序排序
                        arsort() -根据关联数组的值，对数组进行降序排序
                        krsort() -根据关联数组的键，对数组进行降序排序

             -->
         <?php 
           
           $x = 10;
           $y = 20;

            function myText(){
                $z = 3;
                global $x;
                echo "<h1>测试函数作用域</h1>";
                echo "变量x为:$x<br>";
                echo "变量y为：$y<br>";
                echo "变量z为:$z<br>";
            }
            myText();
            echo "<h5>测试函数作用域</h5>";
            echo "变量x为:$x<br>";
            echo "变量y为：$y<br>";
            echo "变量z为:$z";

            echo "你好啊！","小王";
            print "我很不好！";

            define("NAME", "<h1>这是一个常量</h1>");
            echo NAME;

            echo strlen(NAME);
            echo strpos(NAME,"一");

            echo "<br>";
            $nameArray = array("小王", "小李", "小天", "小明");
            $arrayLength = count($nameArray);
            for($x = 0; $x < $arrayLength; $x++){
                echo $nameArray[$x];
                echo "<br/>";
            }
            echo "<br/>";
            $arrayName1 =  array("name1"=>"张三","name2"=>"李四","name3"=>"王五");
            echo '$arrayName1的数组长度为:'. count($arrayName1);
            echo "<br>";
            echo "<br>";
            foreach($arrayName1 as $j => $j_value){
                echo "键 key: ".$j. ", 值 value:".$j_value;
                echo "<br>";
            }
            echo "<br>";
            echo "<br>";
            $cars = array("宝马","宝沃","吉利","奔驰");
            echo sort($cars);

        ?> 
    <div>
</body>
</html>
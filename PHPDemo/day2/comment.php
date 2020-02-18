<?php
/**
 * 定义类的静态属性和方法
 * 调用静态属性的方法self::
 * 静态方法里不能调用静态方法和非静态属性的
 */
class Tools{
    public static $title ="妙味课堂";
    public $test="测试";
    //类内调用静态属性
    public static function parseTitle($title){
        return $title.'-'.self::$titleSuffix;
    }
    //在非静态方法中调用静态类
    public function test(){
        self::parseTitle('text');
    }
}

//在类外调用静态属性
echo Tools::$titleSuffix;

//在类外调用静态方法是不需要实例化的
echo Tools::parseTitle('VIP')
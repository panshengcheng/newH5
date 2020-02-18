<?php
namespace wechat\pay;
/*
配置文件
*/
class wx_config{
	const APPID='wx0cd265e680c6f782';
	const MCHID = '1418339602';//商户号
	const SH_KEY='E8fscN5lsQex1NnPkJCU2lUhrjdu4QI0';//商户支付密钥Key。
	const SIGN_TYPE='MD5';//签名类型
	const GOODS_NAME='友家公寓';//商品名（32）
	const PAY_RESULT_URL='http://wx.uvcsi.com/yj_apartment/public/plugs/getxml/pay_back.php';
	
}
?>
<?php
namespace wechat\pay;
/*
仅支持JSApi支付
*/
//require_once(__DIR__.'wpconf.php');
//require_once(__DIR__.'wporder.php');
class wxpay{
	public $uorder;
	public function __construct($openid,$fee,$trade_no){
		$this->uorder=new wporder($openid,$fee,$trade_no);
	}
	function get_parameters(){
		$order=$this->uorder->get_prepay_id();
		if(!array_key_exists("appid", $order)
		|| !array_key_exists("prepay_id", $order)
		|| $order['prepay_id'] == "")
		{
			var_dump("参数错误");var_dump($order);exit;
		}
		$data['appId']=wx_config::APPID;
		$time=time();//////
		$data['timeStamp'] = "$time";
		$data['nonceStr']=$this->uorder->get_noncestr();/////
		$data['package']='prepay_id='.$order['prepay_id'];
		$data['signType']=wx_config::SIGN_TYPE;
		$data['paySign']=$this->uorder->MakeSign($data);
		return json_encode($data);		
	}
	
	
	
	
}

?>
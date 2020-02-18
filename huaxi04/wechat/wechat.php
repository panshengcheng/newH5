<?php
namespace  wechat;

/*获取用户信息*/
class wechat{

	private $appId;
	private $appSecret;
	private $redirect_uri;

	public function __construct($appId, $appSecret, $redirect_uri) {
		$this->appId = $appId;
		$this->appSecret = $appSecret;
		//全地址url
		$this->redirect_uri = $redirect_uri;
	}
	//外部调用函数
	function get_info(){
		$code=$this->getCode('snsapi_userinfo');
		$token=$this->getToken($code);
		$inf=$this->getUserinfo($token->access_token,$token->openid);
		return $inf;
	}

	//只需要Openid
	function get_openid(){
		$code=$this->getCode('snsapi_base');
		$token=$this->getToken($code);
		return $token->openid;
	}
  //函数一，取得Code  
  private function getCode($scope){
	 if(isset($_REQUEST['code'])&& $_REQUEST['state']=='STATE' ){
		 return $_REQUEST['code'];
	 }else {
		 $codu_url='https://open.weixin.qq.com/connect/oauth2/authorize?appid=';
		 $codu_url.=$this->appId;
		 $codu_url.='&redirect_uri='.$this->redirect_uri;
		 $codu_url.='&response_type=code&scope='.$scope.'&state=STATE#wechat_redirect';
		 header("Location:$codu_url");exit;
	 } 
  }
  //函数二，用code换access_token
  private function getToken($code){
	 $t_url='https://api.weixin.qq.com/sns/oauth2/access_token?appid=';
	 $t_url.=$this->appId.'&secret='.$this->appSecret.'&code='.$code.'&grant_type=authorization_code';
	 $token=json_decode($this->httpGet($t_url));
	 return $token;
  }
  
  //函数三 通过access_token和openid拉取用户信息
  private function getUserinfo($token,$openid){
	  $u_url='https://api.weixin.qq.com/sns/userinfo?access_token=';
	  $u_url.=$token.'&openid='.$openid.'&lang=zh_CN';	   
	  return json_decode($this->httpGet($u_url),true);
  }
  //判断用户是否关注公众号
  /*1、只要有基础的access_token和用户openid就可以判断用户是否关注该公众号
	2、利用的接口url为：https://api.weixin.qq.com/cgi-bin/user/info?access_token=$token&openid=$openid
	3、判断接口返回的字段subscribe是否为1.【1关注，0未关注】
	*/
	

	private function httpGet($url){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL,$url);
		// curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
		curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
		// curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		$temp = curl_exec($ch);
		curl_close($ch);
		return $temp;
	}
}

<?php
class Wechatf{
	private $appId;
	private $appSecret;
	private $r_url;
	private $openid;
	public function __construct($appId,$appSecret,$url=''){		
		$this->appId=$appId;
		$this->appSecret=$appSecret;
		$rurl=$url?$url:'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
		$this->r_url=urlencode($rurl);
		$this->openid='';
	}
  //获取用户信息(用户己观注微信公众号)：
  public function getUinf(){
	  $access_token=$this->getAccessToken(); 
	  $openid=$this->get_openid();
	  $url='https://api.weixin.qq.com/cgi-bin/user/info?access_token='.$access_token.'&openid='.$openid;
	  $url.='&lang=zh_CN';
	  $inf=$this->httpGet($url);
	  $inf=json_decode($inf,true);
	  return $inf;
  }
  //获取用户信息(未关注公众号)
  public function getinfo(){ 
	  $code=$this->getCode('snsapi_userinfo');
	  $token=$this->getToken($code);
	  $inf=$this->getUserinfo($token->access_token,$token->openid);
	  return $inf;
  }
  //获取用户openid
  public function get_openid($scope='snsapi_base'){
	  if($this->openid)return $this->openid;
	  else{
		$code=$this->getCode($scope);
		$token=$this->getToken($code);
		$this->openid=$token->openid;
		return $token->openid; 
	  }	
	}

  //获得签名信息
  public function getSignPackage() {
    $jsapiTicket = $this->getJsApiTicket();
    // 注意 URL 一定要动态获取，不能 hardcode.
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	//var_dump($_SERVER);exit;
	//$url=$_SERVER["REDIRECT_URL"];
    $timestamp = time();
    $nonceStr = $this->createNonceStr();
    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";
    $signature = sha1($string);
    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string
    );
    return $signPackage; 
  }

	//获取接口调用凭证AccessToken
	public function getAccessToken(){
		// access_token 应该全局存储与更新，以下代码以写入到文件中做示例				
				$data = json_decode($this->get_data_cache("access_token.php"));
				if ($data->expire_time < time()) {
				  // 如果是企业号用以下URL获取access_token
				  // $url = "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$this->appid&corpsecret=$this->appSecret";
				  $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$this->appId.'&secret='.$this->appSecret;
				  $res = json_decode($this->httpGet($url));
				  $access_token = $res->access_token;
				  if ($access_token){
					$data->expire_time = time() + 7000;
					$data->access_token = $access_token;
					$this->set_data_cache("access_token.php", json_encode($data));
				  }
				}else {
				  $access_token = $data->access_token;
				}
				return $access_token;
  }
  //curl GET请求远程序数据
  public function httpGet($url){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL,$url);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
		curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$temp = curl_exec($ch);
		curl_close($ch);
		return $temp;
	}
	
	//curl POST远程请求
	public function postCurl($inf, $url, $second = 30){
		$ch = curl_init();
		//设置超时
		curl_setopt($ch, CURLOPT_TIMEOUT, $second);
		curl_setopt($ch,CURLOPT_URL, $url);		
		curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,FALSE);
		curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,FALSE);//严格校验
		//设置header
		curl_setopt($ch, CURLOPT_HEADER, FALSE);
		//要求结果为字符串且输出到屏幕上
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		//post提交方式
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $inf);
		//运行curl
		$data = curl_exec($ch);
		//返回结果
		if($data){
			curl_close($ch);
			return $data;
		} else { 
			$error = curl_errno($ch);
			curl_close($ch);
			var_dump("curl出错，错误码:$error");exit;
		}
	}

///////////////////////////*私有函数*///////////////////////////////////////////
	private function getJsApiTicket(){
		// jsapi_ticket 应该全局存储与更新，以下代码以写入到文件中做示例
		$data = json_decode($this->get_data_cache("jsapi_ticket.php"));
		if ($data->expire_time < time()){
		  $accessToken = $this->getAccessToken();
		  // 如果是企业号用以下 URL 获取 ticket
		  // $url = "https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=$accessToken";
		  $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
		  $res = json_decode($this->httpGet($url));
		  $ticket = $res->ticket;
		  if ($ticket) {
			$data->expire_time = time() + 7000;
			$data->jsapi_ticket = $ticket;
			$this->set_data_cache("jsapi_ticket.php", json_encode($data));
		  }
		} else {
		  $ticket = $data->jsapi_ticket;
		}
		return $ticket;
	}
	//1取得Code  
	private function getCode($scope){
		 if(isset($_REQUEST['code'])&& $_REQUEST['state']=='STATE' ){
			 return $_REQUEST['code'];
		 }else {
			 $codu_url='https://open.weixin.qq.com/connect/oauth2/authorize?appid=';
			 $codu_url.=$this->appId;
			 $codu_url.='&redirect_uri='.$this->r_url;
			 $codu_url.='&response_type=code&scope='.$scope.'&state=STATE#wechat_redirect';
			 header("Location:$codu_url");exit;
		 } 
	}
	//2用code换access_token
	private function getToken($code){
	 $t_url='https://api.weixin.qq.com/sns/oauth2/access_token?appid=';
	 $t_url.=$this->appId.'&secret='.$this->appSecret.'&code='.$code.'&grant_type=authorization_code';
	 $token=json_decode($this->httpGet($t_url));
	 return $token;
	}
	//3通过access_token和openid拉取用户信息
	private function getUserinfo($token,$openid){
	  $u_url='https://api.weixin.qq.com/sns/userinfo?access_token=';
	  $u_url.=$token.'&openid='.$openid.'&lang=zh_CN';
	  return json_decode($this->httpGet($u_url),true);
	}
	private function createNonceStr($length = 16) {
		$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		$str = "";
		for ($i = 0; $i < $length; $i++) {
		  $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
		}
		return $str;
    }
	private function get_data_cache($filename) {
		$dir=dirname(__FILE__).'/cache/';
		$file=$dir.$filename;
		if(is_file($file)){
			return trim(substr(file_get_contents($file), 15));
		}else return '{"expire_time":"0"}';
	}
	private function set_data_cache($filename, $content) {
		$dir=dirname(__FILE__).'/cache/';
		$file=$dir.$filename;
		if(!file_exists($dir))mkdir($dir);
		file_put_contents($file,"<?php exit();?>" . $content);
	}
}
?>

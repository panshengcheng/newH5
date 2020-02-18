<?php
namespace wechat;
class wechatb{
	private $appId;
	private $appSecret;
	private $dir;
	private $redirect_uri;
	private $openid;
	
  public function __construct($appId, $appSecret,$ruri='') {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
	$this->dir= dirname(__FILE__);
	$this->redirect_uri=$ruri;
	$this->openid='';
  }
/*对外接口*/
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
	  //获取用户信息：
	  public function getUinf(){
		  $access_token=$this->getAccessToken(); 
		  $openid=$this->get_openid();
		  $url='https://api.weixin.qq.com/cgi-bin/user/info?access_token='.$access_token.'&openid='.$openid;
		  $url.='&lang=zh_CN';
		  $inf=$this->httpGet($url);
		  $inf=json_decode($inf,true);
		  return $inf;
	  }
	//只需要Openid
	function get_openid(){
		if($this->openid)$openid= $this->openid;
		else{
			$code=$this->getCode('snsapi_base');
			$token=$this->getToken($code);
			$openid=$token->openid;;
			$this->openid=$openid;
		}
		return $openid;
	} 
	//??
	public function downimg($id){
		$accessToken = $this->getAccessToken();
		$url="http://file.api.weixin.qq.com/cgi-bin/media/get?access_token=".$accessToken."&media_id=".$id;
		$res = $this->httpGet($url);
		echo $accessToken;
		return $res;
	  }	
/*********以下为内部函数*********/
  //函数1，取得Code  
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
  //函数2，用code换access_token(此token与基础access_token不同)
  private function getToken($code){
	 $t_url='https://api.weixin.qq.com/sns/oauth2/access_token?appid=';
	 $t_url.=$this->appId.'&secret='.$this->appSecret.'&code='.$code.'&grant_type=authorization_code';
	 return json_decode($this->httpGet($t_url));
  }
  
  //函数3 通过access_token和openid拉取用户信息
  private function getUserinfo($token,$openid){
	  $u_url='https://api.weixin.qq.com/sns/userinfo?access_token=';
	  $u_url.=$token.'&openid='.$openid.'&lang=zh_CN';	   
	  return json_decode($this->httpGet($u_url),true);
  }
  //函数4 curl请求远程资源
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
	//获取随机字符串
	private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }
  //获取jssdk包
  private function getJsApiTicket() {
    // jsapi_ticket 应该全局存储与更新，以下代码以写入到文件中做示例
    $data = json_decode($this->get_php_file($this->dir."/cache/jsapi_ticket.php"));
    if ($data->expire_time < time()) {
      $accessToken = $this->getAccessToken();
      // 如果是企业号用以下 URL 获取 ticket
      // $url = "https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=$accessToken";
      $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
      $res = json_decode($this->httpGet($url));
      $ticket = $res->ticket;
      if ($ticket) {
        $data->expire_time = time() + 7000;
        $data->jsapi_ticket = $ticket;
        $this->set_php_file($this->dir."/cache/jsapi_ticket.php", json_encode($data));
      }
    } else {
      $ticket = $data->jsapi_ticket;
    }

    return $ticket;
  }
  //获取access_token
  private function getAccessToken() {
    // access_token 应该全局存储与更新，以下代码以写入到文件中做示例
    $data = json_decode($this->get_php_file($this->dir."/cache/access_token.php"));
    if ($data->expire_time < time()) {
      // 如果是企业号用以下URL获取access_token
      // $url = "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$this->appId&corpsecret=$this->appSecret";
      $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$this->appId&secret=$this->appSecret";
      $res = json_decode($this->httpGet($url));
      $access_token = $res->access_token;
      if ($access_token) {
        $data->expire_time = time() + 7000;
        $data->access_token = $access_token;
        $this->set_php_file($this->dir."/cache/access_token.php", json_encode($data));
      }
    } else {
      $access_token = $data->access_token;
    }
    return $access_token;
  }
  //读取文件
  private function get_php_file($filename) {
    return trim(substr(file_get_contents($filename), 15));
  }
  //写入文件
  private function set_php_file($filename, $content) {
    $fp = fopen($filename, "w");
    fwrite($fp, "<?php exit();?>" . $content);
    fclose($fp);
  }
/*end*/
}
?>
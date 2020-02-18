<?php
namespace wechat\pay;
/*生成统一订单*/
class wporder{
	private $apiurl='https://api.mch.weixin.qq.com/pay/unifiedorder';
	protected $parem;
	public function __construct($openid,$num,$trade_no){
		$this->parem=array(
			'appid'=>wx_config::APPID,//*公众账号ID
			'mch_id'=>wx_config::MCHID,//*商户号
			//'device_info'=>'WEB',//设备号
			'nonce_str'=>$this->get_noncestr(),//*随机字符串
			//放到后面加入'sign'=>'',//*签名
			//'sign_type'=>'MD5',//签名类型,默认为MD5
			'body'=>wx_config::GOODS_NAME,//*商品描述,自定义，与实际销售名一致
			//'detail'=>'',//商品详情
			//'attach'=>'',//附加数据
			'out_trade_no'=>$trade_no,//*商户订单号,自定义32位，不能有重复订单号
			//'fee_type'=>'CNY',//标价币种,默认人民币：CNY
			'total_fee'=>$num,//*标价金额,订单总金额，单位为分，
			'spbill_create_ip'=>$_SERVER['REMOTE_ADDR'],//*终端IP
			//'time_start'=>'',//交易起始时间,格式为yyyyMMddHHmmss，
			//'time_expire'=>'',//交易结束时间，注意：最短失效时间间隔必须大于5分钟
			//'goods_tag'=>'',//商品标记，使用代金券或立减优惠功能时需要的参数，
			'notify_url'=>wx_config::PAY_RESULT_URL,//*通知地址,异步接收微信支付结果通知的回调地址，不能携带参数。
			'trade_type'=>'JSAPI',//*交易类型,取值如下：JSAPI，NATIVE，APP
			//'product_id'=>'',//商品ID，trade_type=NATIVE时（即扫码支付），此参数必传。此参数为二维码中包含的商品ID，商户自行定义。
			//'limity_pay'=>'',//指定支付方式,上传此参数no_credit--可限制用户不能使用信用卡支付
			'openid'=>$openid,//用户标识,trade_type=JSAPI时（即公众号支付），此参数必传，
			);
			/*
		商品详情：
		{"goods_detail":
			[
				{"goods_id":"iphone6s_16G","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":528800,},
				{"goods_id":"iphone6s_32G","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":608800,}
			]
		}
		///
		商品详细列表，使用Json格式，传输签名前请务必使用CDATA标签将JSON文本串保护起来。<xml><detail><![CDATA[{...}]]></detail></xml>
		goods_detail []：
		└ goods_id String 必填 32 商品的编号
		└ wxpay_goods_id String 可选 32 微信支付定义的统一商品编号
		└ goods_name String 必填 256 商品名称
		└ quantity Int 必填 商品数量
		└ price Int 必填 商品单价，单位为分
		注意：a、单品总金额应<=订单总金额total_fee，否则会导致下单失败。b、 单品单价，如果商户有优惠，需传输商户优惠后的单价
		*/
		
		
		
	}
	public function set_parem($k,$v){
		$this->parem[$k]=$v;
	}
	public function get_prepay_id(){
		$sign=$this->MakeSign($this->parem);
		$this->parem['sign']=$sign;
		$xml=$this->to_xml($this->parem);
		$unorder_xml=$this->postXmlCurl($xml, $this->apiurl);
		$unorder_arr=$this->xml_toarray($unorder_xml);
		return $unorder_arr;
	}
	
	//获取随机字符串
	public function get_noncestr($length=32){
		$str='abcdefghijklmnopqrstuvwxyz0123456789';
		$len=strlen($str)-1;
		$nonstr='';
		for($i=0;$i<$length;$i++){
			$nonstr.=substr($str,mt_rand(0,$len),1);
		}
		return $nonstr;
	}
	//生成订单号
	private function create_trande(){
		$str='YJPARTMENT-';
		$str.=self::get_noncestr(11);
		$str.=time();
		return $str;
	}
	
	
	
	/**
	 * 格式化参数格式化成url参数
	 */
	private function to_urlparams($arr){
		$buff='';
		foreach($arr as $k=>$v){$buff.=$k.'='.$v.'&';}
		return trim($buff,'&');
	}
	
	
	/**
	 * 生成签名
	 * @return 签名，本函数不覆盖sign成员变量
	 */
	public  function MakeSign($arr)
	{
		//签名步骤一：按字典序排序参数
		ksort($arr);
		$string = $this->to_urlparams($arr);
		//签名步骤二：在string后加入KEY
		$string.='&key='.wx_config::SH_KEY;
		//签名步骤三：MD5加密
		$string = md5($string);
		//签名步骤四：所有字符转为大写
		$result = strtoupper($string);
		return $result;
	}
	
	protected static function to_xml($arr){
		$xml='<xml>';
		foreach($arr as $k=>$v){
			if (is_numeric($v)){$xml.='<'.$k.'>'.$v.'</'.$k.'>';}
			else{$xml.='<'.$k.'><![CDATA['.$v.']]></'.$k.'>';}
		}
		$xml.='</xml>';
		return $xml;
	}
	
	private static function postXmlCurl($xml, $url, $second = 30)
	{		
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
		curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
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
	function xml_toarray($xml){	
		if(!$xml){
			var_dump("xml数据异常！");exit;
		}
        //将XML转为array
        //禁止引用外部xml实体
        libxml_disable_entity_loader(true);
        $this->values = json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), true);		
		return $this->values;
	
	}
	
}
?>
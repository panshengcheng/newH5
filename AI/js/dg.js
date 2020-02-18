// 手势识别文件
const URL='https://api-cn.faceplusplus.com/humanbodypp/v1/gesture';

function DG(apiKey, apiSecret){
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.baseurl = URL;

    this.dataURItoBlob = function(dataURI){
        const byteString = atob(dataURI.split(',')[1]);
        const mime =dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for(let i=0; i<byteString.length; i++){
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab],{type:mime});
    }

    this.detectGesture = function(param, success, fail){
        this.request(this.baseurl,param,success,fail);
    }

    this.request = function(url,param,success,fail){
        const formData = new FormData();
        formData.append('api_key', this.apiKey);
        formData.append('api_secret', this.apiSecret);
        for(const key in param){
            if(param.hasOwnProperty(key)){
                formData.append(key, param[key]);
            }
        }
        $.ajax({
            url:url,
            type:'POST',
            cache:false,
            data:formData,
            processData:false,
            contentType:false,
            timeout:5000,
        })
        .done(success)
        .fail(fail)
    }
}
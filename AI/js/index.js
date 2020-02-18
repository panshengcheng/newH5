const btn = document.querySelector('.btn');
const input1 = document.querySelector('#input1');
const dg = new DG(APIKEY, APISECRET);
btn.addEventListener('click', evt =>{
    input1.click();
})

input1.addEventListener('change', evt => {
    selectImage(evt.target.files[0]);
})

function chekLoading(){
    const loadingDom = document.querySelector('.loading-out');
    if(loadingDom.classList.contains('hide')){
        loadingDom.classList.remove('hide');
        loadingDom.classList.add('show');
    }else{
        loadingDom.classList.remove('show');
        loadingDom.classList.add('hide');
    }
}

function selectImage(img){
    const imgPreview = document.querySelector('.img-preview');
    const fileReader = new FileReader();
    fileReader.readAsDataURL(img);

    fileReader.onload = function(evt){
        const base64Img = evt.target.result;//获取读到的照片
        imgPreview.src = base64Img;
        const imageData = dg.dataURItoBlob(base64Img);
        startDatect(imageData);
    }
}

function startDatect(img){
    const dataPara = {
        image_file:img
    }
    chekLoading();
    setTimeout(() => {
        dg.detectGesture(dataPara, handleSuccess, handleErrror);
    }, 1500);
    
}

function handleSuccess(res){
    const textView =document.querySelector('#text');
    const {hands} = res;
    let result =`<h3>检测到${hands.length}个手势：</h3>`;
    for(const idx in hands){
        if(hands.hasOwnProperty(idx)){
            const gesture = hands[idx].gesture;
            const maxKey = getMaxKey(gesture);
            const mostPossible = getMostPossible(maxKey);
            return `<li>第${parseInt(idx)+1}个手势为${mostPossible}</li>`;
        }
    }
    textView.innerHTML = result;
    chekLoading();
    
}

function handleErrror(res){
    const textView = document.querySelector('#text');
    textView.innerHTML = res.error_message;
    chekLoading();
}

function getMaxKey(obj){
    let maxKey = '';
    let maxValue = 0;
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            const value = obj[key];
            if(value > maxValue){
                maxValue = value;
                maxKey = key;
            }
        }
    }
    return maxKey;
}

function getMostPossible(key){
    const dic = {
        'unknown':'未定义手势',
        'heart_a':'比心 A',
        'heart_b':'比心 B',
        'heart_c':'比心 C',
        'heart_d':'比心 D',
        'ok':'OK',
        'hand_open':'手张开',
        'thumb_up':'大拇指向上',
        'thumb_down':'大拇指向下',
        'rock':'ROCK',
        'namaste':'合十',
        'palm_up':'手心向上',
        'fist':'握拳',
        'index_finger_up':'食指朝上',
        'double_finger_up':'双指朝上',
        'victory':'胜利',
        'big_v':'大 V 字',
        'phonecall':'打电话',
        'beg':'作揖',
        'thanks':'感谢'
    }
    return dic[key];
}
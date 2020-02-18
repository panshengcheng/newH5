window.onload = init;

function init() {
    var mySwiper = new Swiper ('.swiper-container', {
        direation:"vertical",//垂直切换选项
        //initialSlide : 2,//初始化加载第几章图片
        speed : 300, //切换速速
          autoplay: {
              delay : 900,//自动更换时间
            
          },//可选选项，自动滑动
        //  waitForTransition : false, //默认true  等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        //  pagination: {
        //     el: '.swiper-pagination', //默认原点
        //     type : "fraction",
        //   },
        //direction: 'vertical', // 垂直切换选项
        //loop: true, // 循环模式选项
        //grabCursor : true, //鼠标移上去，变成小手样式
        //direction : "verction",//移动方向左右/垂直
        //parallax:true, //视差效果
        //setWrapperSize :true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        //centeredSlides : true, //网格居中
        //slidesPerView : 2, //根据容器中显示的数量，如果是auto 会根据图片的大小来容纳
       // freeMode : true,  //false 时只滑动一格， 为true时持续滑动
       //freeModeMomentumRatio : 4 //设置的时间越大，持续的时间越长
       //freeModeMomentumBounce : true, //动量模式下滑动的力量越大，反弹越大
       //freeModeMomentumBounceRatio : 3, //动量模式下滑动的力量越大，反弹间距越大
       //awatchSlidesProgress : true, //计算每个容器的进程
       //preventClicks : false, //防止触摸点时发生跳转 false默认
       //touchRatio : 4, //触发条
       //noSwiping : true,  //默认为false 文字区域不可以滑动
       //监听
    //    on : {
    //         init: function(){
    //             alert("这是一个监听函数");
    //             swiperAnimateCache(this); //隐藏动画元素 
    //             swiperAnimate(this); //初始化完成开始动画
    //         },
            
            //slideChangeTransitionEnd : function(){ 
                //alert("这是一个监听函数2");
                //swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            //} 
        // touchStart : function(i){
        //     alert("这是一个点击函数！");
        // }
        // touchMove : function(i){
        //     alert("这是一个点击函数,但是该函数在点滑动击后，会一直持续！");
        // }
       //},
       //effect : 'cube', // 渐入   立体展示cube  立体片状展示 coverflow   两面展示fitp
       // 如果需要分页器
       //   pagination: {
       //     el: '.swiper-pagination',
       //   },
      
       // 如果需要前进后退按钮
        //   navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        //   },
      
        // 如果需要滚动条
        //   scrollbar: {
        //     el: '.swiper-scrollbar',
        //   },
    });
    //console.log(mySwiper.virtualSize);
}

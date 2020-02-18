//创建snowFall对象
var snowFall=new snowFall(window.innerWidth,window.innerHeight,true,20);
//容器
var container;

//绑定jquery方法
jQuery.extend({
	snowFalling:function(options){
		 var defaults = {     
			//创建粒子数量，密度
			particleNo: 500,
			//粒子下拉速度
			particleSpeed:15,
			//粒子在垂直（Y轴）方向运动范围
			particleY_Range:1300,
			//粒子在垂直（X轴）方向运动范围
			particleX_Range:1000,
		    //相机离Z轴原点距离
		    zIndex:600,
		    //风力强度，正值向右，负值向左
		    wind_weight:0,
		    //摄像机视野角度
		    angle:55
		  };  
		  
		var particleImage = new Image();
		particleImage.src = "images/ParticleSmoke.png";
		var opts = $.extend(defaults, options);
		opts.particleImage=particleImage;
		opts.screenWidth=window.innerWidth;
		opts.screenHeight=window.innerHeight;
		snowFall.init(opts);
		
		container = document.createElement('div');
		document.body.appendChild(container);
		container.appendChild(snowFall.renderer.domElement );
		snowFall.snowFallChange();
	}
});
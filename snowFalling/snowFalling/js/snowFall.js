function snowFall(screenWidth,screenHeight,flag,parameter){
	this.screenWidth=screenWidth;
	this.screenHeight=screenHeight;
	this.flag=flag;
	this.parameter=parameter;
}
snowFall.prototype.init=function(opts){
		snowFall.options=opts;
//		透视相机，物体大小随距离摄像机远近改变，对比投影相机
//		相机的上方向为Y轴，右方向为X轴，沿着Z轴垂直朝里（视野角：fov； 纵横比：aspect； 相机离视最近的距离：near； 相机离视体积最远距离：far）		
		snowFall.camera = new THREE.PerspectiveCamera( opts.angle, snowFall.screenWidth / snowFall.screenHeight, 1, 10000 );
		//设置摄像机z坐标位置距离原点向外距离
		snowFall.camera.position.z = snowFall.options.zIndex;
		//创建场景
		snowFall.scene = new THREE.Scene();
		snowFall.scene.add(snowFall.camera);
		//创建渲染器
		snowFall.renderer = new THREE.CanvasRenderer();
		snowFall.renderer.setSize(snowFall.screenWidth, snowFall.screenHeight);
		//创建材料
		snowFall.material = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(snowFall.options.particleImage) } );
		
		snowFall.particles = []; 
		
		for (var i = 0; i < snowFall.options.particleNo; i++) {
			snowFall.addparticle(); 
		}
}
snowFall.prototype.loop=function(){
	for(var i = 0; i<snowFall.particles.length; i++){
		snowFall.particle = snowFall.particles[i]; 
		snowFall.particle.updatePhysics(); 
		with(snowFall.particle.position){
			if(y<-snowFall.options.particleY_Range/2){
				y+=snowFall.options.particleY_Range;
			} 
//			Z轴位置不变
			if(x>snowFall.options.screenWidth/2){
				x-=snowFall.options.screenWidth;
			}else if(x<-snowFall.options.screenWidth/2){
				x+=snowFall.options.screenWidth;
			} 
			//风力偏向效果
			x+=snowFall.options.wind_weight;
		}				
	}
	snowFall.camera.lookAt(snowFall.scene.position); 
	snowFall.renderer.render( snowFall.scene, snowFall.camera );
}

snowFall.prototype.addParticle=function(){
	snowFall.particle = new Snow(snowFall.material);
	snowFall.particle.position.x = Math.random() * snowFall.options.screenWidth *2- snowFall.options.screenWidth/2;
	snowFall.particle.position.y = Math.random() * snowFall.options.screenHeight * 2 - snowFall.options.screenHeight;
	snowFall.particle.position.z = Math.random() * snowFall.options.zIndex * 2 - snowFall.options.zIndex*1;
	snowFall.particle.scale.x = snowFall.particle.scale.y =  1;
	snowFall.scene.add( snowFall.particle );		
	snowFall.particles.push(snowFall.particle); 
}

snowFall.prototype.removeParticle=function(){
	snowFall.particle=snowFall.particles.pop();
	snowFall.scene.remove( snowFall.particle ); 
}

snowFall.prototype.parameterChange=function(){
	if(snowFall.particles.length>=500){
		snowFall.parameter=500;
	}else if(snowFall.particles.length>=200&&snowFall.particles.length<500){
		snowFall.parameter=300;
	}else if(snowFall.particles.length>=100&&snowFall.particles.length<200){
		snowFall.parameter=100;
	}else if(snowFall.particles.length>=50&&snowFall.particles.length<100){
		snowFall.parameter=50;
	}else{
		snowFall.parameter=20;
	}
}

snowFall.prototype.particlesCountChange=function(){
	snowFall.parameterChange(snowFall.particles);
	if(snowFall.flag){
		for(var j=0;j<parseInt(snowFall.parameter*Math.random());j++){
			if(snowFall.particles.length>=1500){
				snowFall.flag=false;
				return snowFall.flag;
			}
			snowFall.addParticle();
		}
	}else{
		for(var j=0;j<parseInt(snowFall.parameter*Math.random());j++){
			if(snowFall.particles.length>0){
				snowFall.removeParticle();
			}else{
				snowFall.flag=true;
			}
		}
	}
}

snowFall.prototype.snowFallChange=function(){
	var time1=setInterval( snowFall.loop, snowFall.options.particleSpeed );
		setInterval(function(){
			snowFall.options.particleNo+=parseInt(10*Math.random());
			window.clearInterval(time1); 
			snowFall.particlesCountChange();
			time1=setInterval( snowFall.loop, snowFall.options.particleSpeed);
		},3000);
}


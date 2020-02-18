var app
var input
var t = 0

function init(){
  PIXI.utils.skipHello();
	app = new PIXI.Application(
	  1000, 
	  600, 
	  { 
		antialias: true,
		backgroundColor: 0xffffff, 
		forceCanvas: false
	  }
	)
	document.getElementById('canvas-placeholder').appendChild(app.view)

	var input_style = {
		fontFamily: 'Arial',
		fontSize: '25pt',
		padding: '14px',
		width: '500px',
		color: '#26272E'
	}

	var box_styles = {
		idle: {fill: 0xE8E9F3, rounded: 16, stroke: {color: 0xCBCEE0, width: 4}},
		active: {fill: 0xE1E3EE, rounded: 16, stroke: {color: 0xABAFC6, width: 4}},
		disabled: {fill: 0xDBDBDB, rounded: 16}
	}


	input = new PIXI.TextInput(input_style,box_styles)
	input.placeholder = 'Enter your Text...'
	input.x = 500
	input.y = 300
	input.pivot.x = input.width/2
	input.pivot.y = input.height/2
	app.stage.addChild(input)

	setupDemoControls()
}





// DEMO CONTROLS

function setAnimation(on){
	console.log(input.input_width)
	if(on){
		app.ticker.add(animateLoop)
	}else{
		app.ticker.remove(animateLoop)
		t = 0
		animateLoop()
	}
}

function animateLoop(){
	input.rotation = t/50
	input.scale.x = 1+Math.sin(t/25)*0.3
	input.scale.y = 1+Math.sin(t/32)*0.2
	t++
}


function setupDemoControls(){
	document.getElementById('font').onchange = function(){
		input.setInputStyle('fontFamily',this.value)
	}
	document.getElementById('size').onchange = function(){
		input.setInputStyle('fontSize',this.value+'pt')
	}
	document.getElementById('bold').onchange = function(){
		input.setInputStyle('fontWeight',this.checked ? 'bold' : 'normal')
	}
	document.getElementById('padding').onchange = function(){
		input.setInputStyle('padding',this.value+'px')
	}
	document.getElementById('disable').onclick = function(){
		this._toggle = !this._toggle
		input.disabled = this._toggle
		this.value = this._toggle ? 'Enable' : 'Disable'
	}
	document.getElementById('animate').onclick = function(){
		this._toggle = !this._toggle
		setAnimation(this._toggle)
		this.value = this._toggle ? 'Ok, enough' : 'Animate'
	}
}


init()
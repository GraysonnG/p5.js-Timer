
particles = [];
clock = undefined;
shouldCount = false;
var pink = undefined;
var yellow = undefined;
var blue = undefined;
var colorMain = undefined;

function setup() {
	createCanvas(600,300);
	
	pink = color(255,0,255);
	yellow = color(255,200,0);
	blue = color(0,255,200);
	
	colorMain = blue;
	
	frameRate(60);
	clock = new Clock();
	clock.setTime();
}

function mouseClicked(){
	//155,170,290,20
	if(mouseX >= 155 && mouseX <= 445 && mouseY >= 170 && mouseY <= 190){
		shouldCount = !shouldCount;
		if(shouldCount == true){
			colorMain = pink;
			if(clock.getTime() > 0){
				shouldCount = false;
				colorMain = blue;
			}
			clock.setTime();
		}else{
			colorMain = yellow;
		}
		background(255);
		particles = [];
	}
}

function draw() {
	smooth();
	background(0,0,0,255);
	for(let i = 0; i < width + height; i+=25){
		stroke(alphaOfColor(colorMain, 75));//50
		strokeWeight(1);
		line(i - height, 0, i, height);
		line(i, 0, i - height, height);
	}
	
	for(let i = 0; i < 1; i++){
		
		let spawnRate = shouldCount == true ? 0.666 : 0.90;
		
		if(random(0,1) > spawnRate){
			let p = new Particle();
			particles.push(p);
		}
	}
	
	for(let i = particles.length - 1; i >= 0; i--){
		particles[i].update();
		particles[i].show();
		if(particles[i].finished()){
			particles.splice(i, 1);
		}
	}
	
	stroke(255);
	strokeWeight(1);
	fill(alphaOfColor(colorMain, 100));//25
	rect(155,170,290,20);
	
	stroke(colorMain);
	strokeWeight(5)
	line(0, 0, width, 0);
	line(0, 0, 0, height);
	line(width - 1, height - 1, width - 1, 0);
	line(width - 1, height - 1, 0, height - 1);
	
	clock.show(shouldCount);
}

function alphaOfColor(c1, alpha){
	let r = c1.levels[0];
	let g = c1.levels[1];
	let b = c1.levels[2];
	let a = c1.levels[3];
	var c2 = color(r, g, b, alpha);
	return c2;
}
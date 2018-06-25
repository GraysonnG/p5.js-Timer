class Particle{
	constructor(){
		this.x = random(0, width);
		this.y = height;
		this.vx = 0;
		this.vy = random(-4, -2);
		this.alpha = 255;
		this.lifeSpan = 255;
		this.maxLifeSpan = 255;
		this.trailLength = 3;
	}
	
	finished() {
		return this.y < -5;
	}
	
	update() {
		this.x += this.vx;
		this.y += this.vy;
		this.lifeSpan -= 1;
	}
	
	show() {
		/* for(let i = this.trailLength - 1; i >= 0; i--){
			stroke(alphaOfColor(colorMain, 255 - (255 * (i / 4))));
			strokeWeight(2);
			line(this.x, this.y - ((this.vy * (i)) * 10),this.x, this.y - ((this.vy * (i + 1)) * 10));
		}
		noStroke();
		fill(255, 255, 255, 255);
		ellipse(this.x, this.y, 4); */
		noStroke();
		fill(colorMain);
		rect(this.x,this.y, 5, 5);
	}
}
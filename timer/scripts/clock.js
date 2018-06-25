
class Clock{
	constructor(){
		this.startTime = millis()
		this.currentTime = millis();
	}
	
	setTime(){
		this.startTime = millis();
		this.currentTime = millis();
	}
	
	getTime(){
		return this.currentTime - this.startTime;
	}
	
	show(count){
		if(count == true){
			this.currentTime = millis();
		}
		let timeShownMillis = Math.round(this.currentTime - this.startTime);
		fill(255);
		stroke(100);
		strokeWeight(1);
		textAlign(CENTER, CENTER);
		textFont("Courier");
		textSize(50);
		
		let tenth = Math.floor(timeShownMillis / 100);
		let sec = Math.floor(tenth / 10);
		let min = Math.floor(sec / 60);
		let hour = Math.floor(min / 60);
		
		tenth = tenth % 10;
		sec = sec % 60;
		min = min % 60;
		hour = hour % 24;
		
		sec = sec < 10 ? "0" + sec : sec;
		min = min < 10 ? "0" + min : min;
		hour = hour < 10 ? "0" + hour : hour;
		
		rect()
		text(hour + ":" + min + ":" + sec + "." + tenth, width / 2, height/2);
	}
}
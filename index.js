function play() {
	myAudio = new Audio("https://pnppl.github.io/art/loop.mp3"); 
	myAudio.ontimeupdate= function(i) {
	  if((this.currentTime / this.duration)>0.80){
		this.currentTime = 0;
		this.play();
	  }
	};
	myAudio.play();
}
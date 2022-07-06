let n = 0
function removeEffect(){
		
	if(n === 1){
	location.reload();
	n = 0
	}
	
	if(n === 0){
	var crt = document.querySelector(".crt");
	var glow = document.querySelector(".glow");
	crt.classList.remove("crt");
	glow.classList.remove("glow");
	n = 1
	}
}
	
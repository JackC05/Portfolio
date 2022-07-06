
/*The function making the crt effect go away*/

let n = 0
function removeEffect(){
	if(n === 1){
	location.reload();
	n = 0
	}
	
	if(n === 0){
	var crt = document.querySelector(".crt");
	crt.classList.remove("crt");
	n = 1
	}
}
	
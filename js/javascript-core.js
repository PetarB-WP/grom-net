function searchShow(id) {
	var x = document.getElementById(id);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else { 
		x.className = x.className.replace(" w3-show", "");
	}
}

// console.log(sideBar); 
		
function w3_open_navbar(){
	
	var sideBar = document.getElementById("sideBar");
	var overlayBg = document.getElementById("myOverlay");
	
	if (sideBar.className.indexOf("w3-show") == -1){
		sideBar.className += " w3-show";
		overlayBg.className += " w3-show";
	} else {
		sideBar.className = sideBar.className.replace(" w3-show", "");
		overlayBg.className = overlayBg.className.replace(" w3-show", "");
	}
}
	
function badgeIncrease(badge){
	var card = document.getElementById(badge);
	card.classList.remove("badge-decrease");
	card.classList.add("badge-increase");
}
function badgeDecrease(badge){
	var card = document.getElementById(badge);
	card.classList.remove("badge-increase");
	card.classList.add("badge-decrease");
}























(function()
{
	//automatically called as soon as the javascript is loaded
	window.addEventListener("load", main);
}());

function main(){
	var gold = 0 + parseInt(localStorage.getItem("gold"));
	let spn = document.querySelector("#gold_counter");
	spn.innerHTML = gold;

	document.getElementById("goback").addEventListener("click", backToMap);
	document.getElementById("jogar").addEventListener("click", gotoNivel);
}

function backToMap(ev){
	location.href = "../html/map.html";
}

function gotoNivel(ev){
	localStorage.setItem("nivel", 2);
	location.href = "../html/main.html";
}
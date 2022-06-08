(function()
{
	//automatically called as soon as the javascript is loaded
	window.addEventListener("load", main);
}());

function main(){
	document.getElementById("mapa").addEventListener("click", gotoMapa);
	document.getElementById("creditos").addEventListener("click", gotoCreditos);
	document.getElementById("definicoes").addEventListener("click",gotoDefinicoes);
	document.getElementById("ajuda").addEventListener("click", gotoAjuda);
}

function gotoDefinicoes(ev){
	console.log(1);
	localStorage.setItem("previous", "menu_principal");
	location.href = "../html/def.html";
}

function gotoMapa(ev){
	console.log(2);
	location.href = "../html/map.html";
}

function gotoAjuda(ev){
	console.log(3);
	location.href = "../html/ajuda.html";
}

function gotoCreditos(ev){
	console.log(4);
	location.href = "../html/credits.html";
}
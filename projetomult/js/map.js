(function()
{
	//automatically called as soon as the javascript is loaded
	window.addEventListener("load", main);
}());

function main(){
	var gold;

	if (localStorage.getItem("gold") === null) {
  		gold = 0;
	}
	else{
		gold = parseInt(localStorage.getItem("gold"));
	}

	let spn = document.querySelector("#gold_counter");
	spn.innerHTML = gold;

	document.getElementById("goback").addEventListener("click", backToMain);
	document.getElementById("godef").addEventListener("click", backToDef);

	var gotoShop = document.getElementById("goshop");
	gotoShop.onclick = function (){
		localStorage.setItem("gold", gold);
		location.href = "../html/shop.html";
	}

	var gotoI1 = document.getElementById("isl1");
	gotoI1.onclick = function (){
		localStorage.setItem("gold", gold);
		location.href = "../html/kingdom.html";
	}

	var gotoI2 = document.getElementById("isl2");
	gotoI2.onclick = function (){
		localStorage.setItem("gold", gold);
		location.href = "../html/desert.html";;
	}

	var gotoI3 = document.getElementById("isl3");
	gotoI3.onclick = function (){
		localStorage.setItem("gold", gold);
		location.href = "../html/sherbet.html";
	}

	var gotoI4 = document.getElementById("isl4");
	gotoI4.onclick = function (){
		localStorage.setItem("gold", gold);
		location.href = "../html/skulls.html";
	}

	var gotoI5 = document.getElementById("isl5");
	gotoI5.onclick = function (){
		localStorage.setItem("gold", gold);
		location.href = "../html/blackhole.html";
	}
}

function backToMain(ev){
	location.href = "../html/menu_principal.html";
}

function backToDef(ev){
	localStorage.setItem("previous", "map");
	location.href = "../html/def.html";
}
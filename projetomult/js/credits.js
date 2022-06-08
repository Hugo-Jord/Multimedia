"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var elAnim = document.getElementById("credits");
	document.getElementById("goback").addEventListener("click", backToMain);
}

function backToMain(ev){
	location.href = "../html/menu_principal.html";
}
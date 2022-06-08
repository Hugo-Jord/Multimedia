(function()
{
	//automatically called as soon as the javascript is loaded
	window.addEventListener("load", main);
}());

function main(){
	document.getElementById("goback").addEventListener("click", backToMain);
	document.getElementById("resumo").addEventListener("click", resumoHandler);
	document.getElementById("objetivo").addEventListener("click", objetivoHandler);
	document.getElementById("controlos").addEventListener("click", controlosHandler);
}

function backToMain(ev){
	location.href = "../html/menu_principal.html";
}

function resumoHandler(ev){
	var modal = document.getElementById("ModalRes");
	var span = document.getElementsByClassName("close res")[0];
	modal.style.display = "block";
	span.onclick = function() {
  		modal.style.display = "none";
	}
	window.onclick = function(event) {
  		if (event.target == modal) {
    		modal.style.display = "none";
  		}
	}
}

function objetivoHandler(ev){
	var modal = document.getElementById("ModalObj");
	var span = document.getElementsByClassName("close obj")[0];
	modal.style.display = "block";
	span.onclick = function() {
  		modal.style.display = "none";
	}
	window.onclick = function(event) {
  		if (event.target == modal) {
    		modal.style.display = "none";
  		}
	}
}

function controlosHandler(ev){
	var modal = document.getElementById("ModalCtrl");
	var span = document.getElementsByClassName("close ctrl")[0];
	modal.style.display = "block";
	span.onclick = function() {
  		modal.style.display = "none";
	}
	window.onclick = function(event) {
  		if (event.target == modal) {
    		modal.style.display = "none";
  		}
	}
}

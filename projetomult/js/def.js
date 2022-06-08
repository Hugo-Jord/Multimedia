(function()
{
	//automatically called as soon as the javascript is loaded
	window.addEventListener("load", main);
}());

function main(){
	var easy = document.getElementById("normal");
	easy.style.backgroundColor="yellow";
	
	document.getElementById("normal").addEventListener("click", difficultyHandlerNormal);
	document.getElementById("dificil").addEventListener("click", difficultyHandlerHard);
	document.getElementById("goback").addEventListener("click", backToPrevious);
	document.getElementById("delete").addEventListener("click", deleteSaveDataHandler);

	var slider = document.getElementById("myRange");
	slider.addEventListener("click", audio);
	var output = document.getElementById("demo");
	output.innerHTML = slider.value; 

	slider.oninput = function() {
  		output.innerHTML = this.value;
	}


}

function audio(ev){
	var slider = document.getElementById("myRange");
	var valor = slider.value;
	var audio = document.getElementById("audio");
	audio.volume = valor/100;
}

function backToPrevious(ev){
	var previous = localStorage.getItem("previous");
	location.href = "../html/" + previous + ".html";
}

function difficultyHandlerHard(ev){
	var hard = document.getElementById("dificil");
	hard.style.backgroundColor="yellow";
	var easy = document.getElementById("normal");
	easy.style.backgroundColor="grey"
}

function difficultyHandlerNormal(ev){
	var easy = document.getElementById("normal");
	easy.style.backgroundColor="yellow"
	var hard = document.getElementById("dificil");
	hard.style.backgroundColor="grey";
}

function deleteSaveDataHandler(ev){
	/*apagar dados salvos, mas tem que aparecer um warning antes*/
	var gold = 0;
	localStorage.setItem("gold",gold);

}
(function()
{
	//automatically called as soon as the javascript is loaded
	window.addEventListener("load", main);
}());

function main(){
	var gold = parseInt(localStorage.getItem("gold"));
	let spn = document.querySelector("#gold_counter");
	spn.innerHTML = gold;

	document.getElementById("goback").addEventListener("click", backToMap);
	document.getElementById("damageUp").addEventListener("click", damage);
	document.getElementById("speedUp").addEventListener("click", speed);
	document.getElementById("defenseUp").addEventListener("click", defense);
	document.getElementById("rotationUp").addEventListener("click", rotationUp);
	document.getElementById("protectorShield").addEventListener("click", shield);
	document.getElementById("hpUp").addEventListener("click", hp);
	
	document.getElementById("slot1").addEventListener("click",item1);
	document.getElementById("slot2").addEventListener("click",item2);
	document.getElementById("clear").addEventListener("click",clear);

	document.getElementById("buy").addEventListener("click", purchasing);
}

function backToMap(ev){
	location.href = "../html/map.html";
}
function damage(ev){
	disable();
	var x=document.getElementById("damageBoost");
	var z = document.getElementById("damageUp");
	var y=document.getElementById("damageUp2");
	if(document.getElementById("choice").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice"));
		localStorage.setItem("item1", "damage");
	}
	else if(document.getElementById("choice2").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice2"));
		localStorage.setItem("item2", "damage");
	}
	x.style.display = "inline";
}
function speed(ev){
	disable();
	var x=document.getElementById("speedBoost");
	var z = document.getElementById("speedUp");
	var y=document.getElementById("speedUp2");
	if(document.getElementById("choice").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice"));
		localStorage.setItem("item1", "speed");
	}
	else if(document.getElementById("choice2").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice2"));
		localStorage.setItem("item2", "speed");
	}
		x.style.display = "inline";
}
function defense(ev){
	disable();
	var x=document.getElementById("defenseBoost");
	var z = document.getElementById("defenseUp");
	var y=document.getElementById("defenseUp2");
	if(document.getElementById("choice").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice"));
		localStorage.setItem("item1", "defense");
	}
	else if(document.getElementById("choice2").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice2"));
		localStorage.setItem("item2", "defense");
	}
		x.style.display = "inline";
}
function rotationUp(ev){
	disable();
	var x=document.getElementById("rotationBoost");
	var z = document.getElementById("rotationUp");
	var y=document.getElementById("rotationUp2");
	if(document.getElementById("choice").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice"));
		localStorage.setItem("item1", "rotation");
	}
	else if(document.getElementById("choice2").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice2"));
		localStorage.setItem("item2", "rotation");
	}
		x.style.display = "inline";
}

function shield(ev){
	disable();
	var x=document.getElementById("shield");
	var z = document.getElementById("protectorShield");
	var y=document.getElementById("protectorShield2");
	if(document.getElementById("choice").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice"));
		localStorage.setItem("item1", "shield");
	}
	else if(document.getElementById("choice2").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice2"));
		localStorage.setItem("item2", "shield");
	}
		x.style.display = "inline";
}
function hp(ev){
	disable();
	var x=document.getElementById("hp");
	var z = document.getElementById("hpUp");
	var y=document.getElementById("hpUp2");
	if(document.getElementById("choice").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice"));
		localStorage.setItem("item1", "hp");
	}
	else if(document.getElementById("choice2").style.display == "block" && z.style.opacity == "1"){
		switch_simbols(y,document.getElementById("choice2"));
		localStorage.setItem("item2", "hp");
	}
		x.style.display = "inline";
}

function buyhover(ev){
	var x=document.getElementById("buy");
	if(gold>=5000){
		x.style.backgroundColor="yellow";
	}
}

function purchasing(gold){
	var x=document.getElementById("buy");
	var gold = parseInt(localStorage.getItem("gold"));
	let spn = document.querySelector("#gold_counter");
	if (gold >= 5000){
		
		/*aparece uma informação a dizer que comprou com sucesso*/
		if(document.getElementById("damageBoost").style.display == "inline" && document.getElementById("damageUp").style.opacity != 1){
			document.getElementById("damageUp").style.opacity = "100%";
			gold = gold  - 5000;
		}
		else if(document.getElementById("defenseBoost").style.display == "inline" && document.getElementById("defenseUp").style.opacity != 1){
			document.getElementById("defenseUp").style.opacity = "100%";
			console.log(document.getElementById("defenseUp").style.opacity);
			gold = gold  - 5000;
		}
		else if(document.getElementById("speedBoost").style.display == "inline" && document.getElementById("speedUp").style.opacity != 1){
			document.getElementById("speedUp").style.opacity = "100%";
			gold = gold  - 5000;
		}
		else if(document.getElementById("rotationBoost").style.display == "inline" && document.getElementById("rotationUp").style.opacity != 1){
			document.getElementById("rotationUp").style.opacity = "100%";
			gold = gold  - 5000;
		}
		else if(document.getElementById("hp").style.display == "inline" && document.getElementById("hpUp").style.opacity != 1){
			document.getElementById("hpUp").style.opacity = "100%";
			gold = gold  - 5000;
		}
		else if(document.getElementById("shield").style.display == "inline" && document.getElementById("protectorShield").style.opacity != 1){
			document.getElementById("protectorShield").style.opacity = "100%";
			gold = gold  - 5000;
		}
		spn.innerHTML = gold;
		localStorage.setItem("gold", gold);
	}
	else{
		/*logico*/
	}
}

function disable(){
	document.getElementById("hp").style.display = "none";
	document.getElementById("speedBoost").style.display = "none";
	document.getElementById("defenseBoost").style.display = "none";
	document.getElementById("rotationBoost").style.display = "none";
	document.getElementById("shield").style.display = "none";
	document.getElementById("damageBoost").style.display = "none";
}

function disable_equipped(p) {
	if(p == document.getElementById("choice")){
		document.getElementById("slot1").style.display = "none";
	}
	else{
		document.getElementById("slot2").style.display = "none";
	}
}

function item1(ev){
	document.getElementById("slot1").style.opacity = "1"
	document.getElementById("slot2").style.opacity = "0.5";
	document.getElementById("choice").style.display = "block";
	document.getElementById("choice2").style.display = "none";
}
function item2(ev){
	document.getElementById("slot1").style.opacity = "0.5"
	document.getElementById("slot2").style.opacity = "1";
	document.getElementById("choice").style.display = "none";
	document.getElementById("choice2").style.display = "block";
}

function switch_simbols(y,p){
	disable_equipped(p)
	if(p == document.getElementById("choice")){
		 y.style.left = "40%";
		 y.style.display = "inline-block";
		 document.getElementById("choice").style.display="none";
	}
	else{
		document.getElementById("choice2").style.display="none";
		 y.style.left = "46%";
		 y.style.display = "inline-block";
	}
}

function clear(ev){
	document.getElementById("hpUp2").style.display = "none";
	document.getElementById("speedUp2").style.display = "none";
	document.getElementById("defenseUp2").style.display = "none";
	document.getElementById("rotationUp2").style.display = "none";
	document.getElementById("protectorShield2").style.display = "none";
	document.getElementById("damageUp2").style.display = "none";
	document.getElementById("choice").style.display = "none";
	document.getElementById("choice2").style.display = "none";
	document.getElementById("slot1").style.display = "block";
	document.getElementById("slot2").style.display = "block";
}
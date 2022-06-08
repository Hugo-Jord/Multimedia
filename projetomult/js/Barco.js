class Barco{
	constructor(img, x, y, maxSpeed, rotateSpeed, cannonBallRange, vida){
		//Coordinates
		this.x = x;
		this.y = y;
		//Speeds
		this.maxSpeed = maxSpeed;
		this.speed = 0.1;
		this.currentSpeed = 0;
		//Rotation
		this.rotateSpeed = rotateSpeed;
		this.angle = 0;

		// Shooting Cannon
		this.cannonBallSpeed = 5;
		this.cannonBallRange = 2500;//cannonBallRange;
		this.cannonBallList = [];
		this.cooldown = 0;
		this.maxcooldown = 5000;

		//Player Model
		this.playerModel = img; 	

		this.imageData = this.functionGetImageData(img);
		//Other
		this.height = this.playerModel.naturalHeight;
		this.width = this.playerModel.naturalWidth;
		this.vida = vida;
		this.vidamax=vida;
		this.xint=0;
		this.yint=0;

	}


	draw(ctx){

		this.a = Math.floor(this.x+this.width/2);
		this.b = Math.floor(this.y+this.height/2);
		ctx.save();
		ctx.translate(this.a, this.b);

		/*ctx.fillStyle = "black";
		ctx.globalAlpha = 0.5;
		ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);*/

		ctx.rotate(this.angle*Math.PI/180);
		
		this.angle = this.angle%360;
		if (this.angle<0){
			this.angle=360+this.angle;
		}
		
		ctx.drawImage(this.playerModel, -this.width/2, -this.height/2);
		this.imageData = this.functionGetImageData(this.playerModel)
		ctx.restore();


		for(let i=0; i<this.cannonBallList.length; i++){
			if(this.cannonBallList[i].range > this.cannonBallRange){
				this.cannonBallList.splice(i, 1);
			}else{
				this.cannonBallList[i].draw();
			}
		}
	}
	removeCanhao(i){
		this.cannonBallList.splice(i, 1);
	}

	// MOVIMENTO

	moveForward(){
		if(this.currentSpeed < this.maxSpeed){
			this.currentSpeed += this.speed;
		}
	}

	moveBackwards(){
		if( this.currentSpeed > 0){
			this.currentSpeed -= this.speed;
		}
	}
	moveRight(){
		this.rotateSpeed = Math.abs(this.rotateSpeed);
		this.angle +=this.rotateSpeed;
	}

	moveLeft(){
		this.rotateSpeed = -Math.abs(this.rotateSpeed);
		this.angle +=this.rotateSpeed;
	}

	// DISPARAR
	shootLeft(){
		if( this.cooldown >= this.maxcooldown){
			this.cooldown = 0;
		}else{
			return;
		}
		var nova = new cannonBall(this.cannonBallSpeed, this.cannonBallRange, this.angle-90, this.x+this.width/3, this.y+this.height/3);
		this.cannonBallList.push(nova);
	}

	shootRight(){
		if( this.cooldown >= this.maxcooldown){
			this.cooldown = 0;
		}else{
			return;
		}

		var nova = new cannonBall(this.cannonBallSpeed, this.cannonBallRange, this.angle+90, this.x+this.width/3, this.y+this.height/3);
		this.cannonBallList.push(nova);
	}
	get getCanhao(){
		return this.cannonBallList;
	}
	// COLLISION
	get colisonX(){
		return Math.cos( (this.angle-90) * Math.PI / 180) * this.currentSpeed;
	}
	get colisonY(){
		return Math.sin( (this.angle-90) * Math.PI / 180) * this.currentSpeed;
	}

	functionGetImageData(img){
		//canvas aux

		var canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;

		var ctx = canvas.getContext("2d");

		this.a = (this.width/2);
		this.b = (this.height/2);
		ctx.save();
		ctx.translate(this.a, this.b);
		this.angle = this.angle%360;
		if (this.angle<0){
			this.angle=360+this.angle;
		}
		ctx.rotate(this.angle*Math.PI/180);



		ctx.drawImage(img, -this.width/2, -this.height/2, this.width, this.height);
		ctx.restore();

		//ctx.drawImage(img, 0, 0, this.width, this.height);
		//var imgData = ctx.getImageData(0,0,this.width,this.height);
		var imgData = ctx.getImageData(0, 0, 47, 47);

		return imgData; //array com representacao de todos os pixeis da imagem
	}

	intersectPixelCheck(shape){
		//intersectBoundingBox chamar
		var xmin = Math.max(this.x, shape.x);
		var xmax = Math.min(this.x + this.width, shape.x + shape.width);
		var ymin = Math.max(this.y, shape.y);
		var ymax = Math.min(this.y + this.height, shape.y + shape.height); //vars de um retangulo

		//percorrer todos os pixeis da bounding box
		for(let y = ymin; y <= ymax; y++){
			for(let x = xmin; x <= xmax; x++){
				//retangulo intersecao das duas bounding boxes
				var xLocal = Math.round(x - this.x);
				var yLocal = Math.round(y - this.y);
				var xLocal2 = Math.round(x - shape.x);
				var yLocal2 = Math.round(y - shape.y);

				var pixelNum = xLocal + yLocal * this.width; 
				var pixelNum2 = xLocal2 + yLocal2 * shape.width;
				//cada pixel tem um valor de R, G, B e A ; nós queremos o de A
				//para tal fazemos:
				var pixelPostArrayS1 = pixelNum * 4 + 3; 
				var pixelPostArrayS2 = pixelNum2 * 4 + 3;

				if(this.imageData.data[pixelPostArrayS1] && shape.imageData.data[pixelPostArrayS2]){
					this.xint=x;
					this.yint=y;
					return true;
				}
			}
		}
		return false;
	}
	intersectPixelCheck2(shape){
		//intersectBoundingBox chamar
		var xmin = Math.max(this.x, shape.x);
		var xmax = Math.min(this.x + this.width, shape.x + shape.width);
		var ymin = Math.max(this.y, shape.y);
		var ymax = Math.min(this.y + this.height, shape.y + shape.height); //vars de um retangulo

		//percorrer todos os pixeis da bounding box
		for(let y = ymin; y <= ymax; y++){
			for(let x = xmin; x <= xmax; x++){
				//retangulo intersecao das duas bounding boxes
				var xLocal = Math.round(x - this.x);
				var yLocal = Math.round(y - this.y);
				//var xLocal2 = Math.round(x - shape.x);
				//var yLocal2 = Math.round(y - shape.y);

				var pixelNum = xLocal + yLocal * this.width;
				//var pixelNum2 = xLocal2 + yLocal2 * shape.width;
				//cada pixel tem um valor de R, G, B e A ; nós queremos o de A
				//para tal fazemos:
				var pixelPostArrayS1 = pixelNum * 4 + 3;
				//var pixelPostArrayS2 = pixelNum2 * 4 + 3;

				if(this.imageData.data[pixelPostArrayS1]){
					this.xint=x;
					this.yint=y;
					return true;
				}
			}
		}
		return false;
	}

	intersect(other){
		if ((this.x<other.x+other.width)&&(this.x+this.width>other.x)&&(this.y<other.y+other.height)&&(this.y+this.height>other.y)){
			return true;
		}
		else{
			return false;
		}

	}
	intersect2(other){
		//console.log(other.x);
		if ((this.x<other.x+other.width*2)&&(this.x+this.width*2>other.x)&&(this.y<other.y+other.height*2)&&(this.y+this.height*2>other.y)){
			return true;
		}
		else{
			return false;
		}

	}
	travar(){
		this.currentSpeed=-0.1;
	}
	bateu(){
		this.vida=this.vida-0.1;
	}
	get getVida(){
		return this.vida;
	}
	get getVidaMax(){
		return this.vidamax;
	}
	colisao(x,y){
		this.currentSpeed = Math.floor(this.currentSpeed/2);
		this.x += 5*x;
		this.y += 5*y;
	}
	levouCanhao(verification){
		var invensibility = localStorage.getItem("invensibility");
		var defense = localStorage.getItem("defenseBoost");
		var damage = localStorage.getItem("damageBoost");

		if(invensibility == "1" && verification == "player"){
			localStorage.setItem("invensibility", 0);
		}
		else{
			if(defense == "1" && verification == "player"){
				this.vida = this.vida - 10;
			}
			else if(damage == "1" && verification == "inimigos"){
				this.vida = this.vida - 30;
			}
			else {
				this.vida = this.vida - 20;
			}
		}
	}


	// GETS
	get getXInt(){
		return this.xint;
	}
	get getYInt(){
		return this.yint;
	}
	get getX(){
		return this.x;
	}
	get getY(){
		return this.y;
	}
}
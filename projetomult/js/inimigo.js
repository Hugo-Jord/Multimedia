class Inimigo extends Barco{

	constructor(img, x, y, maxSpeed, rotateSpeed, cannonBallRange, vida){

		super(img, x, y, maxSpeed, rotateSpeed, cannonBallRange, vida);
		this.dificuldade=0;
		this.distancia=1;
	
	}
	moveBackwards(){
		if( this.currentSpeed > 0.1){
			this.currentSpeed -= this.speed;
		}
	}
	update(deltaTime,player){
		if (this.vida>0) {
			if (!deltaTime) return;
			if (this.distancia == 1) {
				this.moveForward();
			} else {
				this.moveBackwards();
			}
			this.cooldown += deltaTime;
			for (let i = 0; i < this.cannonBallList.length; i++) {
				this.cannonBallList[i].update(deltaTime);
			}
			this.verificaCoordenadas(player);
			if (this.currentSpeed == 0) return;

			this.x += Math.cos((this.angle - 90) * Math.PI / 180) * this.currentSpeed;
			this.y += Math.sin((this.angle - 90) * Math.PI / 180) * this.currentSpeed;
		}
	}
	verificaCoordenadas(player){
		var x = player.getX;
		var y = player.getY;
		var cat1=Math.abs(x-this.x);
		var cat2=Math.abs(y-this.y);
		var dist=Math.sqrt(cat1*cat1+cat2*cat2);
		this.verificaVelocidade(dist);
		this.calcAng(dist,cat1,cat2,x,y);

	}
	calcAng(dist,cat1,cat2,x,y){
		var sen = cat1/dist;
		var angulo = Math.asin(sen)*180/Math.PI;
		if (x<this.x){
			if (y<this.y){
				this.direciona3(180-angulo,360-angulo);	//certo
				if (this.distancia!=1) {
					this.dispara(180-angulo);
				}
			}else{
				this.direciona(angulo,180+angulo);	//certo
				if (this.distancia!=1) {
					this.dispara2(180+angulo);
				}
			}
		}else{
			if (y<this.y){
				this.direciona2(angulo,180+angulo);	//
				if (this.distancia!=1) {
					this.dispara(180+angulo);
				}

			}else{
				this.direciona4(180-angulo,360-angulo);	//certo
				if (this.distancia!=1) {
					this.dispara2(180-angulo);
				}
			}
		}
	}
	dispara(ang1){
		if ((this.angle<(ang1+100)%360)&&(this.angle>(ang1+80)%360)){
			this.shootRight();
		}
		else if ((this.angle>(ang1-100)%360)&&(this.angle<(ang1-80)%360)){
			this.shootLeft();
		}
	}
	dispara2(ang1){
		if ((this.angle<(ang1+100)%360)&&(this.angle>(ang1+80)%360)){
			this.shootLeft();
		}
		else if ((this.angle>(ang1-100)%360)&&(this.angle<(ang1-80)%360)){
			this.shootRight();
		}
	}
	direciona(ang1,ang2){
		if (this.distancia==1){
			if ((this.angle>=ang1)&&(this.angle<ang2)){
				this.moveRight();
			}else{
				this.moveLeft();
			}
		}
		else{
			if ((this.angle>=((ang1+90)%360))&&(this.angle<((ang2+90)%360))){
				this.moveRight();
				//this.shootRight();
			}else{
				this.moveLeft();
				//this.shootLeft();
			}
		}
	}
	direciona3(ang1,ang2){
		if (this.distancia==1){
			if ((this.angle>=ang1)&&(this.angle<ang2)){
				this.moveRight();
			}else{
				this.moveLeft();
			}
		}
		else{
			if ((this.angle<((ang1+90)%360))&&(this.angle>=((ang2+90)%360))){
				this.moveRight();
				//this.shootRight();
			}else{
				this.moveLeft();
				//this.shootLeft();
			}
		}
	}
	direciona2(ang1,ang2){
		if (this.distancia==1){
			if ((this.angle>=ang1)&&(this.angle<ang2)){
				this.moveLeft();
			}else{
				this.moveRight();
			}
		}
		else{
			if ((this.angle>=((ang1+90)%360))&&(this.angle<((ang2+90)%360))){
				this.moveLeft();
				//this.shootLeft();
			}else{
				this.moveRight();
				//this.shootRight();
			}
		}
	}
	direciona4(ang1,ang2){
		if (this.distancia==1){
			if ((this.angle>=ang1)&&(this.angle<ang2)){
				this.moveLeft();
			}else{
				this.moveRight();
			}
		}
		else{
			if ((this.angle<((ang1+90)%360))&&(this.angle>=((ang2+90)%360))){
				this.moveLeft();
				//this.shootLeft();
			}else{
				this.moveRight();
				//this.shootRight();
			}
		}
	}
	verificaVelocidade(dist){
		if (dist<100){
			this.distancia=0;
		}else{
			this.distancia=1;
		}
	}
	desviaAliado(aliado){
		this.distancia=1;
		if (this.x < aliado.x+aliado.width) {
			if (this.y<aliado.y+aliado.height){
				this.virou(aliado);
			}else if (this.y+this.height>=aliado.y){
				this.virou2(aliado);
			}
		}
		else if (this.x+this.width>=aliado.x){
			if (this.y<aliado.y+aliado.height){
				this.virou(aliado);
			}else if (this.y+this.height>=aliado.y){
				this.virou2(aliado);
			}
		}
	}
	desviaObjetos(ob){
		if (this.x < ob.x+ob.width) {
			if (this.y<ob.y+ob.height){
				if (this.angle<=359 && this.angle>=315){
					this.moveRight();
				}else if (this.angle>270 && this.angle<315){
					this.moveLeft();
				}
			}else if (this.y+this.height>=ob.y){
				if (this.angle<=270 && this.angle>=225){
					this.moveRight();
				}else if (this.angle>180 && this.angle<225){
					this.moveLeft();
				}
			}
		}
		else if (this.x+this.width>=ob.x){
			if (this.y<ob.y+ob.height){
				if (this.angle<45 && this.angle>0){
					this.moveLeft();
				}else if (this.angle>=45 && this.angle<90){
					this.moveRight();
				}
			}else if (this.y+this.height>=ob.y){
				if (this.angle<135 && this.angle>90){
					this.moveLeft();
				}else if (this.angle>=135 && this.angle<180){
					this.moveRight();
				}
			}
		}
	}
	virou(aliado){
		if (this.angle>=180 && this.angle<=359){
			this.moveLeft();
		}
		else{
			this.moveRight();
		}
		if (aliado.angle>=180 && aliado.angle<=359){
			aliado.moveRight();
		}
		else{
			aliado.moveLeft();
		}
	}
	virou2(aliado){
		if (this.angle>=180 && this.angle<=359){
			this.moveRight();
		}
		else{
			this.moveLeft();
		}
		if (aliado.angle>=180 && aliado.angle<=359){
			aliado.moveLeft();
		}
		else{
			aliado.moveRight();
		}
	}
}
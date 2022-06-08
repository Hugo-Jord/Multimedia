class Player extends Barco{

	constructor(img, x, y, maxSpeed, rotateSpeed, cannonBallRange, vida){

		super(img, x, y, maxSpeed, rotateSpeed, cannonBallRange, vida);
		this.morte=" ";
	}
	
	update(deltaTime){
		if (this.vida>0) {
			if (!deltaTime) return;
			this.cooldown += deltaTime;
			for (let i = 0; i < this.cannonBallList.length; i++) {
				this.cannonBallList[i].update(deltaTime);
			}

			if (this.currentSpeed == 0) return;

			//var vento_x =  Math.abs(Math.cos( (this.angle-90) * Math.PI / 180) * vento);
			this.x += Math.cos((this.angle - 90) * Math.PI / 180) * this.currentSpeed;
			this.y += Math.sin((this.angle - 90) * Math.PI / 180) * this.currentSpeed;
		}
	}

	dash(){
		
	}

	// DEVIOS
	desvia(ctx){
		if (this.x<80){
			if (this.angle==270){
				if (this.y>=300){
					this.moveRight();
				}else if (this.y<300){
					this.moveLeft();
				}
			}else if (this.angle>270){
				this.moveRight();
			}else if (this.angle>180){
				this.moveLeft();
			}
		}
		if (this.y<80){
			if (this.angle==0){
				if (this.x>=400){
					this.moveLeft();
				}else if (this.x<400){
					this.moveRight();
				}
			}else if (this.angle>270){
				this.moveLeft();
			}else if (this.angle<90){
				this.moveRight();
			}
		}
		if (this.x>700){
			if (this.angle==90){
				if (this.y>=300){
					this.moveLeft();
				}else if (this.y<300){
					this.moveRight();
				}
			}else if ((this.angle>0)&&(this.angle<90)){
				if (this.y>80){
					this.moveLeft();
				}
			}else if ((this.angle<180)&&(this.angle>90)){
				this.moveRight();
			}
		}
		if (this.y>500){
			if (this.angle==180){
				if (this.x>=400){
					this.moveRight();
				}else if (this.x<400){
					this.moveLeft();
				}
			}else if ((this.angle<270)&&(this.angle>180)){
				this.moveRight();
			}else if ((this.angle>90)&&(this.angle<180)){
				this.moveLeft();
			}
		}
	}
	desviaCantos(ctx){
		if ((this.x<80)&&(this.y<80)){	//verifica se nao bate nos cantos
			this.desviaCanto(315,360,270);
		}else if((this.x<80)&&(this.y>500)){
			this.desviaCanto(225,270,180);
		}else if((this.x>700)&&(this.y<80)){
			this.desviaCanto(45,90,0);
		}else if((this.x>700)&&(this.y>500)){
			this.desviaCanto(135,180,90);
		}
	}

	desviaCanto(ang1,ang2,ang3){
		//console.log("desvia canto " + ang1 + " " + ang2 + " " + ang3);
		if ((this.angle>=ang1)&&(this.angle<ang2)){
			this.moveBackwards();
			this.moveRight();
		}else if ((this.angle<ang1)&&(this.angle>ang3)){
			this.moveBackwards();
			this.moveLeft();
		}
	}


}
class cannonBall{
	constructor(speed, range, angle, x, y){
		this.speed = speed;	//5
		this.angle = angle;
		this.x = x;
		this.y = y;
		this.width=20;
		this.height=20;
		this.range = 0;
		this.cannonBallModel = new Image();
		this.cannonBallModel.src = "../Resources/cannon_ball1.png";
		this.imageData = this.functionGetImageData(this.cannonBallModel);
	}

	update(deltaTime){
			var add_x = Math.cos((this.angle - 90) * Math.PI / 180) * this.speed;
			var add_y = Math.sin((this.angle - 90) * Math.PI / 180) * this.speed;
			this.x += add_x;
			this.y += add_y;
			this.range += deltaTime;
			//console.log(this.x);
			//console.log(this.y);
	}

	draw(){
			ctx.save();
			ctx.translate(this.x, this.y);

			//ctx.fillStyle = "black";
			//ctx.globalAlpha = 1;
			//ctx.fillRect(-this.width/2, -this.height/2, 20, 20);

			ctx.drawImage(this.cannonBallModel, 0, 0);
			ctx.restore();
			this.imageData = this.functionGetImageData(this.cannonBallModel);

	}

	functionGetImageData(img){
		//canvas aux

		var canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;

		var ctx = canvas.getContext("2d");

		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.drawImage(this.cannonBallModel, -this.width/2, -this.height/2, 20, 20);
		ctx.restore();

		var imgData = ctx.getImageData(0, 0, 20, 20);

		return imgData;
	}
}
class Explosion{
	constructor(img,x,y){
		//Coordinates
		this.x = x;
		this.y = y;
		//Player Model
		this.img = img;
		//Other
		this.height = this.img.height;
		this.width = this.img.width;
		this.vida = 10;
	}
	draw(ctx){
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.drawImage(this.img, -this.width/2, -this.height/2);
		ctx.restore();
	}
}
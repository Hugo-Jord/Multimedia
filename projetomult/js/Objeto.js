class Objeto{
    constructor(img, x, y){
        //Coordinates
        this.x = x;
        this.y = y;

        //Player Model
        this.playerModel = img;

        this.imageData = this.functionGetImageData(img);
        //Other
        this.height = 32;
        this.width = 32;

        this.xint=0;
        this.yint=0;

    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.drawImage(this.playerModel, 0, 0);
        ctx.restore();
        this.imageData = this.functionGetImageData(this.playerModel)
    }
    functionGetImageData(img){
        //canvas aux

        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;

        var ctx = canvas.getContext("2d");

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.drawImage(this.playerModel, -this.width/2, -this.height/2, 32, 32);
        ctx.restore();

        var imgData = ctx.getImageData(0, 0, 32, 32);

        return imgData;
    }

}
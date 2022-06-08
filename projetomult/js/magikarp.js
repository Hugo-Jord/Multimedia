class Magikarp extends Inimigo {
    constructor(img, x, y, speed) {
        //Coordinates
        super(img, x, y);

        this.height = 18;
        this.width = 18;
        this.maxSpeed = 3;
        this.speed = 3; //?
        this.vida = 1; //morre num so hit
        this.xint = 0;
        this.yint = 0;
    }

}
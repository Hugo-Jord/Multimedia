class Boss extends Barco{
    constructor(img, x, y, maxSpeed, rotateSpeed, cannonBallRange, vida) {

        super(img, x, y, maxSpeed, rotateSpeed, cannonBallRange, vida);
        this.dificuldade = 0;
        this.distancia = 1;
        this.speed = 0.25;
    }
    moveToSides(){
        if(this.x < 200){
            this.moveRight();
        }
        else if(this.x > 600){
            this.moveLeft();
        }
    }
    moveUpDown(){
        if(this.y < 102){
            this.moveForward();
        }
        else if(this.y > 506){
            this.moveBackwards();
        }
    }

    dragonBreath(ctx, player){
        //a cada tantos segundos cospe-se fogo
        var img = new Image();
        img.src = "./Resources/fireball.png";
        var fireball = new cannonBall(speed, range, angle, this.x, this.y);
        cannonBall.draw(ctx);
        //bola de fogo lançada na diracao do player
        //funciona como canonball com maior hitbox
    }

    magikarpLaucher(ctx, player){
        //a cada tantos segundos lança-se um magikarp que segue o player como um barco inimigo mas é +rapido e tem 1 hit de vida
        var img = new Image();
        img.src = "./Resources/magikarp.png";
        var magikarp = new Magikarp(img, this.x, this.y);
        magikarp.draw(ctx);
    }
}
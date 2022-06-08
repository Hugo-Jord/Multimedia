class inputHandler{
	constructor(player){
		document.addEventListener("keydown", event => {
			switch(event.keyCode){
				case(87): //w
					player.moveForward();

					break;
				case(68): //d
					player.moveRight();

					break;
				case(65): //a
					player.moveLeft();	
					break;
				case(83): //s
					//player.moved = true;
					player.moveBackwards();
					break;
				case(81): //q
					player.shootLeft();
					break;
				case(69): //e
					player.shootRight();
			}


		});


	}

}
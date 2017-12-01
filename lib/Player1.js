const Player = require('./Player.js');

class Player1 extends Player {
  constructor() {
    super(...arguments);
  }

    move(key) {
    if (this.isColliding(this.platforms)) {
      this.dx = -this.dx;
    } else if (key.isDown(65) && !this.isColliding(this.platforms)) { //A
      this.dx = -4;
      this.direction = "left";
    } else if (key.isDown(68) && !this.isColliding(this.platforms)) { //D
      this.dx = 4;
      this.direction = "right";
    }
    else if (!this.jumping) {
      this.dx = 0;
    }
    //jump
    if (key.isDown(87) && this.isOnPlatform && key.isDown(65)) { //87 = TAB
      this.jump('left');
    } else if (key.isDown(87) && this.isOnPlatform && key.isDown(68)) {
      this.jump('right');
    } else if (key.isDown(87) && this.isOnPlatform) { 
      this.jump();
    }
  }
}


module.exports = Player1;
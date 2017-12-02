

class Game {
  constructor(canvas, ctx, player1, player2, keyboarder) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.player1 = player1;
    this.player2 = player2;
    this.keyboarder = keyboarder;
  }
  
  gameLoop() {
    console.log(this.ctx);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.updateScreen();
    requestAnimationFrame(this.gameLoop);
  }

  updateScreen() {
    let allArrows = this.player1.arrows;
    if (this.player1.isColliding(allArrows)) {
      this.player1.lives --;
      console.log(this.player1.lives, 'dead');
    }
    this.player1.update(); 
    this.player1.move(this.keyboarder);
    this.player2.update();
    this.player2.move(this.keyboarder);
  }
}

module.exports = Game;
const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');
const Arrow = require('./Arrow.js'); //don't need?
const Background = require('./Background.js');
const Keyboarder = require('./Keyboarder.js');

const keyboarder = new Keyboarder();
let background = new Background();
let player1 = new Player1(ctx, 150, canvas.height/3, background.platforms);
let player2 = new Player2(ctx, canvas.width - 200, canvas.height/3, background.platforms);
//player2.direction="left"

let Bodies = [player1, player2];
let game = new Game(canvas, ctx, player1, player2, keyboarder);

background.createBackground();
game.gameLoop();

// function gameLoop() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   updateScreen();
//   requestAnimationFrame(gameLoop);
// }

// function updateScreen() {
//   let allArrows = player1.arrows;

//   if (player1.isColliding(allArrows)) {
//     player1.lives --;
//     console.log(player1.lives, 'dead');
//   }
//   player1.update(); 
//   player1.move(keyboarder);
//   player2.update();
//   player2.move(keyboarder);
// }

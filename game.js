const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const scoreElement = document.getElementById("score");
let score = 0;

// Draw ground
function drawGround() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, player.ground, canvas.width, 5);
}

// Main game loop
function loop() {
  // update
  updatePlayer();
  updateObstacles();

  // increase score
  score += 0.05;
  scoreElement.textContent = "Score: " + Math.floor(score);

  // draw
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGround();
  drawPlayer(ctx);
  drawObstacles(ctx);

  // increase speed gradually
  gameSpeed = 6 + Math.floor(score/50);

  requestAnimationFrame(loop);
}

// start
loop();

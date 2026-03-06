const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Draw ground
function drawGround() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, player.ground, canvas.width, 5);
}

// Main game loop
function loop() {
  // Update
  updatePlayer();
  updateObstacles(canvas, player);

  // Draw
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGround();
  drawPlayer(ctx);
  drawObstacles(ctx);

  requestAnimationFrame(loop);
}

// Start the game
loop();

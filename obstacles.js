// Obstacles array
const obstacles = [
  { x: 800, y: 310, w: 40, h: 40 }
];

const gameSpeed = 6;

// Update obstacles
function updateObstacles() {
  obstacles.forEach(o => {
    o.x -= gameSpeed;

    if (o.x + o.w < 0) {
      o.x = canvas.width + Math.random() * 300;
    }

    // Collision with player
    if (
      player.x < o.x + o.w &&
      player.x + player.size > o.x &&
      player.y < o.y + o.h &&
      player.y + player.size > o.y
    ) {
      alert("Game Over!");
      location.reload();
    }
  });
}

// Draw obstacles
function drawObstacles(ctx) {
  ctx.fillStyle = "red";
  obstacles.forEach(o => {
    ctx.fillRect(o.x, o.y, o.w, o.h);
  });
}

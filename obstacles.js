// Base obstacle array
let obstacles = [];
let gameSpeed = 6;

// Update obstacles and detect collisions
function updateObstacles() {
  obstacles.forEach(o => {
    o.x -= gameSpeed;

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

  // draw spikes
  ctx.fillStyle = "yellow";
  obstacles.forEach(o => {
    if (o.type === "spike") {
      ctx.beginPath();
      ctx.moveTo(o.x, o.y + o.h);
      ctx.lineTo(o.x + o.w/2, o.y);
      ctx.lineTo(o.x + o.w, o.y + o.h);
      ctx.closePath();
      ctx.fill();
    }
  });
}

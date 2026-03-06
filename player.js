// Player object
const player = {
  x: 150,
  y: 300,
  size: 40,
  velocityY: 0,
  jumping: false,
  gravity: 1,
  ground: 350,
  jumpPower: -18
};

// Jump control
document.addEventListener("keydown", e => {
  if (e.code === "Space" && !player.jumping) {
    player.velocityY = player.jumpPower;
    player.jumping = true;
  }
});

// Update player physics
function updatePlayer() {
  player.velocityY += player.gravity;
  player.y += player.velocityY;

  if (player.y > player.ground - player.size) {
    player.y = player.ground - player.size;
    player.velocityY = 0;
    player.jumping = false;
  }
}

// Draw player
function drawPlayer(ctx) {
  ctx.fillStyle = "cyan";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

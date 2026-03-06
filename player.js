// Player object
const player = {
  x: 150,
  y: 300,
  size: 40,
  velocityY: 0,
  jumping: false,
  gravity: 1,
  ground: 350,
  jumpPower: -18,
  rotation: 0,
  rotationSpeed: 0
};

// Jump control
document.addEventListener("keydown", e => {
  if (e.code === "Space" && !player.jumping) {
    player.velocityY = player.jumpPower;
    player.jumping = true;
    player.rotationSpeed = 0.3; // rotate while jumping
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
    player.rotation = 0;
    player.rotationSpeed = 0;
  }

  // rotate cube
  player.rotation += player.rotationSpeed;
}

// Draw player
function drawPlayer(ctx) {
  ctx.save();
  ctx.translate(player.x + player.size/2, player.y + player.size/2);
  ctx.rotate(player.rotation);
  ctx.fillStyle = "cyan";
  ctx.fillRect(-player.size/2, -player.size/2, player.size, player.size);
  ctx.restore();
}

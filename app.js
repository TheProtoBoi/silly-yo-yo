const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Player setup
let player = {
  x: 150,
  y: 300,
  size: 40,
  velocityY: 0,
  jumping: false
};

const gravity = 1;
const ground = 350;

// Obstacles
let obstacles = [
  { x: 800, y: ground - 40, w: 40, h: 40 }
];

// Game speed
let speed = 6;

// Update game state
function update() {
  // Apply gravity
  player.velocityY += gravity;
  player.y += player.velocityY;

  if (player.y > ground - player.size) {
    player.y = ground - player.size;
    player.velocityY = 0;
    player.jumping = false;
  }

  // Move obstacles
  obstacles.forEach(o => {
    o.x -= speed;

    if (o.x + o.w < 0) {
      o.x = canvas.width + Math.random() * 300;
    }

    // Collision detection
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

// Draw game objects
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw ground
  ctx.fillStyle = "white";
  ctx.fillRect(0, ground, canvas.width, 5);

  // Draw player
  ctx.fillStyle = "cyan";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  // Draw obstacles
  ctx.fillStyle = "red";
  obstacles.forEach(o => {
    ctx.fillRect(o.x, o.y, o.w, o.h);
  });
}

// Game loop
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

// Jump control
document.addEventListener("keydown", e => {
  if (e.code === "Space" && !player.jumping) {
    player.velocityY = -18;
    player.jumping = true;
  }
});

// Start game
loop();

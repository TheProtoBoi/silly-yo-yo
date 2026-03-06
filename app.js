// Create canvas
const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 300;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// Player
let player = {
  x: 100,
  y: 200,
  size: 30,
  velocityY: 0,
  jumping: false
};

let gravity = 0.8;

// Obstacles
let obstacles = [
  { x: 600, y: 220, w: 30, h: 50 }
];

// Game update
function update() {

  // gravity
  player.velocityY += gravity;
  player.y += player.velocityY;

  if (player.y > 200) {
    player.y = 200;
    player.velocityY = 0;
    player.jumping = false;
  }

  // move obstacles
  obstacles.forEach(o => {
    o.x -= 5;

    if (o.x + o.w < 0) {
      o.x = canvas.width + Math.random() * 200;
    }

    // collision
    if (
      player.x < o.x + o.w &&
      player.x + player.size > o.x &&
      player.y < o.y + o.h &&
      player.y + player.size > o.y
    ) {
      alert("Game Over");
      location.reload();
    }
  });
}

// Draw game
function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // ground
  ctx.fillStyle = "black";
  ctx.fillRect(0,250,canvas.width,5);

  // player
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x,player.y,player.size,player.size);

  // obstacles
  ctx.fillStyle = "red";
  obstacles.forEach(o=>{
    ctx.fillRect(o.x,o.y,o.w,o.h);
  });
}

// Game loop
function loop(){
  update();
  draw();
  requestAnimationFrame(loop);
}

// Jump control
document.addEventListener("keydown",e=>{
  if(e.code==="Space" && !player.jumping){
    player.velocityY = -12;
    player.jumping = true;
  }
});

loop();

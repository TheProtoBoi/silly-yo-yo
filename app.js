const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// player
let player = {
  x: 150,
  y: 320,
  size: 40,
  velocityY: 0,
  jumping: false
};

let gravity = 0.9;
let ground = 360;

// obstacles
let obstacles = [
  { x: 900, y: 330, w: 40, h: 30 }
];

function update() {

  // gravity
  player.velocityY += gravity;
  player.y += player.velocityY;

  if (player.y > ground - player.size) {
    player.y = ground - player.size;
    player.velocityY = 0;
    player.jumping = false;
  }

  obstacles.forEach(o => {

    o.x -= 6;

    if (o.x + o.w < 0) {
      o.x = canvas.width + Math.random() * 300;
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

function draw() {

  ctx.clearRect(0,0,canvas.width,canvas.height);

  // ground
  ctx.fillStyle = "white";
  ctx.fillRect(0, ground, canvas.width, 5);

  // player
  ctx.fillStyle = "cyan";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  // obstacles
  ctx.fillStyle = "red";
  obstacles.forEach(o=>{
    ctx.fillRect(o.x,o.y,o.w,o.h);
  });

}

function loop(){
  update();
  draw();
  requestAnimationFrame(loop);
}

document.addEventListener("keydown", e=>{
  if(e.code==="Space" && !player.jumping){
    player.velocityY = -15;
    player.jumping = true;
  }
});

loop();

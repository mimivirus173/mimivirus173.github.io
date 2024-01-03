const canvas = document.getElementById("game");     // Find the game canvas
const ctx = canvas.getContext("2d");                // Define canvas as 2d

// Tweak canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var player = new Image();
var revenant = new Image();

// Movement variables
let x = 0;
let y = 0;

let xvel = 0;
let yvel = 0;

// Key press registerers
let keyUp = 0;
let keyDown = 0;
let keyLeft = 0;
let keyRight = 0;

// Smooth movement
function movementPhys(speed, friction) {
    xvel += (keyRight + (0 - keyLeft)) * speed;
    xvel = xvel * friction;

    yvel += (keyDown + (0 - keyUp)) * speed;
    yvel = yvel * friction;
};

// Update the canvas
function update() {
    player.src = 'Doomguy/media/doomguy.png'
    revenant.src = 'Revenant/media/revenant1.png'

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movementPhys(2, 0.9);

    x += xvel;
    y += yvel;

    ctx.drawImage(player, x, y, 41, 56);
    ctx.drawImage(revenant, canvas.width / 2, canvas.height / 2, 52, 101);

    requestAnimationFrame(update);
    // console.log(keyUp, keyDown, keyLeft, keyRight);
};

update();
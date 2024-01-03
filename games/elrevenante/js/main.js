const canvas = document.getElementById("game");     // Find the game canvas
const ctx = canvas.getContext("2d");                // Dfine canvas as 2d

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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movementPhys(2, 0.9);

    x += xvel;
    y += yvel;

    ctx.fillRect(x, y, 10, 10);
    requestAnimationFrame(update);

    // console.log(keyUp, keyDown, keyLeft, keyRight);
};

update();
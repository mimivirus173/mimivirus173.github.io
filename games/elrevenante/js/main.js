const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

let xvel = 0;
let yvel = 0;

let keyUp = 0;
let keyDown = 0;
let keyLeft = 0;
let keyRight = 0;

function movementPhys(speed, friction) {
    xvel += (keyRight + (0 - keyLeft)) * speed;
    xvel = xvel * friction;

    yvel += (keyDown + (0 - keyUp)) * speed;
    yvel = yvel * friction;
};

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
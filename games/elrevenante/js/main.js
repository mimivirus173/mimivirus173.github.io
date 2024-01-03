const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd = 0;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    x += vxl;
    x += vxr;
    y += vyu;
    y += vyd;
    
    ctx.fillRect(x, y, 10, 10);
    requestAnimationFrame(update);
};
update();
// main.js

// Set up canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

doomguy.init();

// Update canvas
function update() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    doomguy.update();

    // Draw actors
    ctx.drawImage(player, doomguy.x, doomguy.y, 41, 56);
    ctx.drawImage(revenant, window.innerWidth / 2, window.innerHeight / 2, 52, 101);

    requestAnimationFrame(update);
};

update();
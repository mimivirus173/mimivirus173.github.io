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

    /// Draw actors

    // Flip doomguy if he is past the middle of the canvas and is shooting
    if (doomguy.x > canvas.width / 2 && doomguy.keySpace) {
        ctx.save(); // Save the current context
        ctx.scale(-1, 1); // Flip context horizontally
        ctx.drawImage(player, -doomguy.x - player.width, doomguy.y, 41, 56); // Draw the image
        ctx.restore(); // Restore the context to its original state
    } else {
        ctx.drawImage(player, doomguy.x, doomguy.y, 41, 56);
    }
    
    ctx.drawImage(revenant, window.innerWidth / 2, window.innerHeight / 2, 52, 101);

    requestAnimationFrame(update);
};

update();
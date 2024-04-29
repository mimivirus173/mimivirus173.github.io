// Set up canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load background image
let bgImg = new Image();
bgImg.src = 'media/156.png';

// Once background has loaded
bgImg.onload = function() {
    // Initialize actors
    doomguy.init();
    revenant.init();

    // Update canvas
    function update() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Draw background
        let pattern = ctx.createPattern(bgImg, 'repeat');   // Create pattern
        ctx.fillStyle = pattern;                            // Set fill style to pattern
        ctx.fillRect(0, 0, canvas.width, canvas.height);    // Fill canvas
        
        // Update actors
        doomguy.update();

        // Draw actors
        ctx.drawImage(player, doomguy.x, doomguy.y, 41, 56);
        ctx.drawImage(demon, window.innerWidth / 2, window.innerHeight / 2, 52, 101);

        // Refresh canvas
        requestAnimationFrame(update);
    };

    update();
}
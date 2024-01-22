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
        
        // Draw revenant
        ctx.drawImage(revenant, window.innerWidth / 2, window.innerHeight / 2, 52, 101);

        // Update canvas
        requestAnimationFrame(update);
    };

    update();
}
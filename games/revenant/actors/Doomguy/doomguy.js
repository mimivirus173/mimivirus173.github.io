// doomguy.js

// Player image
var player = new Image();
player.src = 'actors/Doomguy/media/doomguy.png';

// Doomguy class
let doomguy = {
    
    // Movement variables
    x: 0,
    y: 0,
    xvel: 0,
    yvel: 0,

    // Key registering
    keyUp: 0,
    keyDown: 0,
    keyLeft: 0,
    keyRight: 0,
    keySpace: 0,

    // Variable to track the last time the shoot function was called
    lastShootTime: 0,

    // Handles key presses
    init: function() {
        addEventListener("keydown", this.keyDownHandler);
        addEventListener("keyup", this.keyUpHandler);
    },

    keyDownHandler: function(event) {
        if (event.code == 'KeyW' || event.code == 'ArrowUp') doomguy.keyUp = 1;
        if (event.code == 'KeyS' || event.code == 'ArrowDown') doomguy.keyDown = 1;
        if (event.code == 'KeyA' || event.code == 'ArrowLeft') doomguy.keyLeft = 1;
        if (event.code == 'KeyD' || event.code == 'ArrowRight') doomguy.keyRight = 1;
        if (event.code == 'Space') {
            doomguy.keySpace = 1;
            setInterval(doomguy.shoot(), 1000);
        };
    },
    
    keyUpHandler: function(event) {
        if (event.code == 'KeyW' || event.code == 'ArrowUp') doomguy.keyUp = 0;
        if (event.code == 'KeyS' || event.code == 'ArrowDown') doomguy.keyDown = 0;
        if (event.code == 'KeyA' || event.code == 'ArrowLeft') doomguy.keyLeft = 0;
        if (event.code == 'KeyD' || event.code == 'ArrowRight') doomguy.keyRight = 0;
        if (event.code == 'Space') {
            doomguy.keySpace = 0;
            player.src = 'actors/Doomguy/media/doomguy.png';
        };
    },
    
    // Smooth movement
    movementPhys: function(speed, friction) {
        doomguy.xvel += (doomguy.keyRight + (0 - doomguy.keyLeft)) * speed;
        doomguy.xvel = doomguy.xvel * friction;

        doomguy.yvel += (doomguy.keyDown + (0 - doomguy.keyUp)) * speed;
        doomguy.yvel = doomguy.yvel * friction;
    },

    // Attack function
    shoot: function() {
        // Check if one second has passed since the last shot
        let currentTime = Date.now();
        if (currentTime - doomguy.lastShootTime >= 1000) {
            // Update sprite
            player.src = 'actors/Doomguy/media/doomguyshoot.png';
            
            // Pistol audio
            doomguy.pistolAudio = new Audio('actors/Doomguy/media/dspistol.wav');
            doomguy.pistolAudio.play();

            // Update the last shoot time
            doomguy.lastShootTime = currentTime;
        }
    },

    // Update function used in main.js
    update: function() {
        doomguy.movementPhys(2, 0.9);
        
        // Prevent passing outside the edge of the screen
        doomguy.x = Math.min(canvas.width - 41, Math.max(0, doomguy.x + doomguy.xvel));
        doomguy.y = Math.min(canvas.height - 56, Math.max(0, doomguy.y + doomguy.yvel));
    }
};

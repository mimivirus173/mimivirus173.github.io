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

    // Handles key presses
    init: function() {
        addEventListener("keydown", this.keyDownHandler);
        addEventListener("keyup", this.keyUpHandler);
    },

    keyDownHandler: function(event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                doomguy.keyUp = 1;
                break;
            case 'ArrowDown':
            case 'KeyS':
                doomguy.keyDown = 1;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                doomguy.keyLeft = 1;
                break;
            case 'ArrowRight':
            case 'KeyD':
                doomguy.keyRight = 1;
                break;
            case 'Space':
                doomguy.keySpace = 1;
                player.src = 'actors/Doomguy/media/doomguyshoot.png';
                break;
        }
    },

    keyUpHandler: function(event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                doomguy.keyUp = 0;
                break;
            case 'ArrowDown':
            case 'KeyS':
                doomguy.keyDown = 0;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                doomguy.keyLeft = 0;
                break;
            case 'ArrowRight':
            case 'KeyD':
                doomguy.keyRight = 0;
                break;
            case 'Space':
                doomguy.keySpace = 0;
                player.src = 'actors/Doomguy/media/doomguy.png';
                break;
        }
    },

    // Smooth movement
    movementPhys: function(speed, friction) {
        doomguy.xvel += (doomguy.keyRight + (0 - doomguy.keyLeft)) * speed;
        doomguy.xvel = doomguy.xvel * friction;

        doomguy.yvel += (doomguy.keyDown + (0 - doomguy.keyUp)) * speed;
        doomguy.yvel = doomguy.yvel * friction;
    },

    // Update function used in main.js
    update: function() {
        doomguy.movementPhys(2, 0.9);
        
        // Prevent passing outside the edge of the screen
        doomguy.x = Math.min(canvas.width - 41, Math.max(0, doomguy.x + doomguy.xvel));
        doomguy.y = Math.min(canvas.height - 56, Math.max(0, doomguy.y + doomguy.yvel));
    }
};
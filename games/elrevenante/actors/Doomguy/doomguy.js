// doomguy.js

var player = new Image();
player.src = 'actors/Doomguy/media/doomguy.png';

let doomguy = {
    x: 0,
    y: 0,
    xvel: 0,
    yvel: 0,
    keyUp: 0,
    keyDown: 0,
    keyLeft: 0,
    keyRight: 0,

    init: function() {
        addEventListener("keydown", this.keyDownHandler);
        addEventListener("keyup", this.keyUpHandler);
    },

    keyDownHandler: function(event) {
        switch (event.code) {
            case 'KeyW':
                doomguy.keyUp = 1;
                break;
            case 'KeyS':
                doomguy.keyDown = 1;
                break;
            case 'KeyA':
                doomguy.keyLeft = 1;
                break;
            case 'KeyD':
                doomguy.keyRight = 1;
                break;
        }
    },

    keyUpHandler: function(event) {
        switch (event.code) {
            case 'KeyW':
                doomguy.keyUp = 0;
                break;
            case 'KeyS':
                doomguy.keyDown = 0;
                break;
            case 'KeyA':
                doomguy.keyLeft = 0;
                break;
            case 'KeyD':
                doomguy.keyRight = 0;
                break;
        }
    },

    movementPhys: function(speed, friction) {
        doomguy.xvel += (doomguy.keyRight + (0 - doomguy.keyLeft)) * speed;
        doomguy.xvel = doomguy.xvel * friction;

        doomguy.yvel += (doomguy.keyDown + (0 - doomguy.keyUp)) * speed;
        doomguy.yvel = doomguy.yvel * friction;
    },

    update: function() {
        doomguy.movementPhys(2, 0.9);
        doomguy.x += doomguy.xvel;
        doomguy.y += doomguy.yvel;
    }
};
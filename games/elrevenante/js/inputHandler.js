// When key is down
addEventListener("keydown", function(event) {
    if(event.code == 'KeyW') keyUp = 1;
    if(event.code == 'KeyS') keyDown = 1;
    
    if(event.code == 'KeyA') keyLeft = 1;
    if(event.code == 'KeyD') keyRight = 1;
})

// When key is up
addEventListener("keyup", function(event) {
    if(event.code == 'KeyW') keyUp = 0;
    if(event.code == 'KeyS') keyDown = 0;
    
    if(event.code == 'KeyA') keyLeft = 0;
    if(event.code == 'KeyD') keyRight = 0;
})
addEventListener("keydown", function(e) {
    if(e.code == 'KeyW') vyu = -5;
    if(e.code == 'KeyS') vyd = 5;
    
    if(e.code == 'KeyA') vxl = -5;
    if(e.code == 'KeyD') vxr = 5;
})

addEventListener("keyup", function(e) {
    if(e.code == 'KeyW') vyu = 0;
    if(e.code == 'KeyS') vyd = 0;
    
    if(e.code == 'KeyA') vxl = 0;
    if(e.code == 'KeyD') vxr = 0;
})
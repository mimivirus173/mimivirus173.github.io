// main.js

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var revenant = new Image();
revenant.src = 'actors/Revenant/media/revenant1.png';

doomguy.init();

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    doomguy.update();

    ctx.drawImage(player, doomguy.x, doomguy.y, 41, 56);
    ctx.drawImage(revenant, window.innerWidth / 2, window.innerHeight / 2, 52, 101);

    requestAnimationFrame(update);
};

update();
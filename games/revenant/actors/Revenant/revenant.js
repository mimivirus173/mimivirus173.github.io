// revenant.js

// Revenant image
var demon = new Image();
demon.src = 'actors/Revenant/media/revenant1.png';

// Revenant class
let revenant = {
    init: function() {
        // Scream
        revenant.screamAudio = new Audio('actors/Revenant/media/dsskesit.wav');
        revenant.screamAudio.play();
    }
};
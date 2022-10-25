//// Variables

/// Game variables
let clicks = 0;
let number = 0;

/// HTML Variables
var lightStatus = document.getElementById('light');

///// Functions

//// Game functions

/// Updates counts

setInterval(() => {
    document.getElementById('number').innerHTML = number;
    document.getElementById('clicks').innerHTML = clicks;
}, 5)

/// Increment functions

function log() {
    // Play sound
    var tick = new Audio('media/tick.mp3');
    tick.play();
    
    // Change variables
    clicks++;
    number = Math.log10(clicks);
}

/// Lightswitch function

// ik that the lightswitch soundfile names are swapped, the sounds are swapped when they're named correctly
function lightswitch() {
    if(lightStatus.innerHTML == "Off") {
        
        // Update label
        document.getElementById('light').innerHTML = "On";
        
        // Play sound
        var lightOff = new Audio('media/lightOn.mp3');
        lightOff.play();

        // Edit CSS
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('div').style.color = "white";
        document.querySelector('a').style.color = "#B200FF";

    } else if (lightStatus.innerHTML == "On") {
        
        // Update label
        document.getElementById('light').innerHTML = "Off";
        
        // Play sound
        var lightOn = new Audio('media/lightOff.mp3');
        lightOn.play();
        
        // Edit CSS
        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('div').style.color = "black";
        document.querySelector('a').style.color = "#6000ba";
    }
}
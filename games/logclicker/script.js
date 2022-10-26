//// Variables

/// Game variables
let clicks = 0;
let number = 0;
let autoInterval = 5;

/// HTML Variables
var lightStatus = document.getElementById('light');
var autoStatus = document.getElementById('autoCheck');

///// Functions

//// Game functions

/// Updates counts

setInterval(() => {
    document.getElementById('number').innerHTML = number;
    document.getElementById('clicks').innerHTML = clicks;
    
    // log10(0) is invalid
    if(clicks == 0) {
        number = "N/A";
    }
}, 5)

/// Increment

function log() {
    // Play sound
    var tick = new Audio('media/tick.mp3');
    tick.play();
    
    // Change variables
    clicks++;
    number = Math.log10(clicks);
}

/// Decrement

function dec() {
    // Play sound
    var tick = new Audio('media/tick.mp3');
    tick.play();
    
    // Change variables
    if(clicks > 1) {
        clicks--;
        number = Math.log10(clicks);
    }
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

/// Automode

function autoclick() {
    if(autoStatus.innerHTML == "Off") {
        // Update label and play sound
        document.getElementById('autoCheck').innerHTML = "On";
        
        var lightOff = new Audio('media/lightOn.mp3');
        lightOff.play();

        // Autoclicks
        autoInt = setInterval(auto, autoInterval);
        autoInt;
    } else if (autoStatus.innerHTML == "On") {
        // Update label and play sound
        document.getElementById('autoCheck').innerHTML = "Off";
        
        var lightOn = new Audio('media/lightOff.mp3');
        lightOn.play();

        // Stop autoclicking
        clearInterval(autoInt);
    }
}

function auto() {
    clicks++;
    number = Math.log10(clicks);
}

/// Reset
function reset() {
    clicks = 0;
    number = Math.log10(clicks);
    
    // Play sound
    var tick = new Audio('media/tick.mp3');
    tick.play();
}
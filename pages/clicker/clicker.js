/// Variables

// Updating variables
let points = 0;
let power = 1;
let idleGain = 0;

let powerCost;
let idleCost;

// HTML variables
var idleCheck = document.getElementById('idleOn');
var lightStatus = document.getElementById('light');

//// Functions

// Checks for costs
function check() {
    
    powerCost = (5 * power) * power;

    if (points < powerCost) {
        document.getElementById('double').disabled = true;
    } else {
        document.getElementById('double').disabled = false;
    }

    idleCost = 25 + (25 * idleGain) * idleGain;

    if (points < idleCost) {
        document.getElementById('passive').disabled = true;
    } else {
    document.getElementById('passive').disabled = false;
    }
}

setInterval(check, 10);

// Lightswitch function
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

/// Shop functions

// Updates counts
setInterval(() => {
    document.getElementById('pointCount').innerHTML = points;
    document.getElementById('powerCost').innerHTML = powerCost;
    document.getElementById('idleCost').innerHTML = idleCost;
}, 50)

// Adds points
function add() {
    
    // Play sound
    var tick = new Audio('media/tick.mp3');
    tick.play();
    
    // Add points
    points += power;
}

// Increases power
function powUp() {
   
    // Plays sound
    var tick = new Audio('media/tick.mp3');
    tick.play();
    
    // Increases power & updates label
    power++;
    document.getElementById('clickPower').innerHTML = power;
    
    // Deducts points
    points -= powerCost;
}

// Passive income
function idleUp() {
   
    // Plays sound
    var tick = new Audio('media/tick.mp3');
    tick.play();
    
    // Deducts points & updates label
    points -= idleCost;
    idleGain++
    document.getElementById('idlePower').innerHTML = idleGain;
}

function idlePoints() {
    points += idleGain
}

setInterval(idlePoints, 1000);
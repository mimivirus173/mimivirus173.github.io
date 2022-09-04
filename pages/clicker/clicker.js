/// Variables

// Updating variables
let points = 0;
let power = 1;
let idleInterval = 1000;
let idleCostBase = 1;

let powerCost;
let idleCost;

// HTML variables
var lightStatus = document.getElementById('light');

//// Functions

// Checks for costs
function checkCost() {
    
    powerCost = (10 * power) * power;

    if (points < powerCost) {
        document.getElementById('double').disabled = true;
    } else {
        document.getElementById('double').disabled = false;
    }

    idleCost = (5 * idleCostBase) * idleCostBase;

    if (points < idleCost) {
        document.getElementById('passive').disabled = true;
    } else {
    document.getElementById('passive').disabled = false;
    }
}

setInterval(checkCost, 10);

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

    document.getElementById('idleInterval').innerHTML = idleInterval;
    document.getElementById('clickPower').innerHTML = power;
}, 5)

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
    
    // Upgrades power
    power++;
    
    // Deducts points
    points -= powerCost;
}

// Passive income
function idleUp() {
   
    // Plays sound
    var tick = new Audio('media/tick.mp3');
    tick.play();
    
    // Deducts points & sets interval
    points -= idleCost;
    idleInterval * 0.75;
    idleCostBase++;
    setInterval(idlePoints, idleInterval);
}

function idlePoints() {
    points++;
}
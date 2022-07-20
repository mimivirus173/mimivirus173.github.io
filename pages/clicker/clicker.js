/// Variables

// Updating variables
let points = 0;
let power = 1;
let powerCost;
let idleInterval;

// HTML variables
var idleCheck = document.getElementById('idleOn');
var lightStatus = document.getElementById('light');

// Sound variables
var lightOn = new Audio('media/lightOn.mp3');
var lightOff = new Audio('media/lightOff.mp3');
// (doesn't work fsr) var tick = new Audio('media/tick.mp3');

//// Functions

// Checks for costs
function check() {
    powerCost = (10 * power) * power;
    
    if (points < powerCost) {
        document.getElementById('double').disabled = true;
    } else {
        document.getElementById('double').disabled = false;
    }

    if (points <= 49 || idleCheck.innerHTML == "True") {
        document.getElementById('passive').disabled = true;
    } else {
    document.getElementById('passive').disabled = false;
    }
}

setInterval(check, 10);

// Lightswitch function
function lightswitch() {
    if(lightStatus.innerHTML == "Off") {
        // Update label
        document.getElementById('light').innerHTML = "On";
        // Play sound
        lightOff.play();
        // Edit CSS
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('div').style.color = "white";
        document.querySelector('a').style.color = "#B200FF";
    } else if (lightStatus.innerHTML == "On") {
        // Update label
        document.getElementById('light').innerHTML = "Off";
        // Play sound
        lightOn.play();
        // Edit CSS
        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('div').style.color = "black";
        document.querySelector('a').style.color = "#6000ba";
    }
}

/// Shop functions

// Updates point count
setInterval(() => {
    document.getElementById('pointCount').innerHTML = points;
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

// Activates passive income
function idleOn() {
    // Plays sound
    var tick = new Audio('media/tick.mp3');
    tick.play();
    // Idles points
    idleInterval = 1000;
    idlePoints();
    setInterval(idlePoints, idleInterval);
    // Deducts points & updates label
    points -= 50;
    document.getElementById('idleOn').innerHTML = "True"
}

function idlePoints() {
    points++
}
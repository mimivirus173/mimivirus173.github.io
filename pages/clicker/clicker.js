/// Variables

// Updating variables
let points = 0;
let power = 1;
let powerCost;
let idleInterval;

// HTML variables
var idleCheck = document.getElementById('idleOn');
var lightStatus = document.getElementById('light');

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
        document.getElementById('light').innerHTML = "On";
    } else if (lightStatus.innerHTML == "On") {
        document.getElementById('light').innerHTML = "Off"
    }
}

/// Shop functions

// Updates point count
setInterval(() => {
    document.getElementById('pointCount').innerHTML = points;
}, 50)

// Adds points
function increment() {
    points += power;
}

// Increases power
function powUp() {
    power++;
    points -= powerCost;
    document.getElementById('clickPower').innerHTML = power;
}

// Activates passive income
function idleOn() {
    idleInterval = 1000;
    idlePoints();
    points -= 50;
    setInterval(idlePoints, idleInterval);
    document.getElementById('idleOn').innerHTML = "True"
}

function idlePoints() {
    points++
}
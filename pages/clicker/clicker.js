// Variables
let points = 0;
let power = 1;
let powerCost;
let idleInterval;
var lightStatus = document.getElementById('light');

// Other functions
function check() {
    powerCost = 20 * power
    
    if (points < powerCost) {
        document.getElementById('double').disabled = true;
    } else {
        document.getElementById('double').disabled = false;
    }

    if (points <= 49) {
        document.getElementById('passive').disabled = true;
    } else {
    document.getElementById('passive').disabled = false;
    }
}

setInterval(check, 10);

function lightswitch() {
    if(lightStatus.innerHTML == "Off") {
        document.getElementById('light').innerHTML = "On";
    } else if (lightStatus.innerHTML == "On") {
        document.getElementById('light').innerHTML = "Off"
    }
}

// Shop functions
setInterval(() => {
    document.getElementById('pointCount').innerHTML = points;
}, 50)

function increment() {
    points += power;
}

function powUp() {
    power++;
    points -= powerCost;
    document.getElementById('clickPower').innerHTML = power;
}

function idleOn() {
    idleInterval = 1000;
    idlePoints();
    points -= 50;
    setInterval(idlePoints, idleInterval);
    document.getElementById('idleOn').innerHTML = "True"
    document.getElementById('passive').disabled = true;
}

function idlePoints() {
    points++
}
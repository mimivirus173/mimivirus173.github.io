// Variables
let points = 0;
let power = 1;
var lightStatus = document.getElementById('light');

// Other functions
function lightswitch() {
    const dStyle = document.querySelector('style');
    dStyle.innerHTML = 'body {font-color = white}';
    dStyle.innerHTML = 'body {background-color = black}';
    
    if(lightStatus = "Off") {
        document.getElementById('light').innerHTML = "On";
    } else {
        document.getElementById('light').innerHTML = "Off"
    }
}

// Shop functions
setInterval(() => {
    document.getElementById('pointCount').innerHTML = points;
    if (points <= 49) {
        document.getElementById('passive').disabled = true
    } else {
    document.getElementById('passive').disabled = false
    }
}, 50)

function increment() {
    points += power;
}

function powUp() {
    power++;
    document.getElementById('clickPower').innerHTML = power;
}

function idleOn() {
    idlePoints();
    setInterval(idlePoints, 1000);
    document.getElementById('idleOn').innerHTML = "True"
    document.getElementById('passive').disabled = true;
}

function idlePoints() {
    points++
}
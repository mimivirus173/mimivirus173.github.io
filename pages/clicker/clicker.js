let points = 0;
let power = 1;

function increment() {
    points += power;
    document.getElementById('pointCount').innerHTML = points;
}

function powUp() {
    power += 1;
    document.getElementById('clickPower').innerHTML = power;
}

function idleOn() {
    idlePoints();
    setInterval(idlePoints, 2000);
    document.getElementById('idleOn').innerHTML = "True"
}

function idlePoints() {
    points += 1
}
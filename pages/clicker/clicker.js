let points = 0;
let power = 1;

setInterval(() => {
    document.getElementById('pointCount').innerHTML = points;
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
    setInterval(idlePoints, 2000);
    document.getElementById('idleOn').innerHTML = "True"
}

function idlePoints() {
    points++
}
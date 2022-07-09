let points = 0;
let power = 1;

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
    setInterval(idlePoints, 2000);
    document.getElementById('idleOn').innerHTML = "True"
    document.getElementById('passive').disabled = true;
}

function idlePoints() {
    points++
}
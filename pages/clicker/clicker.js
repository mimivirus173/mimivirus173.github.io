let points = 0;
let power = 1;

function increment() {
    points += power;
    document.getElementById('pointCount').innerHTML = points;
}

function double() {
    power += 1;
    document.getElementById('clickPower').innerHTML = power;
}
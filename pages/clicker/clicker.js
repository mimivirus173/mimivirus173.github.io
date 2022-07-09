let points = 0;
let power = 1;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function increment() {
    points += power;
    document.getElementById('pointCount').innerHTML = points;
}

function powUp() {
    power += 1;
    document.getElementById('clickPower').innerHTML = power;
}

function idleOn() {
    while (true) {
        sleep(2000);
        points += 1;
    }
    document.getElementById('idleOn').innerHTML = "True";
}
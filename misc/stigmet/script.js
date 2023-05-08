// Variablar
var test = 1;

var maxStig;
var tíniStig;

var initMet;
var finalMet;

// Funktiónin til at rokna karakter
function calc() {
    // Finn virðini
    maxStig = parseInt(document.getElementById('max').value);
    tíniStig = parseInt(document.getElementById('stig').value);

    // Rokna prosent
    initMet = parseInt((tíniStig / maxStig) * 100);

    // Rokna karakter
    switch (true) {
        case initMet < 0:
            finalMet = "?";
            break;
        case initMet <= 6:
            finalMet = "-3";
            break;
        case initMet <= 33:
            finalMet = "00";
            break;
        case initMet <= 39:
            finalMet = "02";
            break;
        case initMet <= 55:
            finalMet = "4";
            break;
        case initMet <= 75:
            finalMet = "7";
            break;
        case initMet <= 91:
            finalMet = "10";
            break;
        case initMet <= 100:
            finalMet = "12";
            break;
        default:
            finalMet = "?";
    }

    // Prenta á síðuna
    document.getElementById('met').innerHTML = finalMet;
}

// Loopa funktiónina
setInterval(calc, 10);
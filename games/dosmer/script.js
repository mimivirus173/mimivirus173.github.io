let navn = '';
var stig = -1;

// Rokna títt virði
function calc() {
    switch(true) {
        case document.getElementById('q1-A').checked:
            stig = 100;
            break;
        case document.getElementById('q1-B').checked:
            stig = 0;
            break;
    }
    
    // oh yeah nested if else functions
    if(stig < 100 && stig >= 0) {
        if(navn == '') {
            document.getElementById('met').innerHTML = "ERT";
        } else {
            document.getElementById('met').innerHTML = "ER";
        }
    } else if(stig >= 100) {
        if(navn == '') {
            document.getElementById('met').innerHTML = "ERT IKKI";
        } else {
            document.getElementById('met').innerHTML = "ER IKKI";
        }
    } else {
        if(navn == '') {
            document.getElementById('met').innerHTML = "ERT KANSKA";
        } else {
            document.getElementById('met').innerHTML = "ER KANSKA";
        }
    }
}

// Loopa funktiónina
setInterval(calc, 10);

// Navn títt
function updateNavn() {
    navn = document.getElementById('navn').value;
    if(navn == '') {
        document.getElementById('navnOutput').innerHTML = "Tú";
    } else {
        document.getElementById('navnOutput').innerHTML = navn;
    }
}

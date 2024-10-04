let navn = '';

// Rokna títt virði
function calc() {
    // Uppdatera navnið
    document.getElementById('navnOutput').innerHTML = (navn == '') ? "Tú" : navn;
    
    let dosmaraStig = 0;
    let peruStig = 0;
    
    // Get all questions
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if(selectedOption) {
            if(selectedOption.value === 'dosmari') {
                dosmaraStig++;
            } else if (selectedOption.value === 'pera') {
                peruStig++;
            }
        }
    });
    
    // Døm um dosmari ella ei
    if(dosmaraStig > peruStig) {
        document.getElementById('met').innerHTML = (navn == '') ? "ERT" : "ER";
    } else if(peruStig > dosmaraStig) {
        document.getElementById('met').innerHTML = (navn == '') ? "ERT IKKI" : "ER IKKI";
    } else {
        document.getElementById('met').innerHTML = (navn == '') ? "ERT KANSKA" : "ER KANSKA";
    }
}

// Navn títt
function updateNavn() {
    navn = document.getElementById('navn').value;
}

// Ert tú ein ísur?
function ísur() {
    document.getElementById('titleSubject').innerHTML = "ísur";
}
let navn = '';

// Rokna títt virði
function calc() {
    let dosmaraStig = 0;
    let peruStig = 0; // Eg minnist ikki um orðið pera er brúkt av pápanum í TVE, men tað er tað umventa av ein dosmara
    
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
    document.getElementById('foo').innerHTML = peruStig;
    
    // Døm um dosmari ella ei (oh yeah nested if else functions)
    if(dosmaraStig > peruStig) {
        if(navn == '') {
            document.getElementById('met').innerHTML = "ERT";
        } else {
            document.getElementById('met').innerHTML = "ER";
        }
    } else if(peruStig > dosmaraStig) {
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


// Navn títt
function updateNavn() {
    navn = document.getElementById('navn').value;
    if(navn == '') {
        document.getElementById('navnOutput').innerHTML = "Tú";
    } else {
        document.getElementById('navnOutput').innerHTML = navn;
    }
}

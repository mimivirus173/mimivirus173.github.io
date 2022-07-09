let textInput;

function update() {
    textInput = document.getElementById('input').value;
    if (textInput == '')  {
        document.getElementsByClassName('output').innerHTML = "Text";
    } else {
        document.getElementsByClassName('output').innerHTML = textInput;
    }
}

/*
function spinOn() {
    if (document.getElementsByClassName('output').className.match(/(?:^|\s)output(?!\S)/)) {
        document.getElementsByClassName('output').className = 'spinner';
    } else {
        document.getElementsByClassName('spinner').className = 'output';
    }
}
*/
let textInput;

function update() {
    textInput = document.getElementById('input').value;
    if (textInput == '')  {
        document.getElementById('output').innerHTML = "Text";
    } else {
        document.getElementById('output').innerHTML = textInput;
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
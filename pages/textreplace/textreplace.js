let textInput;

function update() {
    textInput = document.getElementById('input').value;
    if (textInput == '')  {
        document.getElementById('output').innerHTML = "Input text above";
    } else {
        document.getElementById('output').innerHTML = textInput;
    }
}
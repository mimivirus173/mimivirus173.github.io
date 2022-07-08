let textInput;

function func()
{
    textInput = document.getElementById("input").value;
    document.getElementById("output").innerHTML = textInput;
}

while (true) {
    func();
}
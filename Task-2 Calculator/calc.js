// add validation that it must starts with number
// handle different signs
// handle division by zero
// add modulas function 
function displayOnScreen(choice)
{
    document.getElementById("screen").innerHTML+= choice + " ";
}
function displayResult(choice)
{
    exp = document.getElementById("screen").innerText;
    exp1 = exp.replace('x','*');
    exp2 = exp1.replace('÷','/');
    expression = exp2.split(" ").join("");
    console.log(expression);
    result = eval(expression);
    document.getElementById("screen").innerHTML+="="+result;
}
function ClearScreen()
{
    document.getElementById("screen").innerHTML = "";
}

function dellast() {
    var txt = document.getElementById("screen").innerHTML;
    var text = txt.substring(0, txt.length - 1);
    document.getElementById("screen").innerHTML = text;
}

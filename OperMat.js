function suma(){
    var res;
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    res=parseInt(num1)+ parseInt(num2);
    document.getElementById("resultado").innerHTML = res;

}

function resta(){
    var res;
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    res=parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML = res;
}

function multiplicacion(){
    var res;
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    res=parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML = res;

}

function division(){
    var res;
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    res=parseInt(num1) / parseInt(num2);
    document.getElementById("resultado").innerHTML = res;

}
function saludo(){
    var nombre=prompt("Escribe tu nombre" , "Nombre");
    alert("Hola "+ nombre);
}

function suma(){
    var num1, num2, res;
    num1=prompt("Escribe un numero", "");
    num2=prompt("Escribe otro numero", "");
    res=parseInt(num1) + parseInt(num2);
    alert("La suma es: "+ res);
}

function resta(){
    var num1, num2, res;
    num1=prompt("Escribe un numero", "");
    num2=prompt("Escribe otro numero", "");
    res=parseInt(num1) - parseInt(num2);
    alert("La resta es: "+ res);
}

function multiplicar(){
    var num1, num2, res;
    num1=prompt("Escribe un numero", "");
    num2=prompt("Escribe otro numero", "");
    res=parseInt(num1) * parseInt(num2);
    alert("La multiplicación es es: "+ res);
}

function dividir(){
    var num1, num2, res;
    num1=prompt("Escribe un numero", "");
    num2=prompt("Escribe otro numero", "");
    res=parseInt(num1) / parseInt(num2);
    alert("La division es: "+ res);
}

function PN(){
    var num1, num2, res;
    num1=prompt("Escribe un numero", "");
    if(num1>=0){
        alert("El numero es positivo ");
    }else{
        alert("El numero es negativo ");
    }

        
}
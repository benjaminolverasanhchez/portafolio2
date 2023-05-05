function generarRFC(){
    var cadena1=document.getElementById("nombre").value;
    var cadena2=document.getElementById("AM").value;
    var cadena3=document.getElementById("AP").value;
    var cadena4=document.getElementById("anio").value;
    var cadena5=document.getElementById("mes").value;
    var cadena6=document.getElementById("dia").value;
    
    if(cadena5<10){
        var resultado5=0+cadena5;
        
    }else{
        var resultado5=cadena5;
    }

    if(cadena6<10){
        var resultado6="0"+cadena6;
    }else{
        var resultado6=cadena6;
    }

    var resultado2=cadena2.charAt(0);
    var resultado1=cadena1.charAt(0);
    var resultado3=cadena3.substring(0, 2);
    var resultado4=cadena4.substring(cadena4.length - 2);

    var resultadoT=resultado3+resultado2+resultado1+resultado4+resultado5+resultado6;
    resultadoT=resultadoT.toUpperCase();
    document.getElementById("RFC").value=resultadoT;
}

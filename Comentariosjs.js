function iniciar(){
    var boton=document.getElementById('guardar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
    }
    function nuevoitem(){
    var clave=document.getElementById('comentario').value;
    var valor=document.getElementById('Sugerencia').value;
    localStorage.setItem(clave,valor);
    mostrar();
    document.getElementById('comentario').value='';
    document.getElementById('Sugerencia').value='';
    }
    function mostrar(){
    var cajadatos=document.getElementById('cajadatos');
    cajadatos.innerHTML='';
    for(var f=0;f<localStorage.length;f++){
    var clave=localStorage.key(f);
    var valor=localStorage.getItem(clave);
    cajadatos.innerHTML+='<div>'+'Comentario: '+clave+' - '+'Sugerencia: '+valor+'</div>';
    }
    }
    window.addEventListener('load', iniciar, false);
    function elimina()
    {
    
        if(confirm('Está Seguro?')){
            localStorage.clear();
            mostrar();
            }
    }
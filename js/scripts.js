'use strict';

document.getElementById("enviar").addEventListener("click",function(e){
   var nombreSinrecortar = document.getElementById("float");
   var nombreRecortado = document.getElementById("ieee754");
    nombreRecortado.value= ieee754aBinario(nombreSinrecortar.value);
});

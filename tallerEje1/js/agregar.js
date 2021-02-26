//btn ingresar
var btnIngresar = document.getElementById("ingresarNumeros");

//btn enviarnumeros
var enviarNumeros = document.getElementById("enviarNumeros");

//select
var ingresados = document.getElementById("ingresados");

//Input numero
var numero = document.getElementById("numero");

function addProducts(optionMenu, value){
   var posicion = optionMenu.length;
   optionMenu[posicion] = new Option(value, value);
}

btnIngresar.onclick = function(){
    if(ingresados.length < 12 && numero.value != ""){
        addProducts(ingresados, numero.value);
        numero.value = "";
    }else if(numero.value == ""){
        alert("Ingresa un numero");
        numero.value = "";
    }else{
        alert("Solo se permiten 12 numeros");
        numero.value = "";
    }
}

enviarNumeros.onclick = function(){
    if(ingresados.length == 12){
        for(var i=0; i<ingresados.length; i++){
            ingresados[i].selected = true;
        }
        document.numIngresados.submit();
    }else {
        alert("Ingresa 12 numeros");
    }
}



//function addEvent(obj, evType, fn){
//    if(obj.addEventListener){
//        obj.addEventListener(evType, fn, false);
//        return true;
//    }
//    else if (obj.attachEvent){
//        var r = obj.attachEvent("on"+evType, fn);
//        return r;
//    }
//    else{
//        return false;
//    }
//}
//
//function initForms(){
//    document.getElementById("agregar").onclick = function(){
//        addProducts(document.frmedades.ingresados, document.frmedades.edad.value);
//    }
//    document.getElementById("enviar").onclick = function(){
//        var contador = 0;
//        for(var i=0; i<document.frmedades.ingresados.options.length; i++){
//            if(document.frmedades.ingresados.options[i].selected){
//                contador++;
//            }
//        }
//        if(contador == 0){
//            alert("No se han seleccionado elementos.");
//            return false;                                                   
//        }else if(contador == 1){
//            alert("Seleccione mas de un elemento.");
//            return false; 
//        }
//    }
//}
//
//function addProducts(optionMenu, value){
//   var posicion = optionMenu.length;
//   optionMenu[posicion] = new Option(value, value);
//}
//
//addEvent(window, 'load', initForms);
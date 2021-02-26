//input
var inputEsfera = document.getElementById("esfera");
var inputCubo = document.getElementById("cubo");
var inputCilindro = document.getElementById("cilindro");

//Botones enviar
var enviarEsfera = document.getElementById("enviarEsfera");
var enviarCubo = document.getElementById("enviarCubo");
var enviarCilindro = document.getElementById("enviarCilindro");

enviarEsfera.onclick = function(){
    if(inputEsfera.value == ""){
        alert("Ingrese la medida");
    }else{
        document.formEsfera.submit();
    }
}

enviarCubo.onclick = function(){
    if(inputCubo.value == ""){
        alert("Ingrese la medida");
    }else{
        document.formCubo.submit();
    }
}

enviarCilindro.onclick = function(){
    if(inputCilindro.value == ""){
        alert("Ingrese la medida");
    }else{
        document.formCilindro.submit();
    }
}
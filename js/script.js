var grafica = document.getElementById("migrafica");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var Data = {
    labels: [
        "Ventajas",
        "Desventajas"
    ],
    datasets: [
        {
            data: [60,40],
            backgroundColor: [
                "#1DA1F2",
                "#ff0000"
            ]
        }]
};

var pieChart = new Chart(grafica, {
  type: 'pie',
  data: Data
});

//Botones navbar
var quees = document.getElementById("quees");
var ventajas = document.getElementById("ventajas");
var instalacion = document.getElementById("instalacion");
var botonnav = document.getElementById("botonnav");
var navbarNav = document.getElementById("navbarNav");

//Contenido a mostrar y ocultar
var contenidoquees = document.getElementById("contenidoquees");
var contenidoventajas = document.getElementById("contenidoventajas");
var contenidoinstalacion = document.getElementById("contenidoinstalacion");

quees.onclick = function(){
    contenidoquees.classList.remove("ocultar");
    contenidoquees.classList.add("mostrar");
    contenidoventajas.classList.remove("mostrar");
    contenidoventajas.classList.add("ocultar");
    contenidoinstalacion.classList.remove("mostrar");
    contenidoinstalacion.classList.add("ocultar");
}

ventajas.onclick = function(){
    contenidoventajas.classList.remove("ocultar");
    contenidoventajas.classList.add("mostrar");
    contenidoquees.classList.remove("mostrar");
    contenidoquees.classList.add("ocultar");
    contenidoinstalacion.classList.remove("mostrar");
    contenidoinstalacion.classList.add("ocultar");
}

instalacion.onclick = function(){
    contenidoinstalacion.classList.remove("ocultar");
    contenidoinstalacion.classList.add("mostrar");
    contenidoventajas.classList.remove("mostrar");
    contenidoventajas.classList.add("ocultar");
    contenidoquees.classList.remove("mostrar");
    contenidoquees.classList.add("ocultar");
}
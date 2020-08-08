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
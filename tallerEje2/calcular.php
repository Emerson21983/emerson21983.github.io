<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Listado de numeros enteros</title>
</head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<body>
    <div class="container">
        <div class="row">
            <div class="col-12 mt-5 d-flex align-items-center justify-content-center">
                <div class="card">
                  <div class="card-header">
                    Calcular el área de diferentes cuerpos geométricos
                  </div>
                  <div class="card-body">
                       <?php
                            if(!empty($_POST["esfera"])){
                                $esfera = $_POST["esfera"];
                                $pi= 3.1416;
                                $areaesfera = 4 * $pi * pow($esfera,2);
                                echo "El área de la Esfera es: $areaesfera m2<br>" ;
                            }else if(!empty($_POST["cubo"])){
                                $cubo = $_POST["cubo"];
                                $areacubo = $cubo * $cubo;
                                echo "El área del Cubo es: $areacubo<br>" ;
                            }else if(!empty($_POST["cilindro"])){
                                $pi= 3.1416;
                                $cilindro = $_POST["cilindro"];
                                $areacilindro = $pi * pow($cilindro,2);
                                echo "El área del Cilindro es: $areacilindro m2<br>" ;
                            }
                        ?>
                  </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
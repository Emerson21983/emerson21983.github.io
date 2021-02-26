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
                        a) Porcentaje de valores pares ingresados
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><?php
                            extract($_POST);
                            $pares = array();
                            $countpar = 0;
                            $mi100 = array_sum($ingresados);
                            foreach($ingresados as $number){
                                if ( ($number % 2) == 0) {
                                    array_push($pares, $number);
                                    $countpar++;
                                }
                            }
                            $pares = array_sum($pares);
                            $resultado = $pares / $mi100;
                            $resultado = $resultado * 100;
                            $resultado = number_format($resultado, 2);
                            if($countpar == 0){
                                echo "No hay ningun valor par <br>El procentaje es: 0%";
                            }else{
                                $resultado = abs($resultado);
                                echo <<<C
                                    El porcentaje es: $resultado%
                                C;
                            }
                        ?></h5>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-5 d-flex align-items-center justify-content-center">
                <div class="card">
                    <div class="card-header">
                        b) Listado de solamente los valores positivos, <br>presentados de manera descendente.
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><?php
                            extract($_POST);
                            $positivos = array();
                            $count = 0;
                            foreach($ingresados as $number){
                                if ($number > 0){
                                    array_push($positivos, $number);
                                    $count++;
                                }
                            }
                            if($count == 0){
                                echo "No hay ningun numero positivo";
                            }else{
                                arsort($positivos);
                                echo "Los numeros positivos en <br>orden descendente: <br>";
                                foreach($positivos as $positivo){
                                    echo <<<T
                                        $positivo <br>
                                    T;
                                }
                            }
                        ?></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
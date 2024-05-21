<?php
    $server = "localhost";
    $user = "root";
    $pass = "";
    $bd = "teste";
    if($con = mysqli_connect($server, $user, $pass, $bd)) {
        //echo "conectado";
    } else{
        echo "erro";
    }

?>
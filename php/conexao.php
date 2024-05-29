<?php
    $server = "localhost";
    $user = "root";
    $pass = "";
    $bd = "jogo";
    if($con = mysqli_connect($server, $user, $pass, $bd)) {
        //echo "conectado";
    } else{
        echo "erro";
    }

?>
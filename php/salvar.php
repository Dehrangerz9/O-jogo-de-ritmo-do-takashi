<?php
include "conexao.php";
include "entrar.php";


$pontuacao = "<script>document.write(p)</script>";
var_dump($pontuacao);

$sql = "UPDATE max_pont from usuario WHERE ";

$dados = mysqli_query($con, $sql);

?>
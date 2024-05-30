<?php
include "conexao.php";
include "entrar.php";

$pontuacao = "<script>document.write(p)</script>";
$nome = $info['nome_user'];

if ($nome == null) {
    echo "sem login";
}elseif ($pontuacao > $info['max_pont']) {
    $sql = "UPDATE max_pont SET $pontuacao WHERE nome_user = '$nome'";
    $dados = mysqli_query($con, $sql);
}

?>
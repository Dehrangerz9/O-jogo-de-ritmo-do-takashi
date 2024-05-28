<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleLogin.css">
    <title>Document</title>
</head>
<body>

<?php
include "conexao.php";

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$teste_nome = "SELECT email FROM usuario WHERE nome_user = '$nome'";
$teste_email = "SELECT nome_user FROM usuario WHERE email = '$email'";

$dados_nome = mysqli_query($con, $teste_nome);
$dados_email = mysqli_query($con, $teste_email);

if (mysqli_num_rows($dados_nome)>0) {
    echo "nome de usuario indisponivel";
}elseif (mysqli_num_rows($dados_email)>0) {
    echo "email ja cadastrado";
}else{    
    $sql = "INSERT INTO `usuario`(`nome_user`, `email`, `senha`) VALUES ('$nome','$email','$senha')";
    
    if (mysqli_query($con, $sql)) {
        echo "sucesso";
    }else {
        echo "erro";
    }
}

?>

<a href="login.php" class="btn mt-3"> voltar </a>
</body>
</html>


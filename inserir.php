<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
include "conexao.php";

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "INSERT INTO `usuario`(`nome_user`, `email`, `senha`) VALUES ('$nome','$email','$senha')";

if (mysqli_query($con, $sql)) {
    echo "sucesso";
}else {
    echo "erro";
}

?>

<a href="login.php" class="btn btn-primary"> voltar </a>
</body>
</html>


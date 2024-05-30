<?php

    $nome = $_POST['nome'] ?? 'slk'; 
    $senha = $_POST['senha'] ?? '';

    include "conexao.php";

    $sql = "SELECT * FROM usuario WHERE nome_user = '$nome' AND senha = '$senha'";

    $dados = mysqli_query($con, $sql);

    if (mysqli_num_rows($dados) > 0) {
        $info = mysqli_fetch_assoc($dados);
        echo "Nome do usuário: " . $info['nome_user'] . "<br>";
        echo "Máxima pontuação: " . $info['max_pont'] . "<br>";
        echo "login realizado com sucesso";
        // Você pode exibir ou manipular $info conforme necessário
   }else{
        echo "email ou senha invalido";
    }
 

?>
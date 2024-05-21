<?php

    $nome = $_POST['nome'] ?? 'slk'; 
    $senha = $_POST['senha'] ?? '';

    include "conexao.php";

    $sql_nome = "SELECT email FROM usuario WHERE nome_user = '$nome' AND senha = '$senha'";

    $dados_nome = mysqli_query($con, $sql_nome);
 
    while ($linha = mysqli_fetch_assoc($dados_nome)) {
        foreach($linha as $key => $value){
            echo "$key: $value <br>";
            $info = &$value;
            echo "$info";
        }
    }

?>
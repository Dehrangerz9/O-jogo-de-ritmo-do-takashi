<?php

    $nome = $_POST['nome'] ?? 'slk'; 
    $senha = $_POST['senha'] ?? '';

    include "conexao.php";

    $sql = "SELECT * FROM usuario WHERE nome_user = '$nome' AND senha = '$senha'";

    $dados = mysqli_query($con, $sql);

    if (mysqli_num_rows($dados)>0) {
        while ($linha = mysqli_fetch_assoc($dados)) {
            foreach($linha as $key => $value){
                $info = &$value;
                echo "login realizado com sucesso";
            }
        }
    }else{
        echo "email ou senha invalido";
    }
 

?>
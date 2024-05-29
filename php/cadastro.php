<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/styleLogin.css">
    <title>cadastro</title>
</head>
<body>
    <div class="wrapper">
         
        <div class="text-center mt-4 name">
            Cadastro
        </div>
        <form class="p-3 mt-3" action="inserir.php" method="POST">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="nome" id="nome" placeholder="Username" required>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="email" name="email" id="email" placeholder="UserEmail" required>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="senha" id="senha" placeholder="Password" required>
            </div>
            <button class="btn mt-3">cadastrar</button>
        </form>
        <div class="text-center fs-6">
            <a href="index.php">Menu</a> or <a href="login.php">Sign in</a>
        </div>
    </div>
</body>
</html>
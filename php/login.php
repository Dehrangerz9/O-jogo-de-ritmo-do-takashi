<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/styleLogin.css">
    <title>login</title>
</head>
<body>
    <div class="wrapper">

   
         
    <div class="text-center mt-4 name">
            Rythim Game
        </div>
        <form class="p-3 mt-3" action="entrar.php" method="POST">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="nome" id="userName" placeholder="Username" required>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="senha" id="pwd" placeholder="Password" required>
            </div>
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="cadastro.php">Sign up</a>
        </div>

    
    </div>
</body>
</html>
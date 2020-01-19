<!DOCTYPE html>
<html>

<head>

</head>

<body>
<?php if($_SESSION['fail']){
    echo "Wrong username or password! We don't know which!";
    $_SESSION['fail']=false;
} ?>

<h1>Login</h1>
<form action="ProcessLogin.php">
  Username: <input type="text" name="username"><br>
  Password: <input type="text" name="password"><br>
  <input type="submit" value="Submit">
</form>

<a href="SignUp.php">No Account yet? Sign up today!</a>

</body>

</html>

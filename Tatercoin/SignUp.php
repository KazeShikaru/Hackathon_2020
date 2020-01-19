<!DOCTYPE html>
<html>

<head>

</head>

<body>
<?php if($_SESSION['fail']){
    echo "Username taken, try again!";
    $_SESSION['fail']=false;
} ?>
<h1>Sign up!</h1>
<form action="ProcessRegistration.php">
  Username: <input type="text" name="username"><br>
  Password: <input type="text" name="password"><br>
  <input type="submit" value="Submit">
</form>
</body>

</html>

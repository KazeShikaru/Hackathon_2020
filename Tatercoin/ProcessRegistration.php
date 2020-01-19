<html>
<head>
<?php
$dbname = "u820020134_potato";
$username = "u820020134_potato";
$password = "potato";
$servername = "localhost";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = sanitize($_GET["username"]);
$password = sanitize($_GET["password"]);

$sql = "SELECT username FROM Saves WHERE username = " . $username . ";";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "name Taken";
} else {
    $sql = "INSERT INTO Saves VALUES (" . $username . ", " . $password . ", '');";
    if ($conn->query($sql) === TRUE) {
        echo "AccountCreated";
        $_SESSION['username'] = $username;
        $_SESSION['password'] = $password;
        header("Location: index.php");
    } else {
        $_SESSION['fail'] = true;
        header("Location: SignUp.php");
    }
}

function sanitize($input)
{
    $input = trim($input); // get rid of white space left and right
    $input = mysql_real_escape_string($input); // escapes \x00, \n, \r, \, ', " and \x1a
    return $input;
}

?>
</head>
</html>
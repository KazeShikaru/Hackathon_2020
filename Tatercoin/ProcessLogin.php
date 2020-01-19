<html>
<head>

</head>
<body>
Page Loading
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
$username = $_GET["username"];
$password = $_GET["password"];

$sql="SELECT data FROM Saves WHERE username = '".$username."' and password = '".$password."';";


$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "positive Resutl";
    $row = mysqli_fetch_assoc($result);
    $_SESSION['data'] = $row['data'];
    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;
    echo "<a href=\"index.php\">Success, Start game!</a>";
    
} else {
    $_SESSION['fail'] = true;
    echo "<a href=\"Login.php\">Failed!: Return to Login</a>";
}


?>
</body>
</html>
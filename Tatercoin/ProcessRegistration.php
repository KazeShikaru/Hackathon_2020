<html>
<head>

</head>
<body>
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
echo "ya";
$sql = "SELECT username FROM Saves WHERE username = '".$username."';";

//$stmt = $conn->prepare("SELECT username FROM Saves WHERE username = '?';");
//$stmt->bind_param("s", $username);
$result = $conn->query($sql);//$stmt->execute();

if ($result->num_rows > 0) {

    echo "name Taken";
} else {

    $sql=("INSERT INTO Saves (username, password, data) VALUES ('".$username."','".$password."', '');");
    
    
    
    if ($conn->query($sql) === TRUE) {
        echo "AccountCreated";
        $_SESSION['username'] = $username;
        $_SESSION['password'] = $password;
        $_SESSION['data'] ="";
        echo "<a href=\"Login.php\">Success, Start game!</a>";
    } else {
        $_SESSION['fail'] = true;
        echo "<a href=\"SignUp.php\">Failed!: Return to Registration</a>";
    }

}


?>
</body>
</html>
<?php
    
$username = $_POST['username']; 

$password = $_POST['password'];

$requestType = $_POST['requestType'];

$data = $_POST['data'];

if($requestType == "Login"){
    $sql = "SELECT username,password,data FROM Saves WHERE username = ".$username.";";
    $result = executeQuerry($sql);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        if($row["password"]==$password){
            echo $data;
        }else{
            echo "Invalid Password";
            
        }
        
    }else{
        
        echo "User No Exist";
        
    }
    
    
    
}else if($requestType == "Save"){
    $sql = "UPDATE Saves SET data = \"".$data."\" WHERE username = ".$username.";";
    
    echo "saved";
    
}






function executeQuerry($sql){
    
    
    $dbname = "u820020134_potato";
    $username = "u820020134_potato";
    $password = "potato";
    $servername = "localhost";
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    

    
    $result = $conn->query($sql);
    
    
    $conn->close();
    return $result;
}




?>
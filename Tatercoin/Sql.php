<?php

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
    
    if ($conn->query($sql) === TRUE) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }
    
    $conn->close();
}

?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<?php

    $servername = 'localhost';
    $username   = 'juwon1';
    $password   = 'a0317441591!';
    $dbname     = 'juwon1';

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    mysqli_set_charset($conn, 'utf-8');

    if( !$conn ){
        die('데이터데이스접속실패');
    }

?>
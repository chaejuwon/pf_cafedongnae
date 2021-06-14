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

    include_once('header.php');

    $sql = "create table cafedongnae(
        idx int(11) auto_increment not null,
        name varchar(10) not null,
        phone varchar(13) not null,
        email varchar(50) not null,
        title varchar(20) not null,
        comment varchar(250) not null,
        primary key (idx)
    )";

    $result = mysqli_query($conn, $sql);

    echo '테이블 생성 성공';

    include_once('footer.php');

?>
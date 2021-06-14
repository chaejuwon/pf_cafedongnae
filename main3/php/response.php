<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    include_once('header.php');

    $name     = $_POST['name'];
    $phone1   = $_POST['phone'];
    $email    = $_POST['email'];
    $title    = $_POST['title'];
    $comment  = $_POST['comment'];

    $sql = "insert into cafedongnae (name, phone1, email, title, comment) values ('$name','$phone1','$email','$title','$comment')";

    $result = mysqli_query($conn, $sql);

    echo '인설트완료';

    include_once('footer.php');

    ?>  
</body>
</html>

<?php
    error_reporting(E_ALL);

    $con = mysqli_connect("localhost","dev","dev","student_tracker");

    // Check connection
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }

    $query = "INSERT INTO students (first_name, last_name, grade) VALUES (?, '', ?)";
    $stmt = mysqli_prepare($con, $query);

    $firstName = 'Jimmy';
    $grade = 0;
    mysqli_stmt_bind_param($stmt,"si", $firstName, $grade);
    if(!mysqli_stmt_execute($stmt)) {
        echo "Failed to INSERT '$firstName' to MySQL\n";
    }

    $firstName = 'Timmy';
    $grade = 5;
    mysqli_stmt_bind_param($stmt,"si", $firstName, $grade);
    if(!mysqli_stmt_execute($stmt)) {
        echo "Failed to INSERT '$firstName' to MySQL\n";
    }

    $firstName = 'Katie';
    $grade = 3;
    mysqli_stmt_bind_param($stmt,"si", $firstName, $grade);
    if(!mysqli_stmt_execute($stmt)) {
        echo "Failed to INSERT '$firstName' to MySQL\n";
    }

    $firstName = 'Ralphie';
    $grade = 4;
    mysqli_stmt_bind_param($stmt,"si", $firstName, $grade);
    if(!mysqli_stmt_execute($stmt)) {
        echo "Failed to INSERT '$firstName' to MySQL\n";
    }

    $firstName = 'Bobby';
    $grade = 1;
    mysqli_stmt_bind_param($stmt,"si", $firstName, $grade);
    if(!mysqli_stmt_execute($stmt)) {
        echo "Failed to INSERT '$firstName' to MySQL\n";
    }

    mysqli_stmt_close($stmt);
    mysqli_close($con);
?>
<?php
    function init_grades(){
        $con = mysqli_connect("localhost","dev","dev","student_tracker");

        // Check connection
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
        }

        echo("Seeding grade_levels table");

        $query = "INSERT INTO grade_levels (name) VALUES (?)";
        $stmt = mysqli_prepare($con, $query);

        $gradeName = 'pre-K';
        mysqli_stmt_bind_param($stmt,"s", $gradeName);
        if(!mysqli_stmt_execute($stmt)) {
            echo "Failed to INSERT '$gradeName' to MySQL\n";
        }

        $gradeName = 'Kindergarten';
        mysqli_stmt_bind_param($stmt,"s", $gradeName);
        if(!mysqli_stmt_execute($stmt)) {
            echo "Failed to INSERT '$gradeName' to MySQL\n";
        }

        $gradeName = 'First';
        mysqli_stmt_bind_param($stmt,"s", $gradeName);
        if(!mysqli_stmt_execute($stmt)) {
            echo "Failed to INSERT '$gradeName' to MySQL\n";
        }

        $gradeName = 'Second';
        mysqli_stmt_bind_param($stmt,"s", $gradeName);
        if(!mysqli_stmt_execute($stmt)) {
            echo "Failed to INSERT '$gradeName' to MySQL\n";
        }

        $gradeName = 'Third';
        mysqli_stmt_bind_param($stmt,"s", $gradeName);
        if(!mysqli_stmt_execute($stmt)) {
            echo "Failed to INSERT '$gradeName' to MySQL\n";
        }

        $gradeName = 'Fourth';
        mysqli_stmt_bind_param($stmt,"s", $gradeName);
        if(!mysqli_stmt_execute($stmt)) {
            echo "Failed to INSERT '$gradeName' to MySQL\n";
        }

        $gradeName = 'Fifth';
        mysqli_stmt_bind_param($stmt,"s", $gradeName);
        if(!mysqli_stmt_execute($stmt)) {
            echo "Failed to INSERT '$gradeName' to MySQL\n";
        }

        $gradeName = 'Sixth';
        mysqli_stmt_bind_param($stmt,"s", $gradeName);
        if(!mysqli_stmt_execute($stmt)) {
            echo "Failed to INSERT '$gradeName' to MySQL\n";
        }

        $gradeName = 'Seventh';
        mysqli_stmt_bind_param($stmt,"s", $gradeName);
        if(!mysqli_stmt_execute($stmt)) {
            echo "Failed to INSERT '$gradeName' to MySQL\n";
        }

        $gradeName = 'Eighth';
        mysqli_stmt_bind_param($stmt,"s", $gradeName);
        if(!mysqli_stmt_execute($stmt)) {
            echo "Failed to INSERT '$gradeName' to MySQL\n";
        }

        mysqli_stmt_close($stmt);
        mysqli_close($con);
    }

    function init_test_students() {
        $con = mysqli_connect("localhost","dev","dev","student_tracker");

        // Check connection
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
        }

        $query = "INSERT INTO students (first_name, last_name, address_1, city, state, zip_code, grade_level) ".
                 "VALUES (?, '', '', 'Chicago', 'IL', '60606', ?)";
        $stmt = mysqli_prepare($con, $query);

        if($stmt == false) {
            echo "Failed to prepare MySQL statement:";
            exit();
        }

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
    }
?>
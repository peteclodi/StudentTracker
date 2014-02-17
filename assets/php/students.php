<?php
    error_reporting(E_ALL);

    function get_students() {
        $con = mysqli_connect("localhost","dev","dev","student_tracker");

        // Check connection
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
        }

        $result = mysqli_query($con, "SELECT * FROM students");
        echo json_encode($result);
        mysqli_close($con);
    }
?>
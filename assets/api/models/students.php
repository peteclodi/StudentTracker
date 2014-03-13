<?php
    function get_students() {
        $con = mysqli_connect("localhost","dev","dev","student_tracker");

        // Check connection
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
        }

        $result = mysqli_query($con, "SELECT * FROM students");
        if(mysqli_num_rows($result) > 0) {
            echo json_encode($result);
        }
        else {
            echo "[]";
        }
        mysqli_close($con);
    }

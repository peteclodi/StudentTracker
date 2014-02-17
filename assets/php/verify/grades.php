<?php
    $con = mysqli_connect("localhost","dev","dev","student_tracker");

    // Check connection
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }

    if($result = mysqli_query($con, "SELECT * FROM grade_levels")){
        // Display Results -----------------------------
        while($row = $result->fetch_assoc()) {
            echo '<p>';
            $i = 0;
            foreach ($row as $item) {
                if($i == 1){
                    echo ' Grade: ' . $item;
                }
                else{
                    echo '[' . $item . ']';
                }
                $i++;
            }
            echo '</p>';
            $i = 0;
        }
    }
    mysqli_close($con);

<?php
    function get_grades() {
        $con = mysqli_connect("localhost","dev","dev","student_tracker");

        // Check connection
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
        }

        $grades = array();
        if($result = mysqli_query($con, "SELECT * FROM grade_levels")){
            $grade = new stdClass();
            while($row = $result->fetch_assoc()) {
                $i = 0;
                foreach ($row as $item) {
                    if($i == 1){
                        $grade->name = $item;
                    }
                    else{
                        $grade->id = (int)$item;
                    }
                    $i++;
                }
                $i = 0;
                $grades[] = $grade;
                unset($grade);
            }
        }
        mysqli_close($con);
        return $grades;
    }
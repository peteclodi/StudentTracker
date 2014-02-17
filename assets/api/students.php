<?php
    require_once 'api.php';

    class StudentsAPI extends API {
        protected $User;

        public function __construct($request, $origin) {
            parent::__construct($request);
//
//            // Abstracted out for example
//            $APIKey = new Models\APIKey();
//            $User = new Models\User();
//
//            if (!array_key_exists('apiKey', $this->request)) {
//                throw new Exception('No API Key provided');
//            } else if (!$APIKey->verifyKey($this->request['apiKey'], $origin)) {
//                throw new Exception('Invalid API Key');
//            } else if (array_key_exists('token', $this->request) &&
//                !$User->get('token', $this->request['token'])) {
//
//                throw new Exception('Invalid User Token');
//            }
//
//            $this->User = $User;
        }

        /**
         * Example of an Endpoint
         */
        protected function example() {
            if ($this->method == 'GET') {
                return "Your name is " . $this->User->name;
            } else {
                return "Only accepts GET requests";
            }
        }

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
    }
?>
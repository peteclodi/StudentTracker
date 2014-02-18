var studentTrackerControllers = angular.module('studentTrackerControllers', []);

studentTrackerControllers.controller('EditAttendanceCtrl', ['$scope', 'students', 'attendance',
    function ($scope, students, attendance) {
        $scope.students = students.filter(function(){return true;});
        $scope.attendance = attendance;
        if($scope.attendance[$scope.currentDateValue] === undefined) {
            var now = new Date();
            $scope.currentDateValue = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
            $scope.attendance[$scope.currentDateValue] = [];
        }
        //inline
        $('#dpEditAttendance').datepicker({
            todayBtn: 'linked'
        }).on("changeDate", function(event){
            $scope.currentDateValue = event.date.valueOf();
            if($scope.attendance[$scope.currentDateValue] === undefined){
                $scope.attendance[$scope.currentDateValue] = [];
                $scope.students = students.filter(function(){return true;});
            }
            else {
                $scope.attendance[$scope.currentDateValue].forEach(function(studentId) {
                    //$scope.students[id: studentId].attended = false;
                });
            }
        });

        $scope.attendanceChanged = function(id) {
            var attended = $scope.students.filter(function(student){ return student.id === id;})[0].attended;
            var studentIndex = $scope.attendance[$scope.currentDateValue].indexOf(id);
            if(attended && studentIndex === -1) {
                $scope.attendance[$scope.currentDateValue].push(id);
            }
            else if(!attended && studentIndex !== -1) {
                $scope.attendance[$scope.currentDateValue] =
                    $scope.attendance[$scope.currentDateValue].filter(function(studentId) { return studentId !== id;});
            }
        };
    }]);

studentTrackerControllers.controller('ViewAttendanceCtrl', ['$scope', '$http',
    function ($scope, $http) {
        // Get Students listing from the data server
//        $http.get('phones/phones.json').success(function(data) {
//            $scope.phones = data;
//        });
    }]);

studentTrackerControllers.controller('StudentsCtrl', ['$scope', '$routeParams', 'students', 'grades',
    function($scope, $routeParams, students, grades) {
        $scope.students = students;
        $scope.grades = grades;
        $scope.studentId = +($routeParams.studentId);

        $scope.addStudent = function() {
            if($scope.students.filter(function(student){
                return student.firstName === $scope.student.firstName &&
                       student.lastName === $scope.student.lastName;
            }).length === 0){
                $scope.students.push({
                    id: getNextStudentId($scope.students),
                    firstName: $scope.student.firstName,
                    lastName: $scope.student.lastName,
                    grade: $scope.student.grade
                });
            }
            this.resetStudent();
        };

        $scope.resetStudent = function() {
            $scope.student = {};
            $scope.student.grade = $scope.grades[0];
        };

        $scope.editStudent = function(event) {
            var studentToEdit = $scope.students.filter(function(student){
                return student.id === +(event.currentTarget.parentElement.id);
            });
            if(studentToEdit.length !== 0){
                $scope.student = studentToEdit[0];
            }
        };
        $scope.deleteStudent = function(event) {
            $scope.students = $scope.students.filter(function(student){
                return student.id !== +(event.currentTarget.parentElement.id);
            });
        };
        $scope.resetStudent();
    }]);

function getNextStudentId(studentsArray) {
    return Math.max.apply(null, studentsArray.map(function(student){ return +(student.id); })) + 1;
}
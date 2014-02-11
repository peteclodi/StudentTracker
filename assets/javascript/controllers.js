var studentTrackerControllers = angular.module('studentTrackerControllers', []);

studentTrackerControllers.controller('EditAttendanceCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $(function(){
            //inline
            $('#dpEditAttendance').datepicker({
                todayBtn: 'linked'
            }).on("changeDate", function(date){
                $scope.currentDate = date;
            });
        });
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
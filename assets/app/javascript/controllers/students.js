'use strict';

angular.module('studentTrackerApp')
       .controller('StudentsCtrl', function($scope, $routeParams, students, Grades) {
        $scope.students = students;
        $scope.grades = Grades.query();
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
    });

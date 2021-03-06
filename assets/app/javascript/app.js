'use strict';

var studentTrackerApp = angular.module('studentTrackerApp', [
    'ngResource',
    'ngRoute',
    'studentTrackerControllers'
]);

// I log the invocation of the LINK function. Since the Link
// function is invoked whenever its contextual DOM element is
// created, this actually logs DOM creation.
studentTrackerApp.directive("bnLogDomCreation", function() {
    // I link the DOM element to the view model.
    function link( $scope, element, attributes ) {
        console.log(attributes.bnLogDomCreation, $scope.$index);
    }

    // Return directive configuration.
    return( {link: link});
});

studentTrackerApp.provider('grades', function(){
    this.$get = function() {
        return [ {name: 'pre-k'}, {name: 'k'}, {name: '1'}, {name: '2'}, {name: '3'},
                 {name: '4'}, {name: '5'}, {name: '6'}, {name: '7'}, {name: '8'} ];
    };
});

studentTrackerApp.factory('Grades', function($resource) {
    var Grades = $resource('api/grades');

    var originalQuery = Grades.query;
    Grades.query = function(parameters, callback) {
        var grades = originalQuery.call(Grades, parameters, function () {
            return grades.grades;
        });
        return grades;
    };
});

studentTrackerApp.provider('students', function(){
    var studentArray = [];

    this.init = function(grades) {
        $.ajax({
            url: "http://localhost:8080/api/students",
            type: "GET"
        }).done(function(data, status, jqXHR){
            studentArray = data;
        }).fail(function(jqXHR, status, error){
            studentArray = [];
        });
//        studentArray = [
//            {id: 0, firstName: "Jimmy", lastName: "", grade: grades[0]},
//            {id: 1, firstName: "Timmy", lastName: "", grade: grades[4]},
//            {id: 2, firstName: "Janey", lastName: "", grade: grades[6]},
//            {id: 3, firstName: "Debbie", lastName: "", grade: grades[1]},
//            {id: 4, firstName: "Ralphie", lastName: "", grade: grades[3]}
//        ];
    };

    this.$get = function() {
        return studentArray;
    };
});

studentTrackerApp.provider('attendance', function(){
    var attendanceMap = [];

    this.$get = function() {
        return attendanceMap;
    };
});

studentTrackerApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/edit-attendance', {
                templateUrl: 'partials/edit-attendance.html',
                controller: 'EditAttendanceCtrl'
            }).
            when('/view-attendance', {
                templateUrl: 'partials/view-attendance.html',
                controller: 'ViewAttendanceCtrl'
            }).
            when('/students', {
                templateUrl: 'partials/students.html',
                controller: 'StudentsCtrl'
            }).
            when('/students/:studentId', {
                templateUrl: 'partials/students.html',
                controller: 'StudentsCtrl'
            }).
            otherwise({
                redirectTo: '/view-attendance'
            });
    }
]);

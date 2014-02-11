var studentTrackerApp = angular.module('studentTrackerApp', [
    'ngRoute',
    'studentTrackerControllers'
]);

studentTrackerApp.provider('grades', function(){
    this.$get = function() {
        return [ {name: 'pre-k'}, {name: 'k'}, {name: '1'}, {name: '2'}, {name: '3'},
                 {name: '4'}, {name: '5'}, {name: '6'}, {name: '7'}, {name: '8'} ];
    };
});

studentTrackerApp.provider('students', function(){
    var studentArray = [];

    this.init = function(grades) {
        studentArray = [
            {id: 0, firstName: "Jimmy", lastName: "", grade: grades[0]},
            {id: 1, firstName: "Timmy", lastName: "", grade: grades[4]},
            {id: 2, firstName: "Janey", lastName: "", grade: grades[6]},
            {id: 3, firstName: "Debbie", lastName: "", grade: grades[1]},
            {id: 4, firstName: "Ralphie", lastName: "", grade: grades[3]}
        ];
    };

    this.$get = function() {
        return studentArray;
    };
});

studentTrackerApp.config(['$routeProvider', 'studentsProvider', 'gradesProvider',
    function($routeProvider, studentsProvider, gradesProvider) {
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
        studentsProvider.init(gradesProvider.$get());
    }
]);

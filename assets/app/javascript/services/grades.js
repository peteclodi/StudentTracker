'use strict';

angular.module('studentTrackerApp').factory('Grades', function($resource) {
    var Grades = $resource('api/grades');

    var originalQuery = Grades.query;
    Grades.query = function(parameters, callback) {
        var grades = originalQuery.call(Grades, parameters, function () {
            return grades.grades;
        });
        return grades;
    };
});

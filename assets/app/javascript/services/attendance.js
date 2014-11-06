angular.module("studentTrackerApp").provider('attendance', function(){
    var attendanceMap = [];

    this.$get = function() {
        return attendanceMap;
    };
});

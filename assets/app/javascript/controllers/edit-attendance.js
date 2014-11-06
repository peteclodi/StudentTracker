angular.module("studentTrackerApp").controller('EditAttendanceCtrl', ['$scope', 'students', 'attendance',
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

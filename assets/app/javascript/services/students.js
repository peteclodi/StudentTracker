angular.module("studentTrackerApp").provider('students', function(){
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

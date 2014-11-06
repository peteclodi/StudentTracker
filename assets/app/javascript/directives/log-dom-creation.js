// I log the invocation of the LINK function. Since the Link
// function is invoked whenever its contextual DOM element is
// created, this actually logs DOM creation.
angular.module("studentTrackerApp")
                 .directive("bnLogDomCreation", function() {
    // I link the DOM element to the view model.
    function link( $scope, element, attributes ) {
        console.log(attributes.bnLogDomCreation, $scope.$index);
    }

    // Return directive configuration.
    return( {link: link});
});

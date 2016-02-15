myBookart.controller("headerCtrl", function ($scope, $location) {
    $scope.title = "BOOKART";
    /*$scope.nav = {};*/
    $scope.isActive = function (path) {
        if (path === $location.path()) {
            return true;
        };
        return false;
    };
})
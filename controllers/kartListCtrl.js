myBookart.controller("kartListCtrl", function ($scope, kartService) {
    $scope.kart = kartService.getKart();

    $scope.buy = function (book) {
        kartService.buy(book);
    };
});
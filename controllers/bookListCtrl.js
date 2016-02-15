myBookart.controller("BookListCtrl", function ($scope, bookService, kartService, cacheFactory) {

    $scope.books = bookService.getBooks();
    $scope.addToKart = function (book) {
        kartService.addToKart(book);
    };
    console.log(cacheFactory.get("myBookData"));
    cacheFactory.destroy("myBookData");
    //console.log(cacheFactory.get("myBookData") + "---------->2");

});
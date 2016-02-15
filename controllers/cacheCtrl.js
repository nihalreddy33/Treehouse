myBookart.controller("cacheCtrl", function ($scope, bookService, cacheFactory) {

    //$scope.myBookData = bookService.getBooks();
    cacheFactory.put("myBookData", bookService.getBooks());
    console.log(cacheFactory.get("myBookData"));
});
app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This text contained in title attribute!';
  $scope.promo = "A new attribute here";
  $scope.product = {
    name: 'The Book of Trees',
    price: 19
  };
}]);

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This text contained in title attribute!';
  $scope.promo = "A new attribute here";
  $scope.plusOne = function(index) {
      $scope.products[index].likes += 1;
   };
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg',
      likes :0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes :0
    } ,
    {
      name: 'AngularJS',
      price: 12,
      pubdate: new Date('2015', '03', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes :0
    } ,
    {
      name: 'Responsive Web Design',
      price: 14,
      pubdate: new Date('2014', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes :0
    }
  ];
}]);

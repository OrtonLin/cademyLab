app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This text contained in title attribute!';
  $scope.promo = "A new attribute here";
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg'
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg'
    } ,
    {
      name: 'AngularJS',
      price: 12,
      pubdate: new Date('2015', '03', '01'),
      cover: 'img/program-or-be-programmed.jpg'
    } ,
    {
      name: 'Responsive Web Design',
      price: 14,
      pubdate: new Date('2014', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg'
    }
  ];
}]);

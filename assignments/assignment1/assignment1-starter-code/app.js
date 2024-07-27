
var app = angular.module('myApp', []);

app.controller('MainController',  ['$scope', function($scope) {
  $scope.mealslist = ''; 
  $scope.message = 'Please enter data first'; 

  
  $scope.countItems = function() {
    if ($scope.mealslist) { // Check if mealslist has input
      var items = $scope.mealslist.split(',').map(function(item) {
        return item.trim();
      }).filter(function(item) {
        return item !== '';
      });

      if (items.length > 0) { // Check if there are any items
        if (items.length > 3) {
          $scope.message = "Too much";
        } else {
          $scope.message = "Enjoy!!";
        }
      }
    } 
  };
}]);



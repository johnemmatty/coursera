var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope) {
  // Correcting the structure of items to buy as an array of objects
  $scope.itemstobuy = [
    {name: "cookies", quantity: 10},
    {name: "caramel", quantity: 5},
    {name: "pepsi", quantity: 3},
    {name: "coke", quantity: 2},
    {name: "bread", quantity: 10}
  ];
  
  
  $scope.itemsbought = []; // Initialize an empty list for items bought

  // Function to move an item from itemstobuy to itemsbought
  $scope.moveItem = function(index) {
    var item = $scope.itemstobuy[index]; // Get the item from the first list
    $scope.itemsbought.push(item); // Add the item to the new list
    $scope.itemstobuy.splice(index, 1); // Remove the item from the first list
  };
}]);
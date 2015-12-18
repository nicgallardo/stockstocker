app.controller('MainController', function($scope, $http){

})

app.controller('StockController', function($scope, $http){
  $scope.message = "Stock"
})

app.controller('StocksController', function($scope, $http){
  $scope.message = "Stocks"
  $scope.companies;
  $http({
  method: 'GET',
  url: '/symbols.json'
  }).then(function successCallback(response) {
    $scope.allCompanies = response;
    console.log(response);

  })
})

app.controller('AboutController', function($scope, $http){
  $scope.message = "About";
});

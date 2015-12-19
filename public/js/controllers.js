var foo = "FUCK ALL";

app.controller('MainController', function($scope, $http){

})

app.controller('StockController', function($scope, $http, $routeParams){
  $scope.message = "Stock";
  $scope.currentParam = $routeParams;
  var symbol = $routeParams.symbol;
  $scope.bar;
  var d = new Date();
  var dd = d.getDate();
  var mm = d.getMonth()+1;
  var yyyy = d.getFullYear();
  $scope.currentDate  = yyyy + "-" + mm + "-" + dd;
//WORKS
  // $http({
  // method: 'GET',
  // url: 'https://www.quandl.com/api/v3/datasets/WIKI/' + symbol + '.json?end_date=' + $scope.currentDate + '&api_key=uQpkcEhcJnu1NxsUesWv'
  // }).then(function successCallback(response) {
  //   $scope.bar = response.data.dataset.data;
  // })

  //get stock info by dates                     ((SYMBOL))                                    ((time >>> daily or quarterly >>))((DATES to lookup))
//https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?column_index=4&order=asc&collapse=daily&start_date=2012-01-01&end_date=2015-12-01&api_key=uQpkcEhcJnu1NxsUesWv

})

app.controller('StocksController', function($scope, $http){
  $scope.message = "Stocks"
  $scope.companies;
  $http({
  method: 'GET',
  url: '/symbols.json'
  }).then(function successCallback(response) {
    $scope.allCompanies = response.data;
  })

  $scope.go = function() {

    $scope.msg = 'clicked';
  }
})

app.controller('AboutController', function($scope, $http){
  $scope.message = "About";
});

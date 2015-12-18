app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/about.html',
    controller: 'AboutController'
  })
  .when('/stocks/:symbol', {
    templateUrl: '/partials/stock.html',
    controller: 'StockController'
  })
  .when('/stocks', {
    templateUrl: '/partials/stocks.html',
    controller: 'StocksController'
  })
  .otherwise({redirectTo:'/'});

  $locationProvider.html5Mode(true);
})

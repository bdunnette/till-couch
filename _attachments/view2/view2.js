'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.productDB = $rootScope.server.getDB('till');
  $scope.saleDB = $rootScope.server.getDB('till');
  $scope.customerDB = $rootScope.server.getDB('till');

  $scope.editingSale = $scope.saleDB.newDoc();  

  $scope.productDB.query("till", "products", { include_docs: true });
  console.log($scope.productDB);
}]);

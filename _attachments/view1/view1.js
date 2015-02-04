'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  
  console.log($rootScope.server);
  $scope.productDB = $rootScope.server.getDB('till');
  console.log($scope.productDB);
  
  $scope.editingProduct = $scope.productDB.newDoc({listPrice: 1, taxable:true});
  
  $scope.productDB.query("till", "products", { include_docs: true });
  console.log($scope.productDB);
  
  $scope.rowClick = function(idx) {
    $scope.editingProduct = $scope.productDB.getQueryDoc(idx);
    $scope.formEditProduct.$setPristine();
  };
  
  $scope.saveProduct = function() {
    console.log($scope.editingProduct);
    $scope.editingProduct.save();
    $scope.productDB.queryRefresh();
  };
}]);
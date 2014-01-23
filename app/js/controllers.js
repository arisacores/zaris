'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('MyCtrl3', [function() {

  }])

  .controller('PhoneListCtrl', ['$scope', '$http',
	function ($scope, $http) {
	$http.get('phones/phones.json').success(function(data) {
	$scope.phones = data;
  });
 
	$scope.orderProp = 'age';
}]);
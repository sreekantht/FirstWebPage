'use strict';

angular.module('myAppRename.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'app/view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl',['$scope','InfoFactory','InfoService', function($scope,InfoFactory,InfoService) {
    $scope.infoFactory = InfoFactory.getInfo();
    $scope.infoService = InfoService.getInfo();
  }]);

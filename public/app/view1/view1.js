'use strict';

angular.module('myAppRename.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'app/view1/main.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function() {
});
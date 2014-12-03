'use strict';

angular.module('myAppRename.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'app/view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

    .controller('ViewVoteTeam', ['$scope','$http', 'WikiFactory', function ($scope, $http,  WikiFactory){
      $scope.getAllComments = function(teamName){


        $http({
          method: 'GET',
          url: 'api/getComments'+ teamName
        })
            .success(function (data, status, headers, config) {
              $scope.comments = data;
            }).
            error(function (data, status, headers, config) {
              $scope.error = data;
            });
      }

      $scope.updateComment = function(commentId){
        $http({
          method: 'PUT',
          url: 'api/updateComment/'+ commentId
        })
            .success(function (data, status, headers, config) {
              $scope.commentUpdated = data;
            }).
            error(function (data, status, headers, config) {
              $scope.error = data;
            });
      }

      $scope.getAllTeams = function(){


        $http({
          method: 'GET',
          url: 'api/teams'
        })
            .success(function (data, status, headers, config) {
              $scope.teams = data;
            }).
            error(function (data, status, headers, config) {
              $scope.error = data;
            });
      }
    }]);




'use strict';

angular.module('myAppRename.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'app/view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

    .controller('ViewVoteTeam', ['$scope','$http', 'WikiFactory', function ($scope, $http,  WikiFactory) {
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

        $scope.updateVotes = function (team){
            $http({
                method: 'PUT',
                url: 'api/updateVotes/'+team
            })
                .success(function (data, status, headers, config) {
                    $scope.updatedTeam = data;
                }).
                error(function (data, status, headers, config) {
                    $scope.error = data;
                });
        }
  }]);



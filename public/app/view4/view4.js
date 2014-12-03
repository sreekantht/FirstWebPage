/**
 * Created by Kaloyan on 12/2/2014.
 */
'use strict';

angular.module('myAppRename.view3', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view4', {
            templateUrl: 'app/view4/view4.html',
            controller: 'View4Ctrl'
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


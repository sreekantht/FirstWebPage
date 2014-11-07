angular.module('myAppRename.controllers', []).
  controller('AppCtrl', function ($scope) {
    $scope.title = "Demo Angular, Express and MongoDb";
  })
  .controller('NameCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'api/name'
    }).
      success(function (data, status, headers, config) {
        $scope.name = data.name;
      }).
      error(function (data, status, headers, config) {
        $scope.name = 'Error!';
      });
  })
  .controller('MyCtrl2', function ($scope) {
    // write MyCtrl2 here
  });




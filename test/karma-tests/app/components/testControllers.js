'use strict';

describe('myAppRename.controllers NameCtrl', function () {

  var scope, httpBackendMock, ctrl;

  beforeEach(module('myAppRename'));

  // Load our app module definition before each test.
  beforeEach(inject(function ($httpBackend, $rootScope, $controller) {
    httpBackendMock = $httpBackend;
    httpBackendMock.expectGET('api/name').
      respond({name: 'Donald Duck'});
    scope = $rootScope.$new();
    ctrl = $controller('NameCtrl', {$scope: scope});
  }));

  it('Should Fetch Donald Duck ', function () {
    expect(scope.name).toBeUndefined();
    httpBackendMock.flush();

    expect(scope.name).toEqual("Donald Duck");
  });
})


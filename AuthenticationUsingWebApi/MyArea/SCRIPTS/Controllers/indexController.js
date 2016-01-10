/// <reference path="../CommonJS/angular.js" />
'use strict';
app.controller('indexController', ['$scope', 'indexService', 'authService', function ($scope, indexService, authService) {
    $scope.IsLoggedIn = false;

    indexService.GetMyProfile().then(function (response) {
        $scope.profileDetail = response.data;
        $scope.IsLoggedIn = true;
        
    }, function () {
        alert("Failed!");
    });

    $scope.LogOut = function () {
        authService.logOut();
        $scope.IsLoggedIn = false;
    };
    

}]);
/// <reference path="../CommonJS/angular.js" />
'use strict';
app.controller('loginController', ['$scope', '$window', 'authService', 'ngAuthSettings', function ($scope, $window, authService, ngAuthSettings) {

    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.login = function () {
        authService.login($scope.loginData).then(function (response) {
            $window.location.href = "/MyArea/HTML/index.html";
        },
        function (error) {
            alert("Error occured! Please try again.");
        });
    };
}]);
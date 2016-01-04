/// <reference path="../CommonJS/angular.js" />
'use strict';
app.controller('signupController', ['$scope','$window', '$timeout', 'authService', function ($scope,$window, $timeout, authService) {

    $scope.registration = {
        Email: "",
        Password: "",
        ConfirmPassword:""
    };

    $scope.signUp = function () {
        authService.saveRegistration($scope.registration).then(function (response) {
            alert("Successfully Registered.Please sign-in to continue.");
            startTimer();
        },
        function (error) {
            alert(error.data);
        });
    };

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $window.location.href = "/MyArea/HTML/login.html";
        }, 2000);
    };
}]);

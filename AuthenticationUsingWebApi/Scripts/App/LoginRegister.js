/// <reference path="../angular-cookies.js" />
/// <reference path="../angular.js" />

var App = angular.module('App', ['ngCookies']);
App.controller('IdentityController', function ($scope,$http,$window,$cookies) {

    $scope.form = {};
    $scope.tokenBodyForLogin = {};
    
    $scope.SetCookie = function (token) {
        $cookies.put('_tokenData', token);
    };

    $scope.Register = function () {
        //console.log($scope.form);
        $scope.form = {
            Email: $scope.Email,
            Password: $scope.Password,
            ConfirmPassword: $scope.ConfirmPassword
        };

        $http.post("/api/Account/Register", $scope.form).then(function (response) {
            alert("Successfully registered. Please sign in to continue.");
        }, function (error) {
            alert("Error!");
        });
    };

    $scope.Login = function () {

        $http({
            method: 'POST',
            url: "/token",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: { username: $scope.username, password: $scope.password, grant_type: "password" }
            }).success(function (data) {
                $scope.SetCookie(data.access_token);
                $window.location.href = "/HTML/Home.html";
            }).error(function () {
                alert("Login failed. Please try again.");
        });
    };

});

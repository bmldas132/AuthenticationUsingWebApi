/// <reference path="../angular.js" />
var app = angular.module('app', ['ngCookies']);
app.controller('HomeController', function ($http, $scope,$cookies,$location,$window) {

    $scope.IsLoggedIn = false;

    $scope.GetCookie = function (token) {
        var tokenValue = $cookies.get(token);
        return tokenValue;
    };
    $scope.RemoveCookie = function () {
        $cookies.remove('_tokenData');
    };

    $scope.GetUserDetail = function () {
        var tokenValue = $scope.GetCookie("_tokenData");

        if (tokenValue != "" && tokenValue != null && tokenValue != undefined) {
            $http({
                method: 'GET',
                url: "/api/New",
                headers: { 'authorization': 'bearer ' + tokenValue },
            }).success(function (data) {
                $scope.myEmail = data;
                $scope.IsLoggedIn = true;
            }).error(function () {
                $window.location.href = "/HTML/LoginRegister.html";
            });
        }
        else {
            $window.location.href = "/HTML/LoginRegister.html";
        };
    };



    $scope.Logout = function () {
        var tokenValue = $scope.GetCookie("_tokenData");
        $scope.RemoveCookie();
        if (tokenValue != "" && tokenValue != null && tokenValue != undefined) {
            $http({
                method: 'POST',
                url: "/api/Account/LogOut",
                headers: { 'authorization': 'bearer ' + tokenValue },
            }).success(function (data) {
                $scope.IsLoggedIn = false;
                $window.location.href = "/HTML/LoginRegister.html";
            }).error(function () {
                $window.location.href = "/HTML/LoginRegister.html";
                $scope.IsLoggedIn = false;
            });
        }
        else {
            alert("You already logged out.");
            $scope.IsLoggedIn = false;
            $window.location.href = "/HTML/LoginRegister.html";
        };

    };

    $scope.GetUserDetail();

});
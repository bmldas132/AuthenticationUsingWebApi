/// <reference path="../angular.js" />
var app = angular.module('app', []);
app.controller('GetAccessController', function ($http,$scope) {

    $scope.IsLoggedIn = false;

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    };

    $scope.GetUserDetail = function () {

        var user = getCookie("_tokenData");
        if (user != "") {
            $http({
                method: 'GET',
                url: "/api/New",
                headers: { 'authorization': 'bearer ' + user },

            }).success(function (data) {
                $scope.myEmail = data;
                $scope.IsLoggedIn = true;
            }).error(function () {
                alert("Invalid Credentials");
            });
        }
        else {

        };


    };

    $scope.Logout = function () {
        var user = getCookie("_tokenData");
        if (user != "") {
            $http({
                method: 'POST',
                url: "/api/Account/LogOut",
                headers: { 'authorization': 'bearer ' + user },

            }).success(function (data) {

                alert("Log Out :D");
                $scope.values = data;
            }).error(function () {
                alert("Failed :(");
            });
        }
        else {
            alert("You already logged out.");
        };

    };

    $scope.GetUserDetail();

});
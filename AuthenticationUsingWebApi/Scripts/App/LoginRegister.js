/// <reference path="../angular.js" />

var App = angular.module('App', []);
App.controller('IdentityController', function ($scope,$http) {

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    };

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




    $scope.form = {};

    $scope.tokenBodyForLogin = {

    };
    

    $scope.Register = function () {
        //console.log($scope.form);
        $scope.form = {
            Email: $scope.Email,
            Password: $scope.Password,
            ConfirmPassword: $scope.ConfirmPassword
        };


        $http.post("/api/Account/Register", $scope.form).then(function (response) {
            alert("Success");
            
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
                alert("Success :D");
                document.cookie = "_tokenData=" + data.access_token;
                setCookie("_tokenData", data.access_token, 10);
            }).error(function () {
                alert("Failed :(");
            });

    };

    


});

/// <reference path="C:\Users\PIXELSTROKEU4\documents\visual studio 2015\Projects\AuthenticationUsingWebApi\AuthenticationUsingWebApi\Scripts/angular.js" />
/// <reference path="C:\Users\PIXELSTROKEU4\documents\visual studio 2015\Projects\AuthenticationUsingWebApi\AuthenticationUsingWebApi\Scripts/angular-local-storage.js" />

var app = angular.module('angularAuthApp', ['LocalStorageModule', 'angular-loading-bar']);

var serviceBase = 'http://localhost:55921/';

app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
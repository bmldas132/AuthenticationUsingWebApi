/// <reference path="../CommonJS/angular.js" />
'use strict';
app.factory('indexService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var indexServiceFactory = {};

    var _GetMyProfile = function () {

        return $http.get(serviceBase + 'api/user/GetDetail')
    };

    indexServiceFactory.GetMyProfile = _GetMyProfile;

    return indexServiceFactory;
}]);
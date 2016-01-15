/// <reference path="../CommonJS/angular.js" />
app.factory('addRoleToUserService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    addRoleToUserServiceFactory = {};

    var _addRoleToUser = function (userRole) {
        return $http.post(serviceBase + "api/UserRole/Create", userRole);
    };
    var _getRoles = function () {
        return $http.get(serviceBase + "api/Role/Get");
    };
    var _getUsers = function () {
        return $http.get(serviceBase + "api/AspNetUsers");
    };

    addRoleToUserServiceFactory.addRoleToUser = _addRoleToUser;
    addRoleToUserServiceFactory.getRoles = _getRoles;
    addRoleToUserServiceFactory.getUsers = _getUsers;

    return addRoleToUserServiceFactory;
}]);
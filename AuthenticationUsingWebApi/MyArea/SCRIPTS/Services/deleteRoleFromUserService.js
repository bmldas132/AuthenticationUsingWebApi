/// <reference path="../CommonJS/angular.js" />
app.factory('deleteRoleToUserService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    deleteRoleToUserServiceFactory = {};

    var _getRolesByUser = function (userId) {
        return $http.get(serviceBase + "api/Role/Get/"+userId);
    };
    var _getUsers = function () {
        return $http.get(serviceBase + "api/AspNetUsers");
    };
    var _deleteRolesToUser = function (userRole) {
        
        return $http({
            method: 'delete',
            url: serviceBase + "api/UserRole/Delete",
            headers: { 'Content-Type': 'application/json' },
            data: userRole
        });

        //return $http.delete(serviceBase + "api/UserRole/Delete", userRole);
    };

    deleteRoleToUserServiceFactory.getRolesByUser = _getRolesByUser;
    deleteRoleToUserServiceFactory.getUsers = _getUsers;
    deleteRoleToUserServiceFactory.deleteRolesToUser = _deleteRolesToUser;

    return deleteRoleToUserServiceFactory;
}]);
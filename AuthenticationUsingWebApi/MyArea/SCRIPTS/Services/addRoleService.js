/// <reference path="../CommonJS/angular.js" />
app.factory('addRoleService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {
    
    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    addRoleServiceFactory = {};
    

    var _addRole = function (role) {
        return $http.post(serviceBase + "api/Role/Create",role);
    };

    addRoleServiceFactory.addRole = _addRole;

    return addRoleServiceFactory;
}]);
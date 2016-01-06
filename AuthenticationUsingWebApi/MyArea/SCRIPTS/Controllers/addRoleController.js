/// <reference path="../CommonJS/angular.js" />
app.controller('addRoleController', ['$scope', 'addRoleService', function ($scope, addRoleService) {
    $scope.newRole = {};

    $scope.addRole = function () {
        data = JSON.stringify($scope.newRole.name);

        addRoleService.addRole(data).then(function (response) {
            alert("Added Successfully");
        }, function () {
            alert("Failed!");
        });
    };
}]);
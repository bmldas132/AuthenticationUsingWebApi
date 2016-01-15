/// <reference path="../CommonJS/angular.js" />
app.controller('addRoleToUserController', ['$scope', 'addRoleToUserService', function ($scope, addRoleToUserService) {
    //$scope.newUserRole = {};

    $scope.GetAllRoles = function () {
        addRoleToUserService.getRoles().then(function (response) {
            $scope.Roles = response.data;
        }, function () {
            alert("Error!");
        });
    };

    $scope.GetAllUsers = function () {
        addRoleToUserService.getUsers().then(function (response) {
            $scope.Users = response.data;
        }, function () {
            alert("Error!");
        });
    };

    $scope.GetAllUsers();
    $scope.GetAllRoles();


    $scope.selection = [];
    // toggle selection for a given employee by name
    $scope.toggleSelection = function toggleSelection(role) {
        //alert(role);
        var idx = $scope.selection.indexOf(role.Name);

        // is currently selected
        if (idx > -1) {
            $scope.selection.splice(idx, 1);
        }

            // is newly selected
        else {
            $scope.selection.push(role.Name);
        };
        console.log($scope.selection);
    };


    $scope.addRoleToUser = function () {

        $scope.newUserRole.Roles = $scope.selection;
        console.log($scope.newUserRole);
        addRoleToUserService.addRoleToUser(this.newUserRole).then(function (response) {
            alert("Added Successfully");
        }, function () {
            alert("Failed!");
        });
    };
}]);
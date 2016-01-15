/// <reference path="../CommonJS/angular.js" />
app.controller('addRoleToUserController', ['$scope', 'deleteRoleToUserService', function ($scope, deleteRoleToUserService) {
    //$scope.newUserRole = {};

    $scope.GetAllRolesByUser = function () {
        deleteRoleToUserService.getRolesByUser($scope.userId).then(function (response) {
            $scope.Roles = response.data;
        }, function () {
            alert("Error!");
        });
    };

    $scope.GetAllUsers = function () {
        deleteRoleToUserService.getUsers().then(function (response) {
            $scope.Users = response.data;
        }, function () {
            alert("Error!");
        });
    };

    $scope.GetAllUsers();

    $scope.selection = [];
    // toggle selection for a given employee by name
    $scope.toggleSelection = function toggleSelection(role) {
        //alert(role);
        var idx = $scope.selection.indexOf(role);

        // is currently selected
        if (idx > -1) {
            $scope.selection.splice(idx, 1);
        }

            // is newly selected
        else {
            $scope.selection.push(role);
        };
        console.log($scope.selection);
    };


    $scope.deleteRoleToUser = function () {

        $scope.data = {
            UserId: $scope.userId,
            Roles: $scope.selection
        };

        console.log($scope.data);

        deleteRoleToUserService.deleteRolesToUser($scope.data).then(function (response) {
            alert("Added Successfully");
        }, function () {
            alert("Failed!");
        });
    };
}]);
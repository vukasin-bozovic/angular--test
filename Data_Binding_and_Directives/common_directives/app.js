/**
 * Created by vukasinbozovic on 6/1/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter){

    $scope.handle = "";

    $scope.characters = 5;

    $scope.lowerCaseHandle = function(){
        return $filter("lowercase")($scope.handle);
    };

    $scope.rules = [

        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }

    ];


}]);
/**
 * Created by vukasinbozovic on 6/1/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter){

    $scope.handle = "";

    $scope.lowerCaseHandle = function(){
        return $filter("lowercase")($scope.handle);
    };



}]);
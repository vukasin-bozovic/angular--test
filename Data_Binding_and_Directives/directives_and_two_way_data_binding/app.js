/**
 * Created by vukasinbozovic on 5/29/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', "$filter", function($scope, $filter){

    $scope.handle = "";

    $scope.lowerCaseHandle = function(){
        return $filter('lowercase')($scope.handle)
    }

}]);

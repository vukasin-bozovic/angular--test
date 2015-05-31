/**
 * Created by vukasinbozovic on 5/29/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', "$timeout", function($scope, $timeout){

    $scope.name = "Vukas";

    $timeout(function(){

        $scope.name ="EVERYBODY";

    }, 3000);
}]);

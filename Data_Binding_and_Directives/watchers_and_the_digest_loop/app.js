/**
 * Created by vukasinbozovic on 5/31/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', "$filter", "$timeout", function($scope, $filter, $timeout){

    $scope.handle = "";

    $scope.lowerCaseHandle = function(){
        return $filter("lowercase")($scope.handle);
    };

    $scope.$watch('handle', function(newValue, oldValue){
        console.info("Changed!");
        console.log("Old:" +oldValue);
        console.log("New:" + newValue)
    });

    setTimeout(function(){
        $scope.handle = "New scope!";
        console.log("Scope changed!");
    }, 3000);

    setTimeout(function(){
        $scope.$apply(function(){
            $scope.handle = "Applay scope!";
            console.log("Scope changed!");
        })
    }, 4000);

    $timeout(function(){
        $scope.handle = "Timeout scope!!";
        console.log("Scope changed!");
    },5000);

}]);

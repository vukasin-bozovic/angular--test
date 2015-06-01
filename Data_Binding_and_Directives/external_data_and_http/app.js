/**
 * Created by vukasinbozovic on 6/1/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', '$log', function($scope, $http, $log){

    $scope.name = '';
    $scope.temperature = '';
    $scope.humidity = '';
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
        .success(function (result){
            $log.info(result);
            $scope.name = result.name;
            $scope.temperature = result.main.temp;
            $scope.humidity = result.main.humidity;
        })
        .error(function(data, status){
            $log.info(data + status);
        });

    //This is just example how it should work

    //$scope.newStaff = '';
    //$scope.addSomething = function(){
    //    $http.post('http://api.something', { table: $scope.newStaff })
    //        .success(function(result){
    //            $log.info(result);
    //        })
    //        .error(function(data, status){
    //            $log.info(data);
    //        })
    //}




}]);
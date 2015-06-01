
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

   $routeProvider

   .when('/', {
       templateUrl: 'pages/first.html',
       controller: 'firstController'
   })

   .when('/second', {
       templateUrl: 'pages/second.html',
       controller: 'secondController'
   })

   .when('/second/:num', {
       templateUrl: 'pages/second.html',
       controller: 'secondController'
   })

});

myApp.service('testService', function(){
    var self = this;

    self.name = "Vukasin Bozovic";

    self.nameLength = function(){
        return self.name.length;
    }

});


myApp.controller('firstController', ['$scope','$log','$location', 'testService', function ($scope, $log, $location, testService) {

    $log.info($location.path());

    $scope.name = testService.name;
    $scope.length = testService.nameLength();

    $scope.$watch('name', function(){
        testService.name = $scope.name;
    })




}]);

myApp.controller('secondController', ['$scope', '$log', '$location', '$routeParams', 'testService', function($scope, $log, $location, $routeParams, testService){

    $log.info($location.path());
    $scope.name = 'Second';

    $scope.num = $routeParams.num || 100;

    $scope.name = testService.name;
    $scope.length = testService.nameLength();

    $scope.$watch('name', function(){
       testService.name = $scope.name;
    });



}]);

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

myApp.controller('firstController', ['$scope','$log','$location', function ($scope, $log, $location) {

    $log.info($location.path());

    $scope.name = 'First';

}]);

myApp.controller('secondController', ['$scope', '$log', '$location', '$routeParams', function($scope, $log, $location, $routeParams){

    $log.info($location.path());
    $scope.name = 'Second';

    $scope.num = $routeParams.num || 100;





}]);
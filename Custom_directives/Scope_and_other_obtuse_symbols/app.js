var myApp = angular.module('myApp', ['ngRoute']);myApp.config(function ($routeProvider) {   $routeProvider   .when('/', {       templateUrl: 'pages/first.html',       controller: 'firstController'   })   .when('/second', {       templateUrl: 'pages/second.html',       controller: 'secondController'   })   .when('/second/:num', {       templateUrl: 'pages/second.html',       controller: 'secondController'   })});myApp.service('testService', function(){    var self = this;    self.name = "Vukasin Bozovic";    self.nameLength = function(){        return self.name.length;    }});myApp.directive('searchResult', function(){    return {        restrict: 'AECM',        templateUrl: 'directives/searchresult.html',        replace: true,        scope: {            personName: '@',            personAddress: '@',            personSex: '@'        }    };});myApp.controller('firstController', ['$scope', function ($scope) {    $scope.person = {        name: 'Vukasin',        address: 'Teslina 19',        sex: 'Male'    }}]);myApp.controller('secondController', ['$scope', function($scope){}]);
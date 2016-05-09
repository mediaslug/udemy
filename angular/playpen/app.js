/* this code snippet here contains examples of creating a route and a route with params. also creating a service as well as two simple controllers. this is based on sections 5 and 6. */


// create the angular module
var myApp = angular.module('myApp', ['ngRoute']);


// configure the routes
myApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/view1.html',
        controller: 'RoutingExampleController'
    })
    
    .when ('/second', {
        templateUrl: 'pages/view2.html',
        controller: 'RoutingExampleController2'
    })
    
    .when('/second/:num', {
        templateUrl:'pages/view2.html',
        controller: 'RoutingExampleController2'
    })
    
});

// create a custom service

myApp.service('nameService', function() {
    var self = this;
    this.name = "Jane Doe";
    this.namelength = function() {
        return self.name.length;
    };  
});


myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {
    
    $scope.name = 'Tony';
    
    $timeout(function() {
        
        $scope.name = 'Everybody';
        
    }, 3000);
    
    $scope.handle = '';
    $scope.lowercase = function() {
        return $filter('lowercase')($scope.handle);
    }
    $scope.characters = 5;
    
    $scope.rules = [
        {ruletext:"Must be 5 characters"},
        {ruletext:"Must clever"},
        {ruletext:"Must not be hipster-ie"}
    ]
}])

.controller('RoutingExampleController', ['$scope', 'nameService', function($scope, nameService) {
    $scope.word = "main";
    $scope.name = nameService.name; // grab the name from the nameservice and add it to the scope
    
    // will need to manually watch the name variable to update it within the service
    $scope.$watch('name', function() {
        nameService.name = $scope.name;  
    });

}])

.controller('RoutingExampleController2',['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    
    // will need to manually watch the name variable to update it within the service
    $scope.$watch('name', function() {
        nameService.name = $scope.name;  
    });
    
    $scope.word = "second";
    $scope.num = $routeParams.num || 1; // if parameter exists assign it, else assign 1. 
    
    $scope.name = nameService.name;
    $log.info(nameService.name)
    
}])





;

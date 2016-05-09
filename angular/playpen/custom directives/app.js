/* this code snippet here contains examples of creating a route and a route with params. also creating a service as well as two simple controllers. this is based on sections 5 and 6. */


// create the angular module
var myApp = angular.module('myApp', ['ngRoute']);


// configure the routes
myApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/view1.html',
        controller: 'mainController'
    })
    
    .when ('/second', {
        templateUrl: 'pages/view2.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl:'pages/view2.html',
        controller: 'secondController'
    })
    
});


myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {
    
}])

.controller('secondController', ['$scope', function($scope) {

}])


;

myApp.directive('searchResult', function() {
    return {
        restrict: 'AECM', // allow this directive to be used as an attribute, element, class and comment
        //template: '<div class="list-group"><a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, Jane</h4><p class="list-group-item-text"> 555 Main St., New York, NY 11111</p> </a></div>',
        templateUrl: 'directives/searchresult.html',
        replace: true
    }
})

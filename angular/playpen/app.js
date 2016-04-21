var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {
    
    $scope.name = 'Tony';
    
    $timeout(function() {
        
        $scope.name = 'Everybody';
        
    }, 3000);
    
    $scope.handle = '';
    $scope.lowercase = function() {
        return $filter('lowercase')($scope.handle);
    }
    
}]);

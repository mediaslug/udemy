var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {
	console.log($scope);
	$log.log("regular log entry");
	$log.warn("this is a warning");
	$log.error("this is an error");
    
});
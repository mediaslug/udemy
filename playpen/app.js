var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
	
}]);



var anotherApp = angular.module("anotherApp",[]);

anotherApp.controller("anotherController", ['$scope', '$filter', '$log', function($scope, $filter, $log) {
//	$log.log($scope);

	// whatever is sitting inside the scope becomes available to the controller in the view
	$scope.name = "PJ";
	$scope.handle = "";
	$scope.lowercasehandle = function() {
		return $filter('lowercase')($scope.handle);
	
	};

	$scope.$watch('handle', function(newValue, oldValue) {
		console.log("changed");
		console.log("old val " + oldValue);
		console.log("new val " + newValue);
		
			
	})
	

}]);


// a simple event listener
var tb = document.getElementById("name");
console.log(tb);
tb.addEventListener("keypress", function() {
	console.log("pressed");
})
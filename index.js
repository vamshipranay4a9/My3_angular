var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "Phaniukesh";
    $scope.lastName = "Tummala";
    var phani = 2;
	console.log(typeof(phani))
	$scope.test;
	console.log($scope.test)
	var sub;
	function sub(){
		console.log($scope.test)
	}
});

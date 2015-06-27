angular.module('starter')
.controller('EditPicsController', function($scope,$location,$state) {
	
	$scope.go = function () {
	    $state.go('app.submitted');
	};

  	$scope.showmessage=function(){
  		console.log('editphotos here')
	};
});
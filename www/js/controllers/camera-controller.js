angular
	.module('starter')
	.controller('CameraController', function($scope, Camera) {

  $scope.getPhoto = function() {
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
    }, function(err) {
      console.err(err);
    });
  };
});
//I want it organized like this, but first check that the example works, then organize it like below:
// angular
// 	.module('starter')
// 	.controller('CameraController',CameraControllerFunction($scope, Camera));

// function CameraControllerFunction($scope, Camera){


// };
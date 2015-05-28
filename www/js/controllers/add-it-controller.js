angular
.module('starter')
.controller("AddItController", function($scope, Camera) {

  $scope.getPhoto = function() {
    Camera.getPicture().then(
	//CameraSuccess (see documentation: https://github.com/apache/cordova-plugin-camera)
     function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
    },
    //cameraError
     function(err) {
      console.err(err);
    }, 
	//camera options
    {
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: true
    });
  };

});
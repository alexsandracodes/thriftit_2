angular
.module('starter')
.controller('AddItController', function($scope, $cordovaCapture, $cordovaActionSheet){

    $scope.selectCamera = function () {
      $scope.pickCamera=true;
      console.log('cchanged ngshow var')
    }

    $scope.pickCamera=false;
        console.log('add from camera button was selected? ' + $scope.pickCamera);

    //this event is fired when the "add from camera" option is selected and then a number of photos to take is selected
    $scope.selectNumPhotos = function (numPhotos) {
      console.log('numphotos is' + numPhotos)
      //assign the options based on user input
      var options = { limit: parseInt(numPhotos) };
      captureImage(options);

      //open camera to take the photos
      function captureImage(options) {
        // var options = { limit: 3 };

        $cordovaCapture.captureImage(options).then(function(imageData) {
          // Success! Image data is here
          console.log('success in image capture');
        }, function(err) {
          // An error occurred. Show a message to the user
          console.log('error in image capture');
        });
      }

      //changed the template back to default of showing add from camera
      $scope.pickCamera=false;
    

    }





  }
);
//The following was removed because wanted to add code that uses capture instead of camera
// .controller('AddItController', function($scope, $cordovaCamera, $cordovaFile) {
//   //this was modeled from example at http://devdactic.com/how-to-capture-and-store-images-with-ionic/
//   $scope.images = [];

// $scope.addImage = function() {
//  // 2
//  var options = {
//  destinationType : Camera.DestinationType.FILE_URI,
//  sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
//  allowEdit : false,
//  encodingType: Camera.EncodingType.JPEG,
//  popoverOptions: CameraPopoverOptions,
//  };
 
//  // 3
//  $cordovaCamera.getPicture(options).then(function(imageData) {
 
//  // 4
//  onImageSuccess(imageData);
 
//  function onImageSuccess(fileURI) {
//  createFileEntry(fileURI);
//  }
 
//  function createFileEntry(fileURI) {
//  window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
//  }
 
//  // 5
//  function copyFile(fileEntry) {
//  var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
//  var newName = makeid() + name;
 
//  window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
//  fileEntry.copyTo(
//  fileSystem2,
//  newName,
//  onCopySuccess,
//  fail
//  );
//  },
//  fail);
//  }
 
//  // 6
//  function onCopySuccess(entry) {
//  $scope.$apply(function () {
//  $scope.images.push(entry.nativeURL);
//  });
//  }
 
//  function fail(error) {
//  console.log("fail: " + error.code);
//  }
 
//  function makeid() {
//  var text = "";
//  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
//  for (var i=0; i < 5; i++) {
//  text += possible.charAt(Math.floor(Math.random() * possible.length));
//  }
//  return text;
//  }
 
//  }, function(err) {
//  console.log(err);
//  });
// }

//   $scope.urlForImage = function (imageName) {
//     console.log('get correct path for image');
//   }

// });

//the following was commented out on 6.2.2015 when the code from http://devdactic.com/how-to-capture-and-store-images-with-ionic/ was used instead
//the code is kept for future reference if it doesn't work. If the above method works, delete this.

// .controller("AddItController", function($scope, $cordovaCamera) {



//      var options = {
//         quality: 50,
//         destinationType: Camera.DestinationType.DATA_URL,
//         sourceType: Camera.PictureSourceType.CAMERA,
//         allowEdit: true,
//         encodingType: Camera.EncodingType.JPEG,
//         targetWidth: 100,
//         targetHeight: 100,
//         popoverOptions: CameraPopoverOptions,
//         saveToPhotoAlbum: true
//       };

//     $cordovaCamera.getPicture(options).then(function(imageData) {
//       // var image = document.getElementById('myImage');
//       // image.src = "data:image/jpeg;base64," + imageData;
//     }, function(err) {
//       // error
//     });


// });
angular
.module('starter')
.controller('AddItController', function($scope, $cordovaCapture, $cordovaActionSheet, $state, $window, addInventory){

    $scope.pickCamera=false;
    console.log('add from camera button was selected? ' + $scope.pickCamera);

    $scope.selectCamera = function () {
      $scope.pickCamera=true;
      console.log('cchanged ngshow var')
    }

    //this event is fired when the "add from camera" option is selected and then a number of photos to take is selected
    //it will select the number of photos to take and then open the camera
    $scope.selectNumPhotos = function (numPhotos) {
      // function captureImage(options) {
      //   $cordovaCapture.captureImage(options).then(function(imageData) {
      //     // Success! Image data is here
      //     console.log('success in image capture');
      //   }, function(err) {
      //     // An error occurred. Show a message to the user
      //     console.log('error in image capture');
      //   });
      // }

      // console.log('numphotos is' + numPhotos)

      // //assign the options based on user input
      // var options = { limit: parseInt(numPhotos) };
      // captureImage(options);
      // //after taking photos, add to firebase inventory:
      // addInventory.addNewItems(options);
      // //changed the template back to default of showing add from camera
      // $scope.pickCamera=false;
      // //change the location of the page to edit photo page
      // //needs to be the same as set in app.js
      console.log('done with takng pictures');
      $state.go('app.edit');
      console.log('the state is '+$state.current);


  }
});
angular
.module('starter')
.factory("Items", function($firebaseObject) {
  var itemsRef = new Firebase("https://thriftit.firebaseio.com/gallery");
  return $firebaseObject(itemsRef);
  console.log('pulled firebaseObject for gallery');
})
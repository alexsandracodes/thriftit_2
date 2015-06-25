
//so far only pushes one object, for now, after this works with one, change for multiple.
angular
.module('starter')
.factory('addInventory', function addInventoryFactory($firebaseObject) {
	 return {
		addNewItems: function (options) {
		 	for (var i = 0; i <options.limit; i++) {
		 		var inventoryRef = new Firebase('https://thriftit.firebaseio.com/inventory');
				var newItemRef = inventoryRef.push();
					newItemRef.set({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
				return $firebaseObject(newItemRef);
				//^^ watch out, because the way this is now will only return the last item pushed. need to fix this later after doing just one photo.
				console.log('added items to firebase inventory');
		 	}
	 	}
	 };
});
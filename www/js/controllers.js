angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
	$scope.homes = 'hello world';
	$scope.check = function() {
		window.location = '/'
	};
})

.controller('DashCtrl', function($scope,hi,Chats) {
	$scope.hi = hi;
	$scope.hi();
	console.log(Chats);
})

.controller('ChatsCtrl', function($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	}
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
angular.module('application')
.controller('CreateNapCtrl', function($http){
	var controller = this;
	this.saveNap = function(nap){
		$http({method: 'POST', url: '/naps', data: nap});
	};
})
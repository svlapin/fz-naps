'use strict';

angular.module('application')
.service('dataService', function($http){
    this.helloConsole = function(){
      console.log('This console hello');
    }
    this.getNips = function(callback){
      $http.get("mock/nips.json")
      .then(callback)
    }
    this.deleteNip = function(nip, $index){
      console.log('delete nip: ',nip);
      // other logic
    }
    this.saveNip = function(nip, $index){
      console.log('save nip: ', nip);
    }
  })
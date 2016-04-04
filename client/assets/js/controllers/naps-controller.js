'use strict';

angular.module('application')
.controller('NapsCtrl', function($scope, $state, $http, dataService){
    $scope.addNip = function(){
      var nip = {
        title: "My new title"
      }
      $scope.nips.push(nip);
    }
    
    dataService.getNips( function(response){
      console.log(response.data);
      $scope.nips = response.data;
    });

    $scope.deleteNip = function(nip, $index){
      console.log('scope nip delete: ', nip);
      dataService.deleteNip(nip, $index);
      $scope.nips.splice($index,1);
    }

    $scope.saveNip = function(nip, $index){
      console.log('scope nip save: ', nip);
      dataService.saveNip(nip);
    }

    $scope.learningNgChange = function(){
      console.log("An input changed!");
    }

  })
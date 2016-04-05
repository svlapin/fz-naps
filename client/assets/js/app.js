(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
  .controller('NapsCtrl', function($scope, $state, $http, dataService){
    $scope.uniqueTags = [];

    $scope.$watchCollection('nips', function() {
      $scope.uniqueTags =  _($scope.nips || []).map('tags').flatten().value();
    });

    $scope.addNip = function(nipCreateTitle,nipCreateDescription,nipCreateHashTags){
      var nip = {
        title: nipCreateTitle,
        description: nipCreateDescription,
        tags: nipCreateHashTags
      };
      $scope.nips.unshift(nip);
      // does it need to save? 
      // saveNips(nip);
    };
    
    dataService.getNips( function(response){
      console.log('line 27', response.data);
      $scope.nips = response.data;
    });

    $scope.deleteNip = function(nip, $index){
      console.log('scope nip delete: ', nip);
      dataService.deleteNip(nip, $index);
      $scope.nips.splice($index,1);
    };

    // $scope.saveNip = function(nip, $index){
    //   console.log('scope nip save: ', nip);
    //   dataService.saveNip(nip);
    // }

    $scope.saveNips = function(){
      var filteredNips = $scope.nips.filter(function(nip){
        if( nip.edited ){
          return nip;
        }
      });
      dataService.saveNips(filteredNips);
    };

    $scope.learningNgChange = function(){
      console.log("An input changed!");
    };

  })
  .service('dataService', function($http){
    this.getNips = function(callback){
      $http.get("mock/nips.json")
      .then(callback);
    };
  })
  .directive('napsSectionSelect', function(Section){
    return {
      replace: true,
      restrict: 'E',
      template: 'templates/sections.html',
      link: function(scope, ele, attrs){
        scope.section = Section.query();
      }
    };
  })
  .directive('napsSectionItem', function(Category){
    return {
      restrict: 'E',
      template: 'templates/section-item.html',
      scope: {
        section: "="
      }
    };
  })
  .config(config)
  .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

  

})();

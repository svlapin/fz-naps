angular.module('application')
.directive('napHashTags',function(){
  //var tag = nip.tags;
  return{
    restrict: "E",
    templateUrl: "templates/nap-hash-tags.html",
    controller: "NapsCtrl"
  };
})
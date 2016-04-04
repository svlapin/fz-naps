angular.module('application')
.directive('napCreate',function(){
  return{
    restrict: "E",
    templateUrl: "templates/nap-create.html",
    controller: "NapsCtrl"
  };
})
'use strict';


var reportDirective = angular.module("report.directive",[]);

reportDirective.directive('customGrid', function($compile) {

  return {
    restrict: 'E',
    templateUrl: 'partials/detailTable.html',
    scope : { items : '=' }, 
    replace : true,
    transclude : false,
    controller : controller
  };

  function controller($scope, $attrs) {

  	//console.log("inside the directive "+ JSON.stringify($scope.items,null,4));
    
    var fixedOptions = {
      data        : 'items'
    };

    $scope.options = {};

	angular.extend($scope.options, fixedOptions);
   
  };
});
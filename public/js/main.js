'use strict';


var twitter = angular.module('reportApp',['ngRoute','report.controller','report.services','report.directive']);

twitter.config(['$routeProvider',function($routeProvider){
	
	$routeProvider.
		when("/home",{
			templateUrl : "partials/home.html",
			controller : "homeController"
		}).
		when("/profile",{
			templateUrl : "partials/profile.html",
			controller : "profileController"
		}).
		when("/tweetpost",{
			templateUrl : "partials/tweetpost.html",
			contoller : "postController"
		}).
		otherwise({redirectTo : "/home"});
		
	
}]);
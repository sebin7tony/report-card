'use strict';


var reportCtrl = angular.module('report.controller',['ui.bootstrap','ngGrid']);


reportCtrl.controller("homeController",function($scope,studentService){

	// Initializing the first user to be selected 
	$scope.isSelectedStudent = 0; 

	// Function to set the user $index when the user 
	// clicks on the list.

	$scope.setSelected = function(index){

		$scope.isSelectedStudent = index;

	}

	// Process the web service from the backend to a form
	// that is to be required in the ngGrid format.

	var processStudent = function(){

		$scope.studentConfig = [];
		

		for(var i=0; i < $scope.students.length ;i++){

			$scope.studentData = {};

			$scope.studentData["studentID"] = $scope.students[i].studentID;

			$scope.studentData["marks"] = [];

			for(var j=0 ; j < $scope.students[i].marks.length ; j++){

				var markListObj = {};
				var markList = [];

				for(var key in $scope.students[i].marks[j].scores ){
				
					var temp = {};
					temp["Subject"] = $scope.students[i].marks[j].scores[key].subject;
					temp["Mark"] = $scope.students[i].marks[j].scores[key].score;
					markList.push(temp);
				}
				markListObj["markList"] = markList;
				markListObj["examName"] = $scope.students[i].marks[j].examName;
				markListObj["year"] = $scope.students[i].marks[j].year;
				$scope.studentData["marks"][j] = markListObj;
		    }
		
			$scope.studentConfig.push($scope.studentData);

		}

 	}

 	// calling the service to get the student's data from database
 	// through the service interface.

	studentService.getStudentTableData().success(function(students){

		$scope.students = students;
		processStudent();
	})
	.error(function(){

		alert("some error");
	});	

});
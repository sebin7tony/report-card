var express = require('express');
var mongoose = require('mongoose');
var Student = mongoose.model('student');
var router = express.Router();
var path = require('path');


router.param('studentId',function(req,res,next,id){

  Student
    .find({studentID : id})
    .exec(function(err,student){
        
        if(err){

          return next("Entho "+err); 
        }
        else if(!student[0]){
          
          return next(new Error('failed to load user'));
        }
        req.student = JSON.parse(JSON.stringify(student[0],null,4));
        next();
    });


});

/* GET home page. */
router.get('/', function(req, res) {
  
  res.sendFile(path.join(__dirname + '/../views' + '/index.html'));
});

router.post('/student',function(req,res){

    console.log("req.body "+JSON.stringify(req.body,null,4));

    var student = new Student(req.body);

    student.save(function(err,student){

                if(err){
            
                     console.log("Some problem occured while writing the values to the database "+err);
                     res.send("Some problem occured while writing the values to the database "+err);
                     return;
                }
                else{

                   var formatted = "Saved to database :: "+JSON.stringify(student,null,4);
                   console.log(formatted);
                   res.send(formatted);

                } 

    });
  
});


// || Get all the details of students ||
//
// Takes all the data from database and displays
//


router.get('/student',function(req,res){



    var studentArray = [];

    Student.find({},function(err,students){

        if(err){

          res.send("Error "+err);
        }
        else{

          for(var i=0; i < students.length;i++){

            studentArray.push(JSON.parse(JSON.stringify(students[i])));
          }

          res.send("res "+JSON.stringify(studentArray,null,4));
        }
    });
  
});

//  ||| W.S for adding an extra marklist to a student |||
//
//  takes studentid as a parameter and find that student in the
//  database and updates the same with new marklist
//

router.post('/student/:studentId/marks',function(req,res){
  
  var student = new Student(req.student);
  var mark = req.body;
  var condition1 = {studentID : student.studentID , 'marks.examName' : mark.examName};
  var condition2 = {studentID : student.studentID};
  var updateData = {$push : {marks : mark}};
  var options = {upsert : true};

  console.log("examName "+mark.examName);

  Student.count(condition1,function(err,numofrecords){

      if(err){

        res.send("Some error "+err);
      }
      else if(numofrecords > 0){
        
        res.send("The record is already existing in the database");

      }
      else{

        Student.update(condition2,updateData,options,function(err,rowsAffected){

            if(err){
              res.send("Some error occured "+err);
            }
            else{

              res.send("Updated !! rows : "+rowsAffected);
            }
        });

      }

  });        

});


// |||Create web service for adminTable |||
//
//   Gets all the student document form the database 
//   and return a array with "StudentId" and "mark"
//

router.get('/student/adminTable',function(req,res){

    var studentsData = []

    Student.find({},function(err,students){

        if(err){

            res.send(err);
        }
        else{

            for(var i=0; i < students.length ;i++){

                var studentTableData = {};

                studentTableData['studentID'] = students[i].studentID;
                studentTableData['marks'] = students[i].marks;
                studentsData.push(studentTableData);
            }

            res.send(studentsData);
      }

    });
    

});


router.get('/student/:studentId/card',function(req,res){

    var student = req.student;
    var cardList = student.marks.filter(function(element){

        return element.year == req.query.year && 
                  element.typeOfExam == req.query.typeOfExam &&
                      element.examName == req.query.examName ; 
    });

    var otherCardList = student.marks.filter(function(element){

        return element.year == req.query.year && 
                  element.typeOfExam == req.query.typeOfExam &&
                      element.examName != req.query.examName ; 
    });

    var cardListDate = cardList[0].dateOfExam;
    var lastIndex,lastDate = new Date();

    console.log("SET "+lastDate);

    //console.log(JSON.stringify(otherCardList,null,4));

    for(var i=0; i < otherCardList.length ;i++){

        console.log("aLL "+otherCardList[i].dateOfExam);

        if(otherCardList[i].dateOfExam < cardListDate){

            if(otherCardList[i].dateOfExam > lastDate){

                lastDate = otherCardList[i].dateOfExam;
                lastIndex = i;
            }
        }
    }
    console.log("before send");
    res.send(lastDate);

});

module.exports = router;

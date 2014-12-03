var express = require('express');
var mongoose = require('mongoose');
var Student = mongoose.model('student');
var Marks = mongoose.model('marks');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/student',function(req,res){

    //var marks = [];

    console.log("req.body "+JSON.stringify(req.body,null,4));

    var studentBody = {
                      "studentID": "ST12",
                      "marks": []
                      };

    var markz = {
        "examName": "Series 1",
        "scores": {
            "maths": {
                "score": 48,
                "total": 50,
                "teacher": "xxxx"
            }
        }
    }
    var marks;

    //console.log("tempMarkList"+JSON.stringify(tempMarkList,null,4));


        //console.log("Inside loop1");
        marks = new Marks(markz);

        marks.save(function(err,mark){

            if(err){
            
                console.log("Some problem occured while writing the values to the database "+err);
                res.send("Some problem occured while writing the values to the database "+err);
                return;
            }

            studentBody.marks.push(mark._id);
            var student = new Student(studentBody);
            console.log(JSON.stringify(studentBody,null,4));


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

});



module.exports = router;

var express = require('express');
var mongoose = require('mongoose');
var Student = mongoose.model('student');
var Marks = mongoose.model('marks');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/student',function(req,res){

    var marks = [];

    console.log("req.body "+JSON.stringify(req.body,null,4));

    var studentBody = req.body;

    var tempMarkList = req.body.marks;

    req.body.marks = [];
    var holder = [];

    //console.log("tempMarkList"+JSON.stringify(tempMarkList,null,4));


        //console.log("Inside loop1");
        marks[0] = new Marks(tempMarkList[0]);

        marks[0].save(function(err,mark){

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

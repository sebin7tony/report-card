var express = require('express');
var mongoose = require('mongoose');
var Student = mongoose.model('student');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
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

router.get('/student',function(req,res){



});



module.exports = router;

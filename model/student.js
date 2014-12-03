

var mongoose = require('mongoose');

var markSchema = mongoose.Schema({
        year: String,
        typeOfExam: String,
        examName: {type : String, unique : true},
        scores : mongoose.Schema.Types.Mixed
    }); 

//mongoose.model('marks',markSchema);


var studentSchema = mongoose.Schema({

    studentID: {type : String, unique : true} ,
    personalDetails: {
        Name: String,
        ParentsName: String
    },
    accademicDetails: {
        RollNo: String,
        clas: String,
        Division: String
    },
    school: {
        Name: String,
        address: String
    },
    //marks: [markSchema]
    marks: [{type : mongoose.Types.ObjectId, ref : 'marks'}]

});

mongoose.model('marks',markSchema);
mongoose.model('student',studentSchema);

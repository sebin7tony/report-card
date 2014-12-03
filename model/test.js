

var mongoose = require('mongoose');

var markSchema = mongoose.Schema({
        examName: String
        scores : mongoose.Schema.Types.Mixed
    }); 

//mongoose.model('marks',markSchema);


var studentSchema = mongoose.Schema({

    studentID: {type : String, unique : true} ,
    marks: [{type : mongoose.Types.ObjectId, ref : 'marks'}]

});

mongoose.model('marks',markSchema);
mongoose.model('student',studentSchema);

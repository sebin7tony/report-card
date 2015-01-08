

var mongoose = require('mongoose');

var markSchema = mongoose.Schema({
        year: String,
        typeOfExam: String,
        examName: String,
        dateOfExam : { type: Date, default: Date.now },
        scores : mongoose.Schema.Types.Mixed
 }); 


var StudentSchema = mongoose.Schema({

    studentID: {type : String, unique : true},
    personalDetails: {
        Name: String,
        Parent: {
            name: String,
            email: String,
            contact: String
        },
        address: String,
        dob: Date
    },
    accademicDetails: [
        {
            RollNo: String,
            Class: String,
            Division: String,
            startyear: String,
            classTeacher: {
                name: String,
                contactNumber: String
            }
        }],
    school: [
        {
            Name: String,
            address: String,
            startDate: Date,
            endDate: Date
        }],
    marks: [markSchema]
});


mongoose.model('student',StudentSchema);



var mongoose = require('mongoose');



console.log("Inside the mark schema");
    var markSchema = mongoose.Schema({
        "year": String,
        "typeOfExam": String,
        "examName": { type: String, unique: true },
        "scores": mongoose.Schema.Types.Mixed
    }); */

var rateSchema = mongoose.Schema({
        year: String,
        rateName: { type: String, unique: true },
        scores: mongoose.Schema.Types.Mixed
    });

mongoose.model('rates',rateSchema); 
/**
 * User Data Schema
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    rowID: {
        type: Number,
        // The rowID should be unique and auto increment
        //unique: true,
    },
    annoID: String,
    origin: String,
    rec: String,
    followed: Number,
    previousID: Number,
    time: {
        type: Date,
        default : Date.now()
    },
    timeCategory: Number
});

module.exports = userDataSchema;
/**
 * Mongoose Connection
 */

const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongodb);
var db = mongoose.connection;

db.on('open', function(){
    console.log('MongoDB Connection Succeed');
});

db.once('error', function(){
    console.log('MongoDB Connection Error');
});

module.exports = db;
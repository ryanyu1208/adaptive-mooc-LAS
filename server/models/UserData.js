/**
 * User Data Model
 */

var mongoose = require('mongoose');
var UserDataSchema = require('../schemas/UserDataSchema');

var UserData = mongoose.model('user_data', UserDataSchema);
module.exports = UserData;
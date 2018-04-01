var express = require('express');
var router = express.Router();
var UserData = require('../models/UserData');

/**
 * POST log data
 */
router.post('/', function(req, res, next) {

    var annoID = req.body.annoID;
    var origin = req.body.origin;

    //TODO more field
    var userData = {
        annoID: annoID,
        origin: origin
    };
    var result = {
        resultCode: 200,
        //userID: analytics.user().anonymousID
    };

    UserData.create(userData, function (err, data) {
        if (err) {
            console.log(err.message);
            result.resultCode = 500;
        } else {
            console.log('Successfully Inserted User Data');
        }
    });

    res.send(result);
});

module.exports = router;

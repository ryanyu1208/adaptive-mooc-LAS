var express = require('express');
var router = express.Router();
var UserData = require('../models/UserData');

/**
 * PUT update followed
 */
router.put('/', function(req, res, next) {
    var FOLLOWED = 1;
    var rowID = req.query.rowID;
    var userData = {
        rowID: rowID,
        followed: FOLLOWED
    };
    var result = {
        resultCode: 200
    };

    UserData.update(userData, function (err, data) {
        if (err) {
            console.log(err.message);
            result.resultCode = 500;
        } else {
            console.log('Successfully Update Followed');
        }
    });

    res.send(result);
});

module.exports = router;

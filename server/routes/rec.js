var express = require('express');
var router = express.Router();

/**
 * POST rec
 */
router.post('/', function(req, res, next) {

    var annoID = req.body.annoID;
    var userID = req.body.userID;
    var result = {
        resultCode: 200,
    };

    //TODO get the recommendation from web service

    res.send(result);
});

module.exports = router;

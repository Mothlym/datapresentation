var express = require('express');
var router = express.Router();

const restartTime = new Date(Date.now());

router.get('/', function(req, res, next) {
    res.json({ restartTime: restartTime });
});

module.exports = router;
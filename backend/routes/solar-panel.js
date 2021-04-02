var express = require('express');
var mysql = require('mysql')
var router = express.Router();
var config = require('../secure/config');

var connection = mysql.createConnection({
    host: '192.168.1.82',
    user: 'root',
    password: config.solpanelPw,
    database: 'solpanelen'
})

connection.connect();

router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM temp ORDER BY Datum DESC LIMIT 1;', function(err, rows, fields) {
        if (err) {
            console.log(err);
        }
        res.json({ date: rows[0].Datum, tank: rows[0].TT, in: rows[0].TI, out: rows[0].TO, panel: rows[0].TP, pump: rows[0].pump })
    });
});

module.exports = router;
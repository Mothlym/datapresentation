var express = require('express');
var mysql = require('mysql')
var router = express.Router();
var config = require('../secure/config');

var pool = mysql.createPool({
    host: '192.168.1.82',
    user: 'root',
    password: config.solpanelPw,
    database: 'stugan'
});

router.get('/latest', function(req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        var sql = 'SELECT * FROM info ORDER BY Datum DESC LIMIT 10;';
        connection.query(sql, [], function(err, rows) {
            connection.release();
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            res.json(extractBatteryDataArr(rows));
        });
    })

});

router.get('/interval', function(req, res, next) {
    var from = req.query.from;
    var to = req.query.to;

    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        var sql = 'SELECT * FROM info WHERE Datum between ' + mysql.escape(from) + ' AND ' + mysql.escape(to) + ' ORDER BY Datum;'
        connection.query(
            sql, [],
            function(err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                    callback(true);
                    return;
                }
                res.json(extractBatteryDataArr(rows))
            });
    })
});

function extractBatteryDataArr(rows) {
    var result = [];
    if (rows) {
        rows.forEach(element => {
            result.push({ date: element.Datum, battery: element.Batteri, text: element.Text });
        });
    }
    return result;
}

module.exports = router;
var express = require('express');
var mysql = require('mysql')
var router = express.Router();
var config = require('../secure/config');

var pool = mysql.createPool({
    host: '192.168.1.82',
    user: 'root',
    password: config.solpanelPw,
    database: 'solpanelen'
});

router.get('/', function(req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        var sql = 'SELECT * FROM temp ORDER BY Datum DESC LIMIT 1;';
        connection.query(sql, [], function(err, rows) {
            connection.release();
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            res.json({ date: rows[0].Datum, tank: rows[0].TT, in: rows[0].TI, out: rows[0].TO, panel: rows[0].TP, pump: rows[0].pump })
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
        var sql = 'SELECT * FROM temp WHERE Datum between ' + mysql.escape(from) + ' AND ' + mysql.escape(to) + ' ORDER BY Datum;'
        connection.query(
            sql, [],
            function(err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                    callback(true);
                    return;
                }
                res.json(extractPanelDataArr(rows))
            });
    })
});

function extractPanelDataArr(rows) {
    var result = [];
    if (rows) {
        rows.forEach(element => {
            result.push({ date: element.Datum, tank: element.TT, in: element.TI, out: element.TO, panel: element.TP, pump: element.pump });
        });
    }
    return result;
}

module.exports = router;
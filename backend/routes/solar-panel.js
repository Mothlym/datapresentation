var express = require('express');
var mysql = require('mysql')
var router = express.Router();

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'dbuser',
//   password: 's3kreee7',
//   database: 'my_db'
// })

router.get('/', function (req, res, next) {
  // connection.connect();
  // connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  //   if (err) throw err

  //   console.log('The solution is: ', rows[0].solution)
  // });
  // connection.end();

  res.json({date: '2020-01-01', tank: 1, in: 2, out: 3, panel: 4, pump: 'OFF' });
});

module.exports = router;

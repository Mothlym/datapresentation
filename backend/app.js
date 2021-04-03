var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./secure/config');

var solarPanel = require('./routes/solar-panel');
var weather = require('./routes/weather');
var battery = require('./routes/battery');
var restart = require('./routes/restart');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

if (!config.prod) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}

app.use(express.static("../frontend/dist/datapresentation/"));

app.use('/api/v1/solar_panel', solarPanel);
app.use('/api/v1/weather', weather);
app.use('/api/v1/battery', battery);
app.use('/api/v1/restart', restart);


app.get('/', getRoot);
app.get('/*', getUndefined);


function getRoot(request, response) {
    response.sendFile(path.resolve('../frontend/dist/datapresentation/index.html'));
}

function getUndefined(request, response) {
    response.sendFile(path.resolve('../frontend/dist/datapresentation/index.html'));
}

module.exports = app;
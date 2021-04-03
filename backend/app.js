var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var solarPanel = require('./routes/solar-panel');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static("../frontend/dist/datapresentation/"));

app.use('/api/v1/solar_panel', solarPanel);


app.get('/', getRoot);
app.get('/*', getUndefined);


function getRoot(request, response) {
    response.sendFile(path.resolve('../frontend/dist/datapresentation/index.html'));
}

function getUndefined(request, response) {
    response.sendFile(path.resolve('../frontend/dist/datapresentation/index.html'));
}

module.exports = app;
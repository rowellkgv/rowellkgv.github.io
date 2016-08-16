//Basic Node.js/Express Web Server
var express = require('express');
var app = express();
app.use('/', express.static('./'));
app.listen(80);
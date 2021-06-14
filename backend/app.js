let express = require('express');
//var path = require('path');
let app = express();

let question = require('./routes/question');

//app.use(express.static(path.join(__dirname, 'public')));

app.use('/questions', question);

module.exports = app;

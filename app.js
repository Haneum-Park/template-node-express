var express = require('express');
var path = require('path');
var app = module.exports = express();

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'jade');
app.set('views', './views');

require('./routes/main.js');
require('./routes/index.js');

app.set('port', process.env.PORT || 8080);

console.log('App listen on' + app.get('port'));

app.listen(app.get('port'));

module.exports = app;
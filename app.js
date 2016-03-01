/*
 * Main app.js and start the app with module dependencies.
 */
var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();
module.exports.app = app;//for automation testing
var errorhandler = require('errorhandler');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method'));          // Microsoft 
app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData 
app.use(methodOverride('X-Method-Override'));      // IBM 
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
   app.use(errorhandler());
}
require('./routes/routes')(app, express);

http.createServer(app).listen(app.get('port'), function(){
   console.log('GTS Risk with Express server listening on port ' + app.get('port'));
});

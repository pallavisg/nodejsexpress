/*
 * all the routes mapping are put here
 */
module.exports = function (app, express) {
	var routes = require('../routes')
    , user = require('../routes/user');
    
	app.get('/', routes.index);
	app.get('/info', user.info);
};
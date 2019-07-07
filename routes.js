module.exports = function (app) {

	const customer = require('./routes/customer');
	const application = require('./routes/application');
	const users = require('./routes/users');
	const trips = require('./routes/trips');
	const pricing = require('./routes/pricing');

	app.use('/', customer);
	app.use('/user', application);
	app.use('/users', users);
	app.use('/trips', trips);
	app.use('/pricing', pricing);
	//other routes..
}
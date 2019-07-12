// Added by Burcu
var path = require("path");

module.exports = function (app) {

	const customer = require('./routes/customer');
	const about = require('./routes/about');
	const team = require('./routes/team');
	const services = require('./routes/services');
	const appointment = require('./routes/appointment');
	const contact = require('./routes/contact');
	const application = require('./routes/application');
	const users = require('./routes/users');
	const trips = require('./routes/trips');
	const pricing = require('./routes/pricing');
	var customer_database_controller = require("./controllers/customer_database_controller.js");

	app.use('/', customer);
	app.use('/about', about);
	app.use('/team', team);
	app.use('/services', services);
	app.use('/appointment', appointment);
	app.use('/contact', contact);
	app.use('/admin', application);
	app.use('/users', users);
	app.use('/trips', trips);
	app.use('/pricing', pricing);
	app.use("/burger", customer_database_controller);


}
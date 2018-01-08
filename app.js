'use strict';

var mongoose = require('./mongoose');
var express = require('express');
var cronJob = require('./modules/cronjob/controllers/cronjob-controller');
var port = 3001;
var app = express();

// Initialize Models
module.exports.init = function init(callback) {
	mongoose.connect(function (db) {
		cronJob.cronJobStart();
		callback()
	});
};

module.exports.start = function(callback) {
	var _this = this;
	_this.init(function () {
		
		app.use(express.bodyParser());
    	app.use(express.methodOverride());

    	app.use(function(req, res, next) {
	      res.setHeader("Access-Control-Allow-Origin", '*');
	      res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	      res.setHeader('Access-Control-Allow-Credentials', true);
	      next();
    	});


 		var routes = require('./route');
 		routes.setup(app);
    	app.listen(port, function () {
    		console.log("Started server on " + port);
    	});
	});
};
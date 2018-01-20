var app = require('./app');
var log = require('./logger/logger');

console.log("============= Starting the Server===============");


log.info('Started api')
var server = app.start();
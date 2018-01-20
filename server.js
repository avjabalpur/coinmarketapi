var app = require('./app');
var log = require('./logger/logger');

console.log("============= Starting the Server===============");


log.info('Started api')
app.start();
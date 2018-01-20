
var config = require('../config/config.json');
var logFile = __dirname+'\\'+config.logFileUrl;


var logger = require('logger').createLogger(logFile);

function logInfo() {
	  logger.info(getlogMessages(arguments));
}


function logError() {
	  logger.error( getlogMessages(arguments));
}

function getlogMessages(argu){
	var infos = [];

	for (var i = 0; i < argu.length; i++) {
		infos.push(argu[i]);
	 }
	  return infos.join(',')
}

module.exports = {
	info : logInfo,
	error : logError
}
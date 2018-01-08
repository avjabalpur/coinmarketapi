var coinController = require('./modules/coins/controllers/coin-controller');
var reportController = require('./modules/report/controllers/report-controller');
var rangeController = require('./modules/range/controllers/range-controller');

function setup(app){
    app.get('/api/coins', coinController.getCoinsDetails);
    app.get('/api/coins/:id', coinController.getCoinDetailsById);
    app.post('/api/report', reportController.buySellCoins);
	app.get('/api/report', reportController.getReportCoins);
	app.post('/api/range', rangeController.rangeOfCoins);
	app.get('/api/range', rangeController.getRangeCoins);
};

module.exports = {setup : setup};
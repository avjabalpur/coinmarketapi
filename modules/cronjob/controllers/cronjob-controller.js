var cron = require('node-cron');
var mongoose = require('mongoose');
var axios = require('axios');
var coinSchema = require('../cronjob-schema');
var reportController = require('../../report/controllers/report-controller');
var _ = require('lodash');

module.exports.cronJobStart = function (){
	cron.schedule('1 * * * * *', function () {
		console.log("started");
		getCoinDetails();
	});
};


function getCoinDetails(){
	axios.get('https://api.coinmarketcap.com/v1/ticker/')
	.then(response => {
		  console.log(" Old data deleting");
		  coinSchema.remove({}, function(err){
			console.log("data deleted");
			if(err){
				console.log(err);
				return;
			}
			else{
				console.log("new data saving");
				coinSchema.collection.insert(response.data);
				axios.get('http://localhost:3001/api/range')
				.then(result => {
					console.log("mininin");
					//console.log(result.data.result[0].min);
					_.forEach(response.data, function(data){
						if(data.percent_change_24h < result.data.result[0].min || data.percent_change_24h > result.data.result[0].max){
							var body = {
								name: response.data.name,
							    date: new Date(),
							    price: response.data.price_usd,
							    change_rate: response.data.percent_change_24h,
							    market_cap: response.data.market_cap_usd,
							    action: data.percent_change_24h < 5 ? 'Buy' : 'Sell'
							}
							reportController.buySellCoins({req: body}, {});
						}
					})
					console.log("new data saved");
				})
				.catch(error => {
				  	console.log(error);
				});
			}
		})
	})
	.catch(error => {
	  	console.log(error);
	});
}


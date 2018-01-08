var mongoose = require('mongoose');
var reportSchema = require('../report-schema');
var _ = require('lodash');

function buySellCoins(req, res){
	console.log("**************************")
	   var body = _.get(req, 'body')   

	   var reportObj = new reportSchema(body);
	   reportObj.save()
	   	.then(function(data) {
	   		//console.log(data);
	   		//resolve(data)
	   		//return res.send({result : data})   		
	   	})
		.catch((error) => {
		  	//console.log(error);
		  	//reject(error)
		  	//return res.send({error : error});
		});
	
}

function getReportCoins(req, res){
	   var body = _.get(req, 'body')   
	    reportSchema.find({}, function(error, reports){
	        if(error){
	            return res.send({error : error});
	        }else{
	            return res.send({result : reports});
	        }
	    });
	
}

module.exports = {
	buySellCoins : buySellCoins,
	getReportCoins: getReportCoins
};
var mongoose = require('mongoose');
var coinDetails = require('../../cronjob/cronjob-schema');

function getCoinsDetails(request, response){
    coinDetails.find({}, function(error, coinDetails){
        if(error){
            return response.send({error : error});
        }else{
            return response.send({result : coinDetails});
        }
    });
}

function getCoinDetailsById(request, response){
	coinDetails.findOne({id: request.params.id}, function(err, res) {
		if(err){
            return response.send({error : err});
        }else{
            return response.send({result : res});
        }
    });
}


module.exports = {
	getCoinsDetails : getCoinsDetails,
	getCoinDetailsById : getCoinDetailsById
};
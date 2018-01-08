var mongoose = require('mongoose');
var rangesSchema = require('../range-schema');
var _ = require('lodash');

function rangeOfCoins(req, res){
console.log("**************************")
   var body = _.get(req, 'body')   

   var rangeObj = new rangesSchema(body);
   rangesSchema.find({}).then((item, err) => {
	   	if (item){
	   		console.log("item")
		   rangesSchema.update({id : body.id},body ,{upsert:true})
		   	.then(function(data) {
		   		console.log(data);
		   		return res.send({result : data})   		
		   	})
			.catch((error) => {
			  	console.log(error);
			  	return res.send({error : error});
			});
	   	}
	   	else{
	   		rangeObj.save()
		   	.then(function(data) {
		   		console.log(data);
		   		return res.send({result : data})   		
		   	})
			.catch((error) => {
			  	console.log(error);
			  	return res.send({error : error});
			});
	   	}
   })
}


function getRangeCoins(req, res){
   var body = _.get(req, 'body')   
    rangesSchema.find({}, function(error, data){
        if(error){
            return res.send({error : error});
        }else{
            return res.send({result : data});
        }
    });
}

module.exports = {
	rangeOfCoins : rangeOfCoins,
	getRangeCoins:getRangeCoins
};
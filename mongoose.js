var mongoose = require('mongoose');

module.exports.connect = function (cb) {
    var db = mongoose.connect('mongodb://xcdify-dev:Test123@ds241737.mlab.com:41737/coinmarket', {user: '', pass: ''}, function(err){
        if(err){
            console.log(err);
        } else{
            console.log(cb);
            if(cb) cb(db)
        }
    });
};
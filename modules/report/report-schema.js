var mongoose = require('mongoose');

Schema = mongoose.Schema;

var reportSchema = new Schema({
    name: String,
    date: { type: Date, default: Date.now },
    price: Number,
    change_rate: Number,
    market_cap: Number,
    action: String
}); 

var reportsSchema =mongoose.model("Report", reportSchema)
module.exports = reportsSchema;
var mongoose = require('mongoose');

Schema = mongoose.Schema;

var coinSchema = new Schema({
    id: String,
    name: String,
    symbol: String,
    rank: String,
    price_usd: String,
    price_btc: String,
    h_volume_usd: String,
    market_cap_usd: String,
    available_supply: String,
    total_supply: String,
    max_supply: String,
    percent_change_1h: String,
    percent_change_24h: String,
    percent_change_7d: String,
    last_updated: String
}); 

var coinSchema =mongoose.model("Coin", coinSchema)
module.exports = coinSchema;
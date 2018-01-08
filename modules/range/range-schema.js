var mongoose = require('mongoose');

Schema = mongoose.Schema;

var rangeSchema = new Schema({
    id: Number,
    min: Number,
    max: Number,
}); 

var rangesSchema =mongoose.model("Range", rangeSchema)
module.exports = rangesSchema;
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Product = require('./product')

var orderSchema = new Schema({
  products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
})

module.exports = mongoose.model('Order', orderSchema)
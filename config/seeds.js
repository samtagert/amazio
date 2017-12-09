var mongoose = require('mongoose')
var Product = require('../models/product')
var productData = require('./productData')
require('./database')

Product.remove({}).then(() => {
  return Product.create(productData)
})
.then((product) => {
  console.log(product)
  mongoose.connection.close()
  process.exit()
})
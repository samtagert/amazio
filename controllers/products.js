var Product = require('../models/product')

function index(req, res) {
  Product.find({}).then(products => (res.json(products)))
}

function addItem(req, res) {
  console.log('addItem')
}

function removeItem(req, res) {
  console.log('removeItem')
}

module.exports = { 
  index,
  addItem,
  removeItem
}
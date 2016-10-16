var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  name: String,
  age: Number
})

module.exports.user = mongoose.model('User', UserSchema)

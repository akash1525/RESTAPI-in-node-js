var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  age: Number,
  email: String,
  password: String
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
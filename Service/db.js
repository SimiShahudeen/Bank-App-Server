const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true})
const User = mongoose.model("User", {
  acno: Number,
  uname: String,
  psw: String,
  balance: Number,
  transactions: []
})
module.exports = {
  User
}
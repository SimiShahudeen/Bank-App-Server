//import database file
const db = require('./db')

//create function(callback fn/arrow fn) for register logic
register = (acno, uname, psw) => {
  //check in mongodb 
  // db.User.findOne({acno:acno}) 
  // db.User.findOne({key:name here for value}) 
  db.User.findOne({ acno }).then(user => {
    //from server port to db port= asynchronous(findOne() method)
    //asynchronous method either resolve(.then) or reject(.catch)
    if (user) {
      return {
        message: "user exists already",
        status: false,
        statusCode: 404
      }
    }
    else {
      //object creation adding user
      // var=new ClassName of model
      newuser = new db.User({
        acno: acno,
        uname: uname,
        psw: psw,
        balance: 0,
        transactions: []
      })
    }
    //save new object to reflect the change in database
    newuser.save()
    return {
      message: "user added ",
      status: true,
      statusCode: 200
    }
  })
}
module.exports={
  register
}
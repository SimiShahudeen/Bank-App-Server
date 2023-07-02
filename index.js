const express = require('express')

//import logic file
const logic = require('./Service/logic')
// const db = require('./Service/db')

const app = express()

//integrate frontend
const cors=require('cors')
app.use(cors({origin:'http://localhost:4200'}))

app.use(express.json())

//request to register user
app.post('/register', (req, res) => {
  logic.register(req.body.acno,req.body.uname,req.body.psw).then(result=>{
    res.status(result.statusCode).json(result)
  })
})
//login
app.post('/login',(req,res)=>{
  logic.login(req.body.acno,req.body.psw).then(result=>{
    res.status(result.statusCode).json(result)
  })
})




app.listen(3000, () => {
  console.log('server started on port 3000');
})
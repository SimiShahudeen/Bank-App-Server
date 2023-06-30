const express=require('express')
const app=express()

app.use(express.json())

app.post('/register',(req,res)=>{
  res.send('post method worked')
})
app.get('/getdata',(req,res)=>{
  res.send('get method');
  res.json(req.body.acno);
  console.log(req.body.acno);
})


app.listen(3000,()=>{
  console.log('server started on port 3000');
})
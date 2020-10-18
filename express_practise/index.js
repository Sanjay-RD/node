const express = require('express')
const path = require('path')

const logger = require('./Logger')

const app = express();

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// app.get('/',(req,res)=>{
//  res.send('hello world')
// })

// app.get('/',(req,res)=>{
// 	res.sendFile(path.join(__dirname,'public','index.html'))
// })

// app.get('/about',(req,res)=>{
// 	res.sendFile(path.join(__dirname,'public','about.html'))
// })

// init logger 
// app.use(logger)

app.use(express.static(path.join(__dirname,'public')))

// init middleware for member api
app.use('/api/member',require('./router/api/member'))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server Running on Port ${PORT}`))
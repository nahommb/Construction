const ex = require('express')
const app = ex()
const bdy = require('body-parser')
const mongoose = require('mongoose')
const home = require('./routes/home')

const cors = require('cors')

app.use(ex.json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Allow credentials (cookies) to be sent and received
}));

app.use(bdy.urlencoded({extended:true}));
// mongoose.connect('mongodb://127.0.0.1:27017/iconstruction')
app.use('/',home)


 
app.get('/',)

// app.post('/register',function(req,res){
//    const password =  req.body.password
//    console.log(password)
//    res.send('hello')
// })

app.listen(3001,function(){
    console.log('running on port 3001')
})
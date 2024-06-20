const ex = require('express')
const app = ex()
const bdy = require('body-parser')
const mongoose = require('mongoose')
const home = require('./routes/home')

app.use(bdy.urlencoded({extended:true}));
// mongoose.connect('mongodb://127.0.0.1:27017/iconstruction')
app.use('/',home)



app.get('/',)


app.listen(3001,function(){
    console.log('running on port 3001')
})
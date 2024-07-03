const AddPreviousWorkController = require('../controller/addPreviousWorkController');
const AddPreviousWorkModule = require('../models/previousWorkSchema')
const router = require('express').Router();



router
.post('/addpreviouswork',AddPreviousWorkController)
.get('/previousworks',async (req,res)=>{
   
   await AddPreviousWorkModule.find({},{name:1, _id:0}).exec().then((data)=>{
        if(data){
            res.send(data)
            console.log(data)
            // console.log(data.image.contentType)
            //res.set('Content-Type', data.image.contentType)
            // res.json(
            //     {
            //     image_url:`previousworks/${data.name}`,
            //     })
        }
        else{
            res.send('nooo')
        }
    
    })
})
 module.exports = router
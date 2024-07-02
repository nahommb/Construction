const AddPreviousWorkController = require('../controller/addPreviousWorkController');
const AddPreviousWorkModule = require('../models/previousWorkSchema')
const router = require('express').Router();



router
.post('/addpreviouswork',AddPreviousWorkController)
.get('/previousworks',async (req,res)=>{
   
    AddPreviousWorkModule.findOne({name:'FB_IMG_15751795553924883.jpg'}).exec().then((data)=>{
        if(data){
            // console.log(data.image.contentType)
            //res.set('Content-Type', data.image.contentType)
            res.json(
                {
                image_url:`previousworks/${data.name}`,
                })
        }
        else{
            res.send('nooo')
        }
    
    })
})
 module.exports = router
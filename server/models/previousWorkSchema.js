const mongoose = require('mongoose')



const AddPreviousWorkSchema = mongoose.Schema({
    image_url:String,
    description:String,
    location:String,
    building_name:String,
    rate:Number,
    image:{
        data:Buffer,
        contentType:String
    }
})

const AddPreviousWorkModule = mongoose.model('previous_works',AddPreviousWorkSchema)

module.exports = AddPreviousWorkModule
const mongoose = require('mongoose')



const AddPreviousWorkSchema = mongoose.Schema({
    name:String,
    image:{
        data:Buffer,
        contentType:String
    }
})

const AddPreviousWorkModule = mongoose.model('previous_works',AddPreviousWorkSchema)

module.exports = AddPreviousWorkModule
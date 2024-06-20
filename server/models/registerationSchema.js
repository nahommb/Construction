const mongoose = require('mongoose')

const registrationSchema = mongoose.Schema({
    company_name:String,
    password:String,
    email:String,
})
const Company = mongoose.model('company',registrationSchema)

module.exports = Company;
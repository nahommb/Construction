const bcrypt = require('bcrypt')
const Company = require('../models/registerationSchema')

const registerController = async(req,res)=>{

    const {company_name,password,email} = req.body
     
     const hashedPassword = await bcrypt.hash(password,10)
     console.log(hashedPassword)
   const company = Company({
        company_name:company_name,
        password:hashedPassword,
        email:email
     })
     //company.save()
    res.send('hello')
}

module.exports = registerController; 
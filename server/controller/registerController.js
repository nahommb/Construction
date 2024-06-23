const bcrypt = require('bcrypt')


const registerController = (req,res)=>{

    const {company_name,password,email} = req.body
     console.log(company_name)

    res.send('hello')
}

module.exports = registerController; 
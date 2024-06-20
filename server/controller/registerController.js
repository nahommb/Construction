
const bcrypt = require('bcrypt')

const registerController = (req,res)=>{

    const {company_name,password,email} = req.body
     console.log(password)

    res.send('hello')
}

module.exports = registerController; 
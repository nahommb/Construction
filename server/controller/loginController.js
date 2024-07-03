const Company = require('../models/registerationSchema')
const bcrypt = require('bcrypt')
//const session = require('express-session')

const loginController = async(req,res)=>{

   const {email,password} = req.body;
  
   await Company.findOne({email:email}).then(async(data)=>{
    if(data){
        const val = await bcrypt.compare(password,data['password'])
        if(val){
        req.session.user = {'name':'nahom','password':'123456'}
        console.log(req.session.user)
        console.log('exists')
        res.send({
            name:data.company_name,
            account_available:true,
            is_admin:true
        }).json()
        }
        else{
            res.send('not found').json()
        }
       
    }
   })

}
module.exports = loginController;
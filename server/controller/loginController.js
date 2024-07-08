const Company = require('../models/registerationSchema')
const bcrypt = require('bcrypt')
//const session = require('express-session')

const loginController = async(req,res)=>{

   const {email,password} = req.body;
  
   await Company.findOne({email:email}).then(async(data)=>{
    if(data){
        //console.log(data)
        const val = await bcrypt.compare(password,data['password'])
        if(val){
          //  console.log(req.session)
        req.session.user = {'name':'leee',password:'9000'}
        console.log(req.session.user)
        console.log('exists')
        res.send({
            name:data.company_name,
            account_available:true,
            is_admin:true
        })
        }
        else{
            res.send('not found').json()
        }
       
    }
   })

}
module.exports = loginController;
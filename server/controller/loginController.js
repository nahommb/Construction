const Company = require('../models/registerationSchema')
const bcrypt = require('bcrypt')

const loginController = async(req,res)=>{

   const {email,password} = req.body;
   
   await Company.findOne({email:email}).then(async(data)=>{
    if(data){
        const val = await bcrypt.compare(password,data['password'])
        if(val){
        console.log('exists')
        res.send({
            name:data.company_name,
            account_available:true
        })
        }
        else{
            res.send('not found').json()
        }
       
    }
   })

}
module.exports = loginController;
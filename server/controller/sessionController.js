
const sessionController = (req,res)=>{
    if(req.session.user){ 
        console.log(req.session.user)
        res.send({
            exists:true
        }).json
    
      }  
      else{
        res.send({
            exists:false
        }) 
    
      }
}

module.exports = sessionController
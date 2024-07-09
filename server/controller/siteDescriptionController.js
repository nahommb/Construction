
const siteDescriptionController = (req,res)=>{
      const {description , location } = req.body;
      
      console.log(description)
      res.send('hello')
}

module.exports = siteDescriptionController;
const PreviousWorkModule = require('../models/previousWorkSchema');
//const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

const deletePreviousWork  = async(req,res)=>{
    const { id } = req.params;
   
  
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(400).json({ message: 'Invalid ID format' });
    // }
    try{
       await PreviousWorkModule.findById(id).exec().then((data)=>{
        if(data){
            const filePath = path.join(__dirname,'..','public/previousworks',data.image_name)
            fs.unlink(filePath,(err)=>{
                if(err){
                    console.error('Error deleting the file:', err);
                }
              //  console.log('file deleted successfuly')
            })
        }
        else{
            res.send('No data found')
        }
       })
        await PreviousWorkModule.findByIdAndDelete(id);
        res.status(200).json({ message: 'Deleted successfully',status:true });

    }
    catch(err){
        console.error('Error deleting previous work entry:', err);
    }

}

module.exports = deletePreviousWork; 
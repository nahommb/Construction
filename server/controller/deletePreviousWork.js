const PreviousWorkModule = require('../models/previousWorkSchema');
const mongoose = require('mongoose')

const deletePreviousWork  = async(req,res)=>{
    const { id } = req.params;
    console.log(id)
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(400).json({ message: 'Invalid ID format' });
    // }
    try{
       await PreviousWorkModule.findByIdAndDelete(id);
        res.status(200).json({ message: 'Deleted successfully',status:true });
    }
    catch(err){
        console.error('Error deleting previous work entry:', err);
    }

}

module.exports = deletePreviousWork; 
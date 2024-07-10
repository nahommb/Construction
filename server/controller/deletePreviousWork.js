const PreviousWorkModule = require('../models/previousWorkSchema');

const deletePreviousWork  = async(req,res)=>{
    const { id } = req.params;
    console.log(id)
    try{
       await PreviousWorkModule.findByIdAndDelete(id);
        res.status(200).json({ message: 'Previous work entry deleted successfully' });
    }
    catch(err){
        console.error('Error deleting previous work entry:', err);
    }

}

module.exports = deletePreviousWork;
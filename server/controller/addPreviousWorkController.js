const multer = require('multer');

const AddPreviousWorkModule = require('../models/previousWorkSchema');

var uploadFileName;

const Storage = multer.diskStorage({
    destination:'public/previousworks',
    filename:(req,file,cb)=>{
        uploadFileName = file.originalname
        cb(null,file.originalname)
    },
});
 
const upload = multer({
    storage:Storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Only .png and .jpeg format allowed!'), false);
        }
    }
}).single('image')

const AddPreviousWorkController = async(req,res)=>{
       
        upload(req,res,(err)=>{
            
        console.log(req.body.description)
         if(err){
             console.log(err)
         }
         else{
        
             const AddNew = AddPreviousWorkModule({
                 name:`previousworks/${uploadFileName}`,
                 description:req.body.description,
                 location:req.body.location,
                 image:{
                     data:req.file.fieldname,
                     contentType:'image/jpeg'
                 }
             })
           AddNew.save().then(()=>res.json('Successfully uploaded'))
             .catch((err)=>console.log(err))
         }
        })

}
 
module.exports = AddPreviousWorkController
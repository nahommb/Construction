const multer = require('multer');

const AddPreviousWorkModule = require('../models/previousWorkSchema');

var uploadFileName;

const Storage = multer.diskStorage({
    destination:'previousworks',
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
}).single('works')

const AddPreviousWorkController = (req,res)=>{

        upload(req,res,(err)=>{
         if(err){
             console.log(err)
         }
         else{
             const AddNew = AddPreviousWorkModule({
                 name:uploadFileName,
                 image:{
                     data:req.file.fieldname,
                     contentType:'image/jpeg'
                 }
             })
             AddNew.save().then(()=>res.send('successfully uploaded'))
             .catch((err)=>console.log(err))
         }
        })

}

module.exports = AddPreviousWorkController
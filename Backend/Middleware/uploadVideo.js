import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'Public/Video');
    },
    filename : (req,file,cb)=>{
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname+"-"+Date.now()+ Math.round(Math.random() * 1E9);
        cb(null,fileName+fileExt);
    }
});

const uploadVideo = multer({
    storage : storage,
    limits : {
        fileSize : 50000000 //50MB
    },
    fileFilter : (req,file,cb)=>{
        if(file.mimetype==='video/mp4'){
            cb(null,true);
        }else{
            //cb(null,false);
            cb(new Error('File type not supported...')); //this error will be handle in common error handle
        }
    }
})

export default uploadVideo;
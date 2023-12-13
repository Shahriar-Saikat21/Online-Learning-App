import connection from "../Middleware/dbConnect.js";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from "bcrypt";

export const instructorProfile = async (req, res) => {
    try{
        const query = 'SELECT * FROM users WHERE user_id = ?';
        connection.query(query,[req.userId],(err,result)=>{
            if(err){
                res.json({message:err,success:false});
            }
            else{
                res.json({info:result,success:true});
            }
        });
    }catch(err){
        res.json({message:err,success:false});
    }
};

export const instructorCourse = async (req, res) => {
    try{
        const query = 'SELECT * FROM courses WHERE co_creator = ?';
        connection.query(query,[req.userId],(err,rows)=>{
            if(err){
                res.json({message:err,success:false});
            }
            else{
                res.json({info:rows,success:true});
            }
        });
    }catch(err){
        res.json({message:err,success:false});
    }
};

export const changeProfilePic = (req,res) =>{
    try{
        const prevImg = req.body.picID;
        if(prevImg !== "Default.svg.png"){
            const __dirname = path.dirname(fileURLToPath(import.meta.url));
            const imgPath = path.join(__dirname,`../Public/Image/${prevImg}`);
            fs.unlinkSync(imgPath);
        }
        const query = `UPDATE users SET u_pic = ? WHERE user_id = ?`;
        connection.query(query,[req.file.filename, req.userId],(err, rows) => {
            if(err) throw err;
            res.json({ success: true, message: "Profile Picture Updated Successfully" });
        });
    }catch(error){
        res.json({success:false,message:error.message});
    }
}


export const editProfileInfo = async (req,res) =>{
    try{
        if(req.body.password!==""){
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const query = `UPDATE users SET user_name=?,user_email=?, user_password=? WHERE user_id = ?`;
            connection.query(query,[req.body.userName,req.body.userEmail,hashedPassword, req.userId],(err, rows) => {
                if(err) throw err;    
            });
        }else{
            const query = `UPDATE users SET user_name=?,user_email=? WHERE user_id = ?`;
            connection.query(query,[req.body.userName,req.body.userEmail,req.userId],(err, rows) => {
                if(err) throw err;    
            });
        }
        res.json({ success: true, message: "Profile Information Updated Successfully" });
    }catch(error){
        res.json({success:false,message:error.message});
    }
};
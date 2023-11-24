import connection from "../Middleware/dbConnect.js";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

export const newsTableController = (req, res) => {
    const query = `SELECT news_id,news_date,news_title,news_pic,news_status,user_name FROM news
    JOIN users
    ON news_creator = user_id
    ORDER BY news_date DESC`;
    connection.query(query, function (err, rows) {
      if (err) throw err;
      res.json(rows);
    });
};

export const uploadNews = (req,res)=>{
    const query = `INSERT INTO news(news_id, news_date, news_title, news_pic, news_creator, news_status) VALUES ("",CURRENT_TIMESTAMP(),?,?,?,"Down")`;
    connection.query(query,[req.body.title,req.file.filename,req.userId],function(err,rows){
        if(err) throw err;
        res.json({success:true,message:"News uploaded successfully"});
    });
};

export const updateNewsStatus = (req,res)=>{
    try{
        if(req.body.status==="Down"){
            const query = `UPDATE news SET news_status= CASE 
            WHEN news_id = ? THEN "Live"  
            ELSE "Down"
            END`;
            connection.query(query,[req.body.id],function(err,rows){
                if(err) throw err;
                res.json({success:true,message:"News updated successfully"});
            });
        }else if(req.body.status==="Live"){
            const query = `UPDATE news SET news_status= "Down"
            WHERE news_id = ?`;
            connection.query(query,[req.body.id],function(err,rows){
                if(err) throw err;
                res.json({success:true,message:"News updated successfully"});
            }); 
        }else{
            throw new Error("Something went wrong");
        }
    }catch(error){
        res.json({success:false,message:error.message});
    }
    
};

export const deleteNews = (req,res)=>{
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const imgPath = path.join(__dirname,`../Public/Image/${req.params.pic}`);
    try{
        fs.unlinkSync(imgPath);
        const query = `DELETE FROM news WHERE news_id = ?`;
        connection.query(query,[req.params.id],function(err,rows){
            if(err) throw err;           
            res.json({success:true,message:"News deleted successfully"});      
        });
    }catch(error){
        res.json({success:false,message:error.message});
    }   
};
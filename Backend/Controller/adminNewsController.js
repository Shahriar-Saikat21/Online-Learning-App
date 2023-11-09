import connection from "../Middleware/dbConnect.js";

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
    connection.query(query,[req.body.title,req.file.filename,4],function(err,rows){
        if(err) throw err;
        res.json({success:true,message:"News uploaded successfully"});
    });
};

export const updateNewsStatus = (req,res)=>{

};

export const deleteNews = (req,res)=>{

};
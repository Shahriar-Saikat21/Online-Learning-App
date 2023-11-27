import connection from "../Middleware/dbConnect.js";

export const createCourse = (req,res)=>{
    const query = `INSERT INTO courses(co_id, co_creator, co_title,co_des, co_pic, co_date,co_price,cat_id) VALUES ("",?,?,?,?,CURRENT_TIMESTAMP(),?,?)`;
    connection.query(query,[req.userId,req.body.title,req.body.description,req.file.filename,req.body.price,req.body.category],function(err,rows){
        if(err) throw err;
        res.json({success:true,message:"New course created successfully"});
    });
};

export const getCourseCategory = (req,res)=>{
    try{
        const query = "SELECT * FROM categories";
        connection.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows);
        });
    }catch(error){
        res.json({message:error.message,success:false})
    }  
};
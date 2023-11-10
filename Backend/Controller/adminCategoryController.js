import connection from "../Middleware/dbConnect.js";

export const addCategory = (req, res) => {
    try{
        const query = `INSERT INTO categories (cat_id, cat_name) VALUES ('',?)`;
        connection.query(query,[req.body.cat_name],function(err,rows){
            if(err) throw err;
            res.json({success:true,message:"New Category Added Successfully"});
        });
    }catch(error){
        res.json({message:error.message,success:false})
    }
};


export const showCategory = (req, res) => {
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
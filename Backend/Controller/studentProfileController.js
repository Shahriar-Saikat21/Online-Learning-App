import connection from "../Middleware/dbConnect.js";

export const studentProfile = async (req, res) => {
    try{
        const query = `SELECT C.co_id,co_title,co_des,co_pic FROM courses AS C
        LEFT JOIN purchase AS P
        ON C.co_id = P.co_id
        WHERE P.buyer_id = ?`;
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

export const studentCart = async (req, res) => {
    try{
        const query = `SELECT * FROM purchase AS P
        JOIN courses AS C
        WHERE P.co_id = C.co_id AND buyer_id = ?`;
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
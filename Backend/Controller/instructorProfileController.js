import connection from "../Middleware/dbConnect.js";

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
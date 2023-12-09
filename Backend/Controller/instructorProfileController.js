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

export const changeProfilePic = (req,res) =>{
    try{
        const query = `UPDATE users SET u_pic = ? WHERE user_id = ?`;
        connection.query(query,[req.file.filename, req.userId],(err, rows) => {
            if(err) throw err;
            res.json({ success: true, message: "Profile Picture Updated Successfully" });
        });
    }catch(error){
        res.json({success:false,message:error.message});
    }
}
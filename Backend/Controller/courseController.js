import connection from "../Middleware/dbConnect.js";

export const getCourseStatusInstructor = async (req, res, next) => {
    try{
        const sql = `SELECT * FROM courses WHERE co_id = ? AND co_creator=?`;
        connection.query(sql,[req.query.id,req.userId] ,(err, rows) => {
            if(err){
                res.json({message: err.message,success: false})
            }else{
                if(rows.length > 0){
                    res.json({role: "instructor",success: true, info: rows})
                }else{
                    res.json({role: "visitor",success: false, info: rows})
                }
            }
        })
    }catch(error){
        res.json({message: error.message,success: false})
    }
};

export const getCourseStatusStudent = (req,res)=>{
    try{
        const sql = `SELECT * FROM purchase WHERE co_id = ? AND buyer_id=?`;
        connection.query(sql,[req.query.id,req.userId] ,(err, rows) => {
            if(err){
                res.json({message: err.message,success: false})
            }else{
                if(rows.length > 0){
                    res.json({role: "student",success: true, info: rows})
                }else{
                    res.json({role: "visitor",success: false, info: rows})
                }
            }
        })
    }catch(error){
        res.json({message: error.message,success: false})
    }
}
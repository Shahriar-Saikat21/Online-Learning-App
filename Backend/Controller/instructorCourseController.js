import connection from "../Middleware/dbConnect.js";

export const getCourseHead = (req,res)=>{
    try{
        const id = parseInt(req.query.id)
        const query = "SELECT * FROM courses JOIN users WHERE co_creator = user_id AND co_id = ?";
        connection.query(query,[id],function(err,rows){
            if(err) throw err;
            res.json(rows);
        });
    }catch(error){
        res.json({message:error.message,success:false})
    }
}
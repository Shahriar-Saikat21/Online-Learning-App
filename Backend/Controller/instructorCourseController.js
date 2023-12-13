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

export const addModule = (req,res)=>{
    try{
        const query = `INSERT INTO modules(mo_id, co_id, mo_serial,mo_title, mo_video) VALUES ("",?,?,?,?)`;
        connection.query(query,[parseInt(req.body.courseID),parseInt(req.body.serial),req.body.name,req.file.filename],function(err,rows){
            if(err) throw err;
            res.json({success:true,message:"New Module added successfully"});
        });
    }catch(error){
        res.json({message:error.message,success:false})
    }
}

export const getModule = (req,res)=>{
    try{
        const query = "SELECT * FROM modules WHERE co_id = ? ORDER BY mo_serial";
        connection.query(query,[req.query.courseID],function(err,rows){
            if(err) throw err;
            res.json({info:rows});
        });
    }catch(error){
        res.json({message:error.message,success:false})
    }
}

export const deleteCourse = (req,res)=>{
    try{
        let one = false,two = false;
        const query1 = "DELETE FROM modules WHERE co_id = ?";
        connection.query(query1,[parseInt(req.query.id)],function(err,rows){
            if(err) throw err;
            one = true;
        });
        const query2 = "DELETE FROM courses WHERE co_id = ?";
            connection.query(query2,[parseInt(req.query.id)],function(err,rows){
                if(err) throw err;
                two = true;
            });
        if(one && two){
            res.json({success:true,message:"Course deleted successfully"});
        }else{
            res.json({success:false,message:"Error while deleting course"});
        }
    }catch(error){
        res.json({message:error.message,success:false})
    }
}
import connection from "../Middleware/dbConnect.js";

export const displayNews = async (req, res) => {
    const query = `SELECT news_pic FROM news WHERE news_status = "Live"`;
    connection.query(query, function (err, rows) {
      if (err) throw err;
      res.json(rows);
    });
};

export const seePopularCourse = async (req, res) => {
  try{
    const query = `SELECT COUNT(P.co_id) AS TOTAL,P.co_id AS CourseID,T.co_title,T.co_des,T.co_pic,T.co_price,T.user_name
    FROM purchase AS P
    JOIN (SELECT * FROM users AS U
    JOIN courses AS C
    WHERE U.user_id = C.co_creator) AS T
    WHERE P.co_id = T.co_id
    GROUP BY P.co_id
    ORDER BY TOTAL DESC
    LIMIT 5`;
    connection.query(query, function (err, rows) {
      if (err) throw err;
      res.json({success: true,data:rows});
    });
  }catch(error){
    res.json({message: error.message,success: false})
  }
};
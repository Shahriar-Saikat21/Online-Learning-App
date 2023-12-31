import connection from "../Middleware/dbConnect.js";

export const instructorSale = (req, res) => {
  const query = `SELECT C.co_title AS COURSE_TITLE, TOTAL_SELL,CURRENT_SELL FROM
  (SELECT co_title,SUM(p_amount)AS TOTAL_SELL FROM courses AS C
  JOIN purchase AS P
  WHERE  C.co_id = P.co_id AND co_creator = ${req.userId}
  GROUP BY co_title
  ) AS T
  JOIN
  (SELECT co_title,SUM(p_amount)AS CURRENT_SELL FROM courses AS C
  JOIN purchase AS P
  WHERE  C.co_id = P.co_id AND co_creator = ${req.userId} AND MONTH(p_date) = MONTH(NOW()) AND YEAR(p_date) = YEAR(NOW())
  GROUP BY co_title) AS C
  WHERE T.co_title = C.co_title`;
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};

export const instructorCart = (req, res) => {
  const query = `SELECT co_title AS TITLE,co_date AS CREATED,SUM(p_amount) AS SELL,COUNT(co_title) AS ENROLLED 
  FROM purchase AS P
  JOIN courses AS C
  WHERE C.co_id = P.co_id AND seller_id = ${req.userId}
  GROUP BY co_title`;
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};

export const instructorIncome = (req, res) => {
  const query = `SELECT (SELECT COUNT(p_id) FROM purchase WHERE seller_id = ${req.userId}
  ) AS TOTAL_SELL,
  (SELECT SUM(w_amount) FROM withdraw WHERE u_id = ${req.userId} AND w_status = 'Sent') AS WITHDRAW_AMOUNT,
  (SELECT SUM(p_amount) FROM purchase WHERE seller_id = ${req.userId}) AS TOTAL_INCOME`;
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};

export const withdrawReq = (req, res) => {
  try{
    const query = "INSERT INTO withdraw(w_id, w_date, w_amount, u_id, w_status) VALUES ('',CURRENT_TIMESTAMP(),?,?,'Pending')";
    connection.query(query,[parseInt(req.body.amount),req.userId], function (err, rows) {
      if (err) throw err;
      res.json({info:rows,success:true,message:"Withdraw Request Sent Successfully"});
    });
  }catch(error){
    res.json({success:false,message:error.message});
  }
};

export const withdrawReqHistory = (req, res) => {
  try{
    const query = "SELECT * FROM withdraw WHERE u_id = ?";
    connection.query(query,[req.userId], function (err, rows) {
      if (err) throw err;
      res.json({info:rows,success:true,message:"Withdraw Request History Sent Successfully"});
    });
  }catch(error){
    res.json({success:false,message:error.message});
  }
};

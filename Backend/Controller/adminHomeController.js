import connection from "../Middleware/dbConnect.js";

export const adminIncome = (req, res) => {
  const query = `SELECT(SELECT COUNT(user_role)  FROM users WHERE user_role = 'student') AS TOTAL_STUDENT,
                    (SELECT COUNT(user_role) FROM users WHERE user_role = 'instructor') AS TOTAL_INSTRUCTOR,
                    (SELECT COUNT(co_id) FROM courses) AS TOTAL_COURSE,
                    (SELECT COUNT(p_id) FROM purchase) AS TOTAL_SELL,
                    (SELECT SUM(p_amount) FROM purchase) AS SELL_AMOUNT,
                    (SELECT SUM(w_amount) FROM withdraw WHERE w_status != 'Pending') AS WITHDRAW_AMOUNT`;

  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};

export const adminCategory = (req, res) => {
  const query = `SELECT CUR.cat_name, TOTAL_SELL,CURRENT_SELL FROM
  (SELECT cat_name,COUNT(cat_name) AS CURRENT_SELL FROM purchase
  JOIN (SELECT co_id AS CO,cat_name FROM courses
  JOIN categories
  WHERE courses.cat_id = categories.cat_id) AS T 
  WHERE co_id = CO AND MONTH(p_date) = MONTH(now()) AND YEAR(p_date) = YEAR(now()) GROUP BY cat_name) AS CUR
  JOIN (SELECT cat_name,COUNT(cat_name) AS TOTAL_SELL FROM purchase
  JOIN (SELECT co_id AS CO,cat_name FROM courses
  JOIN categories
  WHERE courses.cat_id = categories.cat_id) AS T 
  WHERE co_id = CO
  GROUP BY cat_name) AS TOT
  WHERE CUR.cat_name = TOT.cat_name`;
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};

export const adminSale = (req, res) => {
  const query = `SELECT CUR.cat_name, TOTAL_SELL,CURRENT_SELL FROM
  (SELECT cat_name,SUM(p_amount) AS CURRENT_SELL FROM purchase
  JOIN (SELECT co_id AS CO,cat_name FROM courses
  JOIN categories
  WHERE courses.cat_id = categories.cat_id) AS T 
  WHERE co_id = CO AND MONTH(p_date) = MONTH(now()) AND YEAR(p_date) = YEAR(now()) GROUP BY cat_name) AS CUR
  JOIN (SELECT cat_name,SUM(p_amount) AS TOTAL_SELL FROM purchase
  JOIN (SELECT co_id AS CO,cat_name FROM courses
  JOIN categories
  WHERE courses.cat_id = categories.cat_id) AS T 
  WHERE co_id = CO
  GROUP BY cat_name) AS TOT
  WHERE CUR.cat_name = TOT.cat_name`;
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};


export const adminWithdarwHistory = (req, res) => {
  try{
    const query = "SELECT * FROM withdraw";
    connection.query(query, function (err, rows) {
      if (err) throw err;
      res.json({info:rows,success:true,message:"Withdraw Request History Sent Successfully"});
    });
  }catch(error){
    res.json({success:false,message:error.message});
  }
};


export const updateWithdrawStatus = (req, res) => {
  try{
    const query = "UPDATE withdraw SET w_status = ? WHERE w_id = ?";
    connection.query(query,[req.query.status,req.query.id], function (err, rows) {
      if (err) throw err;
      res.json({info:rows,success:true,message:"Withdraw Request Status Updated Successfully"});
    });
  }catch(error){
    res.json({success:false,message:error.message});
  }
};

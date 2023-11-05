import connection from "../Middleware/dbConnect.js";

export const adminIncome = (req, res) => {
  const query = `SELECT(SELECT COUNT(user_role)  FROM users WHERE user_role = 'student') AS TOTAL_STUDENT,
                    (SELECT COUNT(user_role) FROM users WHERE user_role = 'instructor') AS TOTAL_INSTRUCTOR,
                    (SELECT COUNT(co_id) FROM courses) AS TOTAL_COURSE,
                    (SELECT COUNT(p_id) FROM purchase) AS TOTAL_SELL,
                    (SELECT SUM(p_amount) FROM purchase) AS SELL_AMOUNT,
                    (SELECT SUM(w_amount) FROM withdraw) AS WITHDRAW_AMOUNT`;

  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};

export const adminCategory = (req, res) => {
  const query = `SELECT S.cat_name, TOTAL_SELL, CURRENT_SELL FROM
  (SELECT cat_name,COUNT(cat_name) AS TOTAL_SELL FROM
  (SELECT * FROM categories 
  JOIN purchase WHERE cat_id = co_id) AS TEMP_TABLE GROUP BY cat_name) AS S
  LEFT JOIN  
  (SELECT cat_name,COUNT(co_id) AS CURRENT_SELL FROM
  (SELECT * FROM categories 
  JOIN purchase WHERE cat_id = co_id) AS TEMP_TABLE 
  WHERE MONTH(p_date) = MONTH(now()) AND YEAR(p_date) = YEAR(now())
  GROUP BY cat_name) AS T 
  ON T.cat_name = S.cat_name`;
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};

export const adminSale = (req, res) => {
  const query = `SELECT S.cat_name, TOTAL_SELL, CURRENT_SELL FROM
  (SELECT cat_name,SUM(p_amount) AS TOTAL_SELL FROM
  (SELECT * FROM categories 
  JOIN purchase WHERE cat_id = co_id) AS TEMP_TABLE GROUP BY cat_name) AS S 
  LEFT JOIN 
  (SELECT cat_name,SUM(p_amount) AS CURRENT_SELL FROM
  (SELECT * FROM categories 
  JOIN purchase WHERE cat_id = co_id) AS TEMP_TABLE 
  WHERE MONTH(p_date) = MONTH(now()) AND YEAR(p_date) = YEAR(now())
  GROUP BY cat_name) AS T 
  ON T.cat_name = S.cat_name`;
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};

import connection from "../Middleware/dbConnect.js";

export const instructorSale = (req, res) => {
  const query = `SELECT T.co_title AS COURSE_TITLE, TOTAL_SELL,CURRENT_SELL FROM
  (SELECT co_title,SUM(p_amount)AS TOTAL_SELL FROM courses AS C
  JOIN purchase AS P
  WHERE  C.co_id = P.co_id AND co_creator = 6
  GROUP BY co_title
  ) AS T
  LEFT JOIN
  (SELECT co_title,SUM(p_amount)AS CURRENT_SELL FROM courses AS C
  JOIN purchase AS P
  WHERE  C.co_id = P.co_id AND co_creator = 6 AND MONTH(p_date) = MONTH(NOW()) AND YEAR(p_date) = YEAR(NOW())
  GROUP BY co_title) AS C
  ON T.co_title = C.co_title`;
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};

export const instructorCart = (req, res) => {
  const query = `SELECT co_title AS TITLE,co_date AS CREATED,SUM(p_amount) AS SELL,COUNT(co_title) AS ENROLLED 
  FROM purchase AS P
  JOIN courses AS C
  WHERE C.co_id = P.co_id AND seller_id = 6
  GROUP BY co_title`;
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};

export const instructorIncome = (req, res) => {
  const query = `SELECT (SELECT COUNT(p_id) FROM purchase WHERE seller_id = 6
  ) AS TOTAL_SELL,
  (SELECT SUM(w_amount) FROM withdraw WHERE u_id = 6) AS WITHDRAW_AMOUNT,
  (SELECT SUM(p_amount) FROM purchase WHERE seller_id = 6) AS TOTAL_INCOME`;
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
};
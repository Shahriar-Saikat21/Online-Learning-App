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

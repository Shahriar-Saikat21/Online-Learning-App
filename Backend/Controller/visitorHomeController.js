import connection from "../Middleware/dbConnect.js";

export const displayNews = async (req, res) => {
    const query = `SELECT news_pic FROM news WHERE news_status = "Live"`;
    connection.query(query, function (err, rows) {
      if (err) throw err;
      res.json(rows);
    });
};
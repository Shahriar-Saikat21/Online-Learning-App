import mysql from "mysql2";

const connection = mysql.createConnection({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: 'learning-app',
});

export default connection;
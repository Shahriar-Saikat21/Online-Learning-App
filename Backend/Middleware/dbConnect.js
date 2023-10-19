import mysql from "mysql2";

const connection = mysql.createPool({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: 'learning-app',
  waitForConnections: true, // Whether to wait for a connection to become available if the pool is full
  connectionLimit: 10, // The maximum number of connections to create at once
  queueLimit: 0, // No limit on the queue (0 means unlimited)
});

export default connection;
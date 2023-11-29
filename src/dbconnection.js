const mysql = require('mysql');

 export const connection = mysql.createConnection({
  host: "sql3.freesqldatabase.com",
  user: "sql3665921",
  password: "AJXgrEaPv5",
  port: 3306,
  database: "sql3665921"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
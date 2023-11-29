var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql3.freesqldatabase.com",
  user: "sql3665921",
  password: "AJXgrEaPv5",
  database: "sql3665921",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Productos", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    con.end()
  });
});


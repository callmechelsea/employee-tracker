const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "!Liverpool42069",
  database: "employees_db",
});

connection.connect(function (err) {
    if (err) throw err;
  });

  module.exports = connection;
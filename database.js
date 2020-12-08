var mysql = require('mysql2');

// Create the connection to database
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ostebiks",
    password: "",
    port: "3306",
    namedPlaceholders: true
});

module.exports = connection;
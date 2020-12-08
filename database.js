var mysql = require('mysql2');

// Create the connection to database
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ostebiks",
    password: "root",
    port: "8889",
    namedPlaceholders: true
});

module.exports = connection;
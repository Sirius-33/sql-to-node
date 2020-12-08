var connection = require("./database");

var sql = `DELETE FROM cheeses
WHERE id = :id`;

var placeholders = {
    id: 1,
};

connection.query(sql, placeholders, function(err, result) {
    if(err) return console.log(err);

    console.log(result);
});
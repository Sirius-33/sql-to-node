var connection = require("./database");

var sql = `UPDATE cheeses
SET price = :price
WHERE id = :id`;

var placeholders = {
    id: 1,
    price: 21.72
};

connection.query(sql, placeholders, function(err, result) {
    if(err) return console.log(err);

    console.log(result);
});
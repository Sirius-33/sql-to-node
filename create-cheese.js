var connection = require('./database');

var sql = `INSERT INTO cheeses
SET name = :name,
price = :price,
weight = :weight,
brand = (SELECT brands.id FROM brands WHERE brands.name = :brand),
strength = (SELECT strengths.id FROM strengths WHERE strengths.name = :strength)`;

var placeholders = {
    name: "Gedefeta",
    price: 29.95,
    weight: 250,
    brand: "Arla",
    strength: "ekstralagret"
};

connection.query(sql, placeholders, function (err, result) {
    if (err) return console.error(err);

    console.log(result);
})
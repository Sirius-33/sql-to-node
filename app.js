var connection = require('./database');

function getSingleCheese(id) {
    var sql = `SELECT cheeses.id, brands.name AS brand, cheeses.name, strengths.name AS strength,
    cheeses.price, cheeses.weight FROM cheeses

    INNER JOIN brands
    ON brands.id = cheeses.brand

    INNER JOIN strengths
    ON strengths.id = cheeses.strength

    WHERE cheeses.id = : id`;

    connection.query(sql, {
        id: id
    }, function (err, result) {
        if (err) return console.log(err);

        console.log(result);
    });
};

function getAllCheeses() {
    var sql =`

        SELECT cheeses.id, brands.name AS brand, cheeses.name, strengths.name AS strength, cheeses.price, cheeses.weight FROM cheeses

    INNER JOIN brands
    ON brands.id = cheeses.brand

    INNER JOIN strengths
    ON strengths.id = cheeses.strength`;

    connection.query(sql, function (err, result) {
        if (err) return console.log(err);

        console.log(result);
    });
};

/* getSingleCheese(1); */
getAllCheeses();
/* getSingleCheese(process.argv[2]); */

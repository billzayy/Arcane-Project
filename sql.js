const mysql = require('mysql');

function conSQL() {
    const connectDB = mysql.createConnection({
        host: 'localhost',
        user: 'bill',
        password: 'billzay',
        database: 'Arcane_DB'
    })

    connectDB.connect(function (err) {
        if (err) {
            return console.error('error: ' + err.message);
        }

        console.log('Connected to the MySQL server.');
    });
}

module.exports = conSQL;
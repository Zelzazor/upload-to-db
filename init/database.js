const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/database.db');

db.run('CREATE TABLE IF NOT EXISTS articulos (id INTEGER PRIMARY KEY, title TEXT, description TEXT, imageUrl TEXT)', 
(err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Table created successfully.');

});

db.run('UPDATE articulos SET imageUrl = "uploads/qOt2-iCn_400x400.jpg" WHERE id = 1')



db.close();
const db = require('../config/db');

const Student = {
    createTable: () => {
        const sql = `
            CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                availability TEXT,
                area_of_interest TEXT
            )
        `;
        return db.run(sql);
    },

    findById: (id, callback) => {
        return db.get(`SELECT * FROM students WHERE id = ?`, [id], callback);
    },

    findAll: (callback) => {
        return db.all(`SELECT * FROM students`, [], callback);
    }
};

module.exports = Student;

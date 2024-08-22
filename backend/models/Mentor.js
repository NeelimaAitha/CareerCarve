const db = require('../config/db');

const Mentor = {
    createTable: () => {
        const sql = `
            CREATE TABLE IF NOT EXISTS mentors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                availability TEXT,
                areas_of_expertise TEXT,
                is_premium INTEGER
            )
        `;
        return db.run(sql);
    },

    findById: (id, callback) => {
        return db.get(`SELECT * FROM mentors WHERE id = ?`, [id], callback);
    },

    findAll: (callback) => {
        return db.all(`SELECT * FROM mentors`, [], callback);
    },

    findByExpertise: (expertise, callback) => {
        return db.all(`SELECT * FROM mentors WHERE areas_of_expertise = ?`, [expertise], callback);
    }
};

module.exports = Mentor;

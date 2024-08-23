const db = require('../config/db');

const createTable = () => {
    db.run(`
        CREATE TABLE IF NOT EXISTS mentors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            availability TEXT,
            areas_of_expertise TEXT,
            is_premium INTEGER
        )
    `);
};

const getAllMentors = (callback) => {
    const query = `SELECT * FROM mentors`;
    db.all(query, [], callback);
};

const addMentor = (mentor, callback) => {
    const query = `INSERT INTO mentors (name, availability, areas_of_expertise, is_premium) VALUES (?, ?, ?, ?)`;
    const { name, availability, areas_of_expertise, is_premium } = mentor;
    db.run(query, [name, availability, areas_of_expertise, is_premium], function (err) {
        callback(err, this ? this.lastID : null);
    });
};

const updateMentor = (id, mentor, callback) => {
    const query = `UPDATE mentors SET name = ?, availability = ?, areas_of_expertise = ?, is_premium = ? WHERE id = ?`;
    const { name, availability, areas_of_expertise, is_premium } = mentor;
    db.run(query, [name, availability, areas_of_expertise, is_premium, id], callback);
};

module.exports = {
    createTable,
    getAllMentors,
    addMentor,
    updateMentor
};

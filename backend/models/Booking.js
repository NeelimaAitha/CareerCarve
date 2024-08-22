const db = require('../config/db');

const Booking = {
    createTable: () => {
        const sql = `
            CREATE TABLE IF NOT EXISTS bookings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                mentor_id INTEGER,
                student_id INTEGER,
                start_time TEXT,
                duration INTEGER,
                FOREIGN KEY (mentor_id) REFERENCES mentors(id),
                FOREIGN KEY (student_id) REFERENCES students(id)
            )
        `;
        return db.run(sql);
    },

    create: (booking, callback) => {
        const { mentor_id, student_id, start_time, duration } = booking;
        return db.run(
            `INSERT INTO bookings (mentor_id, student_id, start_time, duration) VALUES (?, ?, ?, ?)`,
            [mentor_id, student_id, start_time, duration],
            callback
        );
    },

    findAllByMentor: (mentor_id, callback) => {
        return db.all(`SELECT * FROM bookings WHERE mentor_id = ?`, [mentor_id], callback);
    },

    findAllByStudent: (student_id, callback) => {
        return db.all(`SELECT * FROM bookings WHERE student_id = ?`, [student_id], callback);
    }
};

module.exports = Booking;

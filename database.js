const { createPool } = require('mysql');

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'minor_project',
    connectionLimit: 1000,
});

// Create track
function insertIntoTracks(Track_id, Track_Name) {
    const insertQuery = 'INSERT INTO tracks (Track_id, Track_Name) VALUES (?, ?)';
    const insertValues = [Track_id, Track_Name];

    pool.query(insertQuery, insertValues, (err, results, fields) => {
        if (err) {
            return console.log(err);
        }
        console.log('Insert Result:', results);
    });
}

// Read track
function getTracks() {
    pool.query('SELECT * FROM tracks', (err, results, ) => {
        if (err) {
            return console.log(err);
        }
        console.log('Select Result:', results);
    });
}

// Update track
function updateTrack(Track_id, Track_Name) {
    const updateQuery = 'UPDATE tracks SET track_name = ? WHERE track_id = ?';
    const updateValues = [Track_id, Track_Name];

    pool.query(updateQuery, updateValues, (err, results, fields) => {
        if (err) {
            return console.log(err);
        }
        console.log('Update Result:', results);
    });
}

// Delete track
function deleteTrack(Track_id) {
    const deleteQuery = 'DELETE FROM tracks WHERE track_id = ?';
    const deleteValues = [Track_id];

    pool.query(deleteQuery, deleteValues, (err, results, fields) => {
        if (err) {
            return console.log(err);
        }
        console.log('Delete Result:', results);
    });
}


// Create elective
function insertIntoElectives(Elective_Name, Course_Code, Credits, Semester, Track_id) {
    const insertQuery = 'INSERT INTO electives (Elective_Name, Course_Code, Credits, Semester, Track_id) VALUES (?, ?, ?, ?, ?)';
    const insertValues = [Elective_Name, Course_Code, Credits, Semester, Track_id];

    pool.query(insertQuery, insertValues, (err, results, fields) => {
        if (err) {
            return console.log(err);
        }
        console.log('Insert Result:', results);
    });
}

// Read electives
function getElectives() {
    pool.query('SELECT * FROM electives', (err, results) => {
        if (err) {
            return console.log(err);
        }
        console.log('Select Result:', results);
    });
}

// Update Elective Name
function updateElectiveName(Elective_Name, Course_Code) {
    const updateQuery = 'UPDATE tracks SET Elective_Name = ? WHERE Course_Code = ?';
    const updateValues = [Elective_Name, Course_Code];

    pool.query(updateQuery, updateValues, (err, results, fields) => {
        if (err) {
            return console.log(err);
        }
        console.log('Update Result:', results);
    });
}

// Update Elective Semester
function updateElectiveSemester(Semester, Course_Code) {
    const updateQuery = 'UPDATE tracks SET Semester = ? WHERE Course_Code = ?';
    const updateValues = [Semester, Course_Code];

    pool.query(updateQuery, updateValues, (err, results, fields) => {
        if (err) {
            return console.log(err);
        }
        console.log('Update Result:', results);
    });
}

// Update Elective Credits
function updateElectiveCredits(Credits, Course_Code) {
    const updateQuery = 'UPDATE electives SET Credits = ? WHERE Course_Code = ?';
    const updateValues = [Credits , Course_Code];

    pool.query(updateQuery, updateValues, (err, results, fields) => {
        if (err) {
            return console.log(err);
        }
        console.log('Update Result:', results);
    });
}

// Delete elective
function deleteElective(Course_Code) {
    const deleteQuery = 'DELETE FROM electives WHERE Course_Code = ?';
    const deleteValues = [Course_Code];

    pool.query(deleteQuery, deleteValues, (err, results, fields) => {
        if (err) {
            return console.log(err);
        }
        console.log('Delete Result:', results);
    });
}

//insertIntoTracks(2, 'Cyber Security');
getTracks();
//insertIntoElectives('Penetration Testing', 'CS 102', 3, 1, 2);
getElectives();

module.exports = pool;
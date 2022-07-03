const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    acquireTimeout: 5000,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log('[ERROR] Something got wrong with DB connection...');
        throw err;
    }
    connection.release();
});

pool.on('acquire', function (connection) {
    console.log('Connection [%d] acquired', connection.threadId);
});

pool.on('connection', function (connection) {
    connection.query('SET SESSION auto_increment_increment=1');
    console.log('A new connection [%d] is made within the pool', connection.threadId);
});

pool.on('enqueue', function () {
    console.log('Waiting for available connection slot');
});

pool.on('release', function (connection) {
    console.log('Connection [%d] released', connection.threadId);
});

module.exports = pool;
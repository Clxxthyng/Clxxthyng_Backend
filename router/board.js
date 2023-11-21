function boardHandler(req, res) {
    require('dotenv').config();
    const express = require('express');
    const mysql = require('mysql2');

    const app = express();

    const db = mysql.createConnection({
        host: process.env.DBHost,
        user: process.env.DBUser,
        password: process.env.DBPassword,
        database: process.env.DBDatabase
    });

    db.connect((err) => {
        if (err) {
            res.send('MySQL 연결 실패: ' + err);
        } else {
            db.query('SELECT * FROM board ORDER BY board_id DESC ', (err, result) => {
                if (err){
                    console.log("err");
                } else {
                    res.send(result);
                }
            });
        };
    });
}

module.exports = boardHandler;

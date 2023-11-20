function loginHandler(req, res) {
    const crypto = require('crypto');
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
            const hashed = crypto.createHmac('sha256', 'dksldlrpakwsk?123').update(req.body.userPassword).digest('hex');

            db.query(
                `SELECT password FROM user where user_id like '${req.body.userId}'`,
                function(err, results, fields) {
                    if (err) {
                        res.send('쿼리 실행 중 오류 발생: ' + err);
                    } else {
                        if (results.length > 0 && results[0].password === hashed) {
                            res.send(true);
                        } else {
                            res.send(false);
                        }
                    }
                }
            );
        }
    });
}

module.exports = loginHandler;


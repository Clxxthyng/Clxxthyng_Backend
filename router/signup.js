function signupHandler(req, res) {
    const crypto = require('crypto');
    require('dotenv').config();
    const mysql = require('mysql2');

    const db = mysql.createConnection({
        host: process.env.DBHost,
        user: process.env.DBUser,
        password: process.env.DBPassword,
        database: process.env.DBDatabase
    });

    db.connect((err) => {
        if (err) {
            console.error('MySQL 연결 실패:', err);
            res.status(500).send('서버 오류 발생');
            return;
        }
        const hashed = crypto.createHmac('sha256', 'dksldlrpakwsk?123').update(req.body.userPassword).digest('hex');
        let sql = `INSERT INTO user (user_id, password, name) VALUES ('${req.body.userId}', '${hashed}', '${req.body.userName}')`;
        db.query(sql, function (err, result) {
            if (err) throw err;
            res.send("true")
        });
    });
}

module.exports = signupHandler;

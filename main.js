const express = require('express')
const loginScript = require("./router/login/login");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('main')
})

app.get('/board', function (req, res) {
    res.send('board')
})

// login
app.post('/login', function (req, res) {
    loginScript(req, res);

})

app.get('/event', function (req, res) {
    res.send('event')
})

app.listen(3000)
const express = require('express')
const loginScript = require("./router/login");
const signupScript = require("./router/signup");
const boardScript = require("./router/board");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const helmet = require('helmet')
const session = require('express-session')

app.set('trust proxy', 1)
app.use(session({
    secret: 's3Cur3',
    name: 'sessionId'
}))
app.disable('x-powered-by')
app.use(express.json({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet())

app.get('/', function (req, res) {
  res.send('main')
})

app.post('/board', function (req, res) {
    boardScript(req, res);
})

// login
app.post('/login', function (req, res) {
    loginScript(req, res);
})
app.post('/signup', function (req, res) {
    signupScript(req, res);
})

app.post('/event', function (req, res) {
    res.send('event')
})

app.listen(3000)
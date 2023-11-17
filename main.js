const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('main')
})

app.get('/board', function (req, res) {
    res.send('board')
})

app.get('/login', function (req, res) {
    res.send('login')
})

app.get('/event', function (req, res) {
    res.send('event')
})

app.listen(3000)
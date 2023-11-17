const express = require("express")
const router = express.Router()
const app = express()

app.get('/login', (req, res) => {
    res.send('login page')
})
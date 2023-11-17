const express = require("express")
const router = express.Router()
const app = express()

app.get('/board', (req, res) => {
    res.send('board page')
})
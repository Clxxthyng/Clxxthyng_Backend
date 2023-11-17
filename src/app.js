const express = require("express")
const app = express()
const port = 3000
const board = require("./routes/board.js")
const event = require("./routes/event.js")
const login = require("./routes/login.js")

app.get('/', (req, res) => {
    res.send('main page')
})

app.use("/api", board)
app.use("/api", event)
app.use("/api", login)
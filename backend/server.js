const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const UserModel = require('./models/UserModel')

const conn = "mongodb://localhost:27017/rinkedin"

app.use(cors())
app.use(express.json())

mongoose.connect(conn)

app.post("/registrace", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log("Server listening on :5000");
})
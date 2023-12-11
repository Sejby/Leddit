const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const UserModel = require('./models/UserModel')
const PostModel = require("./models/PostModel")

const conn = "mongodb://localhost:27017/rinkedin"

app.use(cors())
app.use(express.json())

mongoose.connect(conn)

app.post("/registrace", (req, res) => {
    UserModel.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] }).exec()
        .then(user => {
            if (user) {
                res.json({ message: "userExists" })
            } else {
                UserModel.create(req.body)
                    .then(users => res.json(users))
                    .catch(err => res.json(err))
            }
        })
})

app.post("/prihlaseni", (req, res) => {
    UserModel.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] }).exec()
        .then(username => {
            if (username) {
                res.json(username);
            } else {
                res.json({ message: "Uživatel nenalezen" });
            }
        })

})

app.post("/pridatprispevek", (req, res) => {
    PostModel.create(req.body)
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
})

app.post("/nactiprispevky", (req, res) => {
    PostModel.find()
})

app.listen(5000, () => {
    console.log("Server listening on :5000");
})
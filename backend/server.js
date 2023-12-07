const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/DB")

app.post("/registrace", (req, res) => {
    console.log(req);
})

app.listen(5000, () => {
    console.log("Server listening on :5000");
})
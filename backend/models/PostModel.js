const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    username: String,
    text: String,
    created_on: { type: Date, required: true, default: Date.now }
})

const PostModel = mongoose.model("posts", PostSchema)
module.exports = PostModel
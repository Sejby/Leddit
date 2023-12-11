const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    username: String,
    text: String,
    created_on: String
})

const PostModel = mongoose.model("posts", PostSchema)
module.exports = PostModel
const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    text: { type: String, required: true, trim: true },
    created_on: { type: Date, required: true, default: Date.now }
})

const PostModel = mongoose.model("posts", PostSchema)
module.exports = PostModel
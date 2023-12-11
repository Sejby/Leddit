const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    pwd: { type: String, required: true, trim: true }
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
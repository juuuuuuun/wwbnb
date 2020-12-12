const mongoose = require("mongoose")
const Schema = mongoose.Schema

const roomSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    desc: String,
    price: String,
    location: String,
    url: String,
    max_noGuest: Number,
    rate: Number,
    numReview: Number,
    superHost: String,
    tag: Number
})

module.exports = mongoose.model("Room",roomSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Habit', habitSchema);
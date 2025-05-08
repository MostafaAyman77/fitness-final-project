const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    isCoach: {
        type: boolean,
        default: false,
    },
})


const User = mongoose.model('User', userSchema);
module.exports = User;
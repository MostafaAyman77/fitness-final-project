const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
        minLength: 3,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Review', reviewSchema);
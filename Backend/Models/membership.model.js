const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    benefits: {
        type: String,
        required: true,
        minLength: 3,
    },

    description: {
        type: String,
        required: true,
        minLength: 3,
    },
});

module.exports = mongoose.model('Membership', membershipSchema);
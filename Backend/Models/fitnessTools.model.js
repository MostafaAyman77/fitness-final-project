const mongoose = require('mongoose');

const fitnessToolsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        minLength: 3,
    },
});

module.exports = mongoose.model('FitnessTools', fitnessToolsSchema);
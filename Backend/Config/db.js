const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING, {
        });
        console.log('DB connected');
    } catch (error) {
        console.log(error, "DB not connected");
    }
}


console.log(process.env.CONNECTION_STRING);

module.exports = connectDB;
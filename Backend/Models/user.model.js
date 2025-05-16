import { Schema, model } from 'mongoose';

const userSchema = new Schema({
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
        type: Boolean,
        default: false,
    },
})


const User = model('User', userSchema);
export default User;
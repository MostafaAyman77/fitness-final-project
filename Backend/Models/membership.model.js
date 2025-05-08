import { Schema, model } from 'mongoose';

const membershipSchema = new Schema({
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

const MemberShip = model('MemberShip', membershipSchema);
export default MemberShip;    
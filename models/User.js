const { Schema, model } = require('mongoose');
const { Schema, Thought } = require('./Thought');


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    // {
    //     toJSON: {
    //         virtuals: true
    //     },
    //     id: false
    // }
);

const User = model('User', userSchema);

module.exports = User;
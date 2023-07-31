const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            min_length: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        userName: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        reactions:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ],
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

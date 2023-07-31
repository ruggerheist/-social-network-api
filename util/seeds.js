//import models
const User = require('../models/User');
const Thought = require('../models/Thought');

// const { insertMany } = require("../models/User")

const users = [
    {
        userName: 'Admin User',
        email: 'admin@socialnetwork.com'
    },
]

const thoughts = [
    {
        thoughtText: 'This is a thought',
        createdAt: '2021-08-01',
        userName: 'Admin User',
        reactionId: '1',
    },
]

const reactions = [
    {
        reactionBody: 'This is a reaction',
        userName: 'Admin User',
        createdAt: '2021-08-01',
    }
]

// const connection = require('../config/connection');

async function seedData() {
    await User.insertMany(users);
    const allUsers = await User.find();
    for (const user of allUsers) {
        const thoughtData = await Thought.insertMany(thoughts[Math.floor(Math.random() * thoughts.length)]);
        user.thoughts.push(thoughtData._id);
        await user.save();
        const reactionData = await Reaction.insertMany(reactions[Math.floor(Math.random() * reactions.length)]);
        thoughts.reactions.push(reactionData._id);
        await reactionData.save();
        console.log(thoughtData);
        thoughtData.reactions.push(reactions[Math.floor(Math.random() * reactions.length)]);
        await thoughtData.save();        
    }    
};
seedData();
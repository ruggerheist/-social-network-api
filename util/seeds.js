//import models
const { User, Thought } = require('../models');

const { insertMany } = require("../models/User")

const users = [
    {
        name: 'Admin User',
        email: ''
    },
]

const thoughts = [
    {
        thoughtText: 'This is a thought',
        createdAt: '2021-08-01',
        userName: 'Admin User',
    },
]

const reactions = [
    {
        reactionBody: 'This is a reaction',
        userName: 'Admin User',
        createdAt: '2021-08-01',
        reactionId: '1'
    }
]

const connection = require('../config/connection');

async function seedData() {
    await User.insertMany(users);
    const allUsers = await User.find();
    for (const user of allUsers) {
        const thoughtData = await Thought.insertOne(thought[Math.floor(Math.random() * thought.length)]);
        user.thoughts.push(thoughtData._id);
        await user.save();
        thoughtData.reactions.push(reaction[Math.floor(Math.random() * reaction.length)]);
        await thoughtData.save();        
    }    
};
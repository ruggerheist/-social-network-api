const User = require('../models/User');

module.exports = {
    // get all users
    async getAllUsers(req, res) {
      try {
            const users = await User.find()
            // .populate({
            //     path: 'user',
            //     select: '-__v'
            // })
            // // .populate({
            // //     path: 'friends',
            // //     select: '-__v'
            // // })
            // .select('-__v')
            // .sort({ _id: -1 });
        res.json(users)
    } catch (err) {
        console.log(err);   
    }
    },
    // get one user by id
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            // .populate({
            //     path: 'friends',
            //     select: '-__v'
            // })
            .select('-__v');
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
        }
    },
    // create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
        }
    },
    // update a user by id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({
                _id: req.params.id
            },
            {
                $set: req.body     
            },
            {
                runValidators: true,
                new: true
            });
            res.json(user);
        } catch (err) {
            console.log(err);
        }
    },
    // delete a user by id with associated thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);            
        }
    },
    // add a friend to a user's friend list
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.body.id },
                { $addToSet: { friends: req.body.userId } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
        }
    },
    // remove a friend from a user's friend list
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $pull: { friends: req.params.userId } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
        }
    }
};

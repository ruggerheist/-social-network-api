//make reaction first, push reaction to thought model
// const { Reaction, Thought } = require('../models');

const reactionController = {
    async addReaction(req, res) {
        try {
            const reaction = await Reaction.create(req.body);
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: reaction._id } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        }
        catch (err) {
            console.log(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const reaction = await Reaction.findOneAndDelete({ _id: req.params.reactionId });
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: reaction._id } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        }
        catch (err) {
            console.log(err);
        }
    }
};

module.exports = reactionController;

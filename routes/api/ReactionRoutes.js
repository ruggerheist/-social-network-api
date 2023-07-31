const router = require('express').Router();

const {
    addReaction,
    deleteReaction
} = require('../../controllers/ReactionController');

// Set up POST and DELETE at /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;
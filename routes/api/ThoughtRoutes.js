const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/ThoughtController');

// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// Set up POST and DELETE at /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;
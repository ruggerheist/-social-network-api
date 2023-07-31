const router = require('express').Router();
// const reactionRoutes = require('./ReactionRoutes');
const thoughtRoutes = require('./ThoughtRoutes');
const userRoutes = require('./UserRoutes');

// router.use('/api/reactions', reactionRoutes);
router.use('/api/thoughts', thoughtRoutes);
router.use('/api/users', userRoutes);

router.use((req, res) => res.send('Wrong Route!'));

module.exports = router;
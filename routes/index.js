const router = require('express').Router();
const reactionRoutes = require('./api/ReactionRoutes');
const thoughtRoutes = require('./api/ThoughtRoutes');
const userRoutes = require('./api/UserRoutes');

router.use('/api/reactions', reactionRoutes);
router.use('/api/thoughts', thoughtRoutes);
router.use('/api/users', userRoutes);

router.use((req, res) => res.send('Wrong Route!'));

module.exports = router;
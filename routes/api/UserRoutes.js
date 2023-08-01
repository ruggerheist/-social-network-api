const router = require('express').Router();

const {
    getSingleUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/UserController.js');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/user/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// Set up POST and DELETE at /api/users/:userId/friends/:userId
router
    .route('/friends')
    .put(addFriend)
    .delete(deleteFriend);


module.exports = router;
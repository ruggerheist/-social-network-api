const router = require('express').Router();

const {
    getSingleUser,
    getAllUsers,
    createUser,
    deleteUser,
    deleteUserThoughts,
    addFriend,
    deleteFriend,
} = require('../../controllers/UserController');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)
    .delete(deleteUserThoughts);

// Set up POST and DELETE at /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);


module.exports = router;
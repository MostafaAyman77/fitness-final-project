const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');

// Route to get all users
router.get('/users', userController.getAllUsers);

// Route to search users by name
router.get('/users/search', userController.searchUser);

// Route to add a new user
router.post('/users', userController.addUser);

// Route to update an existing user
router.put('/users/:id', userController.updateUser);

// Route to delete a user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

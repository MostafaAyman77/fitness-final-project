import { Router } from 'express';
const router = Router();
import { getAllUsers, searchUser, addUser, updateUser, deleteUser } from '../Controllers/user.controller.js';
// Route to get all users
router.get('/allUsers', getAllUsers);

// Route to search users by name
router.get('/:name', searchUser);

// Route to add a new user
router.post('/', addUser);

// Route to update an existing user
router.put('/:id', updateUser);

// Route to delete a user
router.delete('/:id', deleteUser);

export default router;

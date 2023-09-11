const router = require('express').Router();
const UserController = require('../controllers/user-controller');

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/Users/:id', UserController.deleteUser);

module.exports = router;
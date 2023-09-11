const router = require('express').Router();
const friendController = require('../controllers/friends-controller');

router.get('/:userId/friends', friendController.getAllFriend);
router.post('/:userId/friends/:friendUserId', friendController.addFriend);
router.delete('/:userId/friends/:friendUserId', friendController.deleteFriend);

module.exports = router;
const router = require('express').Router();
const ReactionController = require('../controllers/reaction-controller');

router.get('/reactions/', ReactionController.getAllReactions);
router.get('/reactions/:id', ReactionController.getReactionById);
router.post('/reactions/:thoughtId', ReactionController.createReaction);
router.put('/reactions/:id', ReactionController.updateReaction);
router.delete('/reactions/:id', ReactionController.deleteReaction);

module.exports = router;
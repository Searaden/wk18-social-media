# Social media trial

## Description

A social media backend test allowing for users, thoughts, friends, and reaction.

## Usage

To use launch the app using "node app.js"

Follow routes and body structure outlined in the routes and models to send through post puts and deletes for users, thoughts, and reactions.

router.get('/:userId/friends', friendController.getAllFriend);
router.post('/:userId/friends/:friendUserId', friendController.addFriend);
router.delete('/:userId/friends/:friendUserId', friendController.deleteFriend);

router.get('/reactions/', ReactionController.getAllReactions);
router.get('/reactions/:id', ReactionController.getReactionById);
router.post('/reactions/:thoughtId', ReactionController.createReaction);
router.put('/reactions/:id', ReactionController.updateReaction);
router.delete('/reactions/:id', ReactionController.deleteReaction);

router.get('/thoughts', ThoughtController.getAllThoughts);
router.get('/thoughts/:id', ThoughtController.getThoughtById);
router.post('/thoughts', ThoughtController.createThought);
router.put('/thoughts/:id', ThoughtController.updateThought);
router.delete('/thoughts/:id', ThoughtController.deleteThought);


router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/Users/:id', UserController.deleteUser);

body struction must include username and body


## link
https://watch.screencastify.com/v/KJvLy7HMyIy2dwxbUNvx
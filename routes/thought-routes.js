const router = require('express').Router();
const ThoughtController = require('../controllers/thought-controller');

router.get('/thoughts', ThoughtController.getAllThoughts);
router.get('/thoughts/:id', ThoughtController.getThoughtById);
router.post('/thoughts', ThoughtController.createThought);
router.put('/thoughts/:id', ThoughtController.updateThought);
router.delete('/thoughts/:id', ThoughtController.deleteThought);

module.exports = router;
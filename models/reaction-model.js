const mongoose = require('mongoose');
const reactionSchema = require('./reaction');

const Reaction = mongoose.model('Reaction', reactionSchema);
module.exports = Reaction;
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleString(),
    },

    username: {
        type: String,
        required: true,
    },

    reactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought',
    }],
});

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;
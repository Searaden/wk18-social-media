const mongoose = require('mongoose')

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
    },

    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],

    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;

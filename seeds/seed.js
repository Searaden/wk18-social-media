const mongoose = require('mongoose');
const User = require('../models/user');
const Thought = require('../models/thought');

mongoose.connect('mongodb://127.0.0.1:27017/WK18', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const thoughtData = require('./thought-seeds');
const userData = require('./user-seeds');

async function seedThoughts() {
    try {
        await Thought.deleteMany();
        await Thought.create(thoughtData);
        console.log('Thought seeded.')
    } catch (error) {
        console.error('Error seeding thoughts', error);
    } finally {
        mongoose.connection.close();
    }
}

async function seedUsers() {
    try {
        await User.deleteMany();
        await User.create(userData);
        console.log('Users seeded.')
    } catch (error) {
        console.error('Error seeding users', error);
    } finally {
        mongoose.connection.close();
    }
}

seedUsers();


seedThoughts();
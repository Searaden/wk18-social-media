const mongoose = require('mongoose');
const Thought = require('../models/thought');

mongoose.connect('mongodb://127.0.0.1:27017/WK18', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const thoughtData = [
    {
        thoughtText: 'Hello',
        username: 'user1'
    },
    {
        thoughtText: 'user2 says hello',
        username: 'user2'
    },
    {
        thoughtText: 'user3 says hi',
        username: 'user3'
    }
];

async function seedThoughts () {
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


seedThoughts();
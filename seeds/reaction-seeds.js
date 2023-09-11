/*const mongoose = require('mongoose');
const Reaction = require('../models/reaction');

mongoose.connect('mongodb://127.0.0.1:27017/WK18', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const reactionData = [
    {
        reactionBody: 'Hi back',
        username: 'user1'
    },
    {
        reactionBody: 'Loved that',
        username: 'user2' ,
    },
    {
        reactionBody:  'Liked that',
        username: 'user3'
    },
];

async function seedReactions () {
    try {
        await Reaction.deleteMany();
        await Reaction.create(reactionData);
        console.log('Reactions seeded');
    } catch (error) {
        console.error('Error seeding reactions', error)
    } finally {
        mongoose.connection.close
    }
};

seedReactions();*/
const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://127.0.0.1:27017/WK18', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userDate = [
    {
        username: 'user1',
        email: 'user1@email.com',

    },
    {
        username: 'user2',
        email: 'user2@email.com',

    },
    {
        username: 'user3',
        email: 'user3@email.com',

    },
];

async function seedUsers() {
    try {
        await User.deleteMany();
        await User.create(userDate);
        console.log('Users seeded.')
    } catch (error) {
        console.error('Error seeding users', error);
    } finally {
        mongoose.connection.close();
    }
}

seedUsers();

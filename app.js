const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user-routes');
const reactionRoutes = require('./routes/reaction-routes');
const thoughtRoutes = require('./routes/thought-routes');
const friendRoutes = require('./routes/friend-routes');
const Reaction = require('./models/reaction-model');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/WK18', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



app.use('/api', userRoutes);
app.use('/api', reactionRoutes);
app.use('/api', thoughtRoutes);
app.use('/api', friendRoutes);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
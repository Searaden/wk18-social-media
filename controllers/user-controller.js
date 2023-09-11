const User = require('../models/user');

const UserController = {
    getAllUsers: async (req, res) => {
        try { 
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error while fetching users'})
        }
    },

    getUserById: async (req, res) => { 
        const userId = req.params.id;
        try {
            const user = await User.findById(userId);
            if(!user) {
                return res.status(404).json({ error: 'User not found'});
            }
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error while fetching user'})
        }
    },
    
    createUser: async (req, res) => { 
        const { username, email } = req.body;
        try {
            const newUser = await User.create({ username, email});
            res.status(200).json(newUser);
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: 'Failed to create user'})
        }
    },
    updateUser: async (req, res) => { 
        const userId = req.params.id;
        const updateFields = req.body;
        try {
            const user = await User.findByIdAndUpdate(
                userId,
                { $set: updateFields},
                {new:true, useFindAndModify: false}
            );
            
            if (!user) {
                return res.status(404).json({ error: 'User not found.'});
            }
            res.json(user);
            
        } catch (error){
            console.error(error);
            res.status(500).json({ error: 'Error while updating User'})
        }
    },
    deleteUser: async (req, res) => { 
        const userId = req.params.id;
        try {
            const user = await User.findByIdAndDelete(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found'});
            }
            res.json({ message: 'User deleted successfully'});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error while deleting User'})
        }
    },
};

module.exports = UserController;
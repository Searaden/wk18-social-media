const User = require('../models/user');

const friendController = {
    getAllFriend: async (req,res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findById(userId).populate('friends');

            if(!user) {
                return res.status(404).json({ message: 'User not found'})
            }
            const friends = user.friends;

            res.status(200).json({friends});
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Error getting friends'})
        }
    },

    addFriend: async (req,res) => {
        try {
            const userId = req.params.userId;
            const friendUserId = req.params.friendUserId;

            console.log('friendUserId:', friendUserId)

            const user = await User.findById(userId);
            const friend = await User.findById(friendUserId);

            if (!user){
                return res.status(404).json({ message: 'User '});
            }

            if (!friend){
                return res.status(404).json({ message: 'bad friend '});
            }

            user.friends.push(friend._id);

            await user.save()


            res.status(200).json({message: 'Friend Added'})
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Error adding friend'})
        }
    },

    deleteFriend: async (req, res) => {
        const friendUserId = req.params.friendUserId;
    
        try {
            const user = await User.findById(req.params.userId);
            console.log(friendUserId)
    
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            if (!user.friends.includes(friendUserId)) {
                return res.status(404).json({ message: 'Friend not found' });
            }
    
            user.friends = user.friends.filter((friendId) => friendId.toString() !== friendUserId);
    
            await user.save();
    
            res.status(200).json({ message: 'Friend deleted' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting friend' });
        }
    },
};


module.exports = friendController;
const Reaction = require('../models/reaction-model');

const ReactionController = {
    getAllReactions: async (req, res) => {
        try {
            const reactions = await Reaction.find();
            res.json(reactions);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching reactions'});
        }
    },
    getReactionById: async (req, res) => { 
        const reactionId = req.params.id;
        try {
            const reaction = await Reaction.findById(reactionId);
            if (!reaction){
                return res.status(404).json({ error: 'reaction not found'})
            };
            res.json(reaction)
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error getting reaction'})
        }
    },
    createReaction: async (req,res) => {
        try {
            const { reactionBody, username} = req.body;
            const thoughtId = req.params.thoughtId;

            const reaction = await new Reaction({
                reactionBody,
                username,
                thoughtId
            });

            await reaction.save();

            res.status(201).json({message: 'reaction Added'})
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Error adding reaction'})
        }
    },
    updateReaction: async (req, res) => { 
        const reactionId = req.params.id;
        const updatedReaction = req.body;
        try {
            const reaction = await Reaction.findByIdAndUpdate(
                reactionId,
                updatedReaction,
                { new: true}
            );
            if (!reaction) {
                return res.status(400).json({ error: 'reacton not found'});
            }
            res.json(reaction);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Error updating reaction'});
        }
    },
    deleteReaction: async (req, res) => { 
        const reactionId = req.params.id;
        try {
            const reaction = await Reaction.findByIdAndDelete(reactionId);
            if(!reaction) {
                return res.status(404).json({ error: 'reaction not found'})
            }
            res.json({ message: 'Reaction deleted'});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting reaction'})
        }
    },
};

module.exports = ReactionController;
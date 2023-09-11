const Thought = require('../models/thought');

const ThoughtController = {
    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching thoughts'})
        }
    },
    getThoughtById: async (req, res) => { 
        const thoughtId = req.params.id;
        try {
            const thought = await Thought.findById(thoughtId);
            if(!thought){
                return res.status(404).json({ error: 'Thought not found'})
            };
            res.json(thought)
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving thought'})
        }
    },
    createThought: async (req, res) => { 
        const { thoughtText, username } = req.body;
        try {
            const newThought = await Thought.create({ thoughtText, username });
            res.status(201).json(newThought);
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: 'Error creating thought'})
        }
    },
    updateThought: async (req, res) => { 
        const thoughtId = req.params.id;
        const updatedThought = req.body;
        try{
            const thought = await Thought.findByIdAndUpdate(
                thoughtId,
                updatedThought,
                { new: true }

            );
            if (!thought) {
                return res.status(404).json({error: ' Thought not found'});
            }
            res.json(thought);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'error updating thought'});
        }
    },
    deleteThought: async (req, res) => { 
        const thoughtId = req.params.id;
        try {
            const thought = await Thought.findByIdAndDelete(thoughtId);
            if(!thought) {
                return res.status(404).json({ error: 'thought not found'});
            }
            res.json({ message: 'thought deleted'});

        } catch (error){
            console.error(error);
            res.status(500).json({ message: 'error deleting thought'});
        }
    },
};

module.exports = ThoughtController;
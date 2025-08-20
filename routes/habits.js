const express = require('express');
const Habit = require('../schemas/habits');
const req = require('express/lib/request');

const router = express.Router();

router.post('/', async(req, res) => {
    const { name } = req.body;

    try {
        const habit = new Habit({name});
        await habit.save();
        res.send(habit);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
})

router.get('/', async (req, res) => {
    try {
        const habits = await Habit.find({});
        res.send(habits)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const habit = await Habit.findByIdAndUpdate(id, {name}, {new: true});
        res.send(habit);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const habit = await Habit.findByIdAndDelete(id);
        res.send(habit);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router;
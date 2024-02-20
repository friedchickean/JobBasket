const express = require('express');
const { createJob } = require('../controllers/jobController');

const router = express.Router();

// GET all job
router.get('/', (req, res) => {
    res.json({mssg: 'GET all job'});
});


// GET single job
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a job'});
});

// POST new job
router.post('/', createJob);

// DELETE a job
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a job'});
});

// UPDATE a job
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a job'});
});


module.exports = router;
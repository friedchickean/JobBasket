const express = require('express');
const { getJob, getJobs, createJob, deleteJob, updateJob } = require('../controllers/jobController');

const router = express.Router();

// GET all job
router.get('/', getJobs);

// GET single job
router.get('/:id', getJob);

// POST new job
router.post('/', createJob);

// DELETE a job
router.delete('/:id', deleteJob);

// UPDATE a job
router.patch('/:id', updateJob);


module.exports = router;
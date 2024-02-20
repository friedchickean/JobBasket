const Job = require('../models/JobModel');

// get all job

// get a single job

// create new job
const createJob = async (req, res) => {
    const {position, company, status, link} = req.body;

    // add document to db
    try {
        const job = await Job.create({position, company, status, link});
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// delete a job

// update a job
module.exports = {
    createJob
}

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const jobsRoutes = require('./routes/jobRoutes');

// express app
const app = express();

// middleware
// check any request if it has a json attatched to it
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//routes
app.use('/api/jobs', jobsRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port 4000')
        });
    })
    .catch((error) => {
        console.log(error);
    });


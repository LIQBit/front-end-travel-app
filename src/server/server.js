// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


// get route for all data
app.get('/all', (req, res) => {
    res.send(projectData);
    
});

// post route
app.post('/addData', (req, res) => {
    let data = req.body;
    projectData['temperature'] = data.temperature;
    projectData['feelings'] = data.feelings;
    projectData['date'] = data.date;
    projectData['name'] = data.name;
    projectData['icon'] = data.icon;
    res.send(projectData);
    
});


// Setup Server

const port = process.env.PORT || 8000;

const server = app.listen(port, ()=> {
    console.log(`Running on localhost: ${port}`)
});


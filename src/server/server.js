// Setup empty JS object to act as endpoint for all routes
const projectData = [];

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

// geonames post route
app.post('/addData', (req, res) => {
    let data = req.body;
    newEntry = {
        cityname: req.body.cityname,
        country: req.body.country,
    }
    projectData.push(newEntry)
    res.send(projectData);
    
});

 //pixabay post route
app.post('/pixabay', (req, res) => {
    let data = req.body;
    pixabayEntry = {
        image: req.body.image
    }
    projectData.push(pixabayEntry);
    console.log('pixabay entry is...', projectData)
    res.send(projectData);
})

 //weatherbit post route
 app.post('/weatherbit', (req, res) => {
    let data = req.body;
    console.log('checking weatherbit server side data', req.body.icon)
    weatherbitEntry = {
        high: req.body.high,
        low: req.body.low,
        condition: req.body.condition,
        arrival: req.body.arrival,
        icon: req.body.icon,
        arrivalHigh: req.body.arrivalHigh,
        arrivalLow: req.body.arrivalLow
    }
    projectData.push(weatherbitEntry);
    res.send(projectData);
})


//Rest Countries post route
app.post('/restcountries', (req, res) => {
    let data = req.body;
    console.log('checking restcountries server side data', req.body.currency)
    restCountriesEntry = {
        country: req.body.country,
        capital: req.body.capital,
        language: req.body.language,
        //otherLanguage: req.body.otherLanguage,
        currency: req.body.currency,
        flag: req.body.flag

    }
    projectData.push(restCountriesEntry);
    res.send(projectData);
})

// Setup Server

const port = process.env.PORT || 8001;

const server = app.listen(port, ()=> {
    console.log(`Running on localhost: ${port}`)
});

module.exports = {app}
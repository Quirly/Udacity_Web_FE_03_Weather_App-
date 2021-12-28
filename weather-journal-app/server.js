// Setup empty JS object to act as endpoint for all routes
const projectData = [];
const allData = [];

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000
const server = app.listen(port, listening);

function listening() {
    console.log("Server running!")
    console.log("Running on localhost: " + port);
}

app.get('/', getForecastData)

function getForecastData(req, res) {
    //res.send('hello world')
    res.send(projectData)
    console.log("Response sent!")
}

app.post('/addData', sendForecastData)

function sendForecastData(req, res) {
    const { date, temp, content } = req.body
    allData.push(req.body)
    console.log(allData)
    res.send(date, temp, content)
    console.log("Post sucessful.")
}



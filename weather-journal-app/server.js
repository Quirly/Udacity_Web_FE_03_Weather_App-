// Setup empty JS object to act as endpoint for all routes
const projectData = {};
let idx = 0;

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
    res.send(projectData)
    console.log("Response sent!")
}

app.post('/addData', sendForecastData)

function sendForecastData(req, res) {
    const { date, temp, content } = req.body;
    let journal_entry_new = new Object();
    journal_entry_new.date = date;
    journal_entry_new.temp = temp + "°C";
    journal_entry_new.content = content;
    idx_entry = String("entry_" + idx)
    idx = idx + 1
    projectData[idx_entry] = JSON.stringify(journal_entry_new);
    console.log(projectData)
    res.send(projectData)
    console.log("Post sucessful.")
}

app.get('/readData', readData)

function readData(req, res) {
    res.send(projectData)
    console.log(projectData)
    console.log("Read sucessful.")
}

